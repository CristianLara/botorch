"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2867],{5391:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"models","title":"Models","description":"Models play an essential role in Bayesian Optimization (BO). A model is used as","source":"@site/../docs/models.md","sourceDirName":".","slug":"/models","permalink":"/botorch/docs/next/models","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/../docs/models.md","tags":[],"version":"current","lastUpdatedBy":"Cristian Lara","lastUpdatedAt":1734033956000,"frontMatter":{"id":"models","title":"Models"},"sidebar":"docs","previous":{"title":"Overview","permalink":"/botorch/docs/next/overview"},"next":{"title":"Posteriors","permalink":"/botorch/docs/next/posteriors"}}');var n=o(4848),t=o(8453);const l={id:"models",title:"Models"},r=void 0,d={},a=[{value:"Terminology",id:"terminology",level:2},{value:"Multi-Output and Multi-Task",id:"multi-output-and-multi-task",level:3},{value:"Noise: Homoskedastic, fixed, and heteroskedastic",id:"noise-homoskedastic-fixed-and-heteroskedastic",level:3},{value:"Standard BoTorch Models",id:"standard-botorch-models",level:2},{value:"Single-Task GPs",id:"single-task-gps",level:3},{value:"Model List of Single-Task GPs",id:"model-list-of-single-task-gps",level:3},{value:"Multi-Task GPs",id:"multi-task-gps",level:3},{value:"Other useful models",id:"other-useful-models",level:2},{value:"Implementing Custom Models",id:"implementing-custom-models",level:2}];function h(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Models play an essential role in Bayesian Optimization (BO). A model is used as\na surrogate function for the actual underlying black box function to be\noptimized. In BoTorch, a ",(0,n.jsx)(i.code,{children:"Model"})," maps a set of design points to a posterior\nprobability distribution of its output(s) over the design points."]}),"\n",(0,n.jsxs)(i.p,{children:["In BO, the model used is traditionally a Gaussian Process (GP), in which case\nthe posterior distribution is a multivariate normal. While BoTorch supports many\nGP models, ",(0,n.jsx)(i.strong,{children:"BoTorch makes no assumption on the model being a GP"})," or the\nposterior being multivariate normal. With the exception of some of the analytic\nacquisition functions in the\n",(0,n.jsx)(i.a,{href:"../api/acquisition.html#analytic-acquisition-function-api",children:(0,n.jsx)(i.code,{children:"botorch.acquisition.analytic"})}),"\nmodule, BoTorch\u2019s Monte Carlo-based acquisition functions are compatible with\nany model that conforms to the ",(0,n.jsx)(i.code,{children:"Model"})," interface, whether user-implemented or\nprovided."]}),"\n",(0,n.jsxs)(i.p,{children:["Under the hood, BoTorch models are PyTorch ",(0,n.jsx)(i.code,{children:"Modules"})," that implement the\nlight-weight ",(0,n.jsx)(i.a,{href:"../api/models.html#model-apis",children:(0,n.jsx)(i.code,{children:"Model"})})," interface. When working\nwith GPs,\n",(0,n.jsx)(i.a,{href:"../api/models.html#module-botorch.models.gp_regression",children:(0,n.jsx)(i.code,{children:"GPyTorchModel"})}),"\nprovides a base class for conveniently wrapping GPyTorch models."]}),"\n",(0,n.jsxs)(i.p,{children:["Users can extend ",(0,n.jsx)(i.code,{children:"Model"})," and ",(0,n.jsx)(i.code,{children:"GPyTorchModel"})," to generate their own models. For\nmore on implementing your own models, see\n",(0,n.jsx)(i.a,{href:"#implementing-custom-models",children:"Implementing Custom Models"})," below."]}),"\n",(0,n.jsx)(i.h2,{id:"terminology",children:"Terminology"}),"\n",(0,n.jsx)(i.h3,{id:"multi-output-and-multi-task",children:"Multi-Output and Multi-Task"}),"\n",(0,n.jsxs)(i.p,{children:["A ",(0,n.jsx)(i.code,{children:"Model"})," (as in the BoTorch object) may have multiple outputs, multiple inputs,\nand may exploit correlation between different inputs. BoTorch uses the following\nterminology to distinguish these model types:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Multi-Output Model"}),": a ",(0,n.jsx)(i.code,{children:"Model"})," with multiple outputs. Most BoTorch ",(0,n.jsx)(i.code,{children:"Model"}),"s\nare multi-output."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Multi-Task Model"}),": a ",(0,n.jsx)(i.code,{children:"Model"})," making use of a logical grouping of\ninputs/observations (as in the underlying process). For example, there could\nbe multiple tasks where each task has a different fidelity. In a multi-task\nmodel, the relationship between different outputs is modeled, with a joint\nmodel across tasks."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Note the following:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"A multi-task (MT) model may or may not be a multi-output model. For example,\nif a multi-task model uses different tasks for modeling but only outputs\npredictions for one of those tasks, it is single-output."}),"\n",(0,n.jsxs)(i.li,{children:["Conversely, a multi-output (MO) model may or may not be a multi-task model.\nFor example, multi-output ",(0,n.jsx)(i.code,{children:"Model"}),"s that model different outputs independently\nrather than building a joint model are not multi-task."]}),"\n",(0,n.jsx)(i.li,{children:"If a model is both, we refer to it as a multi-task-multi-output (MTMO) model."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"noise-homoskedastic-fixed-and-heteroskedastic",children:"Noise: Homoskedastic, fixed, and heteroskedastic"}),"\n",(0,n.jsx)(i.p,{children:"Noise can be treated in several different ways:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Homoskedastic"}),": Noise is not provided as an input and is inferred, with a\nconstant variance that does not depend on ",(0,n.jsx)(i.code,{children:"X"}),". Many models, such as\n",(0,n.jsx)(i.code,{children:"SingleTaskGP"}),", take this approach. Use these models if you know that your\nobservations are noisy, but not how noisy."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Fixed"}),": Noise is provided as an input, ",(0,n.jsx)(i.code,{children:"train_Yvar"}),", and is not fit. In\n\u201cfixed noise\u201d models like ",(0,n.jsx)(i.code,{children:"SingleTaskGP"})," with noise observations, noise cannot\nbe predicted out-of-sample because it has not been modeled. Use these models\nif you have estimates of the noise in your observations (e.g. observations may\nbe averages over individual samples in which case you would provide the mean\nas observation and the standard error of the mean as the noise estimate), or\nif you know your observations are noiseless (by passing a zero noise level)."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Heteroskedastic"}),": Noise is provided as an input and is modeled to allow for\npredicting noise out-of-sample. BoTorch does not implement a model that\nsupports this out of the box."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"standard-botorch-models",children:"Standard BoTorch Models"}),"\n",(0,n.jsx)(i.p,{children:"BoTorch provides several GPyTorch models to cover most standard BO use cases:"}),"\n",(0,n.jsx)(i.h3,{id:"single-task-gps",children:"Single-Task GPs"}),"\n",(0,n.jsxs)(i.p,{children:["These models use the same training data for all outputs and assume conditional\nindependence of the outputs given the input. If different training data is\nrequired for each output, use a\n",(0,n.jsx)(i.a,{href:"../api/models.html#module-botorch.models.model_list_gp_regression",children:(0,n.jsx)(i.code,{children:"ModelListGP"})}),"\ninstead."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.gp_regression.SingleTaskGP",children:(0,n.jsx)(i.code,{children:"SingleTaskGP"})}),":\na single-task exact GP that supports both inferred and observed noise. When\nnoise observations are not provided, it infers a homoskedastic noise level."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.gp_regression_mixed.MixedSingleTaskGP",children:(0,n.jsx)(i.code,{children:"MixedSingleTaskGP"})}),":\na single-task exact GP that supports mixed search spaces, which combine\ndiscrete and continuous features."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.fully_bayesian.SaasFullyBayesianSingleTaskGP",children:(0,n.jsx)(i.code,{children:"SaasFullyBayesianSingleTaskGP"})}),":\na fully Bayesian single-task GP with the SAAS prior. This model is suitable\nfor sample-efficient high-dimensional Bayesian optimization."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"model-list-of-single-task-gps",children:"Model List of Single-Task GPs"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#module-botorch.models.model_list_gp_regression",children:(0,n.jsx)(i.code,{children:"ModelListGP"})}),":\nA multi-output model in which outcomes are modeled independently, given a list\nof any type of single-task GP. This model should be used when the same\ntraining data is not used for all outputs."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"multi-task-gps",children:"Multi-Task GPs"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#module-botorch.models.multitask",children:(0,n.jsx)(i.code,{children:"MultiTaskGP"})}),": a\nHadamard multi-task, multi-output GP using an ICM kernel. Supports both known\nobservation noise levels and inferring a homoskedastic noise level (when noise\nobservations are not provided)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.multitask.KroneckerMultiTaskGP",children:(0,n.jsx)(i.code,{children:"KroneckerMultiTaskGP"})}),":\nA multi-task, multi-output GP using an ICM kernel, with Kronecker structure.\nUseful for multi-fidelity optimization."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#saasfullybayesianmultitaskgp",children:(0,n.jsx)(i.code,{children:"SaasFullyBayesianMultiTaskGP"})}),":\na fully Bayesian multi-task GP using an ICM kernel. The data kernel uses the\nSAAS prior to model high-dimensional parameter spaces."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["All of the above models use RBF kernels with Automatic Relevance Discovery\n(ARD), and have reasonable priors on hyperparameters that make them work well in\nsettings where the ",(0,n.jsx)(i.strong,{children:"input features are normalized to the unit cube"})," and the\n",(0,n.jsx)(i.strong,{children:"observations are standardized"})," (zero mean, unit variance). The lengthscale\npriors scale with the input dimension, which makes them adaptable to both low\nand high dimensional problems. See\n",(0,n.jsx)(i.a,{href:"https://github.com/pytorch/botorch/discussions/2451",children:"this discussion"})," for\nadditional context on the default hyperparameters."]}),"\n",(0,n.jsx)(i.h2,{id:"other-useful-models",children:"Other useful models"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.model.ModelList",children:(0,n.jsx)(i.code,{children:"ModelList"})}),": a\nmulti-output model container in which outcomes are modeled independently by\nindividual ",(0,n.jsx)(i.code,{children:"Model"}),"s (as in ",(0,n.jsx)(i.code,{children:"ModelListGP"}),", but the component models do not all\nneed to be GPyTorch models)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.gp_regression_fidelity.SingleTaskMultiFidelityGP",children:(0,n.jsx)(i.code,{children:"SingleTaskMultiFidelityGP"})}),":\nA GP model for multi-fidelity optimization. For more on Multi-Fidelity BO, see\nthe ",(0,n.jsx)(i.a,{href:"../tutorials/discrete_multi_fidelity_bo",children:"tutorial"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.higher_order_gp.HigherOrderGP",children:(0,n.jsx)(i.code,{children:"HigherOrderGP"})}),":\nA GP model with matrix-valued predictions, such as images or grids of images."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#module-botorch.models.pairwise_gp",children:(0,n.jsx)(i.code,{children:"PairwiseGP"})}),": A\nprobit-likelihood GP that learns via pairwise comparison data, useful for\npreference learning."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.approximate_gp.ApproximateGPyTorchModel",children:(0,n.jsx)(i.code,{children:"ApproximateGPyTorchModel"})}),":\nfor efficient computation when data is large or responses are non-Gaussian."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#module-botorch.models.deterministic",children:"Deterministic models"}),",\nsuch as\n",(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.deterministic.AffineDeterministicModel",children:(0,n.jsx)(i.code,{children:"AffineDeterministicModel"})}),",\n",(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.cost.AffineFidelityCostModel",children:(0,n.jsx)(i.code,{children:"AffineFidelityCostModel"})}),",\n",(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.deterministic.GenericDeterministicModel",children:(0,n.jsx)(i.code,{children:"GenericDeterministicModel"})}),",\nand\n",(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.deterministic.PosteriorMeanModel",children:(0,n.jsx)(i.code,{children:"PosteriorMeanModel"})}),"\nexpress known input-output relationships; they conform to the BoTorch ",(0,n.jsx)(i.code,{children:"Model"}),"\nAPI, so they can easily be used in conjunction with other BoTorch models.\nDeterministic models are useful for multi-objective optimization with known\nobjective functions and for encoding cost functions for cost-aware\nacquisition."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"../api/models.html#botorch.models.approximate_gp.SingleTaskVariationalGP",children:(0,n.jsx)(i.code,{children:"SingleTaskVariationalGP"})}),":\nan approximate model for faster computation when you have a lot of data or\nyour responses are non-Gaussian."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"implementing-custom-models",children:"Implementing Custom Models"}),"\n",(0,n.jsx)(i.p,{children:"The configurability of the above models is limited (for instance, it is not\nstraightforward to use a different kernel). Doing so is an intentional design\ndecision -- we believe that having a few simple and easy-to-understand models\nfor basic use cases is more valuable than having a highly complex and\nconfigurable model class whose implementation is difficult to understand."}),"\n",(0,n.jsxs)(i.p,{children:["Instead, we advocate that users implement their own models to cover more\nspecialized use cases. The light-weight nature of BoTorch's Model API makes this\neasy to do. See the\n",(0,n.jsx)(i.a,{href:"../tutorials/custom_botorch_model_in_ax",children:"Using a custom BoTorch model in Ax"}),"\ntutorial for an example."]}),"\n",(0,n.jsxs)(i.p,{children:["The BoTorch ",(0,n.jsx)(i.code,{children:"Model"})," interface is light-weight and easy to extend. The only\nrequirement for using BoTorch's Monte-Carlo based acquisition functions is that\nthe model has a ",(0,n.jsx)(i.code,{children:"posterior"})," method. It takes in a Tensor ",(0,n.jsx)(i.code,{children:"X"})," of design points,\nand returns a Posterior object describing the (joint) probability distribution\nof the model output(s) over the design points in ",(0,n.jsx)(i.code,{children:"X"}),". The ",(0,n.jsx)(i.code,{children:"Posterior"})," object\nmust implement an ",(0,n.jsx)(i.code,{children:"rsample()"})," method for sampling from the posterior of the\nmodel. If you wish to use gradient-based optimization algorithms, the model\nshould allow back-propagating gradients through the samples to the model input."]}),"\n",(0,n.jsxs)(i.p,{children:["If you happen to implement a model that would be useful for other researchers as\nwell (and involves more than just swapping out the RBF kernel for a Mat\xe9rn\nkernel), please consider ",(0,n.jsx)(i.a,{href:"getting_started#contributing",children:"contributing"})," this model\nto BoTorch."]})]})}function c(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,i,o)=>{o.d(i,{R:()=>l,x:()=>r});var s=o(6540);const n={},t=s.createContext(n);function l(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);