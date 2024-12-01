#!/usr/bin/env python3
# coding: utf-8

# ## The max value entropy search acquisition function
# 
# Max-value entropy search (MES) acquisition function quantifies the information gain about the maximum of a black-box function by observing this black-box function $f$ at the candidate set $\{\textbf{x}\}$ (see [1, 2]). BoTorch provides implementations of the MES acquisition function and its multi-fidelity (MF) version with support for trace observations. In this tutorial, we explain at a high level how the MES acquisition function works, its implementation in BoTorch and how to use the MES acquisition function to query the next point in the optimization process. 
# 
# In general, we recommend using [Ax](https://ax.dev) for a simple BO setup like this one, since this will simplify your setup (including the amount of code you need to write) considerably. You can use a custom BoTorch model and acquisition function in Ax, following the [Using BoTorch with Ax](./custom_botorch_model_in_ax) tutorial. To use the MES acquisition function, it is sufficient to add `"botorch_acqf_class": qMaxValueEntropy,` to `model_kwargs`. The linked tutorial shows how to use a custom BoTorch model. If you'd like to let Ax choose which model to use based on the properties of the search space, you can skip the `surrogate` argument in `model_kwargs`.
# 
# ### 1. MES acquisition function for $q=1$ with noisy observation
# For illustrative purposes, we focus in this section on the non-q-batch-mode case ($q=1$). We also assume that the evaluation of the black-box function is noisy. Let us first introduce some notation: 
# + $f^* = \max_\mathcal{X} (f(\textbf{x}))$, the maximum of the black-box function $f(\textbf{x})$ in the design space $\mathcal{X}$
# + $y = f(\textbf{x}) + \epsilon, \epsilon \sim N(0, \sigma^2_\epsilon)$, the noisy observation at the design point $\textbf{x}$
# + $h(Y) = \mathbb{E}_Y[-\log(p(y))] = -\int_\mathcal{Y} p(y)\log p(y) dy$, the differential entropy of random variable $Y$ with support $\mathcal{Y}$: the larger is $h(Y)$, the larger is the uncertainty of $Y$.
# + $v(\mathcal{D}) = -\mathbb{E}_D[h(F^*\mid\mathcal{D})]$, the value of data set $\mathcal{D}$, where $F^*$ denotes the function maximum (a random variable in our context of our model).
# 
# 
# The Max-value Entropy Search (MES) acquisition function at $\textbf{x}$ after observing $\mathcal{D}_t$ can be written as
# \begin{align}
#     \alpha_{\text{MES}}(\textbf{x}) 
#     &= v(\mathcal{D}_t\cup \{(\textbf{x}, y)\}) - v(\mathcal{D}_t) \\
#     &= - \mathbb{E}_Y[h(F^* \mid \mathcal{D}_t\cup \{(\textbf{x}, Y)\})] + h(F^*\mid\mathcal{D}_t) \\
#     &= - \mathbb{E}_Y[h(F^* \mid Y)] + h(F^*) \\
#     &= I(F^*; Y) \\
#     &= I(Y; F^*) \quad \text{(symmetry)} \\
#     &= - \mathbb{E}_{F^*}[h(Y \mid F^*)] + h(Y) \\    
# \end{align}
# , which is the mutual information of random variables 
# $F^*\mid \mathcal{D}_t$ and $Y \mid \textbf{x}, \mathcal{D}_t$. 
# Here $F^*$ follows the max value distribution conditioned on $\mathcal{D}_t$, and $Y$ follows the GP posterior distribution with noise at $\textbf{x}$ after observing $\mathcal{D}_t$.
# 
# Rewrite the above formula as
# \begin{align}
#     \alpha_{\text{MES}}(\textbf{x}) &= - H_1 + H_0, \\
#     H_0 &= h(Y) = \log \left(\sqrt{2\pi e (\sigma_f^2 + \sigma_\epsilon^2)}\right) \\
#     H_1 &= \mathbb{E}_{F^*}[h(Y \mid F^*)] \\
#         &\simeq \frac{1}{\left|\mathcal{F}_*\right|} \Sigma_{\mathcal{F}_*} h(Y\mid f^*))
# \end{align}
# , where $\mathcal{F}_*$ are the max value samples drawn from the posterior after observing $\mathcal{D}_t$. Without noise, $p(y \mid f^*) = p(f \mid f \leq f^*)$ is a truncated normal distribution with an analytic expression for its entropy. With noise, $Y\mid F\leq f^*$ is not a truncated normal distribution anymore. The question is then how to compute $h(Y\mid f^*)$ or equivalently $p(y\mid f \leq f^*)$?
# 
# 
# Using Bayes' theorem, 
# \begin{align}
#     p(y\mid f \leq f^*) = \frac{P(f \leq f^* \mid y) p(y)}{P(f \leq f^* )}
# \end{align}
# , where 
# + $p(y)$ is the posterior probability density function (PDF) with observation noise.
# + $P(f \leq f^*)$ is the posterior cummulative distribution function (CDF) without observation noise, given any $f^*$.
# 
# We also know from the GP predictive distribution
# \begin{align}
#     \begin{bmatrix}
#         y \\ f
#     \end{bmatrix}
#     \sim \mathcal{N} \left(
#     \begin{bmatrix}
#         \mu \\ \mu
#     \end{bmatrix} , 
#     \begin{bmatrix}
#         \sigma_f^2 + \sigma_\epsilon^2 & \sigma_f^2 \\ 
#         \sigma_f^2 & \sigma_f^2
#     \end{bmatrix}
#     \right).
# \end{align}
# So
# \begin{align}
#     f \mid y \sim \mathcal{N} (u, s^2)
# \end{align}
# , where
# \begin{align}
#     u   &= \frac{\sigma_f^2(y-\mu)}{\sigma_f^2 + \sigma_\epsilon^2} + \mu \\
#     s^2 &= \sigma_f^2 - \frac{(\sigma_f^2)^2}{\sigma_f^2 + \sigma_\epsilon^2}
#         = \frac{\sigma_f^2\sigma_\epsilon^2}{\sigma_f^2 + \sigma_\epsilon^2}
# \end{align}
# Thus, $P(f \leq f^* \mid y)$ is the CDF of above Gaussian. 
# 
# Finally, given $f^*$, we have  
# \begin{align}
#     h(Y \mid f^*) 
#     &= -\int_\mathcal{Y} p(y \mid f^*)\log(p(y \mid f^*)) dy\\
#     &= -\int_\mathcal{Y} Zp(y)\log(Zp(y)) dy \\
#     &\simeq -\frac{1}{\left|\mathcal{Y}\right|} \Sigma_{\mathcal{Y}} Z\log(Zp(y)), \\
#     Z &= \frac{P(f \leq f^* \mid y)}{P(f \leq f^* )}
# \end{align}
# , where $Z$ is the ratio of two CDFs and $\mathcal{Y}$ is the samples drawn from the posterior distribution with noisy observation. The above formulation for noisy MES is inspired from the MF-MES formulation proposed by Takeno _et. al_ [1], which is essentially the same as what is outlined above. 
# 
# Putting all together, 
# \begin{align}
#     \alpha_{\text{MES}}(\textbf{x}) 
#     &= H_0 - H_1 \\
#     &\simeq H_0 - H_1^{MC}\\
#     &= \log \left(\sqrt{2\pi e (\sigma_f^2 + \sigma_\epsilon^2)}\right) + \frac{1}{\left|\mathcal{F}^*\right|} \Sigma_{\mathcal{F}^*} \frac{1}{\left|\mathcal{Y}\right|} \Sigma_{\mathcal{Y}} (Z\log Z + Z\log p(y))
# \end{align}
# 
# The next design point to query is chosen as the point that maximizes this aquisition function, _i. e._, 
# \begin{align}
#     \textbf{x}_{\text{next}} = \max_{\textbf{x} \in \mathcal{X}} \alpha_{\text{MES}}(\textbf{x})
# \end{align}
# 
# The implementation in Botorch basically follows the above formulation for both non-MF and MF cases. One difference is that, in order to reduce the variance of the MC estimator for $H_1$, we apply also regression adjustment to get an estimation of $H_1$, 
# \begin{align}
#     \widehat{H}_1 &= H_1^{MC} - \beta (H_0^{MC} - H_0) 
# \end{align}
# , where
# \begin{align}
#     H_0^{MC} &= - \frac{1}{\left|\mathcal{Y}\right|} \Sigma_{\mathcal{Y}} \log p(y) \\
#     \beta &= \frac{Cov(h_1, h_0)}{\sqrt{Var(h_1)Var(h_0)}} \\
#     h_0 &= -\log p(y) \\
#     h_1 &= -Z\log(Zp(y)) \\
# \end{align}
# This turns out to reduce the variance of the acquisition value by a significant factor, especially when the acquisition value is small, hence making the algorithm numerically more stable. 
# 
# For the case of $q > 1$, joint optimization becomes difficult, since the q-batch-mode MES acquisiton function becomes not tractable due to the multivariate normal CDF functions in $Z$. Instead, the MES acquisition optimization is solved sequentially and using fantasies, _i. e._, we generate one point each time and when we try to generate the $i$-th point, we condition the models on the $i-1$ points generated prior to this (using the $i-1$ points as fantasies).  
# 
# <br>
# __References__
# 
# [1] [Takeno, S., et al., _Multi-fidelity Bayesian Optimization with Max-value Entropy Search._  arXiv:1901.08275v1, 2019](https://arxiv.org/abs/1901.08275)
# 
# [2] [Wang, Z., Jegelka, S., _Max-value Entropy Search for Efficient Bayesian Optimization._ arXiv:1703.01968v3, 2018](https://arxiv.org/abs/1703.01968)
# 

