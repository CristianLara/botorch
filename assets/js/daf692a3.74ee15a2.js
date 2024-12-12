"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4867],{1687:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"optimization","title":"Optimization","description":"Model Fitting","source":"@site/../docs/optimization.md","sourceDirName":".","slug":"/optimization","permalink":"/botorch/docs/next/optimization","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/../docs/optimization.md","tags":[],"version":"current","lastUpdatedBy":"Cristian Lara","lastUpdatedAt":1734033956000,"frontMatter":{"id":"optimization","title":"Optimization"},"sidebar":"docs","previous":{"title":"Acquisition Functions","permalink":"/botorch/docs/next/acquisition"},"next":{"title":"Constraints","permalink":"/botorch/docs/next/constraints"}}');var i=n(4848),t=n(8453);const r={id:"optimization",title:"Optimization"},l=void 0,o={},c=[{value:"Model Fitting",id:"model-fitting",level:2},{value:"Optimizing Acquisition Functions",id:"optimizing-acquisition-functions",level:2},{value:"Using scipy Optimizers on Tensors",id:"using-scipy-optimizers-on-tensors",level:4},{value:"Using torch Optimizers",id:"using-torch-optimizers",level:4},{value:"Multiple Random Restarts",id:"multiple-random-restarts",level:3},{value:"Joint vs. Sequential Candidate Generation for Batch Acquisition Functions",id:"joint-vs-sequential-candidate-generation-for-batch-acquisition-functions",level:3}];function m(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",section:"section",semantics:"semantics",span:"span",sup:"sup",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"model-fitting",children:"Model Fitting"}),"\n",(0,i.jsxs)(s.p,{children:["BoTorch provides the convenience method\n",(0,i.jsx)(s.a,{href:"../api/fit.html#botorch.fit.fit_gpytorch_mll",children:(0,i.jsx)(s.code,{children:"fit_gpytorch_mll()"})})," for\nfitting GPyTorch models (optimizing model hyperparameters) using L-BFGS-B via\n",(0,i.jsx)(s.code,{children:"scipy.optimize.minimize()"}),". We recommend using this method for exact GPs, but\nother optimizers may be necessary for models with thousands of parameters or\nobservations."]}),"\n",(0,i.jsx)(s.h2,{id:"optimizing-acquisition-functions",children:"Optimizing Acquisition Functions"}),"\n",(0,i.jsx)(s.h4,{id:"using-scipy-optimizers-on-tensors",children:"Using scipy Optimizers on Tensors"}),"\n",(0,i.jsxs)(s.p,{children:["The default method used by BoTorch to optimize acquisition functions is\n",(0,i.jsx)(s.a,{href:"../api/generation.html#botorch.generation.gen.gen_candidates_scipy",children:(0,i.jsx)(s.code,{children:"gen_candidates_scipy()"})}),".\nGiven a set of starting points (for multiple restarts) and an acquisition\nfunction, this optimizer makes use of ",(0,i.jsx)(s.code,{children:"scipy.optimize.minimize()"})," for\noptimization, via either the L-BFGS-B or SLSQP routines.\n",(0,i.jsx)(s.code,{children:"gen_candidates_scipy()"})," automatically handles conversion between ",(0,i.jsx)(s.code,{children:"torch"})," and\n",(0,i.jsx)(s.code,{children:"numpy"})," types, and utilizes PyTorch's autograd capabilities to compute the\ngradient of the acquisition function."]}),"\n",(0,i.jsx)(s.h4,{id:"using-torch-optimizers",children:"Using torch Optimizers"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.code,{children:"torch"})," optimizer such as ",(0,i.jsx)(s.code,{children:"torch.optim.Adam"})," or ",(0,i.jsx)(s.code,{children:"torch.optim.SGD"})," can also be\nused directly, without the need to perform ",(0,i.jsx)(s.code,{children:"numpy"})," conversion. These first-order\ngradient-based optimizers are particularly useful for the case when the\nacquisition function is stochastic, where algorithms like L-BFGS or SLSQP that\nare designed for deterministic functions should not be applied. The function\n",(0,i.jsx)(s.a,{href:"../api/generation.html#botorch.generation.gen.gen_candidates_torch",children:(0,i.jsx)(s.code,{children:"gen_candidates_torch()"})}),"\nprovides an interface for ",(0,i.jsx)(s.code,{children:"torch"})," optimizers and handles bounding.\nSee the example notebooks\n",(0,i.jsx)(s.a,{href:"../tutorials/compare_mc_analytic_acquisition",children:"here"})," and\n",(0,i.jsx)(s.a,{href:"../tutorials/optimize_stochastic",children:"here"})," for tutorials on how to use different\noptimizers."]}),"\n",(0,i.jsx)(s.h3,{id:"multiple-random-restarts",children:"Multiple Random Restarts"}),"\n",(0,i.jsxs)(s.p,{children:["Acquisition functions are often difficult to optimize as they are generally\nnon-convex and can exhibit numerically vanishing gradients, a problem that is\nparticularly prominent in naive formulations of Expected Improvement (EI).\n",(0,i.jsx)(s.a,{href:"../api/acquisition.html#botorch.acquisition.analytic.LogExpectedImprovement",children:"LogEI"}),"\nand its siblings\n(",(0,i.jsx)(s.a,{href:"../api/acquisition.html#botorch.acquisition.logei.qLogNoisyExpectedImprovement",children:"qLogNEI"})," and\n",(0,i.jsx)(s.a,{href:"../api/acquisition.html#botorch.acquisition.multi_objective.logei.qLogNoisyExpectedHypervolumeImprovement",children:"qLogNEHVI"}),",\n...) ameliorate the flatness issue\nand generally lead to signficiantly higher optimization performance ",(0,i.jsx)(s.sup,{children:(0,i.jsx)(s.a,{href:"#user-content-fn-ament2023",id:"user-content-fnref-ament2023","data-footnote-ref":"","aria-describedby":"footnote-label",children:"1"})}),".\nSince convexity cannot be guaranteed in general, BoTorch makes use of\nmultiple random restarts to improve optimization quality. Each restart gives rise to\na separate optimization within a particular local region; thus,\nthe best result over many restarts can provide an approximation to the\nglobal optimization objective. The function\n",(0,i.jsx)(s.a,{href:"../api/optim.html#botorch.optim.optimize.gen_batch_initial_conditions",children:(0,i.jsx)(s.code,{children:"gen_batch_initial_conditions()"})}),", which is used by default,\nimplements heuristics for choosing a set of initial restart locations (candidates)."]}),"\n",(0,i.jsxs)(s.p,{children:["Rather than optimize sequentially from each initial restart\ncandidate, ",(0,i.jsx)(s.code,{children:"gen_candidates_scipy()"})," takes advantage of batch mode\nevaluation (t-batches) of the acquisition function to solve a single\n",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"b"}),(0,i.jsx)(s.mo,{children:"\xd7"}),(0,i.jsx)(s.mi,{children:"q"}),(0,i.jsx)(s.mo,{children:"\xd7"}),(0,i.jsx)(s.mi,{children:"d"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"b \\times q \\times d"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"})]})]})]}),"-dimensional optimization problem, where the objective is\ndefined as the sum of the ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"b"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"b"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"b"})]})})]})," individual q-batch acquisition values.\nThe wrapper function\n",(0,i.jsx)(s.a,{href:"../api/optim.html#botorch.optim.optimize.optimize_acqf",children:(0,i.jsx)(s.code,{children:"optimize_acqf()"})}),"\nuses\n",(0,i.jsx)(s.a,{href:"../api/generation.html#botorch.generation.gen.get_best_candidates",children:(0,i.jsx)(s.code,{children:"get_best_candidates()"})}),"\nto process the output of ",(0,i.jsx)(s.code,{children:"gen_candidates_scipy()"})," and return the best point\nfound over the random restarts. For reasonable values of ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"b"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"b"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"b"})]})})]})," and ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"q"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]}),", jointly\noptimizing over random restarts can significantly reduce wall time by exploiting\nparallelism, while maintaining high quality solutions."]}),"\n",(0,i.jsx)(s.h3,{id:"joint-vs-sequential-candidate-generation-for-batch-acquisition-functions",children:"Joint vs. Sequential Candidate Generation for Batch Acquisition Functions"}),"\n",(0,i.jsxs)(s.p,{children:["In batch Bayesian Optimization ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"q"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]})," design points are selected for parallel\nexperimentation. The parallel (qEI, qNEI, qUCB, qPI) variants of acquisition\nfunctions call for ",(0,i.jsx)(s.em,{children:"joint"})," optimization over the ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"q"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]})," design points (i.e., solve\nan optimization problem with a ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"q"}),(0,i.jsx)(s.mo,{children:"\xd7"}),(0,i.jsx)(s.mi,{children:"d"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q \\times d"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"})]})]})]}),"-dimensional decision), but when ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"q"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]}),"\nis large, one might also consider ",(0,i.jsx)(s.em,{children:"sequentially"})," selecting the ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"q"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]}),' points using\nsuccessive conditioning on so-called "fantasies", and solving ',(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"q"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]})," optimization\nproblems, each with a ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"d"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"d"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"})]})})]}),"-dimensional decision. The functions\n",(0,i.jsx)(s.a,{href:"../api/optim.html#botorch.optim.optimize.optimize_acqf",children:(0,i.jsx)(s.code,{children:"optimize_acqf()"})}),"\nby default performs joint optimization; when specifying ",(0,i.jsx)(s.code,{children:"sequential=True"})," it\nwill perform sequential optimization."]}),"\n",(0,i.jsxs)(s.p,{children:["Our empirical observations of the ",(0,i.jsx)(s.em,{children:"closed-loop Bayesian Optimization performance"}),"\nfor ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"q"}),(0,i.jsx)(s.mo,{children:"="}),(0,i.jsx)(s.mn,{children:"5"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q = 5"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"="}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(s.span,{className:"mord",children:"5"})]})]})]})," show that joint optimization and sequential optimization have similar\noptimization performance on some standard benchmarks, but sequential optimization\ncomes at a steep cost in wall time (2-6x in our tests). Therefore, for moderately\nsized ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"q"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]}),", a reasonable default option is to use joint optimization."]}),"\n",(0,i.jsxs)(s.p,{children:["However, it is important to note that as ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"q"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]})," increases, the performance of joint\noptimization can be hindered by the harder ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"q"}),(0,i.jsx)(s.mo,{children:"\xd7"}),(0,i.jsx)(s.mi,{children:"d"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"q \\times d"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"d"})]})]})]}),"-dimensional problem, and\nsequential optimization might be preferred. See ",(0,i.jsx)(s.sup,{children:(0,i.jsx)(s.a,{href:"#user-content-fn-wilson2018",id:"user-content-fnref-wilson2018","data-footnote-ref":"","aria-describedby":"footnote-label",children:"2"})})," for further\ndiscussion on how sequential greedy maximization is an effective strategy for\ncommon classes of acquisition functions, and ",(0,i.jsx)(s.sup,{children:(0,i.jsx)(s.a,{href:"#user-content-fn-ament2023",id:"user-content-fnref-ament2023-2","data-footnote-ref":"","aria-describedby":"footnote-label",children:"1"})})," for joint-vs-sequential\noptimization ablations using the LogEI family of acquisition functions."]}),"\n","\n",(0,i.jsxs)(s.section,{"data-footnotes":"",className:"footnotes",children:[(0,i.jsx)(s.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{id:"user-content-fn-ament2023",children:["\n",(0,i.jsxs)(s.p,{children:["S. Ament, S. Daulton, D. Eriksson, M. Balandat, E. Bakshy. Unexpected\nImprovements to Expected Improvement for Bayesian Optimization. NeurIPS, 2023. ",(0,i.jsx)(s.a,{href:"#user-content-fnref-ament2023","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})," ",(0,i.jsxs)(s.a,{href:"#user-content-fnref-ament2023-2","data-footnote-backref":"","aria-label":"Back to reference 1-2",className:"data-footnote-backref",children:["\u21a9",(0,i.jsx)(s.sup,{children:"2"})]})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{id:"user-content-fn-wilson2018",children:["\n",(0,i.jsxs)(s.p,{children:["J. Wilson, F. Hutter, M. Deisenroth. Maximizing Acquisition\nFunctions for Bayesian Optimization. NeurIPS, 2018. ",(0,i.jsx)(s.a,{href:"#user-content-fnref-wilson2018","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var a=n(6540);const i={},t=a.createContext(i);function r(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);