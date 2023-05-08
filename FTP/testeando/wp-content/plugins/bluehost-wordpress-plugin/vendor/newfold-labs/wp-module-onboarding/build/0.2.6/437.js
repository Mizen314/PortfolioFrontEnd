"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[437],{5791:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(9307),r=(t(5609),t(4184)),i=t.n(r),s=t(5158),o=t(6974),d=t(2200),c=t(6989),l=t.n(c),m=t(4704),u=e=>{let{className:n="nfd-onboarding-layout__base",children:t}=e;const r=(0,o.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,s.speak)(n,"assertive")}(r,"Override"),new class{constructor(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=n}send(){l()({url:(0,m.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${d.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,a.createElement)("div",{className:i()("nfd-onboarding-layout",n)},t)};const v=e=>{let{children:n}=e;return(0,a.createElement)("section",{className:"is-contained"},n)};var g=e=>{let{className:n="",children:t,isBgPrimary:r=!1,isCentered:s=!1,isVerticallyCentered:o=!1,isContained:d=!1,isPadded:c=!1,isFadeIn:l=!0}=e;const m=d?v:a.Fragment;return(0,a.createElement)(u,{className:i()("nfd-onboarding-layout__common",n,{"is-layout-fade-in":l},{"is-bg-primary":r},{"is-centered":s},{"is-vertically-centered":o},{"is-padded":c})},(0,a.createElement)(m,null,t))}},1228:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(9307),r=t(4184),i=t.n(r),s=e=>{let{summary:n,className:t,children:r,isOpen:s=!1}=e;return(0,a.createElement)("details",{className:i()("nfd-onboarding-accordion",t),open:s},(0,a.createElement)("summary",{className:"nfd-onboarding-accordion__summary"},n),(0,a.createElement)("div",{className:"nfd-onboarding-accordion__content"},r))},o=t(1984),d=t(5736),c=t(9685),l=t(6974),m=t(9818),u=()=>{const e=(0,l.TH)(),{currentStep:n}=(0,m.useSelect)((e=>({currentStep:e(c.h).getCurrentStep()})),[e.pathname]);return(0,a.createElement)("div",{className:"nfd-onboarding-overview"},(0,a.createElement)("div",{className:"nfd-onboarding-overview__header"},(0,a.createElement)("div",{className:"nfd-onboarding-overview__header-icon"},(0,a.createElement)(o.Z,{icon:n.Icon,size:64,style:{fill:"var(--nfd-onboarding-primary)"}})),(0,a.createElement)("div",null,(0,a.createElement)("h2",{className:"nfd-onboarding-overview__header-heading"},n.heading),(0,a.createElement)("strong",{className:"nfd-onboarding-overview__header-subheading"},n.subheading))),(0,a.createElement)("br",null),(0,a.createElement)(s,{summary:(0,d.__)("Learn More","wp-module-onboarding")},(0,a.createElement)("p",null,n.description)))}},3437:function(e,n,t){t.r(n);var a=t(9307),r=t(5791),i=t(1228),s=t(2200),o=t(9685),d=t(9818),c=t(4333);n.default=()=>{const e=(0,c.useViewportMatch)("medium"),{setDrawerActiveView:n,setIsDrawerOpened:t,setIsSidebarOpened:l}=(0,d.useDispatch)(o.h);return(0,a.useEffect)((()=>{e||t(!1),l(!1),n(s.tM)}),[]),(0,a.createElement)(r.Z,{isCentered:!0},(0,a.createElement)(i.Z,null))}}}]);