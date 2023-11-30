import{d as m,o as h,g as l,e as k,n as u,p,t as F,j as C,G as y,H as D,_ as A,K as i,a as E,$ as x,q as f,s as T,f as B,R as t}from"./chunks/framework.GPHOtqnM.js";import{B as v}from"./chunks/Button.tfnKPPxM.js";const $=["for"],S=["type","id","name","disabled","checked","required"],P=["for"],I=["type","id","placeholder","disabled","required"],V=["id","disabled","required","multiple"],w=["value"],R=["type","id","placeholder","disabled","required"],N=m({__name:"FormField",props:{label:{},type:{},id:{},name:{},placeholder:{},options:{},isDisabled:{type:Boolean},isChecked:{type:Boolean},isRequired:{type:Boolean},isMultiple:{type:Boolean}},setup(e){const s=e,d=s.label||`This is an example of ${s.type} input`,g=s.isRequired?"is-required":"",r=s.id||`${s.type}-example`,c=s.placeholder||`Input ${s.type}`,_=s.options||new Array(4).fill("This is an example of option");return(Ms,js)=>["checkbox","radio"].includes(s.type)?(h(),l(y,{key:0},[k(d)?(h(),l("label",{key:0,for:k(r),class:u(k(g))},[p("input",{type:s.type,id:k(r),name:s.type==="radio"?`${s.type}-example`:"",disabled:s.isDisabled,checked:s.isChecked,required:s.isRequired},null,8,S),p("span",null,F(k(d)),1)],10,$)):C("",!0)],64)):(h(),l(y,{key:1},[k(d)?(h(),l("label",{key:0,for:k(r),class:u(k(g))},F(k(d)),11,P)):C("",!0),s.type==="textarea"?(h(),l("textarea",{key:1,type:s.type,id:k(r),placeholder:k(c),disabled:s.isDisabled,required:s.isRequired},null,8,I)):s.type==="select"?(h(),l("select",{key:2,id:k(r),disabled:s.isDisabled,required:s.isRequired,multiple:s.isMultiple},[(h(!0),l(y,null,D(k(_),(b,q)=>(h(),l("option",{value:q},F(b),9,w))),256))],8,V)):(h(),l("input",{key:3,type:s.type,id:k(r),placeholder:k(c),disabled:s.isDisabled,required:s.isRequired},null,8,R))],64))}}),n=A(N,[["__scopeId","data-v-9e513b4d"]]),o=e=>(f("data-v-e0429057"),e=e(),T(),e),z={class:"docs-example"},L={class:"grid mb-3"},M={class:"col-md-6 mb-3 mb-md-0"},j={class:"col-md-6"},O={key:1},U={key:5,class:"buttons"},W=o(()=>p("button",{type:"button"},"Button",-1)),G=o(()=>p("button",{type:"reset"},"Reset",-1)),H=o(()=>p("button",{type:"submit"},"Submit",-1)),J=[W,G,H],K={key:6,max:"100",value:"50"},Q={key:7},X={key:8},Y=o(()=>p("legend",null,"This is an example of legend",-1)),Z=[Y],ss={key:10},is={key:11},as={key:14},ts={key:15},hs=m({__name:"FormsView",props:{example:{}},setup(e){const s=e;return(d,g)=>(h(),l("div",z,[p("form",{onSubmit:g[0]||(g[0]=x(()=>{},["prevent"]))},[s.example==="example"?(h(),l(y,{key:0},[p("div",L,[p("div",M,[i(n,{label:"Name",id:"name",type:"text",placeholder:"First name"})]),p("div",j,[i(n,{label:"Last name",id:"last-name",type:"text",placeholder:"Last name"})])]),i(n,{label:"Email address",id:"email",type:"text",placeholder:"Email address"}),p("fieldset",null,[i(n,{label:"I agree to the Terms and Conditions",id:"terms-conditions",type:"checkbox",isRequired:!0})]),i(v,{text:"Submit",type:"primary",color:"primary"})],64)):["checkbox","radio"].includes(s.example)?(h(),l("fieldset",O,[i(n,{type:s.example},null,8,["type"]),i(n,{label:`This is an example of ${s.example} checked input`,id:`${s.example}-checked-example`,type:s.example,isChecked:!0},null,8,["label","id","type"])])):s.example==="textarea"?(h(),E(n,{key:2,type:s.example,label:`This is an example of ${s.example}`,placeholder:"Textarea"},null,8,["type","label"])):s.example==="select"?(h(),E(n,{key:3,type:s.example,label:`This is an example of ${s.example}`},null,8,["type","label"])):s.example==="select-multiple"?(h(),E(n,{key:4,label:"This is an example of multiple select",id:`${s.example}-example`,type:"select",isChecked:!0,isMultiple:!0},null,8,["id"])):s.example==="buttons"?(h(),l("div",U,J)):s.example==="progress"?(h(),l("progress",K)):s.example==="progress-indeterminate"?(h(),l("progress",Q)):s.example==="legend"?(h(),l("fieldset",X,Z)):s.example==="disabled"?(h(),E(n,{key:9,label:"This is an example of disabled text input",id:"text-disabled-example",type:"text",isDisabled:!0})):s.example==="disabled-checkbox"?(h(),l("fieldset",ss,[i(n,{label:"This is an example of disabled checkbox input",id:"checkbox-disabled-example",type:"checkbox",isDisabled:!0})])):s.example==="disabled-radio"?(h(),l("fieldset",is,[i(n,{label:"This is an example of disabled radio input",id:"radio-disabled-example",type:"radio",isDisabled:!0})])):s.example==="disabled-select"?(h(),E(n,{key:12,label:"This is an example of disabled select",id:"select-disabled-example",type:"select",isDisabled:!0})):s.example==="required"?(h(),E(n,{key:13,label:"This is an example of required text input",id:"text-required-example",type:"text",isRequired:!0})):s.example==="required-checkbox"?(h(),l("fieldset",as,[i(n,{label:"This is an example of required checkbox input",id:"checkbox-required-example",type:"checkbox",isRequired:!0})])):s.example==="required-radio"?(h(),l("fieldset",ts,[i(n,{label:"This is an example of required radio input",id:"radio-required-example",type:"radio",isRequired:!0})])):s.example==="required-select"?(h(),E(n,{key:16,label:"This is an example of required select",id:"select-required-example",type:"select",isRequired:!0})):(h(),E(n,{key:17,type:s.example},null,8,["type"]))],32)]))}}),a=A(hs,[["__scopeId","data-v-e0429057"]]),ls=p("h1",{id:"forms",tabindex:"-1"},[B("Forms "),p("a",{class:"header-anchor",href:"#forms","aria-label":'Permalink to "Forms"'},"​")],-1),ns=p("h2",{id:"example",tabindex:"-1"},[B("Example "),p("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),ks=t("",3),ps=t("",2),es=t("",2),Es=t("",2),ds=t("",2),rs=t("",2),gs=t("",2),ys=t("",2),os=t("",2),Fs=t("",2),cs=t("",2),us=t("",2),Cs=t("",2),ms=t("",2),As=t("",2),Bs=t("",2),_s=t("",2),bs=t("",2),qs=t("",2),Ds=t("",2),xs=t("",2),fs=t("",2),Ts=t("",2),vs=t("",2),$s=t("",3),Ss=t("",1),Ps=t("",1),Is=t("",2),Vs=t("",3),ws=t("",1),Rs=t("",1),Ns=t("",2),zs=t("",4),Ws=JSON.parse('{"title":"Forms","description":"","frontmatter":{},"headers":[],"relativePath":"docs/elements/forms.md","filePath":"docs/elements/forms.md"}'),Ls={name:"docs/elements/forms.md"},Gs=Object.assign(Ls,{setup(e){return(s,d)=>(h(),l("div",null,[ls,ns,i(a,{example:"example"}),ks,i(a,{example:"text"}),ps,i(a,{example:"email"}),es,i(a,{example:"password"}),Es,i(a,{example:"search"}),ds,i(a,{example:"telephone"}),rs,i(a,{example:"url"}),gs,i(a,{example:"number"}),ys,i(a,{example:"date"}),os,i(a,{example:"datetime-local"}),Fs,i(a,{example:"week"}),cs,i(a,{example:"month"}),us,i(a,{example:"time"}),Cs,i(a,{example:"checkbox"}),ms,i(a,{example:"radio"}),As,i(a,{example:"color"}),Bs,i(a,{example:"file"}),_s,i(a,{example:"range"}),bs,i(a,{example:"textarea"}),qs,i(a,{example:"select"}),Ds,i(a,{example:"select-multiple"}),xs,i(a,{example:"buttons"}),fs,i(a,{example:"progress"}),Ts,i(a,{example:"progress-indeterminate"}),vs,i(a,{example:"legend"}),$s,i(a,{example:"disabled"}),Ss,i(a,{example:"disabled-checkbox"}),Ps,i(a,{example:"disabled-radio"}),Is,i(a,{example:"disabled-select"}),Vs,i(a,{example:"required"}),ws,i(a,{example:"required-checkbox"}),Rs,i(a,{example:"required-radio"}),Ns,i(a,{example:"required-select"}),zs]))}});export{Ws as __pageData,Gs as default};