# ### 2. Setting up a toy model
# We will fit a standard SingleTaskGP model on noisy observations of the synthetic 2D Branin function on the hypercube $[-5,10]\times [0, 15]$.

# In[1]:


import math
import torch

from botorch.test_functions import Branin
from botorch.fit import fit_gpytorch_mll
from botorch.models import SingleTaskGP
from botorch.utils.transforms import standardize, normalize
from gpytorch.mlls import ExactMarginalLogLikelihood

torch.manual_seed(7)

bounds = torch.tensor(Branin._bounds).T
train_X = bounds[0] + (bounds[1] - bounds[0]) * torch.rand(10, 2)
train_Y = Branin(negate=True)(train_X).unsqueeze(-1)

train_X = normalize(train_X, bounds=bounds)
train_Y = standardize(train_Y + 0.05 * torch.randn_like(train_Y))

model = SingleTaskGP(train_X, train_Y)
mll = ExactMarginalLogLikelihood(model.likelihood, model)
fit_gpytorch_mll(mll);


# ### 3. Defining the MES acquisition function
# 
# The `qMaxValueEntropy` acquisition function is a subclass of `MCAcquisitionFunction` and supports pending points `X_pending`. Required arguments for the constructor are `model` and `candidate_set` (the discretized candidate points in the design space that will be used to draw max value samples). There are also other optional parameters, such as number of max value samples $\mathcal{F^*}$, number of $\mathcal{Y}$ samples and number of fantasies (in case of $q>1$). Two different sampling algorithms are supported for the max value samples: the discretized Thompson sampling and the Gumbel sampling introduced in [2]. Gumbel sampling is the default choice in the acquisition function. 

