"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6792],{3144:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"constraints","title":"Constraints","description":"BoTorch supports two distinct types of constraints: Parameter constraints","source":"@site/versioned_docs/version-v0.13.0/constraints.md","sourceDirName":".","slug":"/constraints","permalink":"/botorch/docs/v0.13.0/constraints","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/versioned_docs/version-v0.13.0/constraints.md","tags":[],"version":"v0.13.0","lastUpdatedBy":"Cristian Lara","lastUpdatedAt":1734368612000,"frontMatter":{"id":"constraints","title":"Constraints"},"sidebar":"docs","previous":{"title":"Optimization","permalink":"/botorch/docs/v0.13.0/optimization"},"next":{"title":"Objectives","permalink":"/botorch/docs/v0.13.0/objectives"}}');var s=n(4848),i=n(8453);const a={id:"constraints",title:"Constraints"},r=void 0,c={},d=[{value:"Parameter Constraints",id:"parameter-constraints",level:3},{value:"Outcome Constraints",id:"outcome-constraints",level:3}];function l(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"BoTorch supports two distinct types of constraints: Parameter constraints\nand outcome constraints."}),"\n",(0,s.jsx)(e.h3,{id:"parameter-constraints",children:"Parameter Constraints"}),"\n",(0,s.jsxs)(e.p,{children:["Parameter constraints are constraints on the input space that restrict the\nvalues of the generated candidates. That is, rather than just living inside\na bounding box defined by the ",(0,s.jsx)(e.code,{children:"bounds"})," argument to ",(0,s.jsx)(e.code,{children:"optimize_acqf"})," (or its\nderivates), candidate points may be further constrained by linear (in)equality\nconstraints, specified by the ",(0,s.jsx)(e.code,{children:"inequality_constraints"})," and ",(0,s.jsx)(e.code,{children:"equality_constraints"}),"\narguments to ",(0,s.jsx)(e.code,{children:"optimize_acqf"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"Parameter constraints are used e.g. when certain configurations are infeasible\nto implement, or would result in excessive costs. These constraints do not affect\nthe model directly, only indirectly in the sense that all newly generated and\nlater observed points will satisfy these constraints. In particular, you may\nhave a model that is fit on points that do not satisfy a certain set of parameter\nconstraints, but still generate candidates subject to those constraints."}),"\n",(0,s.jsx)(e.h3,{id:"outcome-constraints",children:"Outcome Constraints"}),"\n",(0,s.jsxs)(e.p,{children:["In the context of Bayesian Optimization, outcome constraints usually mean\nconstraints on a (black-box) outcome that needs to be modeled, just like\nthe objective function is modeled by a surrogate model. Various approaches\nfor handling these types of constraints have been proposed. A popular one that\nis also adopted by BoTorch for Monte Carlo acquistion functions is to multiply\nthe acquisition utility by the feasibility indicator of the modeled outcome\n(",(0,s.jsx)(e.sup,{children:(0,s.jsx)(e.a,{href:"#user-content-fn-gardner2014",id:"user-content-fnref-gardner2014","data-footnote-ref":"","aria-describedby":"footnote-label",children:"1"})}),", ",(0,s.jsx)(e.sup,{children:(0,s.jsx)(e.a,{href:"#user-content-fn-letham2017",id:"user-content-fnref-letham2017","data-footnote-ref":"","aria-describedby":"footnote-label",children:"2"})}),"). The approach can be utilized by passing\n",(0,s.jsx)(e.code,{children:"constraints"})," to the constructors of compatible acquisition functions,\ne.g. any ",(0,s.jsx)(e.code,{children:"SampleReducingMCAcqquisitionFunction"})," with a positive acquisition utility,\nlike expected improvement.\nNotably, if the constraint and objective models are statistically independent,\nthe constrained expected improvement variant is mathematically equivalent to the\nunconstrained expected improvement of the objective, multiplied by the probability of\nfeasibility under the modeled outcome constraint."]}),"\n",(0,s.jsxs)(e.p,{children:["See the ",(0,s.jsx)(e.a,{href:"../tutorials/closed_loop_botorch_only",children:"Closed-Loop Optimization"}),"\ntutorial for an example of using outcome constraints in BoTorch."]}),"\n","\n",(0,s.jsxs)(e.section,{"data-footnotes":"",className:"footnotes",children:[(0,s.jsx)(e.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{id:"user-content-fn-gardner2014",children:["\n",(0,s.jsxs)(e.p,{children:["J.R. Gardner, M. J. Kusner, Z. E. Xu, K. Q. Weinberger and\nJ. P. Cunningham. Bayesian Optimization with Inequality Constraints. ICML 2014. ",(0,s.jsx)(e.a,{href:"#user-content-fnref-gardner2014","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{id:"user-content-fn-letham2017",children:["\n",(0,s.jsxs)(e.p,{children:["B. Letham, B. Karrer, G. Ottoni and E. Bakshy. Constrained Bayesian optimization with noisy experiments. Bayesian Analysis 14(2), 2019. ",(0,s.jsx)(e.a,{href:"#user-content-fnref-letham2017","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>r});var o=n(6540);const s={},i=o.createContext(s);function a(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);