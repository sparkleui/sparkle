var P=Object.defineProperty;var q=(e,t,i)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var d=(e,t,i)=>(q(e,typeof t!="symbol"?t+"":t,i),i),D=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};var k=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};var u=(e,t,i)=>(D(e,t,"access private method"),i);(function(e,t){typeof exports=="object"&&typeof module<"u"?t(require("jquery"),require("@splidejs/splide")):typeof define=="function"&&define.amd?define(["jquery","@splidejs/splide"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.$,e.Splide))})(this,function(e,t){var a,f;"use strict";const i="",T={activeClass:"is-active",navOpenClass:"nav-open",parentClass:"is-parent"},_=768;function h(){return window.innerWidth<_}const{activeClass:r,navOpenClass:m,parentClass:w}=T,g=e("html");function v(){g.removeClass(m),e(`.navbar__item.${r}`).removeClass(r)}function y(n){if(!h())return;const s=e(n.currentTarget),o=s.attr("class"),b=/link/.test(o),p=/toggle/.test(o);if(b){const C=s.parent(),A=s.attr("href");C.hasClass(w)&&A==="#"?C.toggleClass(r):v()}p&&(n.preventDefault(),n.stopPropagation(),s.closest(".navbar__item").toggleClass(r))}e(".header__hamburger").on("click",()=>{g.toggleClass(m)}),e(window).on("resize",()=>{h()||v()}),e(".navbar__link, .navbar__toggle").on("click",n=>{y(n)}),e('a[href="#"]').on("click",n=>{n.preventDefault()});const O="data-parallax",S={scrollSpeed:2},c=class{constructor(s,o={}){k(this,a);this.element=s,this.options={...c.options,...o,...JSON.parse(this.element.getAttribute(O))||{}}}mount(){u(this,a,f).call(this),window.addEventListener("scroll",()=>{u(this,a,f).call(this)})}};let l=c;a=new WeakSet,f=function(){const s=window.scrollY,o=this.element.offsetTop,p=`50% ${-((s-o)/this.options.scrollSpeed)}px`;this.element.style.backgroundPosition=p},d(l,"element"),d(l,"options",S);function x(n){new l(n).mount()}e(".parallax").each((n,s)=>{x(s)});function j(n){new t(n).mount()}e(".splide").each((n,s)=>{j(s)})});