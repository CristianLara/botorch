"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4760],{4401:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tutorials/optimize_with_cmaes/index","title":"Acquisition function optimization with CMA-ES","description":"<LinkButtons","source":"@site/versioned_docs/version-v0.14.0/tutorials/optimize_with_cmaes/index.mdx","sourceDirName":"tutorials/optimize_with_cmaes","slug":"/tutorials/optimize_with_cmaes/","permalink":"/botorch/docs/tutorials/optimize_with_cmaes/","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/versioned_docs/version-v0.14.0/tutorials/optimize_with_cmaes/index.mdx","tags":[],"version":"v0.14.0","lastUpdatedBy":"github-actions[bot]","lastUpdatedAt":1734372631000,"frontMatter":{"title":"Acquisition function optimization with CMA-ES","sidebar_label":"Acquisition function optimization with CMA-ES"},"sidebar":"tutorials","previous":{"title":"Comparing analytic and MC Expected Improvement","permalink":"/botorch/docs/tutorials/compare_mc_analytic_acquisition/"},"next":{"title":"Acquisition function optimization with torch.optim","permalink":"/botorch/docs/tutorials/optimize_stochastic/"}}');var t=i(4848),a=i(8453),o=i(8987),r=i(1023);i(290);const c={title:"Acquisition function optimization with CMA-ES",sidebar_label:"Acquisition function optimization with CMA-ES"},l=void 0,m={},h=[{value:"Optimize acquisition functions using CMA-ES",id:"optimize-acquisition-functions-using-cma-es",level:2},{value:"Setting up the acquisition function",id:"setting-up-the-acquisition-function",level:3},{value:"Optimizing the acquisition function using CMA-ES",id:"optimizing-the-acquisition-function-using-cma-es",level:3}];function p(n){const e={a:"a",annotation:"annotation",code:"code",h2:"h2",h3:"h3",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{githubUrl:"https://github.com/cristianlara/botorch/blob/v0.14.0/tutorials/optimize_with_cmaes/optimize_with_cmaes.ipynb",colabUrl:"https://colab.research.google.com/github/cristianlara/botorch/blob/v0.14.0/tutorials/optimize_with_cmaes/optimize_with_cmaes.ipynb"}),"\n",(0,t.jsx)(e.h2,{id:"optimize-acquisition-functions-using-cma-es",children:"Optimize acquisition functions using CMA-ES"}),"\n",(0,t.jsxs)(e.p,{children:["In this tutorial, we show how to use an external optimizer (in this case\n",(0,t.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/CMA-ES",children:"CMA-ES"}),") for optimizing BoTorch acquisition\nfunctions. CMA-ES is a zero-th order optimizer, meaning that it only uses function\nevaluations and does not require gradient information. This is of course very useful if\ngradient information about the function to be optimized is unavailable."]}),"\n",(0,t.jsx)(e.p,{children:"In BoTorch, we typically do have gradient information available (thanks, autograd!). One\nis also generally better off using this information, rather than just ignoring it.\nHowever, for certain custom models or acquisition functions, we may not be able to\nbackprop through the acquisition function and/or model. In such instances, using a\nzero-th order optimizer is appropriate."}),"\n",(0,t.jsxs)(e.p,{children:["For this example we use the ",(0,t.jsx)(e.a,{href:"https://github.com/CMA-ES/pycma",children:"PyCMA"})," implementation of\nCMA-ES. PyCMA is easily installed via pip by running ",(0,t.jsx)(e.code,{children:"pip install cma"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"setting-up-the-acquisition-function",children:"Setting up the acquisition function"}),"\n",(0,t.jsxs)(e.p,{children:["For the purpose of this tutorial, we'll use a basic ",(0,t.jsx)(e.code,{children:"UpperConfidenceBound"})," acquisition\nfunction on a basic model fit on synthetic data. Please see the documentation for\n",(0,t.jsx)(e.a,{href:"../docs/models",children:"Models"})," and ",(0,t.jsx)(e.a,{href:"../docs/acquisition",children:"Acquisition Functions"})," for more\ninformation."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"# Install dependencies if we are running in colab\nimport sys\nif 'google.colab' in sys.modules:\n    %pip install botorch\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import math\nimport torch\n\nfrom botorch.fit import fit_gpytorch_mll\nfrom botorch.models import SingleTaskGP\nfrom gpytorch.mlls import ExactMarginalLogLikelihood\n\nX = torch.rand(20, 2) - 0.5\nY = (torch.sin(2 * math.pi * X[:, 0]) + torch.cos(2 * math.pi * X[:, 1])).unsqueeze(-1)\nY += 0.1 * torch.randn_like(Y)\n\ngp = SingleTaskGP(X, Y)\nmll = ExactMarginalLogLikelihood(gp.likelihood, gp)\nfit_gpytorch_mll(mll);\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"from botorch.acquisition import UpperConfidenceBound\n\nUCB = UpperConfidenceBound(gp, beta=0.1)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"optimizing-the-acquisition-function-using-cma-es",children:"Optimizing the acquisition function using CMA-ES"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Note:"}),' Relative to sequential evaluations, parallel evaluations of the acqusition\nfunction are extremely fast in botorch (due to automatic parallelization across batch\ndimensions). In order to exploit this, we use the "ask/tell" interface to ',(0,t.jsx)(e.code,{children:"cma"})," - this\nway we can batch-evaluate the whole CMA-ES population in parallel."]}),"\n",(0,t.jsxs)(e.p,{children:["In this examle we use an initial standard deviation ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"\u03c3"}),(0,t.jsx)(e.mn,{children:"0"})]}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mn,{children:"0.2"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\sigma_0 = 0.2"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c3"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(e.span,{})})})]})})]}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord",children:"0.2"})]})]})]})," and a population\nsize ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"\u03bb"}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mn,{children:"50"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\lambda = 50"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"\u03bb"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord",children:"50"})]})]})]}),". We also constrain the input ",(0,t.jsx)(e.code,{children:"X"})," to the unit cube ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mo,{stretchy:"false",children:"["}),(0,t.jsx)(e.mn,{children:"0"}),(0,t.jsx)(e.mo,{separator:"true",children:","}),(0,t.jsx)(e.mn,{children:"1"}),(0,t.jsxs)(e.msup,{children:[(0,t.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,t.jsx)(e.mi,{children:"d"})]})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"[0, 1]^d"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1.0991em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mopen",children:"["}),(0,t.jsx)(e.span,{className:"mord",children:"0"}),(0,t.jsx)(e.span,{className:"mpunct",children:","}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(e.span,{className:"mord",children:"1"}),(0,t.jsxs)(e.span,{className:"mclose",children:[(0,t.jsx)(e.span,{className:"mclose",children:"]"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsx)(e.span,{className:"vlist-t",children:(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,t.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"})})]})})})})})]})]})})]}),". See\n",(0,t.jsx)(e.code,{children:"cma"}),"'s\n",(0,t.jsx)(e.a,{href:"http://cma.gforge.inria.fr/apidocs-pycma/cma.evolution_strategy.CMAEvolutionStrategy.html",children:"API Reference"}),"\nfor more information on these options."]}),"\n",(0,t.jsx)(e.p,{children:"With this, we can optimize this acquistition function as follows:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import cma\nimport numpy as np\n\n# get initial condition for CMAES in numpy form\n# note that CMAES expects a different shape (no explicit q-batch dimension)\nx0 = np.random.rand(2)\n\n# create the CMA-ES optimizer\nes = cma.CMAEvolutionStrategy(\n    x0=x0,\n    sigma0=0.2,\n    inopts={"bounds": [0, 1], "popsize": 50},\n)\n\n# speed up things by telling pytorch not to generate a compute graph in the background\nwith torch.no_grad():\n\n    # Run the optimization loop using the ask/tell interface -- this uses\n    # PyCMA\'s default settings, see the PyCMA documentation for how to modify these\n    while not es.stop():\n        xs = es.ask()  # as for new points to evaluate\n        # convert to Tensor for evaluating the acquisition function\n        X = torch.tensor(xs, device=X.device, dtype=X.dtype)\n        # evaluate the acquisition function (optimizer assumes we\'re minimizing)\n        Y = -UCB(\n            X.unsqueeze(-2)\n        )  # acquisition functions require an explicit q-batch dimension\n        y = Y.view(-1).double().numpy()  # convert result to numpy array\n        es.tell(xs, y)  # return the result to the optimizer\n\n# convert result back to a torch tensor\nbest_x = torch.from_numpy(es.best.x).to(X)\n\nbest_x\n'})}),"\n",(0,t.jsx)(r.A,{children:"(25_w,50)-aCMA-ES (mu_w=14.0,w_1=14%) in dimension 2 (seed=374178, Thu Aug  8 09:33:08 2019)"}),"\n",(0,t.jsx)(r.A,{children:"tensor([0.2642, 0.0255])"})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},1023:(n,e,i)=>{i.d(e,{A:()=>d});i(6540);var s,t=new Uint8Array(16);function a(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(t)}const o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const r=function(n){return"string"==typeof n&&o.test(n)};for(var c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));const m=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(c[n[e+0]]+c[n[e+1]]+c[n[e+2]]+c[n[e+3]]+"-"+c[n[e+4]]+c[n[e+5]]+"-"+c[n[e+6]]+c[n[e+7]]+"-"+c[n[e+8]]+c[n[e+9]]+"-"+c[n[e+10]]+c[n[e+11]]+c[n[e+12]]+c[n[e+13]]+c[n[e+14]]+c[n[e+15]]).toLowerCase();if(!r(i))throw TypeError("Stringified UUID is invalid");return i};const h=function(n,e,i){var s=(n=n||{}).random||(n.rng||a)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){i=i||0;for(var t=0;t<16;++t)e[i+t]=s[t];return e}return m(s)};var p=i(4848);const d=function(n){return(0,p.jsxs)("div",{style:{backgroundColor:"var(--ifm-pre-background)",marginBottom:"10px",borderRadius:"var(--ifm-global-radius)",overflow:"hidden",padding:"5px",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace)"},children:[(0,p.jsx)("span",{style:{color:"red"},children:"Out: "}),(0,p.jsx)("pre",{style:{margin:"0px",backgroundColor:"inherit",padding:"8px"},children:n.children.split("\n").map((function(n){return(0,p.jsx)("p",{style:{marginBottom:"0px"},children:n},h())}))})]})}},8987:(n,e,i)=>{i.d(e,{A:()=>o});i(6540);var s=i(8774),t=i(3186),a=i(4848);const o=function(n){var e=n.githubUrl,i=n.colabUrl;return(0,a.jsxs)("div",{className:"margin-top--sm margin-bottom--lg",children:[(0,a.jsxs)(s.A,{to:e,className:"button button--outline button--primary margin-right--xs",children:["Open in GitHub",(0,a.jsx)(t.A,{})]}),(0,a.jsxs)(s.A,{to:i,className:"button button--outline button--primary margin--xs",children:["Run in Google Colab",(0,a.jsx)(t.A,{})]})]})}},290:(n,e,i)=>{i(6540),i(3259),i(2303),i(4848)},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>r});var s=i(6540);const t={},a=s.createContext(t);function o(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);