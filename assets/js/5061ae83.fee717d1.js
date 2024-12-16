"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3774],{6216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"getting_started","title":"Getting Started","description":"This section shows you how to get your feet wet with BoTorch.","source":"@site/versioned_docs/version-v0.13.0/getting_started.mdx","sourceDirName":".","slug":"/getting_started","permalink":"/botorch/docs/v0.13.0/getting_started","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/versioned_docs/version-v0.13.0/getting_started.mdx","tags":[],"version":"v0.13.0","lastUpdatedBy":"Cristian Lara","lastUpdatedAt":1734368612000,"frontMatter":{"id":"getting_started","title":"Getting Started"},"sidebar":"docs","previous":{"title":"Papers using BoTorch","permalink":"/botorch/docs/v0.13.0/papers"},"next":{"title":"Overview","permalink":"/botorch/docs/v0.13.0/overview"}}');var a=t(4848),o=t(8453),i=t(1470),l=t(9365);const s={id:"getting_started",title:"Getting Started"},c=void 0,u={},d=[{value:"Installing BoTorch",id:"installing-botorch",level:2},{value:"Installation Requirements:",id:"installation-requirements",level:4},{value:"Basic Components",id:"basic-components",level:2},{value:"Tutorials",id:"tutorials",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Contributing",id:"contributing",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This section shows you how to get your feet wet with BoTorch."}),"\n",(0,a.jsxs)(n.p,{children:["Before jumping the gun, we recommend you start with the high-level\n",(0,a.jsx)(n.a,{href:"overview",children:"Overview"})," to learn about the basic concepts in BoTorch."]}),"\n",(0,a.jsx)(n.h2,{id:"installing-botorch",children:"Installing BoTorch"}),"\n",(0,a.jsx)(n.h4,{id:"installation-requirements",children:"Installation Requirements:"}),"\n",(0,a.jsxs)(n.p,{children:["BoTorch is easily installed via ",(0,a.jsx)(n.code,{children:"pip"})," (recommended). It is also possible to\nuse the (unofficial) ",(0,a.jsx)(n.a,{href:"https://www.anaconda.com/distribution/#download-section",children:"Anaconda"}),"\npackage from the ",(0,a.jsx)(n.code,{children:"-c conda-forge"})," channel."]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"pip",label:"pip",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install botorch\n"})})}),(0,a.jsx)(l.A,{value:"conda",label:"Conda",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"conda install botorch -c gpytorch -c conda-forge\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["For more installation options and detailed instructions, please see the\n",(0,a.jsx)(n.a,{href:"https://github.com/pytorch/botorch/blob/main/README.md",children:"Project Readme"}),"\non GitHub."]}),"\n",(0,a.jsx)(n.h2,{id:"basic-components",children:"Basic Components"}),"\n",(0,a.jsx)(n.p,{children:"Here's a quick run down of the main components of a Bayesian Optimization loop."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Fit a Gaussian Process model to data"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import torch\nfrom botorch.models import SingleTaskGP\nfrom botorch.models.transforms import Normalize, Standardize\nfrom botorch.fit import fit_gpytorch_mll\nfrom gpytorch.mlls import ExactMarginalLogLikelihood\n\ntrain_X = torch.rand(10, 2, dtype=torch.double) * 2\n# explicit output dimension -- Y is 10 x 1\ntrain_Y = 1 - (train_X - 0.5).norm(dim=-1, keepdim=True)\ntrain_Y += 0.1 * torch.rand_like(train_Y)\n\ngp = SingleTaskGP(\n    train_X=train_X,\n    train_Y=train_Y,\n    input_transform=Normalize(d=2),\n    outcome_transform=Standardize(m=1),\n)\nmll = ExactMarginalLogLikelihood(gp.likelihood, gp)\nfit_gpytorch_mll(mll)\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Construct an acquisition function"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from botorch.acquisition import LogExpectedImprovement\n\nlogNEI = LogExpectedImprovement(model=gp, best_f=train_Y.max())\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Optimize the acquisition function"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from botorch.optim import optimize_acqf\n\nbounds = torch.stack([torch.zeros(2), torch.ones(2)]).to(torch.double)\ncandidate, acq_value = optimize_acqf(\n    logNEI, bounds=bounds, q=1, num_restarts=5, raw_samples=20,\n)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,a.jsxs)(n.p,{children:["Our Jupyter notebook tutorials help you get off the ground with BoTorch.\nView and download them ",(0,a.jsx)(n.a,{href:"../tutorials",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,a.jsxs)(n.p,{children:["For an in-depth reference of the various BoTorch internals, see our\n",(0,a.jsx)(n.a,{href:"../api",children:"API Reference"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,a.jsxs)(n.p,{children:["You'd like to contribute to BoTorch? Great! Please see\n",(0,a.jsx)(n.a,{href:"https://github.com/pytorch/botorch/blob/main/CONTRIBUTING.md",children:"here"}),"\nfor how to help out."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(8215);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(6540),a=t(8215),o=t(3104),i=t(6347),l=t(205),s=t(7485),c=t(1682),u=t(679);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,i.W6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(o.location.search);n.set(l,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[l,o])]}function f(e){var n,t,a,o,i=e.defaultValue,s=e.queryString,c=void 0!==s&&s,d=e.groupId,f=h(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),b=v[0],g=v[1],x=m({queryString:c,groupId:d}),j=x[0],w=x[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Dv)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),_=y[0],I=y[1],T=function(){var e=null!=j?j:_;return p({value:e,tabValues:f})?e:null}();return(0,l.A)((function(){T&&g(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),I(e)}),[w,I,f]),tabValues:f}}var v=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,l=e.tabValues,s=[],c=(0,o.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=s.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;t=null!=(o=s[i])?o:s[s.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:u},o,{className:(0,a.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,o=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=i.find((function(e){return e.props.value===o}));return l?(0,r.cloneElement)(l,{className:(0,a.A)("margin-top--md",l.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})}))})}function w(e){var n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},n,e)),(0,g.jsx)(j,Object.assign({},n,e))]})}function y(e){var n=(0,v.A)();return(0,g.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(6540);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);