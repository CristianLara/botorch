"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1720],{2932:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"objectives","title":"Objectives","description":"In BoTorch, an objective is a module that allows for convenient transformation","source":"@site/versioned_docs/version-v0.14.0/objectives.md","sourceDirName":".","slug":"/objectives","permalink":"/botorch/docs/objectives","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/versioned_docs/version-v0.14.0/objectives.md","tags":[],"version":"v0.14.0","lastUpdatedBy":"Cristian Lara","lastUpdatedAt":1734375439000,"frontMatter":{"id":"objectives","title":"Objectives"},"sidebar":"docs","previous":{"title":"Constraints","permalink":"/botorch/docs/constraints"},"next":{"title":"Batching","permalink":"/botorch/docs/batching"}}');var i=a(4848),t=a(8453);const l={id:"objectives",title:"Objectives"},c=void 0,r={},o=[{value:"Using custom objectives",id:"using-custom-objectives",level:2},{value:"Utilizing GenericMCObjective",id:"utilizing-genericmcobjective",level:3},{value:"Implementing a custom objective module",id:"implementing-a-custom-objective-module",level:3}];function m(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",ol:"ol",p:"p",pre:"pre",section:"section",semantics:"semantics",span:"span",sup:"sup",...(0,t.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["In BoTorch, an ",(0,i.jsx)(e.em,{children:"objective"})," is a module that allows for convenient transformation\nof model outputs into a scalar function to be optimized.\nTypical use cases for this are the scalarization of outputs for a multi-output\nmodel (see e.g. ",(0,i.jsx)(e.sup,{children:(0,i.jsx)(e.a,{href:"#user-content-fn-randscal",id:"user-content-fnref-randscal","data-footnote-ref":"","aria-describedby":"footnote-label",children:"1"})}),"), or optimization subject to outcome constraints,\nwhich can be achieved by weighting the objective by the probability of\nfeasibility ",(0,i.jsx)(e.sup,{children:(0,i.jsx)(e.a,{href:"#user-content-fn-noisyei",id:"user-content-fnref-noisyei","data-footnote-ref":"","aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,i.jsx)(e.p,{children:"When using classical analytic formulations of acquisition functions, one needs\nto be careful that the transformation results in a posterior distribution of the\ntransformed outputs that still satisfies the assumptions of the analytic\nformulation. For instance, to use standard Expected Improvement on a transformed\noutput of a model, the transformation needs to be affine (because Gaussians are\nclosed under affine transformations).\nWhen using MC-based acquisition functions, however, fewer assumptions are\nrequired, and one can apply general transformations to the model outputs with\nrelative impunity so long gradients can be back-propagated through the\ntransformation."}),"\n",(0,i.jsxs)(e.p,{children:["All BoTorch objectives are derived from\n",(0,i.jsx)(e.a,{href:"../api/acquisition.html#mcacquisitionobjective",children:(0,i.jsx)(e.code,{children:"MCAcquisitionObjective"})}),".\nBoTorch implements several MC-based objectives, including\n",(0,i.jsx)(e.a,{href:"../api/acquisition.html#linearmcobjective",children:(0,i.jsx)(e.code,{children:"LinearMCObjective"})})," for linear\ncombinations of model outputs, and\n",(0,i.jsx)(e.a,{href:"../api/acquisition.html#constrainedmcobjective",children:(0,i.jsx)(e.code,{children:"ConstrainedMCObjective"})})," for\nconstrained objectives (using a sigmoid approximation for the constraints)."]}),"\n",(0,i.jsx)(e.h2,{id:"using-custom-objectives",children:"Using custom objectives"}),"\n",(0,i.jsx)(e.h3,{id:"utilizing-genericmcobjective",children:"Utilizing GenericMCObjective"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.a,{href:"../api/acquisition.html#genericmcobjective",children:(0,i.jsx)(e.code,{children:"GenericMCObjective"})})," allows\nsimply using a generic callable to implement an ad-hoc objective. The callable\nis expected to map a ",(0,i.jsx)(e.code,{children:"sample_shape x batch_shape x q x o"}),"-dimensional tensor of\nposterior samples and an (optional) ",(0,i.jsx)(e.code,{children:"batch_shape x q x d"}),"-dimensional tensor of\ninputs to a ",(0,i.jsx)(e.code,{children:"sample_shape x batch_shape x q"}),"-dimensional tensor of sampled\nobjective values."]}),"\n",(0,i.jsxs)(e.p,{children:["For instance, say you have a multi-output model with ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"2"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"o=2"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"2"})]})]})]})," outputs, and you want\nto optimize a ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"b"}),(0,i.jsx)(e.mi,{children:"j"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"y"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2225"}),(0,i.jsx)(e.mi,{children:"y"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"y"}),(0,i.jsx)(e.mn,{children:"0"})]}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{mathvariant:"normal",children:"\u2225"}),(0,i.jsx)(e.mn,{children:"2"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"obj(y) = 1 - \\|y - y_0\\|_2"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"bj"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"\u2225"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"\u2225"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})]})]}),", where ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"y"}),(0,i.jsx)(e.mn,{children:"0"})]}),(0,i.jsx)(e.mo,{children:"\u2208"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{mathvariant:"double-struck",children:"R"}),(0,i.jsx)(e.mn,{children:"2"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"y_0 \\in \\mathbb{R}^2"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.1944em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"\u2208"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathbb",children:"R"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]}),".\nFor this you would use the following custom objective (here we can ignore the\ninputs ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"X"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"X"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]})})]})," as the objective does not depend on it):"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"obj = lambda xi, X: 1 - torch.linalg.norm(xi - y_0, dim=-1)\nmc_objective = GenericMCObjective(obj)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"implementing-a-custom-objective-module",children:"Implementing a custom objective module"}),"\n",(0,i.jsxs)(e.p,{children:["Instead of using ",(0,i.jsx)(e.code,{children:"GenericMCObjective"}),", you can also implement your own\n",(0,i.jsx)(e.code,{children:"MCAcquisitionObjective"})," modules to make them easier to re-use, or support\nmore complex logic. The only thing required to implement\nis a ",(0,i.jsx)(e.code,{children:"forward"})," method that takes in a\n",(0,i.jsx)(e.code,{children:"sample_shape x batch_shape x q x o"}),"-dimensional tensor of\nposterior samples and maps it to a\n",(0,i.jsx)(e.code,{children:"sample_shape x batch_shape x q"}),"-dimensional tensor of sampled objective values."]}),"\n",(0,i.jsx)(e.p,{children:"A custom objective module of the above example would be"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class MyCustomObjective(MCAcquisitionObjective):\n\n    def forward(self, samples, X=None):\n      return 1 - torch.linalg.norm(samples - y_0, dim=-1)\n"})}),"\n","\n",(0,i.jsxs)(e.section,{"data-footnotes":"",className:"footnotes",children:[(0,i.jsx)(e.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{id:"user-content-fn-randscal",children:["\n",(0,i.jsxs)(e.p,{children:["B. Paria, K. Kandasamy, and B. P\xf3czos. A Flexible Multi-Objective\nBayesian Optimization Approach using Random Scalarizations. ArXiv, 2018. ",(0,i.jsx)(e.a,{href:"#user-content-fnref-randscal","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{id:"user-content-fn-noisyei",children:["\n",(0,i.jsxs)(e.p,{children:["B. Letham, B. Karrer, G. Ottoni and Bakshy, E. Constrained Bayesian\nOptimization with Noisy Experiments. Bayesian Analysis, 2018. ",(0,i.jsx)(e.a,{href:"#user-content-fnref-noisyei","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(m,{...s})}):m(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>l,x:()=>c});var n=a(6540);const i={},t=n.createContext(i);function l(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:l(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);