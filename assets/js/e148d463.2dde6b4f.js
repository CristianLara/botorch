"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3424],{6520:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tutorials/compare_mc_analytic_acquisition/index","title":"Comparing analytic and MC Expected Improvement","description":"<LinkButtons","source":"@site/../docs/tutorials/compare_mc_analytic_acquisition/index.mdx","sourceDirName":"tutorials/compare_mc_analytic_acquisition","slug":"/tutorials/compare_mc_analytic_acquisition/","permalink":"/botorch/docs/next/tutorials/compare_mc_analytic_acquisition/","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/../docs/tutorials/compare_mc_analytic_acquisition/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Comparing analytic and MC Expected Improvement","sidebar_label":"Comparing analytic and MC Expected Improvement"},"sidebar":"tutorials","previous":{"title":"Fitting a model using torch.optim","permalink":"/botorch/docs/next/tutorials/fit_model_with_torch_optimizer/"},"next":{"title":"Acquisition function optimization with CMA-ES","permalink":"/botorch/docs/next/tutorials/optimize_with_cmaes/"}}');var o=t(4848),a=t(8453),r=t(8987);t(1023),t(290);const c={title:"Comparing analytic and MC Expected Improvement",sidebar_label:"Comparing analytic and MC Expected Improvement"},s=void 0,l={},d=[{value:"Analytic and MC-based Expected Improvement (EI) acquisition",id:"analytic-and-mc-based-expected-improvement-ei-acquisition",level:2},{value:"Comparison of analytic and MC-based EI",id:"comparison-of-analytic-and-mc-based-ei",level:3},{value:"Using a torch optimizer on a stochastic acquisition function",id:"using-a-torch-optimizer-on-a-stochastic-acquisition-function",level:3}];function m(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{githubUrl:"https://github.com/cristianlara/botorch/blob/main/tutorials/compare_mc_analytic_acquisition/compare_mc_analytic_acquisition.ipynb",colabUrl:"https://colab.research.google.com/github/cristianlara/botorch/blob/main/tutorials/compare_mc_analytic_acquisition/compare_mc_analytic_acquisition.ipynb"}),"\n",(0,o.jsx)(e.h2,{id:"analytic-and-mc-based-expected-improvement-ei-acquisition",children:"Analytic and MC-based Expected Improvement (EI) acquisition"}),"\n",(0,o.jsxs)(e.p,{children:["In this tutorial, we compare the analytic and MC-based EI acquisition functions and show\nboth ",(0,o.jsx)(e.code,{children:"scipy"}),"- and ",(0,o.jsx)(e.code,{children:"torch"}),"-based optimizers for optimizing the acquisition. This tutorial\nhighlights the modularity of botorch and the ability to easily try different acquisition\nfunctions and accompanying optimization algorithms on the same fitted model."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"# Install dependencies if we are running in colab\nimport sys\nif 'google.colab' in sys.modules:\n    %pip install botorch\n"})}),"\n",(0,o.jsx)(e.h3,{id:"comparison-of-analytic-and-mc-based-ei",children:"Comparison of analytic and MC-based EI"}),"\n",(0,o.jsxs)(e.p,{children:["Note that we use the analytic and MC variants of the LogEI family of acquisition\nfunctions, which remedy numerical issues encountered in the naive implementations. See\n",(0,o.jsx)(e.a,{href:"https://arxiv.org/pdf/2310.20708",children:"https://arxiv.org/pdf/2310.20708"})," for more details."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import torch\n\nfrom botorch.fit import fit_gpytorch_mll\nfrom botorch.models import SingleTaskGP\nfrom botorch.test_functions import Hartmann\nfrom gpytorch.mlls import ExactMarginalLogLikelihood\n\nneg_hartmann6 = Hartmann(dim=6, negate=True)\n"})}),"\n",(0,o.jsx)(e.p,{children:"First, we generate some random data and fit a SingleTaskGP for a 6-dimensional synthetic\ntest function 'Hartmann6'."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"torch.manual_seed(seed=12345)  # to keep the data conditions the same\ndtype = torch.float64\ntrain_x = torch.rand(10, 6, dtype=dtype)\ntrain_obj = neg_hartmann6(train_x).unsqueeze(-1)\nmodel = SingleTaskGP(train_X=train_x, train_Y=train_obj)\nmll = ExactMarginalLogLikelihood(model.likelihood, model)\nfit_gpytorch_mll(mll);\n"})}),"\n",(0,o.jsx)(e.p,{children:"Initialize an analytic EI acquisition function on the fitted model."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"from botorch.acquisition.analytic import LogExpectedImprovement\n\nbest_value = train_obj.max()\nLogEI = LogExpectedImprovement(model=model, best_f=best_value)\n"})}),"\n",(0,o.jsx)(e.p,{children:"Next, we optimize the analytic EI acquisition function using 50 random restarts chosen\nfrom 100 initial raw samples."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"from botorch.optim import optimize_acqf\n\nnew_point_analytic, _ = optimize_acqf(\n    acq_function=LogEI,\n    bounds=torch.tensor([[0.0] * 6, [1.0] * 6]),\n    q=1,\n    num_restarts=20,\n    raw_samples=100,\n    options={},\n)\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"# NOTE: The acquisition value here is the log of the expected improvement.\nLogEI(new_point_analytic), new_point_analytic\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Now, let's swap out the analytic acquisition function and replace it with an MC version.\nNote that we are in the ",(0,o.jsx)(e.code,{children:"q = 1"})," case; for ",(0,o.jsx)(e.code,{children:"q > 1"}),", an analytic version does not exist."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"from botorch.acquisition.logei import qLogExpectedImprovement\nfrom botorch.sampling import SobolQMCNormalSampler\n\n\nsampler = SobolQMCNormalSampler(sample_shape=torch.Size([512]), seed=0)\nMC_LogEI = qLogExpectedImprovement(model, best_f=best_value, sampler=sampler, fat=False)\ntorch.manual_seed(seed=0)  # to keep the restart conditions the same\nnew_point_mc, _ = optimize_acqf(\n    acq_function=MC_LogEI,\n    bounds=torch.tensor([[0.0] * 6, [1.0] * 6]),\n    q=1,\n    num_restarts=20,\n    raw_samples=100,\n    options={},\n)\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"# NOTE: The acquisition value here is the log of the expected improvement.\nMC_LogEI(new_point_mc), new_point_mc\n"})}),"\n",(0,o.jsx)(e.p,{children:"Check that the two generated points are close."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"torch.linalg.norm(new_point_mc - new_point_analytic)\n"})}),"\n",(0,o.jsx)(e.h3,{id:"using-a-torch-optimizer-on-a-stochastic-acquisition-function",children:"Using a torch optimizer on a stochastic acquisition function"}),"\n",(0,o.jsxs)(e.p,{children:["We could also optimize using a ",(0,o.jsx)(e.code,{children:"torch"})," optimizer. This is particularly useful for the\ncase of a stochastic acquisition function, which we can obtain by using a\n",(0,o.jsx)(e.code,{children:"StochasticSampler"}),". First, we illustrate the usage of ",(0,o.jsx)(e.code,{children:"torch.optim.Adam"}),". In the code\nsnippet below, ",(0,o.jsx)(e.code,{children:"gen_batch_initial_candidates"})," uses a heuristic to select a set of\nrestart locations, ",(0,o.jsx)(e.code,{children:"gen_candidates_torch"})," is a wrapper to the ",(0,o.jsx)(e.code,{children:"torch"})," optimizer for\nmaximizing the acquisition value, and ",(0,o.jsx)(e.code,{children:"get_best_candidates"})," finds the best result\namongst the random restarts."]}),"\n",(0,o.jsxs)(e.p,{children:["Under the hood, ",(0,o.jsx)(e.code,{children:"gen_candidates_torch"})," uses a convergence criterion based on exponential\nmoving averages of the loss."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'from botorch.sampling.stochastic_samplers import StochasticSampler\nfrom botorch.generation import get_best_candidates, gen_candidates_torch\nfrom botorch.optim import gen_batch_initial_conditions\n\nresampler = StochasticSampler(sample_shape=torch.Size([512]))\nMC_LogEI_resample = qLogExpectedImprovement(model, best_f=best_value, sampler=resampler)\nbounds = torch.tensor([[0.0] * 6, [1.0] * 6])\n\nbatch_initial_conditions = gen_batch_initial_conditions(\n    acq_function=MC_LogEI_resample,\n    bounds=bounds,\n    q=1,\n    num_restarts=20,\n    raw_samples=100,\n)\nbatch_candidates, batch_acq_values = gen_candidates_torch(\n    initial_conditions=batch_initial_conditions,\n    acquisition_function=MC_LogEI_resample,\n    lower_bounds=bounds[0],\n    upper_bounds=bounds[1],\n    optimizer=torch.optim.Adam,\n    options={"maxiter": 500},\n)\nnew_point_torch_Adam = get_best_candidates(\n    batch_candidates=batch_candidates, batch_values=batch_acq_values\n).detach()\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"# NOTE: The acquisition value here is the log of the expected improvement.\nMC_LogEI_resample(new_point_torch_Adam), new_point_torch_Adam\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"torch.linalg.norm(new_point_torch_Adam - new_point_analytic)\n"})}),"\n",(0,o.jsxs)(e.p,{children:["By changing the ",(0,o.jsx)(e.code,{children:"optimizer"})," parameter to ",(0,o.jsx)(e.code,{children:"gen_candidates_torch"}),", we can also try\n",(0,o.jsx)(e.code,{children:"torch.optim.SGD"}),". Note that without the adaptive step size selection of Adam, basic SGD\ndoes worse job at optimizing without further manual tuning of the optimization\nparameters."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'batch_candidates, batch_acq_values = gen_candidates_torch(\n    initial_conditions=batch_initial_conditions,\n    acquisition_function=MC_LogEI_resample,\n    lower_bounds=bounds[0],\n    upper_bounds=bounds[1],\n    optimizer=torch.optim.SGD,\n    options={"maxiter": 500},\n)\nnew_point_torch_SGD = get_best_candidates(\n    batch_candidates=batch_candidates, batch_values=batch_acq_values\n).detach()\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"MC_LogEI_resample(new_point_torch_SGD), new_point_torch_SGD\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"torch.linalg.norm(new_point_torch_SGD - new_point_analytic)\n"})})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},1023:(n,e,t)=>{t.d(e,{A:()=>h});t(6540);var i,o=new Uint8Array(16);function a(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(o)}const r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const c=function(n){return"string"==typeof n&&r.test(n)};for(var s=[],l=0;l<256;++l)s.push((l+256).toString(16).substr(1));const d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(s[n[e+0]]+s[n[e+1]]+s[n[e+2]]+s[n[e+3]]+"-"+s[n[e+4]]+s[n[e+5]]+"-"+s[n[e+6]]+s[n[e+7]]+"-"+s[n[e+8]]+s[n[e+9]]+"-"+s[n[e+10]]+s[n[e+11]]+s[n[e+12]]+s[n[e+13]]+s[n[e+14]]+s[n[e+15]]).toLowerCase();if(!c(t))throw TypeError("Stringified UUID is invalid");return t};const m=function(n,e,t){var i=(n=n||{}).random||(n.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){t=t||0;for(var o=0;o<16;++o)e[t+o]=i[o];return e}return d(i)};var p=t(4848);const h=function(n){return(0,p.jsxs)("div",{style:{backgroundColor:"var(--ifm-pre-background)",marginBottom:"10px",borderRadius:"var(--ifm-global-radius)",overflow:"hidden",padding:"5px",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace)"},children:[(0,p.jsx)("span",{style:{color:"red"},children:"Out: "}),(0,p.jsx)("pre",{style:{margin:"0px",backgroundColor:"inherit",padding:"8px"},children:n.children.split("\n").map((function(n){return(0,p.jsx)("p",{style:{marginBottom:"0px"},children:n},m())}))})]})}},8987:(n,e,t)=>{t.d(e,{A:()=>r});t(6540);var i=t(8774),o=t(3186),a=t(4848);const r=function(n){var e=n.githubUrl,t=n.colabUrl;return(0,a.jsxs)("div",{className:"margin-top--sm margin-bottom--lg",children:[(0,a.jsxs)(i.A,{to:e,className:"button button--outline button--primary margin-right--xs",children:["Open in GitHub",(0,a.jsx)(o.A,{})]}),(0,a.jsxs)(i.A,{to:t,className:"button button--outline button--primary margin--xs",children:["Run in Google Colab",(0,a.jsx)(o.A,{})]})]})}},290:(n,e,t)=>{t(6540),t(3259),t(2303),t(4848)},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var i=t(6540);const o={},a=i.createContext(o);function r(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);