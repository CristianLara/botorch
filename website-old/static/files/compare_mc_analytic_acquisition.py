#!/usr/bin/env python3
# coding: utf-8

# ## Analytic and MC-based Expected Improvement (EI) acquisition
# 
# In this tutorial, we compare the analytic and MC-based EI acquisition functions and show both `scipy`- and `torch`-based optimizers for optimizing the acquisition. This tutorial highlights the modularity of botorch and the ability to easily try different acquisition functions and accompanying optimization algorithms on the same fitted model.

# ### Comparison of analytic and MC-based EI
# Note that we use the analytic and MC variants of the LogEI family of acquisition functions, which remedy numerical issues encountered in the naive implementations. See https://arxiv.org/pdf/2310.20708 for more details.

# In[ ]:


import torch

from botorch.fit import fit_gpytorch_mll
from botorch.models import SingleTaskGP
from botorch.test_functions import Hartmann
from gpytorch.mlls import ExactMarginalLogLikelihood

neg_hartmann6 = Hartmann(dim=6, negate=True)


# First, we generate some random data and fit a SingleTaskGP for a 6-dimensional synthetic test function 'Hartmann6'.

# In[ ]:


torch.manual_seed(seed=12345)  # to keep the data conditions the same
dtype = torch.float64
train_x = torch.rand(10, 6, dtype=dtype)
train_obj = neg_hartmann6(train_x).unsqueeze(-1)
model = SingleTaskGP(train_X=train_x, train_Y=train_obj)
mll = ExactMarginalLogLikelihood(model.likelihood, model)
fit_gpytorch_mll(mll);


# Initialize an analytic EI acquisition function on the fitted model.
# 

# In[ ]:


from botorch.acquisition.analytic import LogExpectedImprovement

best_value = train_obj.max()
LogEI = LogExpectedImprovement(model=model, best_f=best_value)


# Next, we optimize the analytic EI acquisition function using 50 random restarts chosen from 100 initial raw samples.

# In[ ]:


from botorch.optim import optimize_acqf

new_point_analytic, _ = optimize_acqf(
    acq_function=LogEI,
    bounds=torch.tensor([[0.0] * 6, [1.0] * 6]),
    q=1,
    num_restarts=20,
    raw_samples=100,
    options={},
)


# In[ ]:


# NOTE: The acquisition value here is the log of the expected improvement.
LogEI(new_point_analytic), new_point_analytic


# Now, let's swap out the analytic acquisition function and replace it with an MC version. Note that we are in the `q = 1` case; for `q > 1`, an analytic version does not exist.

# In[ ]:


from botorch.acquisition.logei import qLogExpectedImprovement
from botorch.sampling import SobolQMCNormalSampler


sampler = SobolQMCNormalSampler(sample_shape=torch.Size([512]), seed=0)
MC_LogEI = qLogExpectedImprovement(model, best_f=best_value, sampler=sampler, fat=False)
torch.manual_seed(seed=0)  # to keep the restart conditions the same
new_point_mc, _ = optimize_acqf(
    acq_function=MC_LogEI,
    bounds=torch.tensor([[0.0] * 6, [1.0] * 6]),
    q=1,
    num_restarts=20,
    raw_samples=100,
    options={},
)


# In[ ]:


# NOTE: The acquisition value here is the log of the expected improvement.
MC_LogEI(new_point_mc), new_point_mc


# Check that the two generated points are close.

# In[ ]:


torch.linalg.norm(new_point_mc - new_point_analytic)


# ### Using a torch optimizer on a stochastic acquisition function
# 
# We could also optimize using a `torch` optimizer. This is particularly useful for the case of a stochastic acquisition function, which we can obtain by using a `StochasticSampler`. First, we illustrate the usage of `torch.optim.Adam`. In the code snippet below, `gen_batch_initial_candidates` uses a heuristic to select a set of restart locations, `gen_candidates_torch` is a wrapper to the `torch` optimizer for maximizing the acquisition value, and `get_best_candidates` finds the best result amongst the random restarts.
# 
# Under the hood, `gen_candidates_torch` uses a convergence criterion based on exponential moving averages of the loss. 

# In[ ]:


from botorch.sampling.stochastic_samplers import StochasticSampler
from botorch.generation import get_best_candidates, gen_candidates_torch
from botorch.optim import gen_batch_initial_conditions

resampler = StochasticSampler(sample_shape=torch.Size([512]))
MC_LogEI_resample = qLogExpectedImprovement(model, best_f=best_value, sampler=resampler)
bounds = torch.tensor([[0.0] * 6, [1.0] * 6])

batch_initial_conditions = gen_batch_initial_conditions(
    acq_function=MC_LogEI_resample,
    bounds=bounds,
    q=1,
    num_restarts=20,
    raw_samples=100,
)
batch_candidates, batch_acq_values = gen_candidates_torch(
    initial_conditions=batch_initial_conditions,
    acquisition_function=MC_LogEI_resample,
    lower_bounds=bounds[0],
    upper_bounds=bounds[1],
    optimizer=torch.optim.Adam,
    options={"maxiter": 500},
)
new_point_torch_Adam = get_best_candidates(
    batch_candidates=batch_candidates, batch_values=batch_acq_values
).detach()


# In[ ]:


# NOTE: The acquisition value here is the log of the expected improvement.
MC_LogEI_resample(new_point_torch_Adam), new_point_torch_Adam


# In[ ]:


torch.linalg.norm(new_point_torch_Adam - new_point_analytic)


# By changing the `optimizer` parameter to `gen_candidates_torch`, we can also try `torch.optim.SGD`. Note that without the adaptive step size selection of Adam, basic SGD does worse job at optimizing without further manual tuning of the optimization parameters.

# In[ ]:


batch_candidates, batch_acq_values = gen_candidates_torch(
    initial_conditions=batch_initial_conditions,
    acquisition_function=MC_LogEI_resample,
    lower_bounds=bounds[0],
    upper_bounds=bounds[1],
    optimizer=torch.optim.SGD,
    options={"maxiter": 500},
)
new_point_torch_SGD = get_best_candidates(
    batch_candidates=batch_candidates, batch_values=batch_acq_values
).detach()


# In[ ]:


MC_LogEI_resample(new_point_torch_SGD), new_point_torch_SGD


# In[ ]:


torch.linalg.norm(new_point_torch_SGD - new_point_analytic)

