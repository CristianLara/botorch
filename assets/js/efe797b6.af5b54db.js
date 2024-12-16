"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2402],{6486:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"posteriors","title":"Posteriors","description":"A BoTorch Posterior object is a layer of","source":"@site/versioned_docs/version-v0.13.0/posteriors.md","sourceDirName":".","slug":"/posteriors","permalink":"/botorch/docs/posteriors","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/versioned_docs/version-v0.13.0/posteriors.md","tags":[],"version":"v0.13.0","lastUpdatedBy":"Cristian Lara","lastUpdatedAt":1734365492000,"frontMatter":{"id":"posteriors","title":"Posteriors"},"sidebar":"docs","previous":{"title":"Models","permalink":"/botorch/docs/models"},"next":{"title":"Acquisition Functions","permalink":"/botorch/docs/acquisition"}}');var s=o(4848),r=o(8453);const n={id:"posteriors",title:"Posteriors"},a=void 0,c={},d=[];function l(e){const t={a:"a",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["A BoTorch ",(0,s.jsx)(t.code,{children:"Posterior"})," object is a layer of\nabstraction that separates the specific model used from the evaluation (and\nsubsequent optimization) of acquisition functions.\nIn the simplest case, a posterior is a lightweight wrapper around an explicit\ndistribution object from ",(0,s.jsx)(t.code,{children:"torch.distributions"})," (or ",(0,s.jsx)(t.code,{children:"gpytorch.distributions"}),").\nHowever, a BoTorch ",(0,s.jsx)(t.code,{children:"Posterior"})," can be any distribution (even an implicit one),\nso long as one can sample from that distribution. For example, a posterior could\nbe represented implicitly by some base distribution mapped through a neural network."]}),"\n",(0,s.jsxs)(t.p,{children:["While the analytic acquisition functions assume that the posterior is a\nmultivariate Gaussian, the Monte-Carlo (MC) based acquisition functions do not make any\nassumptions about the underlying distribution. Rather, the MC-based acquisition\nfunctions only require that the posterior can generate samples through an ",(0,s.jsx)(t.code,{children:"rsample"}),"\nmethod. As long as the posterior implements the ",(0,s.jsx)(t.a,{href:"../api/posteriors.html#posterior",children:(0,s.jsx)(t.code,{children:"Posterior"})}),"\ninterface, it can be used with an MC-based acquisition function. In addition, note that\ngradient-based acquisition function optimization requires the ability to back-propagate\ngradients through the MC samples."]}),"\n",(0,s.jsxs)(t.p,{children:["For GP models based on GPyTorch for which the posterior distribution is a\nmultivariate Gaussian,\n",(0,s.jsx)(t.a,{href:"../api/posteriors.html#gpytorchposterior",children:(0,s.jsx)(t.code,{children:"GPyTorchPosterior"})})," should be used."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>a});var i=o(6540);const s={},r=i.createContext(s);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);