# In[2]:


from botorch.acquisition.max_value_entropy_search import qMaxValueEntropy

candidate_set = torch.rand(
    1000, bounds.size(1), device=bounds.device, dtype=bounds.dtype
)
candidate_set = bounds[0] + (bounds[1] - bounds[0]) * candidate_set
qMES = qMaxValueEntropy(model, candidate_set)


# ### 4. Optimizing the MES acquisition function to get the next candidate points
# In order to obtain the next candidate point(s) to query, we need to optimize the acquisition function over the design space. For $q=1$ case, we can simply call the `optimize_acqf` function in the library. At $q>1$, due to the intractability of the aquisition function in this case, we need to use either sequential or cyclic optimization (multiple cycles of sequential optimization). 

# In[3]:


from botorch.optim import optimize_acqf

# for q = 1
candidates, acq_value = optimize_acqf(
    acq_function=qMES,
    bounds=bounds,
    q=1,
    num_restarts=10,
    raw_samples=512,
)
candidates, acq_value


# In[4]:


# for q = 2, sequential optimization
candidates_q2, acq_value_q2 = optimize_acqf(
    acq_function=qMES,
    bounds=bounds,
    q=2,
    num_restarts=10,
    raw_samples=512,
    sequential=True,
)
candidates_q2, acq_value_q2


# In[5]:


from botorch.optim import optimize_acqf_cyclic

# for q = 2, cyclic optimization
candidates_q2_cyclic, acq_value_q2_cyclic = optimize_acqf_cyclic(
    acq_function=qMES,
    bounds=bounds,
    q=2,
    num_restarts=10,
    raw_samples=512,
    cyclic_options={"maxiter": 2},
)
candidates_q2_cyclic, acq_value_q2_cyclic


# The use of the `qMultiFidelityMaxValueEntropy` acquisition function is very similar to `qMaxValueEntropy`, but requires additional optional arguments related to the fidelity and cost models. We will provide more details on the MF-MES acquisition function in a separate tutorial.  
