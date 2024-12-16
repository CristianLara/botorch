"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5578],{6039:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"design_philosophy","title":"Design Philosophy","description":"Main Design Tenets","source":"@site/versioned_docs/version-v0.14.0/design_philosophy.md","sourceDirName":".","slug":"/design_philosophy","permalink":"/botorch/docs/design_philosophy","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/versioned_docs/version-v0.14.0/design_philosophy.md","tags":[],"version":"v0.14.0","lastUpdatedBy":"Cristian Lara","lastUpdatedAt":1734375439000,"frontMatter":{"id":"design_philosophy","title":"Design Philosophy"},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/botorch/docs/introduction"},"next":{"title":"Using BoTorch with Ax","permalink":"/botorch/docs/botorch_and_ax"}}');var a=s(4848),t=s(8453);const o={id:"design_philosophy",title:"Design Philosophy"},r=void 0,l={},c=[{value:"Main Design Tenets",id:"main-design-tenets",level:2},{value:"Parallelism Through Batched Computations",id:"parallelism-through-batched-computations",level:2},{value:"Optimizing Acquisition Functions",id:"optimizing-acquisition-functions",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h2:"h2",li:"li",math:"math",mi:"mi",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"main-design-tenets",children:"Main Design Tenets"}),"\n",(0,a.jsx)(n.p,{children:"BoTorch adheres to the following main design tenets:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Modularity & Simplicity"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Make it easy for researchers to develop and implement new ideas by following\na modular design philosophy & making heavy use of auto-differentiation. Most\nBoTorch components are ",(0,a.jsx)(n.code,{children:"torch.nn.Module"})," instances, so that users familiar\nwith PyTorch can easily implement new differentiable\ncomponents."]}),"\n",(0,a.jsx)(n.li,{children:"Facilitate model-agnostic Bayesian Optimization by maintaining lightweight\nAPIs and first-class support for Monte-Carlo-based acquisition functions."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Performance & Scalability"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Achieve high levels of performance across different platforms with\ndevice-agnostic code by using highly parallelized batch operations."}),"\n",(0,a.jsxs)(n.li,{children:["Expand the applicability of Bayesian Optimization to very large problems by\nharnessing scalable modeling frameworks such as\n",(0,a.jsx)(n.a,{href:"https://gpytorch.ai",children:"GPyTorch"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"parallelism-through-batched-computations",children:"Parallelism Through Batched Computations"}),"\n",(0,a.jsx)(n.p,{children:"Batching (as in batching data or batching computations) is a central component\nto all modern deep learning platforms and plays a critical role in the design of\nBoTorch. Examples of batch computations in BoTorch include:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["A batch of candidate points ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"X"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"X"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]})})]})," to be evaluated in parallel on the black-box\nfunction we are trying optimize. In BoTorch, we refer to this kind of batch\nas a ",(0,a.jsx)(n.strong,{children:'"q-batch"'}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["A batch of q-batches to be evaluated in parallel on the surrogate model of\nthe black-box function. These facilitate fast evaluation on modern hardware\nsuch as GPUs and multi-core CPUs with advanced instruction sets (e.g. AVX).\nIn BoTorch, we refer to a batch of this type as ",(0,a.jsx)(n.strong,{children:'"t-batch"'}),' (as in\n"torch-batch").']}),"\n",(0,a.jsxs)(n.li,{children:["A ",(0,a.jsx)(n.strong,{children:"batched"})," surrogate ",(0,a.jsx)(n.strong,{children:"model"}),", each batch of which models a different\noutput (which is useful for multi-objective Bayesian Optimization). This kind\nof batching also aims to exploit modern hardware architecture."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Note that none of these notions of batch pertains to the batching of ",(0,a.jsx)(n.em,{children:"training\ndata"}),', which is commonly done in training Neural Network models (sometimes\ncalled "mini-batching"). BoTorch aims to be agnostic with regards to the\nparticular model used - so while model fitting may indeed be performed via\nstochastic gradient descent using mini-batch training, BoTorch itself abstracts\naway from this.']}),"\n",(0,a.jsxs)(n.p,{children:["For an in-depth look at the different batch notions in BoTorch, take a look at\nthe ",(0,a.jsx)(n.a,{href:"batching",children:"Batching in BoTorch"})," section."]}),"\n",(0,a.jsx)(n.h2,{id:"optimizing-acquisition-functions",children:"Optimizing Acquisition Functions"}),"\n",(0,a.jsx)(n.p,{children:"While BoTorch tries to align as closely as possible with PyTorch when possible,\noptimization of acquisition functions requires a somewhat different approach.\nWe now describe this discrepancy and explain in detail why we made this design\ndecision."}),"\n",(0,a.jsx)(n.p,{children:'In PyTorch, modules typically map (batches of) data to an output, where the\nmapping is parameterized by the parameters of the modules (often the weights\nof a Neural Network). Fitting the model means optimizing some loss (which is\ndefined with respect to the underlying distribution of the data).\nAs this distribution is unknown, one cannot directly evaluate this function.\nInstead, one considers the empirical loss function, i.e. the loss evaluated on\nall data available. In typical machine learning model training, a stochastic\nversion of the empirical loss, obtained by "mini-batching" the data, is\noptimized using stochastic optimization algorithms.'}),"\n",(0,a.jsxs)(n.p,{children:["In BoTorch, ",(0,a.jsx)(n.a,{href:"../api/acquisition.html#acquisitionfunction",children:(0,a.jsx)(n.code,{children:"AcquisitionFunction"})}),"\nmodules map an input design ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"X"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"X"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]})})]})," to the acquisition function value. Optimizing\nthe acquisition function means optimizing the output over the possible values of\n",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"X"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"X"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]})})]}),". If the acquisition function is deterministic, then so is the optimization\nproblem."]}),"\n",(0,a.jsxs)(n.p,{children:["For large Neural Network models, the number of optimization variables is very\nhigh, and can be in the hundreds of thousands or even millions of parameters.\nThe resulting optimization problem is often solved using first-order\nstochastic gradient descent algorithms (e.g. SGD and its many variants).\nMany of these are implemented in the ",(0,a.jsx)(n.code,{children:"torch.optim"})," module. The typical way of\noptimizing a model with these algorithms is by extracting the module's\nparameters (e.g. using ",(0,a.jsx)(n.code,{children:"parameters()"}),"), and writing a manual optimization loop\nthat calls ",(0,a.jsx)(n.code,{children:"step()"})," on a torch ",(0,a.jsx)(n.code,{children:"Optimizer"})," object."]}),"\n",(0,a.jsxs)(n.p,{children:["Optimizing acquisition functions is different since the problem dimensionality\nis often much smaller. Indeed, optimizing over ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"q"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]})," design points in a\n",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"d"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"d"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"d"})]})})]}),"-dimensional feature space results in ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"q"}),(0,a.jsx)(n.mi,{children:"d"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"qd"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"d"})]})})]})," scalar parameters to optimize\nover. Both ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"q"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]})," and ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"d"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"d"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"d"})]})})]})," are often quite small, and hence so is the dimensionality\nof the problem.\nMoreover, the optimization problem can be cast as a deterministic one (either\nbecause an analytic acquisition function is used, or because the\nreparameterization trick is employed to render the Monte-Carlo-based evaluation\nof the acquisition function deterministic in terms of the input tensor ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"X"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"X"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]})})]}),").\nAs a result, optimization algorithms that are typically inadmissible for\nproblems such as training Neural Networks become promising alternatives to\nstandard first-order methods. In particular, this includes quasi-second order\nmethods (such as L-BFGS or SLSQP) that approximate local curvature of the\nacquisition function by using past gradient information.\nThese methods are currently not well supported in the ",(0,a.jsx)(n.code,{children:"torch.optim"})," package,\nwhich is why BoTorch provides a custom interface that wraps the optimizers from\nthe ",(0,a.jsx)(n.code,{children:"scipy.optimize"})," module."]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(6540);const a={},t=i.createContext(a);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);