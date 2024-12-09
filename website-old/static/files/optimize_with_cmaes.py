#!/usr/bin/env python3
# coding: utf-8

# ## Optimize acquisition functions using CMA-ES
# 
# In this tutorial, we show how to use an external optimizer (in this case [CMA-ES](https://en.wikipedia.org/wiki/CMA-ES)) for optimizing BoTorch acquisition functions. CMA-ES is a zero-th order optimizer, meaning that it only uses function evaluations and does not require gradient information. This is of course very useful if gradient information about the function to be optimized is unavailable. 
# 
# In BoTorch, we typically do have gradient information available (thanks, autograd!). One is also generally better off using this information, rather than just ignoring it. However, for certain custom models or acquisition functions, we may not be able to backprop through the acquisition function and/or model. In such instances, using a zero-th order optimizer is appropriate.
# 
# For this example we use the [PyCMA](https://github.com/CMA-ES/pycma) implementation of CMA-ES. PyCMA is easily installed via pip by running `pip install cma`.

# ### Setting up the acquisition function
# 
# For the purpose of this tutorial, we'll use a basic `UpperConfidenceBound` acquisition function on a basic model fit on synthetic data. Please see the documentation for [Models](../docs/models) and [Acquisition Functions](../docs/acquisition) for more information.

# In[4]:


import math
import torch

from botorch.fit import fit_gpytorch_mll
from botorch.models import SingleTaskGP
from gpytorch.mlls import ExactMarginalLogLikelihood

X = torch.rand(20, 2) - 0.5
Y = (torch.sin(2 * math.pi * X[:, 0]) + torch.cos(2 * math.pi * X[:, 1])).unsqueeze(-1)
Y += 0.1 * torch.randn_like(Y)

gp = SingleTaskGP(X, Y)
mll = ExactMarginalLogLikelihood(gp.likelihood, gp)
fit_gpytorch_mll(mll);


# In[5]:


from botorch.acquisition import UpperConfidenceBound

UCB = UpperConfidenceBound(gp, beta=0.1)


# ### Optimizing the acquisition function using CMA-ES
# 
# **Note:** Relative to sequential evaluations, parallel evaluations of the acqusition function are extremely fast in botorch (due to automatic parallelization across batch dimensions). In order to exploit this, we use the "ask/tell" interface to `cma` - this way we can batch-evaluate the whole CMA-ES population in parallel.
# 
# In this examle we use an initial standard deviation $\sigma_0 = 0.2$ and a population size $\lambda = 50$. 
# We also constrain the input `X` to the unit cube $[0, 1]^d$.
# See `cma`'s [API Reference](http://cma.gforge.inria.fr/apidocs-pycma/cma.evolution_strategy.CMAEvolutionStrategy.html) for more information on these options.
# 
# With this, we can optimize this acquistition function as follows:

# In[6]:


import cma
import numpy as np

# get initial condition for CMAES in numpy form
# note that CMAES expects a different shape (no explicit q-batch dimension)
x0 = np.random.rand(2)

# create the CMA-ES optimizer
es = cma.CMAEvolutionStrategy(
    x0=x0,
    sigma0=0.2,
    inopts={"bounds": [0, 1], "popsize": 50},
)

# speed up things by telling pytorch not to generate a compute graph in the background
with torch.no_grad():

    # Run the optimization loop using the ask/tell interface -- this uses
    # PyCMA's default settings, see the PyCMA documentation for how to modify these
    while not es.stop():
        xs = es.ask()  # as for new points to evaluate
        # convert to Tensor for evaluating the acquisition function
        X = torch.tensor(xs, device=X.device, dtype=X.dtype)
        # evaluate the acquisition function (optimizer assumes we're minimizing)
        Y = -UCB(
            X.unsqueeze(-2)
        )  # acquisition functions require an explicit q-batch dimension
        y = Y.view(-1).double().numpy()  # convert result to numpy array
        es.tell(xs, y)  # return the result to the optimizer

# convert result back to a torch tensor
best_x = torch.from_numpy(es.best.x).to(X)

best_x

