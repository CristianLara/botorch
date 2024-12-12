"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5474],{2047:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"samplers","title":"Monte Carlo Samplers","description":"MC-based acquisition functions rely on the reparameterization trick, which","source":"@site/versioned_docs/version-v0.13.0/samplers.md","sourceDirName":".","slug":"/samplers","permalink":"/botorch/docs/samplers","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/versioned_docs/version-v0.13.0/samplers.md","tags":[],"version":"v0.13.0","lastUpdatedBy":"github-actions[bot]","lastUpdatedAt":1734034199000,"frontMatter":{"id":"samplers","title":"Monte Carlo Samplers"},"sidebar":"docs","previous":{"title":"Batching","permalink":"/botorch/docs/batching"},"next":{"title":"Multi-Objective Bayesian Optimization","permalink":"/botorch/docs/multi_objective"}}');var l=a(4848),t=a(8453);const i={id:"samplers",title:"Monte Carlo Samplers"},r=void 0,c={},m=[];function o(s){const e={annotation:"annotation",code:"code",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",...(0,t.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["MC-based acquisition functions rely on the reparameterization trick, which\ntransforms some set of ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"\u03f5"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\epsilon"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03f5"})]})})]})," from some base distribution into a target\ndistribution. For example, when drawing posterior samples from a Gaussian\nprocess, the classical parameterization is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"\u03bc"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mi,{children:"\u03f5"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mu(x) + L(x) \\epsilon"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03bc"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03f5"})]})]})]}),", where\n",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"\u03f5"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\epsilon"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03f5"})]})})]})," are i.i.d standard normal, ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"\u03bc"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mu"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"\u03bc"})]})})]})," is the mean of the posterior, and ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"L(x)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})," is\na root decomposition of the covariance matrix such that ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mi,{children:"L"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mi,{children:"T"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"\u03a3"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"L(x)L(x)^T = \\Sigma(x)"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0913em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsxs)(e.span,{className:"mclose",children:[(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8413em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"\u03a3"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"."]}),"\n",(0,l.jsx)(e.p,{children:"Exactly how base samples are generated when using the reparameterization trick\ncan have substantial effects on the convergence of gradients estimated from\nthese samples. Because of this, BoTorch implements a generic module capable of\nflexible sampling from any type of probabilistic model."}),"\n",(0,l.jsxs)(e.p,{children:["A ",(0,l.jsx)(e.code,{children:"MCSampler"})," is a ",(0,l.jsx)(e.code,{children:"Module"})," that provides base samples from a ",(0,l.jsx)(e.code,{children:"Posterior"})," object.\nThese samplers may then in turn be used in conjunction with MC-based acquisition\nfunctions. BoTorch includes two types of MC samplers for sampling isotropic\nnormal deviates: a vanilla, normal sampler (",(0,l.jsx)(e.code,{children:"IIDNormalSampler"}),") and randomized\nquasi-Monte Carlo sampler (",(0,l.jsx)(e.code,{children:"SobolQMCNormalSampler"}),")."]}),"\n",(0,l.jsxs)(e.p,{children:["For most use cases, we recommend using ",(0,l.jsx)(e.code,{children:"SobolQMCNormalSampler"}),", as it tends to\nproduce more accurate (i.e. lower variance) gradient estimates with much fewer\nsamples relative to the ",(0,l.jsx)(e.code,{children:"IIDNormalSampler"}),". To experiment with alternative\nsampling procedures, please see the source code for ",(0,l.jsx)(e.code,{children:"SobolQMCNormalSampler"})," as\nan example."]})]})}function h(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(o,{...s})}):o(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>r});var n=a(6540);const l={},t=n.createContext(l);function i(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);