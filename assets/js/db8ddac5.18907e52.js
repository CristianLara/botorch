"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9180],{6998:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>h,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"botorch_and_ax","title":"Using BoTorch with Ax","description":"Ax is a platform for sequential experimentation. It relies on","source":"@site/../docs/botorch_and_ax.md","sourceDirName":".","slug":"/botorch_and_ax","permalink":"/botorch/docs/botorch_and_ax","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/../docs/botorch_and_ax.md","tags":[],"version":"current","lastUpdatedBy":"Cristian Lara","lastUpdatedAt":1732739285000,"frontMatter":{"id":"botorch_and_ax","title":"Using BoTorch with Ax"},"sidebar":"docs","previous":{"title":"Design Philosophy","permalink":"/botorch/docs/design_philosophy"},"next":{"title":"Papers using BoTorch","permalink":"/botorch/docs/papers"}}');var i=t(4848),s=t(8453);const a={id:"botorch_and_ax",title:"Using BoTorch with Ax"},r=void 0,h={},c=[{value:"When to use BoTorch through Ax",id:"when-to-use-botorch-through-ax",level:2},{value:"When not to use Ax",id:"when-not-to-use-ax",level:2},{value:"Prototyping in BoTorch",id:"prototyping-in-botorch",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"https://ax.dev",children:"Ax"})," is a platform for sequential experimentation. It relies on\nBoTorch for implementing Bayesian Optimization algorithms, but provides\nhigher-level APIs that make it easy and convenient to specify problems,\nvisualize results, and benchmark new algorithms.\nIt also comes with powerful metadata management, storage of results, and\ndeployment-related APIs. Ax makes it convenient to use BoTorch in most standard\nBayesian Optimization settings.\nSimply put, BoTorch provides the building blocks for the engine, while Ax makes\nit easy to drive the car."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"BoTorch and Ax",src:t(4150).A+"",width:"1440",height:"769"})}),"\n",(0,i.jsxs)(o.p,{children:["Ax provides a\n",(0,i.jsx)(o.a,{href:"https://ax.dev/api/models.html#ax.models.torch.botorch.BotorchModel",children:(0,i.jsx)(o.code,{children:"BotorchModel"})}),"\nthat is a sensible default for modeling and optimization which can be customized\nby specifying and passing in bespoke model constructors, acquisition functions,\nand optimization strategies.\nThis model bridge utilizes a number of built-in transformations, such as\nnormalizing input spaces and outputs to ensure reasonable fitting of GPs.\nSee the ",(0,i.jsx)(o.a,{href:"https://ax.dev/docs/models.html#transforms",children:"Ax Docs"})," for more\ninformation."]}),"\n",(0,i.jsx)(o.h2,{id:"when-to-use-botorch-through-ax",children:"When to use BoTorch through Ax"}),"\n",(0,i.jsx)(o.p,{children:"If it's simple to use BoTorch through Ax for your problem, then use Ax. It\ndramatically reduces the amount of bookkeeping one needs to do as a Bayesian\noptimization researcher, such as keeping track of results, and transforming\ninputs and outputs to ranges that will ensure sensible handling in (G)PyTorch.\nThe functionality provided by Ax should apply to most standard use cases."}),"\n",(0,i.jsxs)(o.p,{children:["Even if you want something more custom, it may still be easier to use the Ax\nframework. For instance, say you want to experiment with using a different kind\nof surrogate model, or a new type of acquisition function, but leave the rest of\nthe the Bayesian Optimization loop untouched. It is then straightforward to plug\nyour custom BoTorch model or acquisition function into Ax to take advantage of\nAx's various loop control APIs, as well as its powerful automated metadata\nmanagement, data storage, etc. See the\n",(0,i.jsx)(o.a,{href:"../tutorials/custom_botorch_model_in_ax",children:"Using a custom BoTorch model in Ax"}),"\ntutorial for more on how to do this."]}),"\n",(0,i.jsx)(o.h2,{id:"when-not-to-use-ax",children:"When not to use Ax"}),"\n",(0,i.jsxs)(o.p,{children:["If you're working in a non-standard setting, such as structured feature or\ndesign spaces, or where the model fitting process requires interactive work,\nthen using Ax may not be the best solution for you. In such a situation, you\nmight be better off writing your own full Bayesian Optimization loop in BoTorch.\nThe ",(0,i.jsx)(o.a,{href:"../tutorials/closed_loop_botorch_only",children:"q-Noisy Constrained EI"})," tutorial and\n",(0,i.jsx)(o.a,{href:"../tutorials/vae_mnist",children:"variational auto-encoder"})," tutorial give examples of how\nthis can be done."]}),"\n",(0,i.jsx)(o.p,{children:"You may also consider working purely in BoTorch if you want to be able to\nunderstand and control every single aspect of your BayesOpt loop - Ax's\nsimplicity necessarily means that certain powerful BoTorch features will not be\nfully exposed to the user."}),"\n",(0,i.jsx)(o.h2,{id:"prototyping-in-botorch",children:"Prototyping in BoTorch"}),"\n",(0,i.jsx)(o.p,{children:"The modular design of BoTorch makes it very easy to prototype and debug\nindividual components in an interactive fashion in a Jupyter notebook just like\nyou might do with PyTorch. Once these building blocks have been designed and\ntested, they can easily be integrated into Ax."})]})}function l(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4150:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/botorch_and_ax-3a5aa4aa7fd46481a2f9eb376ea3003a.svg"},8453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>r});var n=t(6540);const i={},s=n.createContext(i);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);