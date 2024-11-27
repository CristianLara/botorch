"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2400],{9844:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"tutorials/multi_fidelity_bo/index","title":"Multi-fidelity Bayesian optimization using KG","description":"<LinkButtons","source":"@site/../docs/tutorials/multi_fidelity_bo/index.mdx","sourceDirName":"tutorials/multi_fidelity_bo","slug":"/tutorials/multi_fidelity_bo/","permalink":"/botorch/docs/tutorials/multi_fidelity_bo/","draft":false,"unlisted":false,"editUrl":"https://github.com/pytorch/botorch/edit/main/docs/../docs/tutorials/multi_fidelity_bo/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Multi-fidelity Bayesian optimization using KG","sidebar_label":"Multi-fidelity Bayesian optimization using KG"},"sidebar":"tutorials","previous":{"title":"High-dimensional optimization with VAEs","permalink":"/botorch/docs/tutorials/vae_mnist/"},"next":{"title":"Multi-fidelity Bayesian optimization with discrete fidelities using KG","permalink":"/botorch/docs/tutorials/discrete_multi_fidelity_bo/"}}');var a=s(4848),i=s(8453),r=s(8987),l=s(1023);s(290);const o={title:"Multi-fidelity Bayesian optimization using KG",sidebar_label:"Multi-fidelity Bayesian optimization using KG"},c=void 0,m={},d=[{value:"Continuous Multi-Fidelity BO in BoTorch with Knowledge Gradient",id:"continuous-multi-fidelity-bo-in-botorch-with-knowledge-gradient",level:2},{value:"Set dtype and device",id:"set-dtype-and-device",level:3},{value:"Problem setup",id:"problem-setup",level:3},{value:"Model initialization",id:"model-initialization",level:4},{value:"Define a helper function to construct the MFKG acquisition function",id:"define-a-helper-function-to-construct-the-mfkg-acquisition-function",level:4},{value:"Define a helper function that performs the essential BO step",id:"define-a-helper-function-that-performs-the-essential-bo-step",level:4},{value:"Perform a few steps of multi-fidelity BO",id:"perform-a-few-steps-of-multi-fidelity-bo",level:3},{value:"Make a final recommendation",id:"make-a-final-recommendation",level:3},{value:"Comparison to standard EI (always use target fidelity)",id:"comparison-to-standard-ei-always-use-target-fidelity",level:3}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{githubUrl:"https://github.com/cristianlara/botorch/blob/main/tutorials/multi_fidelity_bo/multi_fidelity_bo.ipynb",colabUrl:"https://colab.research.google.com/github/cristianlara/botorch/blob/main/tutorials/multi_fidelity_bo/multi_fidelity_bo.ipynb"}),"\n",(0,a.jsx)(n.h2,{id:"continuous-multi-fidelity-bo-in-botorch-with-knowledge-gradient",children:"Continuous Multi-Fidelity BO in BoTorch with Knowledge Gradient"}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial, we show how to perform continuous multi-fidelity Bayesian optimization\n(BO) in BoTorch using the multi-fidelity Knowledge Gradient (qMFKG) acquisition function\n[1, 2]."}),"\n",(0,a.jsxs)(n.p,{children:["[1]\n",(0,a.jsx)(n.a,{href:"https://bayesopt.github.io/papers/2017/20.pdf",children:"J. Wu, P.I. Frazier. Continuous-Fidelity Bayesian Optimization with Knowledge Gradient. NIPS Workshop on Bayesian Optimization, 2017."})]}),"\n",(0,a.jsxs)(n.p,{children:["[2]\n",(0,a.jsx)(n.a,{href:"https://arxiv.org/pdf/1903.04703.pdf",children:"J. Wu, S. Toscano-Palmerin, P.I. Frazier, A.G. Wilson. Practical Multi-fidelity Bayesian Optimization for Hyperparameter Tuning. Conference on Uncertainty in Artificial Intelligence (UAI), 2019"})]}),"\n",(0,a.jsx)(n.h3,{id:"set-dtype-and-device",children:"Set dtype and device"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\nimport torch\n\n\ntkwargs = {\n    "dtype": torch.double,\n    "device": torch.device("cuda" if torch.cuda.is_available() else "cpu"),\n}\nSMOKE_TEST = os.environ.get("SMOKE_TEST")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"problem-setup",children:"Problem setup"}),"\n",(0,a.jsxs)(n.p,{children:["We'll consider the Augmented Hartmann multi-fidelity synthetic test problem. This\nfunction is a version of the Hartmann6 test function with an additional dimension\nrepresenting the fidelity parameter; details are in [2]. The function takes the form\n",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"f"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"x"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"s"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"f(x,s)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," where ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"x"}),(0,a.jsx)(n.mo,{children:"\u2208"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"["}),(0,a.jsx)(n.mn,{children:"0"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsxs)(n.msup,{children:[(0,a.jsx)(n.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(n.mn,{children:"6"})]})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"x \\in [0,1]^6"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2208"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mopen",children:"["}),(0,a.jsx)(n.span,{className:"mord",children:"0"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsxs)(n.span,{className:"mclose",children:[(0,a.jsx)(n.span,{className:"mclose",children:"]"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsx)(n.span,{className:"vlist-t",children:(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"6"})})]})})})})})]})]})]})]})," and ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"s"}),(0,a.jsx)(n.mo,{children:"\u2208"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"["}),(0,a.jsx)(n.mn,{children:"0"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"s \\in [0,1]"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2208"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mopen",children:"["}),(0,a.jsx)(n.span,{className:"mord",children:"0"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mclose",children:"]"})]})]})]}),". The target fidelity is 1.0, which\nmeans that our goal is to solve ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsxs)(n.msub,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"max"}),(0,a.jsx)(n.mo,{children:"\u2061"})]}),(0,a.jsx)(n.mi,{children:"x"})]}),(0,a.jsx)(n.mi,{children:"f"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"x"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"1.0"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\max_x f(x,1.0)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(n.span,{className:"mop",children:[(0,a.jsx)(n.span,{className:"mop",children:"max"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mathnormal mtight",children:"x"})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(n.span,{})})})]})})]}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1.0"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," by making use of cheaper evaluations\n",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"f"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"x"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"s"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"f(x,s)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})," for ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"s"}),(0,a.jsx)(n.mo,{children:"<"}),(0,a.jsx)(n.mn,{children:"1.0"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"s < 1.0"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"<"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1.0"})]})]})]}),". In this example, we'll assume that the cost function takes the\nform ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mn,{children:"5.0"}),(0,a.jsx)(n.mo,{children:"+"}),(0,a.jsx)(n.mi,{children:"s"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"5.0 + s"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(n.span,{className:"mord",children:"5.0"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(n.span,{className:"mbin",children:"+"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"})]})]})]}),", illustrating a situation where the fixed cost is ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"5.0"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"5.0"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"5.0"})]})})]}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from botorch.test_functions.multi_fidelity import AugmentedHartmann\n\n\nproblem = AugmentedHartmann(negate=True).to(**tkwargs)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"model-initialization",children:"Model initialization"}),"\n",(0,a.jsxs)(n.p,{children:["We use a ",(0,a.jsx)(n.code,{children:"SingleTaskMultiFidelityGP"})," as the surrogate model, which uses a kernel from\n[2] that is well-suited for multi-fidelity applications."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from botorch.models.gp_regression_fidelity import SingleTaskMultiFidelityGP\nfrom botorch.models.transforms.outcome import Standardize\nfrom gpytorch.mlls.exact_marginal_log_likelihood import ExactMarginalLogLikelihood\nfrom botorch.utils.transforms import unnormalize\nfrom botorch.utils.sampling import draw_sobol_samples\n\n\ndef generate_initial_data(n=16):\n    # generate training data\n    train_x = torch.rand(n, 7, **tkwargs)\n    train_obj = problem(train_x).unsqueeze(-1)  # add output dimension\n    return train_x, train_obj\n\n\ndef initialize_model(train_x, train_obj):\n    # define a surrogate model suited for a "training data"-like fidelity parameter\n    # in dimension 6, as in [2]\n    model = SingleTaskMultiFidelityGP(\n        train_x, train_obj, outcome_transform=Standardize(m=1), data_fidelities=[6]\n    )\n    mll = ExactMarginalLogLikelihood(model.likelihood, model)\n    return mll, model\n'})}),"\n",(0,a.jsx)(n.h4,{id:"define-a-helper-function-to-construct-the-mfkg-acquisition-function",children:"Define a helper function to construct the MFKG acquisition function"}),"\n",(0,a.jsxs)(n.p,{children:["The helper function illustrates how one can initialize a ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"q"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"q"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"})]})})]}),"MFKG acquisition function.\nIn this example, we assume that the affine cost is known. We then use the notion of a\n",(0,a.jsx)(n.code,{children:"CostAwareUtility"})," in BoTorch to scalarize the competing objectives of information gain\nand cost. The MFKG acquisition function optimizes the ratio of information gain to cost,\nwhich is captured by the ",(0,a.jsx)(n.code,{children:"InverseCostWeightedUtility"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["In order for MFKG to evaluate the information gain, it uses the model to predict the\nfunction value at the highest fidelity after conditioning on the observation. This is\nhandled by the ",(0,a.jsx)(n.code,{children:"project"})," argument, which specifies how to transform a tensor ",(0,a.jsx)(n.code,{children:"X"})," to its\ntarget fidelity. We use a default helper function called ",(0,a.jsx)(n.code,{children:"project_to_target_fidelity"})," to\nachieve this."]}),"\n",(0,a.jsxs)(n.p,{children:["An important point to keep in mind: in the case of standard KG, one can ignore the\ncurrent value and simply optimize the expected maximum posterior mean of the next stage.\nHowever, for MFKG, since the goal is optimize information ",(0,a.jsx)(n.em,{children:"gain"})," per cost, it is\nimportant to first compute the current value (i.e., maximum of the posterior mean at the\ntarget fidelity). To accomplish this, we use a ",(0,a.jsx)(n.code,{children:"FixedFeatureAcquisitionFunction"})," on top\nof a ",(0,a.jsx)(n.code,{children:"PosteriorMean"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from botorch import fit_gpytorch_mll\nfrom botorch.models.cost import AffineFidelityCostModel\nfrom botorch.acquisition.cost_aware import InverseCostWeightedUtility\nfrom botorch.acquisition import PosteriorMean\nfrom botorch.acquisition.knowledge_gradient import qMultiFidelityKnowledgeGradient\nfrom botorch.acquisition.fixed_feature import FixedFeatureAcquisitionFunction\nfrom botorch.optim.optimize import optimize_acqf\nfrom botorch.acquisition.utils import project_to_target_fidelity\n\n\nbounds = torch.tensor([[0.0] * problem.dim, [1.0] * problem.dim], **tkwargs)\ntarget_fidelities = {6: 1.0}\n\ncost_model = AffineFidelityCostModel(fidelity_weights={6: 1.0}, fixed_cost=5.0)\ncost_aware_utility = InverseCostWeightedUtility(cost_model=cost_model)\n\n\ndef project(X):\n    return project_to_target_fidelity(X=X, target_fidelities=target_fidelities)\n\n\ndef get_mfkg(model):\n\n    curr_val_acqf = FixedFeatureAcquisitionFunction(\n        acq_function=PosteriorMean(model),\n        d=7,\n        columns=[6],\n        values=[1],\n    )\n\n    _, current_value = optimize_acqf(\n        acq_function=curr_val_acqf,\n        bounds=bounds[:, :-1],\n        q=1,\n        num_restarts=10 if not SMOKE_TEST else 2,\n        raw_samples=1024 if not SMOKE_TEST else 4,\n        options={"batch_limit": 10, "maxiter": 200},\n    )\n\n    return qMultiFidelityKnowledgeGradient(\n        model=model,\n        num_fantasies=128 if not SMOKE_TEST else 2,\n        current_value=current_value,\n        cost_aware_utility=cost_aware_utility,\n        project=project,\n    )\n'})}),"\n",(0,a.jsx)(n.h4,{id:"define-a-helper-function-that-performs-the-essential-bo-step",children:"Define a helper function that performs the essential BO step"}),"\n",(0,a.jsxs)(n.p,{children:["This helper function optimizes the acquisition function and returns the batch\n",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsxs)(n.msub,{children:[(0,a.jsx)(n.mi,{children:"x"}),(0,a.jsx)(n.mn,{children:"1"})]}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsxs)(n.msub,{children:[(0,a.jsx)(n.mi,{children:"x"}),(0,a.jsx)(n.mn,{children:"2"})]}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mo,{children:"\u2026"}),(0,a.jsxs)(n.msub,{children:[(0,a.jsx)(n.mi,{children:"x"}),(0,a.jsx)(n.mi,{children:"q"})]})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"{x_1, x_2, \\ldots x_q}"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(n.span,{})})})]})})]}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(n.span,{})})})]})})]}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"minner",children:"\u2026"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"q"})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.2861em"},children:(0,a.jsx)(n.span,{})})})]})})]})]})]})})]})," along with the observed function values."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from botorch.optim.initializers import gen_one_shot_kg_initial_conditions\n\ntorch.set_printoptions(precision=3, sci_mode=False)\n\nNUM_RESTARTS = 10 if not SMOKE_TEST else 2\nRAW_SAMPLES = 512 if not SMOKE_TEST else 4\n\n\ndef optimize_mfkg_and_get_observation(mfkg_acqf):\n    """Optimizes MFKG and returns a new candidate, observation, and cost."""\n\n    X_init = gen_one_shot_kg_initial_conditions(\n        acq_function=mfkg_acqf,\n        bounds=bounds,\n        q=4,\n        num_restarts=NUM_RESTARTS,\n        raw_samples=RAW_SAMPLES,\n    )\n    candidates, _ = optimize_acqf(\n        acq_function=mfkg_acqf,\n        bounds=bounds,\n        q=4,\n        num_restarts=NUM_RESTARTS,\n        raw_samples=RAW_SAMPLES,\n        batch_initial_conditions=X_init,\n        options={"batch_limit": 5, "maxiter": 200},\n    )\n    # observe new values\n    cost = cost_model(candidates).sum()\n    new_x = candidates.detach()\n    new_obj = problem(new_x).unsqueeze(-1)\n    print(f"candidates:\\n{new_x}\\n")\n    print(f"observations:\\n{new_obj}\\n\\n")\n    return new_x, new_obj, cost\n'})}),"\n",(0,a.jsx)(n.h3,{id:"perform-a-few-steps-of-multi-fidelity-bo",children:"Perform a few steps of multi-fidelity BO"}),"\n",(0,a.jsx)(n.p,{children:"First, let's generate some initial random data and fit a surrogate model."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"train_x, train_obj = generate_initial_data(n=16)\n"})}),"\n",(0,a.jsx)(n.p,{children:"We can now use the helper functions above to run a few iterations of BO."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"cumulative_cost = 0.0\nN_ITER = 6 if not SMOKE_TEST else 2\n\n\nfor _ in range(N_ITER):\n    mll, model = initialize_model(train_x, train_obj)\n    fit_gpytorch_mll(mll)\n    mfkg_acqf = get_mfkg(model)\n    new_x, new_obj, cost = optimize_mfkg_and_get_observation(mfkg_acqf)\n    train_x = torch.cat([train_x, new_x])\n    train_obj = torch.cat([train_obj, new_obj])\n    cumulative_cost += cost\n"})}),"\n",(0,a.jsx)(l.A,{children:"candidates:\ntensor([[0.005, 0.185, 0.708, 0.670, 0.472, 0.796, 0.000],\n      [0.000, 0.335, 0.670, 0.584, 0.301, 0.733, 0.000],\n      [0.066, 0.127, 0.583, 0.555, 0.302, 0.734, 0.000],\n      [0.023, 0.210, 0.606, 0.756, 0.236, 0.807, 0.000]],\n     dtype=torch.float64)\nobservations:\ntensor([[0.427],\n      [1.045],\n      [1.396],\n      [0.416]], dtype=torch.float64)\ncandidates:\ntensor([[0.024, 0.137, 0.466, 0.545, 0.236, 0.654, 0.000],\n      [0.220, 0.175, 0.597, 0.537, 0.269, 0.681, 0.000],\n      [0.045, 0.088, 0.644, 0.520, 0.234, 0.818, 0.013],\n      [0.024, 0.117, 0.613, 0.496, 0.330, 0.638, 0.000]],\n     dtype=torch.float64)\nobservations:\ntensor([[1.372],\n      [1.640],\n      [1.259],\n      [1.728]], dtype=torch.float64)\ncandidates:\ntensor([[0.162, 0.180, 0.608, 0.453, 0.377, 0.667, 0.010],\n      [0.180, 0.138, 0.505, 0.444, 0.293, 0.554, 0.751],\n      [0.185, 0.046, 0.631, 0.491, 0.384, 0.585, 0.002],\n      [0.151, 0.167, 0.698, 0.474, 0.240, 0.580, 0.024]],\n     dtype=torch.float64)\nobservations:\ntensor([[2.165],\n      [2.315],\n      [1.676],\n      [1.693]], dtype=torch.float64)\ncandidates:\ntensor([[0.156, 0.163, 0.527, 0.376, 0.290, 0.618, 0.000],\n      [0.208, 0.148, 0.480, 0.403, 0.399, 0.589, 0.004],\n      [0.131, 0.213, 0.527, 0.401, 0.377, 0.502, 0.009],\n      [0.240, 0.241, 0.519, 0.408, 0.306, 0.564, 0.000]],\n     dtype=torch.float64)\nobservations:\ntensor([[2.882],\n      [2.431],\n      [2.120],\n      [2.504]], dtype=torch.float64)\ncandidates:\ntensor([[0.215, 0.081, 0.494, 0.335, 0.243, 0.620, 0.000],\n      [0.198, 0.180, 0.539, 0.310, 0.293, 0.655, 0.016],\n      [0.440, 0.558, 0.028, 0.675, 0.168, 0.008, 0.000],\n      [0.153, 0.201, 0.453, 0.338, 0.252, 0.656, 0.000]],\n     dtype=torch.float64)\nobservations:\ntensor([[2.878],\n      [3.178],\n      [1.162],\n      [2.952]], dtype=torch.float64)\ncandidates:\ntensor([[0.232, 0.170, 0.469, 0.256, 0.312, 0.629, 0.037],\n      [0.126, 0.141, 0.519, 0.245, 0.308, 0.671, 0.016],\n      [0.654, 0.372, 0.777, 0.420, 0.574, 0.380, 0.341],\n      [0.218, 0.144, 0.481, 0.280, 0.318, 0.710, 0.031]],\n     dtype=torch.float64)\nobservations:\ntensor([[3.235],\n      [3.161],\n      [0.170],\n      [3.209]], dtype=torch.float64)"}),"\n",(0,a.jsx)(n.h3,{id:"make-a-final-recommendation",children:"Make a final recommendation"}),"\n",(0,a.jsx)(n.p,{children:"In multi-fidelity BO, there are usually fewer observations of the function at the target\nfidelity, so it is important to use a recommendation function that uses the correct\nfidelity. Here, we maximize the posterior mean with the fidelity dimension fixed to the\ntarget fidelity of 1.0."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def get_recommendation(model):\n    rec_acqf = FixedFeatureAcquisitionFunction(\n        acq_function=PosteriorMean(model),\n        d=7,\n        columns=[6],\n        values=[1],\n    )\n\n    final_rec, _ = optimize_acqf(\n        acq_function=rec_acqf,\n        bounds=bounds[:, :-1],\n        q=1,\n        num_restarts=NUM_RESTARTS,\n        raw_samples=RAW_SAMPLES,\n        options={"batch_limit": 5, "maxiter": 200},\n    )\n\n    final_rec = rec_acqf._construct_X_full(final_rec)\n\n    objective_value = problem(final_rec)\n    print(f"recommended point:\\n{final_rec}\\n\\nobjective value:\\n{objective_value}")\n    return final_rec\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'final_rec = get_recommendation(model)\nprint(f"\\ntotal cost: {cumulative_cost}\\n")\n'})}),"\n",(0,a.jsx)(l.A,{children:"recommended point:\ntensor([[0.208, 0.164, 0.514, 0.280, 0.301, 0.664, 1.000]],\n     dtype=torch.float64)\nobjective value:\ntensor([3.298], dtype=torch.float64)\ntotal cost: 121.25572809899545"}),"\n",(0,a.jsx)(n.h3,{id:"comparison-to-standard-ei-always-use-target-fidelity",children:"Comparison to standard EI (always use target fidelity)"}),"\n",(0,a.jsx)(n.p,{children:"Let's now repeat the same steps using a standard EI acquisition function (note that this\nis not a rigorous comparison as we are only looking at one trial in order to keep\ncomputational requirements low)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from botorch.acquisition import qExpectedImprovement\n\n\ndef get_ei(model, best_f):\n\n    return FixedFeatureAcquisitionFunction(\n        acq_function=qExpectedImprovement(model=model, best_f=best_f),\n        d=7,\n        columns=[6],\n        values=[1],\n    )\n\n\ndef optimize_ei_and_get_observation(ei_acqf):\n    """Optimizes EI and returns a new candidate, observation, and cost."""\n\n    candidates, _ = optimize_acqf(\n        acq_function=ei_acqf,\n        bounds=bounds[:, :-1],\n        q=4,\n        num_restarts=NUM_RESTARTS,\n        raw_samples=RAW_SAMPLES,\n        options={"batch_limit": 5, "maxiter": 200},\n    )\n\n    # add the fidelity parameter\n    candidates = ei_acqf._construct_X_full(candidates)\n\n    # observe new values\n    cost = cost_model(candidates).sum()\n    new_x = candidates.detach()\n    new_obj = problem(new_x).unsqueeze(-1)\n    print(f"candidates:\\n{new_x}\\n")\n    print(f"observations:\\n{new_obj}\\n\\n")\n    return new_x, new_obj, cost\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"cumulative_cost = 0.0\n\ntrain_x, train_obj = generate_initial_data(n=16)\n\nfor _ in range(N_ITER):\n    mll, model = initialize_model(train_x, train_obj)\n    fit_gpytorch_mll(mll)\n    ei_acqf = get_ei(model, best_f=train_obj.max())\n    new_x, new_obj, cost = optimize_ei_and_get_observation(ei_acqf)\n    train_x = torch.cat([train_x, new_x])\n    train_obj = torch.cat([train_obj, new_obj])\n    cumulative_cost += cost\n"})}),"\n",(0,a.jsx)(l.A,{children:"candidates:\ntensor([[0.284, 0.692, 0.351, 0.840, 0.487, 0.058, 1.000],\n      [0.571, 0.227, 0.556, 0.254, 0.208, 0.771, 1.000],\n      [0.475, 0.811, 0.448, 0.853, 0.403, 0.000, 1.000],\n      [0.625, 0.141, 0.299, 0.163, 0.171, 0.854, 1.000]],\n     dtype=torch.float64)\nobservations:\ntensor([[0.895],\n      [1.644],\n      [1.248],\n      [0.905]], dtype=torch.float64)\ncandidates:\ntensor([[0.580, 0.206, 0.677, 0.320, 0.163, 0.809, 1.000],\n      [0.538, 0.242, 0.613, 0.248, 0.152, 0.667, 1.000],\n      [0.453, 0.231, 0.634, 0.252, 0.290, 0.771, 1.000],\n      [0.619, 0.325, 0.576, 0.301, 0.226, 0.767, 1.000]],\n     dtype=torch.float64)\nobservations:\ntensor([[1.357],\n      [1.445],\n      [2.271],\n      [1.486]], dtype=torch.float64)\ncandidates:\ntensor([[0.416, 0.189, 0.617, 0.265, 0.331, 0.728, 1.000],\n      [0.757, 0.521, 0.077, 0.687, 0.779, 0.473, 1.000],\n      [0.416, 0.243, 0.699, 0.191, 0.315, 0.793, 1.000],\n      [0.753, 0.544, 0.275, 0.703, 0.266, 0.637, 1.000]],\n     dtype=torch.float64)\nobservations:\ntensor([[2.547],\n      [0.010],\n      [2.088],\n      [0.134]], dtype=torch.float64)\ncandidates:\ntensor([[0.057, 0.684, 1.000, 0.133, 0.647, 0.573, 1.000],\n      [0.339, 0.169, 0.558, 0.284, 0.349, 0.719, 1.000],\n      [0.430, 0.141, 0.663, 0.284, 0.367, 0.703, 1.000],\n      [0.734, 0.006, 0.873, 0.563, 0.275, 0.925, 1.000]],\n     dtype=torch.float64)\nobservations:\ntensor([[0.065],\n      [2.879],\n      [2.321],\n      [0.384]], dtype=torch.float64)\ncandidates:\ntensor([[0.286, 0.174, 0.514, 0.281, 0.354, 0.746, 1.000],\n      [0.388, 0.494, 0.511, 0.892, 0.814, 0.650, 1.000],\n      [0.311, 0.700, 0.253, 0.139, 0.203, 0.086, 1.000],\n      [0.323, 0.109, 0.950, 0.702, 0.221, 0.896, 1.000]],\n     dtype=torch.float64)\nobservations:\ntensor([[2.944],\n      [0.026],\n      [0.350],\n      [0.451]], dtype=torch.float64)\ncandidates:\ntensor([[0.694, 0.341, 0.325, 0.928, 0.077, 0.603, 1.000],\n      [0.758, 0.194, 0.803, 0.440, 0.016, 0.814, 1.000],\n      [0.252, 0.168, 0.529, 0.280, 0.329, 0.698, 1.000],\n      [0.438, 0.572, 0.395, 0.611, 0.429, 0.559, 1.000]],\n     dtype=torch.float64)\nobservations:\ntensor([[0.011],\n      [0.574],\n      [3.203],\n      [0.413]], dtype=torch.float64)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'final_rec = get_recommendation(model)\nprint(f"\\ntotal cost: {cumulative_cost}\\n")\n'})}),"\n",(0,a.jsx)(l.A,{children:"recommended point:\ntensor([[0.288, 0.175, 0.520, 0.283, 0.351, 0.735, 1.000]],\n     dtype=torch.float64)\nobjective value:\ntensor([2.990], dtype=torch.float64)\ntotal cost: 144.0"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1023:(e,n,s)=>{s.d(n,{A:()=>p});s(6540);var t,a=new Uint8Array(16);function i(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(a)}const r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const l=function(e){return"string"==typeof e&&r.test(e)};for(var o=[],c=0;c<256;++c)o.push((c+256).toString(16).substr(1));const m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=(o[e[n+0]]+o[e[n+1]]+o[e[n+2]]+o[e[n+3]]+"-"+o[e[n+4]]+o[e[n+5]]+"-"+o[e[n+6]]+o[e[n+7]]+"-"+o[e[n+8]]+o[e[n+9]]+"-"+o[e[n+10]]+o[e[n+11]]+o[e[n+12]]+o[e[n+13]]+o[e[n+14]]+o[e[n+15]]).toLowerCase();if(!l(s))throw TypeError("Stringified UUID is invalid");return s};const d=function(e,n,s){var t=(e=e||{}).random||(e.rng||i)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,n){s=s||0;for(var a=0;a<16;++a)n[s+a]=t[a];return n}return m(t)};var h=s(4848);const p=function(e){return(0,h.jsxs)("div",{style:{backgroundColor:"var(--ifm-pre-background)",marginBottom:"10px",borderRadius:"var(--ifm-global-radius)",overflow:"hidden",padding:"5px",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace)"},children:[(0,h.jsx)("span",{style:{color:"red"},children:"Out: "}),(0,h.jsx)("pre",{style:{margin:"0px",backgroundColor:"inherit",padding:"8px"},children:e.children.split("\n").map((function(e){return(0,h.jsx)("p",{style:{marginBottom:"0px"},children:e},d())}))})]})}},8987:(e,n,s)=>{s.d(n,{A:()=>r});s(6540);var t=s(8774),a=s(3186),i=s(4848);const r=function(e){var n=e.githubUrl,s=e.colabUrl;return(0,i.jsxs)("div",{className:"margin-top--sm margin-bottom--lg",children:[(0,i.jsxs)(t.A,{to:n,className:"button button--outline button--primary margin-right--xs",children:["Open in GitHub",(0,i.jsx)(a.A,{})]}),(0,i.jsxs)(t.A,{to:s,className:"button button--outline button--primary margin--xs",children:["Run in Google Colab",(0,i.jsx)(a.A,{})]})]})}},290:(e,n,s)=>{s(6540),s(3259),s(2303),s(4848)},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(6540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);