"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[669],{1211:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(9307),r=n(6974),s=n(9818),d=n(9685),l=e=>{let{text:t,handleClick:n,disabled:r,className:s}=e;return(0,a.createElement)("button",{type:"button",className:`${s} nfd-card-button`,onClick:()=>{n()},disabled:r},t)},c=e=>{let{text:t,disabled:n}=e;const c=(0,r.s0)(),o=(0,r.TH)(),{nextStep:i}=(0,s.useSelect)((e=>({nextStep:e(d.h).getNextStep()})),[o.path]);return(0,a.createElement)(l,{className:"nfd-nav-card-button",text:t,handleClick:()=>{c(i.path)},disabled:n})}},9519:function(e,t,n){var a=n(9307);n(9196),t.Z=e=>{let{heading:t,subHeading:n,question:r}=e;return(0,a.createElement)("div",null,t&&(0,a.createElement)("h2",{className:"nfd-step-card-heading"},t),n&&(0,a.createElement)("h3",{className:r?"nfd-step-card-subheading-other":"nfd-step-card-subheading"},n),r&&(0,a.createElement)("h3",{className:"nfd-step-card-question"},r))}},5791:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(9307),r=(n(5609),n(4184)),s=n.n(r),d=n(5158),l=n(6974),c=n(2200),o=n(6989),i=n.n(o),u=n(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:n}=e;const r=(0,l.TH)(),o=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==o||o.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,d.speak)(t,"assertive")}(r,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){i()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${c.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,a.createElement)("div",{className:s()("nfd-onboarding-layout",t)},n)};const p=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)};var g=e=>{let{className:t="",children:n,isBgPrimary:r=!1,isCentered:d=!1,isVerticallyCentered:l=!1,isContained:c=!1,isPadded:o=!1,isFadeIn:i=!0}=e;const u=c?p:a.Fragment;return(0,a.createElement)(m,{className:s()("nfd-onboarding-layout__common",t,{"is-layout-fade-in":i},{"is-bg-primary":r},{"is-centered":d},{"is-vertically-centered":l},{"is-padded":o})},(0,a.createElement)(u,null,n))}},950:function(e,t,n){var a=n(9307),r=n(9685),s=n(9818),d=n(5736);t.Z=e=>{let{question:t=(0,d.__)("Need Help?","wp-module-onboarding"),urlLabel:n=(0,d.__)("Hire our Experts","wp-module-onboarding")}=e;const l=(0,s.select)(r.h).getHireExpertsUrl();return(0,a.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,a.createElement)("a",{href:l,target:"_blank"},n))}},349:function(e,t,n){var a=n(9307),r=(n(5736),n(4184)),s=n.n(r);t.Z=e=>{let{className:t="",children:n}=e;return(0,a.createElement)("div",{className:s()("nfd-onboarding-large-card",t)},n)}},5669:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(9307),r=n(5791),s=n(349),d=n(9519),l=n(1211),c=n(950),o=n(2200),i=n(9685),u=JSON.parse('{"bm":"ABOUT YOU","q5":"Continue Setup","YM":[{"content":"Never used it","value":"1"},{"content":"Used it some","value":"3"},{"content":"I\'m an expert","value":"5"}]}'),m=n(5609),p=n(9818),g=n(5736),b=()=>{const[e,t]=(0,a.useState)(!1),[n,b]=(0,a.useState)("0"),{setCurrentOnboardingData:f}=(0,p.useDispatch)(i.h),{currentData:h,currentStep:v}=(0,p.useSelect)((e=>({currentData:e(i.h).getCurrentOnboardingData(),currentStep:e(i.h).getCurrentStep()})),[]),{setDrawerActiveView:E,setIsSidebarOpened:w,setIsDrawerSuppressed:S}=(0,p.useDispatch)(i.h);return(0,a.useEffect)((()=>{w(!1),S(!0),E(o.mz)}),[]),(0,a.useEffect)((()=>{e||async function(){b(h.data.wpComfortLevel),t(!0)}()}),[e]),(0,a.useEffect)((()=>{e&&(async()=>{const e=h;e.data.wpComfortLevel=n||"0",f(e)})()}),[n]),(0,a.createElement)(r.Z,{isBgPrimary:!0,isCentered:!0},(0,a.createElement)(s.Z,null,(0,a.createElement)("div",{className:"nfd-onboarding-experience-step"},(0,a.createElement)("div",{className:"nfd-card-heading center"},(0,a.createElement)(d.Z,{heading:v.heading,subHeading:(0,g.__)(u.bm,"wp-module-onboarding"),question:v.subheading})),(0,a.createElement)(m.RadioControl,{className:"nfd-onboarding-experience-step-tabs components-radio-control__input",selected:n,options:u.YM.map((e=>({label:(0,g.__)(e.content,"wp-module-onboarding"),value:(0,g.__)(e.value,"wp-module-onboarding")}))),onChange:e=>b(e)}),(0,a.createElement)(l.Z,{text:(0,g.__)(u.q5,"wp-module-onboarding"),disabled:"0"==n}),(0,a.createElement)(c.Z,null))))}}}]);