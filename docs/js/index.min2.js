import{i as Rf,d as Kg,s as $g,a as Cf,g as jg,u as Zg}from"./common.min.js";document.addEventListener("DOMContentLoaded",()=>{if(Rf.iOS()){const r=document.querySelectorAll("[data-fls-videoplay]");if(r.length>0){Object.defineProperty(HTMLMediaElement.prototype,"playing",{get:function(){return this.currentTime>0&&!this.paused&&!this.ended&&this.readyState>2}}),r.forEach(n=>{n.hasAttribute("playsinline")||n.setAttribute("playsinline","")});const e=n=>{n.playing||n.play().catch(i=>console.error("Failed to play video:",i))},t=()=>{r.forEach(n=>e(n))};document.body.addEventListener("click",t,{passive:!0}),document.body.addEventListener("touchstart",t,{passive:!0})}}});function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Pf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ws={duration:.5,overwrite:!1,delay:0},uc,fn,Nt,ci=1e8,Rt=1/ci,hc=Math.PI*2,Jg=hc/4,Qg=0,Lf=Math.sqrt,e_=Math.cos,t_=Math.sin,on=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},fc=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},Bn=function(e){return e!==!1},dc=function(){return typeof window<"u"},Da=function(e){return zt(e)||on(e)},Df=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,pc=/(?:-?\.?\d|\.)+/gi,If=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nf=/[+-]=-?[.\d]+/,Uf=/[^,'"\[\]\s]+/gi,n_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Di,gc,_c,$n={},Ia={},Of,Ff=function(e){return(Ia=Cs(e,$n))&&Vn},vc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ro=function(e,t){return!t&&console.warn(e)},Bf=function(e,t){return e&&($n[e]=t)&&Ia&&(Ia[e]=t)||$n},Co=function(){return 0},i_={suppressEvents:!0,isStart:!0,kill:!1},Na={suppressEvents:!0,kill:!1},r_={suppressEvents:!0},Sc={},xr=[],xc={},kf,jn={},yc={},zf=30,Ua=[],Mc="",Tc=function(e){var t=e[0],n,i;if(Li(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ua.length;i--&&!Ua[i].targetTest(t););n=Ua[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new md(e[i],n)))||e.splice(i,1);return e},Xr=function(e){return e._gsap||Tc(hi(e))[0]._gsap},Vf=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():fc(n)&&e.getAttribute&&e.getAttribute(t)||n},kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},Rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},s_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Oa=function(){var e=xr.length,t=xr.slice(0),n,i;for(xc={},xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ec=function(e){return!!(e._initted||e._startAt||e.add)},Hf=function(e,t,n,i){xr.length&&!fn&&Oa(),e.render(t,n,!!(fn&&t<0&&Ec(e))),xr.length&&!fn&&Oa()},Gf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Uf).length<2?t:on(e)?e.trim():e},Wf=function(e){return e},Zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},o_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Cs=function(e,t){for(var n in t)e[n]=t[n];return e},Xf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Li(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Fa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Po=function(e){var t=e.parent||Ut,n=e.keyframes?o_(mn(e.keyframes)):Zn;if(Bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},a_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},qf=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ba=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},l_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bc=function(e,t,n,i){return e._startAt&&(fn?e._startAt.revert(Na):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},c_=function r(e){return!e||e._ts&&r(e.parent)},Yf=function(e){return e._repeat?Ps(e._tTime,e=e.duration()+e._rDelay)*e:0},Ps=function(e,t){var n=Math.floor(e=Xt(e/t));return e&&n===e?n-1:n},ka=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},za=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},Va=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),za(e),n._dirty||qr(n,e)),e},Kf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ka(e.rawTime(),t),(!t._dur||Do(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Rt}},Ii=function(e,t,n,i){return t.parent&&yr(t),t._start=Xt((er(n)?n:n||e!==Ut?ui(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qf(e,t,"_first","_last",e._sort?"_start":0),wc(t)||(e._recent=t),i||Kf(e,t),e._ts<0&&Va(e,e._tTime),e},$f=function(e,t){return($n.ScrollTrigger||vc("scrollTrigger",t))&&$n.ScrollTrigger.create(t,e)},jf=function(e,t,n,i,s){if(Uc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!fn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&kf!==Qn.frame)return xr.push(e),e._lazy=[s,i],1},u_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},wc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},h_=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&u_(e)&&!(!e._initted&&wc(e))||(e._ts<0||e._dp._ts<0)&&!wc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Do(0,e._tDur,t),u=Ps(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ps(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||fn||i||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&jf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&bc(e,t,n,!0),e._onUpdate&&!n&&Jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&yr(e,1),!n&&!fn&&(Jn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},f_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ls=function(e,t,n,i){var s=e._repeat,o=Xt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Xt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Va(e,e._tTime=e._tDur*a),e.parent&&za(e),n||qr(e.parent,e),e},Zf=function(e){return e instanceof Tn?qr(e):Ls(e,e._dur)},d_={_start:0,endTime:Co,totalDuration:Co},ui=function r(e,t,n){var i=e.labels,s=e._recent||d_,o=e.duration()>=ci?s.endTime(!1):e._dur,a,l,c;return on(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(mn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Lo=function(e,t,n){var i=er(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Bn(l.vars.inherit)&&l.parent;o.immediateRender=Bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},Mr=function(e,t){return e||e===0?t(e):t},Do=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!on(e)||!(t=n_.exec(e))?"":t[1]},p_=function(e,t,n){return Mr(n,function(i){return Do(e,t,i)})},Ac=[].slice,Jf=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==Di},m_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return on(i)&&!t||Jf(i,1)?(s=n).push.apply(s,hi(i)):n.push(i)})||n},hi=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):on(e)&&!n&&(gc||!Is())?Ac.call((t||_c).querySelectorAll(e),0):mn(e)?m_(e,n):Jf(e)?Ac.call(e,0):e?[e]:[]},Rc=function(e){return e=hi(e)[0]||Ro("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hi(t,n.querySelectorAll?n:n===e?Ro("Invalid scope")||_c.createElement("div"):e)}},Qf=function(e){return e.sort(function(){return .5-Math.random()})},ed=function(e){if(zt(e))return e;var t=Li(e)?e:{each:e},n=Yr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return on(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,p=o[_],m,x,y,S,T,A,b,C,v;if(!p){if(v=t.grid==="auto"?0:(t.grid||[1,ci])[1],!v){for(b=-ci;b<(b=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(p=o[_]=[],m=l?Math.min(v,_)*u-.5:i%v,x=v===ci?0:l?_*h/v-.5:i/v|0,b=0,C=ci,A=0;A<_;A++)y=A%v-m,S=x-(A/v|0),p[A]=T=c?Math.abs(c==="y"?S:y):Lf(y*y+S*S),T>b&&(b=T),T<C&&(C=T);i==="random"&&Qf(p),p.max=b-C,p.min=C,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=gn(t.amount||t.each)||0,n=n&&_<0?fd(n):n}return _=(p[f]-p.min)/p.max||0,Xt(p.b+(n?n(_):_)*p.v)+p.u}},Cc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(er(n)?0:gn(n))}},td=function(e,t){var n=mn(e),i,s;return!n&&Li(e)&&(i=n=e.radius||ci,e.values?(e=hi(e.values),(s=!er(e[0]))&&(i*=i)):e=Cc(e.increment)),Mr(t,n?zt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ci,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||er(o)?u:u+gn(o)}:Cc(e))},nd=function(e,t,n,i){return Mr(mn(e)?!t:n===!0?!!(n=0):!i,function(){return mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},g_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},__=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},v_=function(e,t,n){return rd(e,t,0,1,n)},id=function(e,t,n){return Mr(n,function(i){return e[~~t(i)]})},S_=function r(e,t,n){var i=t-e;return mn(e)?id(e,r(0,e.length),t):Mr(n,function(s){return(i+(s-e)%i)%i+e})},x_=function r(e,t,n){var i=t-e,s=i*2;return mn(e)?id(e,r(0,e.length-1),t):Mr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Io=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Uf:pc),n+=e.substr(t,i-t)+nd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},rd=function(e,t,n,i,s){var o=t-e,a=i-n;return Mr(s,function(l){return n+((l-e)/o*a||0)})},y_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=on(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(mn(e)&&!mn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Cs(mn(e)?[]:{},e));if(!u){for(l in t)Ic.call(a,e,l,"get",t[l]);s=function(g){return Bc(g,a)||(o?e.p:e)}}}return Mr(n,s)},sd=function(e,t,n){var i=e.labels,s=ci,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Jn=function(e,t,n){var i=e.vars,s=i[t],o=Nt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&xr.length&&Oa(),a&&(Nt=a),u=l?s.apply(c,l):s.call(c),Nt=o,u},No=function(e){return yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fn),e.progress()<1&&Jn(e,"onInterrupt"),e},Ds,od=[],ad=function(e){if(e)if(e=!e.name&&e.default||e,dc()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Co,render:Bc,add:Ic,kill:F_,modifier:O_,rawVars:0},o={targetTest:0,get:0,getSetter:Fc,aliases:{},register:0};if(Is(),e!==i){if(jn[t])return;Zn(i,Zn(Fa(e,s),o)),Cs(i.prototype,Cs(s,Fa(e,o))),jn[i.prop=t]=i,e.targetTest&&(Ua.push(i),Sc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Bf(t,i),e.register&&e.register(Vn,i,zn)}else od.push(e)},Ct=255,Uo={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Pc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},ld=function(e,t,n){var i=e?er(e)?[e>>16,e>>8&Ct,e&Ct]:0:Uo.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Uo[e])i=Uo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(pc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Pc(l+1/3,s,o),i[1]=Pc(l,s,o),i[2]=Pc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(If),n&&i.length<4&&(i[3]=1),i}else i=e.match(pc)||Uo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ct,o=i[1]/Ct,a=i[2]/Ct,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},cd=function(e){var t=[],n=[],i=-1;return e.split(Tr).forEach(function(s){var o=s.match(As)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ud=function(e,t,n){var i="",s=(e+i).match(Tr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=ld(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=cd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Tr,"1").split(As),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Tr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Tr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Uo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),M_=/hsl[a]?\(/,hd=function(e){var t=e.join(" "),n;if(Tr.lastIndex=0,Tr.test(t))return n=M_.test(t),e[1]=ud(e[1],n),e[0]=ud(e[0],n,cd(e[1])),!0},Oo,Qn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(p){var m=r()-i,x=p===!0,y,S,T,A;if((m>e||m<0)&&(n+=m-t),i+=m,T=i-n,y=T-o,(y>0||x)&&(A=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=y+(y>=s?4:s-y),S=1),x||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](T,f,A,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Of&&(!gc&&dc()&&(Di=gc=window,_c=Di.document||{},$n.gsap=Vn,(Di.gsapVersions||(Di.gsapVersions=[])).push(Vn.version),Ff(Ia||Di.GreenSockGlobals||!Di.gsap&&Di||{}),od.forEach(ad)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Oo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Oo=0,c=Co},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,x){var y=m?function(S,T,A,b){p(S,T,A,b),h.remove(y)}:p;return h.remove(p),a[x?"unshift":"push"](y),Is(),y},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h})(),Is=function(){return!Oo&&Qn.wake()},ht={},T_=/^[\d.\-M][\d.\-,\s]/,E_=/["']/g,b_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(E_,"").trim():+c,i=l.substr(a+1).trim();return t},w_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},A_=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[b_(t[1])]:w_(e).split(",").map(Gf)):ht._CE&&T_.test(e)?ht._CE("",e):n},fd=function(e){return function(t){return 1-e(1-t)}},dd=function r(e,t){for(var n=e._first,i;n;)n instanceof Tn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Yr=function(e,t){return e&&(zt(e)?e:ht[e]||A_(e))||t},Kr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return kn(e,function(a){ht[a]=$n[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},pd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Lc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/hc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*t_((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:pd(a);return s=hc/s,l.config=function(c,u){return r(e,c,u)},l},Dc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pd(n);return i.config=function(s){return r(e,s)},i};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Kr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),ht.Linear.easeNone=ht.none=ht.Linear.easeIn,Kr("Elastic",Lc("in"),Lc("out"),Lc()),(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Kr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75),Kr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)}),Kr("Circ",function(r){return-(Lf(1-r*r)-1)}),Kr("Sine",function(r){return r===1?1:-e_(r*Jg)+1}),Kr("Back",Dc("in"),Dc("out"),Dc()),ht.SteppedEase=ht.steps=$n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Rt;return function(a){return((i*Do(0,o,a)|0)+s)*n}}},ws.ease=ht["quad.out"],kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Mc+=r+","+r+"Params,"});var md=function(e,t){this.id=Qg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vf,this.set=t?t.getSetter:Fc},Fo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ls(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),Oo||Qn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ls(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Is(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Va(this,n),!s._dp||s.parent||Kf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Rt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ps(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ka(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Rt?0:this._rts,this.totalTime(Do(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),za(this),l_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ii(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ka(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=r_);var i=fn;return fn=n,Ec(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ui(this,n),Bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Bn(i)),this._dur||(this._zTime=-Rt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Rt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=zt(n)?n:Wf,a=function(){var c=i.then;i.then=null,zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){No(this)},r})();Zn(Fo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){Pf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Bn(n.sortChildren),Ut&&Ii(n.parent||Ut,Qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&$f(Qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Lo(0,arguments,this),this},t.from=function(i,s,o){return Lo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Lo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Po(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(i,s,ui(this,o),1),this},t.call=function(i,s,o){return Ii(this,qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new qt(i,o,ui(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Po(o).immediateRender=Bn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Po(a).immediateRender=Bn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Xt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,x,y,S,T,A,b;if(this!==Ut&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,y=this._ts,m=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Xt(u%p),u===l?(_=this._repeat,f=c):(T=Xt(u/p),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=Ps(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),A&&_&1&&(f=c-f,b=1),_!==T&&!this._lock){var C=A&&T&1,v=C===(A&&_&1);if(_<T&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Xt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Jn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;dd(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=f_(this,Xt(a),Xt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!T&&(Jn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){x=0,g&&(u+=this._zTime=-Rt);break}}d=g}else{d=this._last;for(var E=i<0?i:f;d;){if(g=d._prev,(d._act||E<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||fn&&Ec(d)),f!==this._time||!this._ts&&!m){x=0,g&&(u+=this._zTime=E?-Rt:Rt);break}}d=g}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-Rt)._zTime=f>=a?1:-1,this._ts))return this._start=S,za(this),this.render(i,s,o);this._onUpdate&&!s&&Jn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&yr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Jn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(er(s)||(s=ui(this,s,i)),!(i instanceof Fo)){if(mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(on(i))return this.addLabel(i,s);if(zt(i))i=qt.delayedCall(0,i);else return this}return this!==i?Ii(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ci);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return on(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&Ba(this,i),i===this._recent&&(this._recent=this._last),qr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(Qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ui(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=qt.delayedCall(0,s||Co,o);return a.data="isPause",this._hasPause=1,Ii(this,a,ui(this,i))},t.removePause=function(i){var s=this._first;for(i=ui(this,i);s;)s._start===i&&s.data==="isPause"&&yr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Er!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=hi(i),l=this._first,c=er(s),u;l;)l instanceof qt?s_(l._targets,a)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ui(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=qt.to(o,Zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Rt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Ls(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Zn({startAt:{time:ui(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),sd(this,ui(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),sd(this,ui(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return qr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ci,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ii(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ls(o,o===Ut&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ut._ts&&(Hf(Ut,ka(i,Ut)),kf=Qn.frame),Qn.frame>=zf){zf+=Kn.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&Kn.autoSleep&&Qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qn.sleep()}}},e})(Fo);Zn(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var R_=function(e,t,n,i,s,o,a){var l=new zn(this._pt,e,t,0,1,yd,null,s),c=0,u=0,h,f,d,g,_,p,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Io(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),f=n.match(mc)||[];h=mc.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Rs(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=mc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Nf.test(i)||m)&&(l.e=0),this._pt=l,l},Ic=function(e,t,n,i,s,o,a,l,c,u){zt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:zt(h)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=zt(h)?c?I_:Sd:Oc,g;if(on(i)&&(~i.indexOf("random(")&&(i=Io(i)),i.charAt(1)==="="&&(g=Rs(f,i)+(gn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Nc)return!isNaN(f*i)&&i!==""?(g=new zn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?U_:xd,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&vc(t,i),R_.call(this,e,t,f,i,d,l||Kn.stringFilter,c))},C_=function(e,t,n,i,s){if(zt(e)&&(e=Bo(e,s,t,n,i)),!Li(e)||e.style&&e.nodeType||mn(e)||Df(e))return on(e)?Bo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Bo(e[a],s,t,n,i);return o},gd=function(e,t,n,i,s,o){var a,l,c,u;if(jn[e]&&(a=new jn[e]).init(s,a.rawVars?t[e]:C_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new zn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ds))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Er,Nc,Uc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!uc,S=e.timeline,T,A,b,C,v,E,P,I,F,z,X,k,B;if(S&&(!f||!s)&&(s="none"),e._ease=Yr(s,ws.ease),e._yEase=h?fd(Yr(h===!0?s:h,ws.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(I=p[0]?Xr(p[0]).harness:0,k=I&&i[I.prop],T=Fa(i,Sc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Na:i_),_._lazy=0),o){if(yr(e._startAt=qt.set(p,Zn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Bn(l),startAt:null,delay:0,onUpdate:c&&function(){return Jn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn||!a&&!d)&&e._startAt.revert(Na),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=Zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Bn(l),immediateRender:a,stagger:0,parent:m},T),k&&(b[I.prop]=k),yr(e._startAt=qt.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn?e._startAt.revert(Na):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Bn(l)||l&&!g,A=0;A<p.length;A++){if(v=p[A],P=v._gsap||Tc(p)[A]._gsap,e._ptLookup[A]=z={},xc[P.id]&&xr.length&&Oa(),X=x===p?A:x.indexOf(v),I&&(F=new I).init(v,k||T,e,X,x)!==!1&&(e._pt=C=new zn(e._pt,v,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(G){z[G]=C}),F.priority&&(E=1)),!I||k)for(b in T)jn[b]&&(F=gd(b,T,e,X,v,x))?F.priority&&(E=1):z[b]=C=Ic.call(e,v,b,"get",T[b],X,x,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),y&&e._pt&&(Er=e,Ut.killTweensOf(v,z,e.globalTime(t)),B=!e.parent,Er=0),e._pt&&l&&(xc[P.id]=1)}E&&Md(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&S.render(ci,!0,!0)},P_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Nc=1,e.vars[t]="+=0",Uc(e,a),Nc=0,l?Ro(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ht(n)+gn(h.e)),h.b&&(h.b=u.s+gn(h.b))},L_=function(e,t){var n=e[0]?Xr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Cs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},D_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(mn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Bo=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):on(e)&&~e.indexOf("random(")?Io(e):e},_d=Mc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vd={};kn(_d+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vd[r]=1});var qt=(function(r){Pf(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Po(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,x=i.parent||Ut,y=(mn(n)||Df(n)?er(n[0]):"length"in i)?[n]:hi(n),S,T,A,b,C,v,E,P;if(a._targets=y.length?Tc(y):Ro("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Da(c)||Da(u)){if(i=a.vars,S=a.timeline=new Tn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),S.kill(),S.parent=S._dp=Qi(a),S._start=0,f||Da(c)||Da(u)){if(b=y.length,E=f&&ed(f),Li(f))for(C in f)~_d.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(T=0;T<b;T++)A=Fa(i,vd),A.stagger=0,m&&(A.yoyoEase=m),P&&Cs(A,P),v=y[T],A.duration=+Bo(c,Qi(a),T,v,y),A.delay=(+Bo(u,Qi(a),T,v,y)||0)-a._delay,!f&&b===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(v,A,E?E(T,v,y):0),S._ease=ht.none;S.duration()?c=u=0:a.timeline=0}else if(g){Po(Zn(S.vars.defaults,{ease:"none"})),S._ease=Yr(g.ease||i.ease||"none");var I=0,F,z,X;if(mn(g))g.forEach(function(k){return S.to(y,k,">")}),S.duration();else{A={};for(C in g)C==="ease"||C==="easeEach"||D_(C,g[C],A,g.easeEach);for(C in A)for(F=A[C].sort(function(k,B){return k.t-B.t}),I=0,T=0;T<F.length;T++)z=F[T],X={ease:z.e,duration:(z.t-(T?F[T-1].t:0))/100*c},X[C]=z.v,S.to(y,X,I),I+=X.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!uc&&(Er=Qi(a),Ut.killTweensOf(y),Er=0),Ii(x,Qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Xt(x._time)&&Bn(h)&&c_(Qi(a))&&x.data!=="nested")&&(a._tTime=-Rt,a.render(Math.max(0,-u)||0)),p&&$f(Qi(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Rt&&!u?l:i<Rt?0:i,f,d,g,_,p,m,x,y,S;if(!c)h_(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Xt(h%_),h===l?(g=this._repeat,f=c):(p=Xt(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(S=this._yEase,f=c-f),p=Ps(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(y&&this._yEase&&dd(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Xt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(jf(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(f/c),this._from&&(this.ratio=x=1-x),!a&&h&&!s&&!p&&(Jn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&bc(this,i,s,o),Jn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Jn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&bc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&yr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Jn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Oo||Qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Uc(this,c),u=this._ease(c/this._dur),P_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Va(this,0),this.parent||qf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?No(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Er&&Er.vars.overwrite!==!0)._first||No(this),this.parent&&o!==this.timeline.totalDuration()&&Ls(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?hi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!s||s==="all")&&a_(a,l))return s==="all"&&(this._pt=0),No(this);for(h=this._op=this._op||[],s!=="all"&&(on(s)&&(_={},kn(s,function(x){return _[x]=1}),s=_),s=L_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ba(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&No(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Lo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ut.killTweensOf(i,s,o)},e})(Fo);Zn(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),kn("staggerTo,staggerFrom,staggerFromTo",function(r){qt[r]=function(){var e=new Tn,t=Ac.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Oc=function(e,t,n){return e[t]=n},Sd=function(e,t,n){return e[t](n)},I_=function(e,t,n,i){return e[t](i.fp,n)},N_=function(e,t,n){return e.setAttribute(t,n)},Fc=function(e,t){return zt(e[t])?Sd:fc(e[t])&&e.setAttribute?N_:Oc},xd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},U_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Bc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},O_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},F_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ba(this,t,"_pt"):t.dep||(n=1),t=i;return!n},B_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Md=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},zn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||xd,this.d=l||this,this.set=c||Oc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=B_,this.m=n,this.mt=s,this.tween=i},r})();kn(Mc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Sc[r]=1}),$n.TweenMax=$n.TweenLite=qt,$n.TimelineLite=$n.TimelineMax=Tn,Ut=new Tn({sortChildren:!1,defaults:ws,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Kn.stringFilter=hd;var $r=[],Ha={},k_=[],Td=0,z_=0,kc=function(e){return(Ha[e]||k_).map(function(t){return t()})},zc=function(){var e=Date.now(),t=[];e-Td>2&&(kc("matchMediaInit"),$r.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Di.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),kc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Td=e,kc("matchMedia"))},Ed=(function(){function r(t,n){this.selector=n&&Rc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=z_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var o=this,a=function(){var c=Nt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Rc(s)),Nt=o,h=i.apply(o,arguments),zt(h)&&o._r.push(h),Nt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Nt;Nt=null,n(this),Nt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=$r.length;o--;)$r[o].id===this.id&&$r.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),V_=(function(){function r(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Li(n)||(n={matches:n});var o=new Ed(0,s||this.scope),a=o.conditions={},l,c,u;Nt&&!o.selector&&(o.selector=Nt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Di.matchMedia(n[c]),l&&($r.indexOf(o)<0&&$r.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(zc):l.addEventListener("change",zc)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ga={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ad(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){on(e)&&(e=hi(e)[0]);var s=Xr(e||{}).get,o=n?Wf:Gf;return n==="native"&&(n=""),e&&(t?o((jn[t]&&jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((jn[a]&&jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=hi(e),e.length>1){var i=e.map(function(u){return Vn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=jn[t],a=Xr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ds._pt=0,h.init(e,n?u+n:u,Ds,0,[e]),h.render(1,h),Ds._pt&&Bc(1,Ds)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Vn.to(e,Zn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,ws.ease)),Xf(ws,e||{})},config:function(e){return Xf(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!jn[a]&&!$n[a]&&Ro(t+" effect requires "+a+" plugin.")}),yc[t]=function(a,l,c){return n(hi(a),Zn(l||{},s),c)},o&&(Tn.prototype[t]=function(a,l,c){return this.add(yc[t](a,Li(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):ht},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=Bn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&Ii(n,i,i._start-i._delay),i=s;return Ii(Ut,n,0),n},context:function(e,t){return e?new Ed(e,t):Nt},matchMedia:function(e){return new V_(e)},matchMediaRefresh:function(){return $r.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||zc()},addEventListener:function(e,t){var n=Ha[e]||(Ha[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ha[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:S_,wrapYoyo:x_,distribute:ed,random:nd,snap:td,normalize:v_,getUnit:gn,clamp:p_,splitColor:ld,toArray:hi,selector:Rc,mapRange:rd,pipe:g_,unitize:__,interpolate:y_,shuffle:Qf},install:Ff,effects:yc,ticker:Qn,updateRoot:Tn.updateRoot,plugins:jn,globalTimeline:Ut,core:{PropTween:zn,globals:Bf,Tween:qt,Timeline:Tn,Animation:Fo,getCache:Xr,_removeLinkedListItem:Ba,reverting:function(){return fn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return uc=e}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ga[r]=qt[r]}),Qn.add(Tn.updateRoot),Ds=Ga.to({},{duration:0});var H_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},G_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=H_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Vc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(on(s)&&(l={},kn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}G_(a,s)}}}},Vn=Ga.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Vc("roundProps",Cc),Vc("modifiers"),Vc("snap",td))||Ga;qt.version=Tn.version=Vn.version="3.13.0",Of=1,dc()&&Is(),ht.Power0,ht.Power1,ht.Power2,ht.Power3,ht.Power4,ht.Linear,ht.Quad,ht.Cubic,ht.Quart,ht.Quint,ht.Strong,ht.Elastic,ht.Back,ht.SteppedEase,ht.Bounce,ht.Sine,ht.Expo,ht.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bd,br,Ns,Hc,jr,wd,Gc,W_=function(){return typeof window<"u"},tr={},Zr=180/Math.PI,Us=Math.PI/180,Os=Math.atan2,Ad=1e8,Wc=/([A-Z])/g,X_=/(left|right|width|margin|padding|x)/i,q_=/[\s,\(]\S/,Ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Y_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},K_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Rd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},j_=function(e,t,n){return e.style[t]=n},Z_=function(e,t,n){return e.style.setProperty(t,n)},J_=function(e,t,n){return e._gsap[t]=n},Q_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ev=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},tv=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ot="transform",Hn=Ot+"Origin",nv=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=nr(i,a)}):this.tfm[e]=o.x?o[e]:nr(i,e),e===Hn&&(this.tfm.zOrigin=o.zOrigin);else return Ni.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Hn,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},Pd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Wc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Gc(),(!s||!s.isStart)&&!n[Ot]&&(Pd(n),i.zOrigin&&n[Hn]&&(n[Hn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ld=function(e,t){var n={target:e,props:[],revert:iv,save:nv};return e._gsap||Vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Dd,qc=function(e,t){var n=br.createElementNS?br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):br.createElement(e);return n&&n.style?n:br.createElement(e)},fi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Wc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Fs(t)||t,1)||""},Id="O,Moz,ms,Ms,Webkit".split(","),Fs=function(e,t,n){var i=t||jr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Id[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Id[o]:"")+e},Yc=function(){W_()&&window.document&&(bd=window,br=bd.document,Ns=br.documentElement,jr=qc("div")||{style:{}},qc("div"),Ot=Fs(Ot),Hn=Ot+"Origin",jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dd=!!Fs("perspective"),Gc=Vn.core.reverting,Hc=1)},Nd=function(e){var t=e.ownerSVGElement,n=qc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ns.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ns.removeChild(n),s},Ud=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Od=function(e){var t,n;try{t=e.getBBox()}catch{t=Nd(e),n=1}return t&&(t.width||t.height)||n||(t=Nd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}:t},Fd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Od(e))},Jr=function(e,t){if(t){var n=e.style,i;t in tr&&t!==Hn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Wc,"-$1").toLowerCase())):n.removeAttribute(t)}},wr=function(e,t,n,i,s,o){var a=new zn(e._pt,t,n,0,1,o?Cd:Rd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Bd={deg:1,rad:1,turn:1},rv={grid:1,flex:1},Ar=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=jr.style,l=X_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||Bd[i]||Bd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Fd(e),(d||o==="%")&&(tr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Ht(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===br||!_.appendChild)&&(_=br.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Qn.time&&!p.uncache)return Ht(s/p.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,g=e[u],x?e.style[t]=x:Jr(e,t)}else(d||o==="%")&&!rv[fi(_,"display")]&&(a.position=fi(e,"position")),_===e&&(a.position="static"),_.appendChild(jr),g=jr[u],_.removeChild(jr),a.position="absolute";return l&&d&&(p=Xr(_),p.time=Qn.time,p.width=_[u]),Ht(f?g*s/h:g&&s?h/g*s:0)},nr=function(e,t,n,i){var s;return Hc||Yc(),t in Ni&&t!=="transform"&&(t=Ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=zo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xa(fi(e,Hn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Wa[t]&&Wa[t](e,t,n)||fi(e,t)||Vf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ar(e,t,s,n)+n:s},sv=function(e,t,n,i){if(!n||n==="none"){var s=Fs(t,e,1),o=s&&fi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=fi(e,"borderTopColor"))}var a=new zn(this._pt,e.style,t,0,1,yd),l=0,c=0,u,h,f,d,g,_,p,m,x,y,S,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=fi(e,t)||i,_?e.style[t]=_:Jr(e,t)),u=[n,i],hd(u),n=u[0],i=u[1],f=n.match(As)||[],T=i.match(As)||[],T.length){for(;h=As.exec(i);)p=h[0],x=i.substring(l,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),p.charAt(1)==="="&&(p=Rs(d,p)+S),m=parseFloat(p),y=p.substr((m+"").length),l=As.lastIndex-y.length,y||(y=y||Kn.units[t]||S,l===i.length&&(i+=y,a.e+=y)),S!==y&&(d=Ar(e,t,_,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Cd:Rd;return Nf.test(i)&&(a.e=0),this._pt=a,a},kd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ov=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=kd[n]||n,t[1]=kd[i]||i,t.join(" ")},av=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],tr[a]&&(l=1,a=a==="transformOrigin"?Hn:Ot),Jr(n,a);l&&(Jr(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",zo(n,1),o.uncache=1,Pd(i)))}},Wa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new zn(e._pt,t,n,0,0,av);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ko=[1,0,0,1,0,0],zd={},Vd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hd=function(e){var t=fi(e,Ot);return Vd(t)?ko:t.substr(7).match(If).map(Ht)},Kc=function(e,t){var n=e._gsap||Xr(e),i=e.style,s=Hd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ko:s):(s===ko&&!e.offsetParent&&e!==Ns&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ns.appendChild(e)),s=Hd(e),l?i.display=l:Jr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ns.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$c=function(e,t,n,i,s,o){var a=e._gsap,l=s||Kc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],x=l[5],y=t.split(" "),S=parseFloat(y[0])||0,T=parseFloat(y[1])||0,A,b,C,v;n?l!==ko&&(b=d*p-g*_)&&(C=S*(p/b)+T*(-_/b)+(_*x-p*m)/b,v=S*(-g/b)+T*(d/b)-(d*x-g*m)/b,S=C,T=v):(A=Od(e),S=A.x+(~y[0].indexOf("%")?S/100*A.width:S),T=A.y+(~(y[1]||y[0]).indexOf("%")?T/100*A.height:T)),i||i!==!1&&a.smooth?(m=S-c,x=T-u,a.xOffset=h+(m*d+x*_)-m,a.yOffset=f+(m*g+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Hn]="0px 0px",o&&(wr(o,a,"xOrigin",c,S),wr(o,a,"yOrigin",u,T),wr(o,a,"xOffset",h,a.xOffset),wr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},zo=function(e,t){var n=e._gsap||new md(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=fi(e,Hn)||"0",u,h,f,d,g,_,p,m,x,y,S,T,A,b,C,v,E,P,I,F,z,X,k,B,G,ee,L,te,Pe,Ie,Re,ge;return u=h=f=_=p=m=x=y=S=0,d=g=1,n.svg=!!(e.getCTM&&Fd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),b=Kc(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),$c(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,b)),T=n.xOrigin||0,A=n.yOrigin||0,b!==ko&&(P=b[0],I=b[1],F=b[2],z=b[3],u=X=b[4],h=k=b[5],b.length===6?(d=Math.sqrt(P*P+I*I),g=Math.sqrt(z*z+F*F),_=P||I?Os(I,P)*Zr:0,x=F||z?Os(F,z)*Zr+_:0,x&&(g*=Math.abs(Math.cos(x*Us))),n.svg&&(u-=T-(T*P+A*F),h-=A-(T*I+A*z))):(ge=b[6],Ie=b[7],L=b[8],te=b[9],Pe=b[10],Re=b[11],u=b[12],h=b[13],f=b[14],C=Os(ge,Pe),p=C*Zr,C&&(v=Math.cos(-C),E=Math.sin(-C),B=X*v+L*E,G=k*v+te*E,ee=ge*v+Pe*E,L=X*-E+L*v,te=k*-E+te*v,Pe=ge*-E+Pe*v,Re=Ie*-E+Re*v,X=B,k=G,ge=ee),C=Os(-F,Pe),m=C*Zr,C&&(v=Math.cos(-C),E=Math.sin(-C),B=P*v-L*E,G=I*v-te*E,ee=F*v-Pe*E,Re=z*E+Re*v,P=B,I=G,F=ee),C=Os(I,P),_=C*Zr,C&&(v=Math.cos(C),E=Math.sin(C),B=P*v+I*E,G=X*v+k*E,I=I*v-P*E,k=k*v-X*E,P=B,X=G),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Ht(Math.sqrt(P*P+I*I+F*F)),g=Ht(Math.sqrt(k*k+ge*ge)),C=Os(X,k),x=Math.abs(C)>2e-4?C*Zr:0,S=Re?1/(Re<0?-Re:Re):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Vd(fi(e,Ot)),B&&e.setAttribute("transform",B))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ht(d),n.scaleY=Ht(g),n.rotation=Ht(_)+a,n.rotationX=Ht(p)+a,n.rotationY=Ht(m)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Hn]=Xa(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?cv:Dd?Gd:lv,n.uncache=0,n},Xa=function(e){return(e=e.split(" "))[0]+" "+e[1]},jc=function(e,t,n){var i=gn(t);return Ht(parseFloat(t)+parseFloat(Ar(e,"x",n+"px",i)))+i},lv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Gd(e,t)},Qr="0deg",Vo="0px",es=") ",Gd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,S="",T=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==Qr||u!==Qr)){var A=parseFloat(u)*Us,b=Math.sin(A),C=Math.cos(A),v;A=parseFloat(h)*Us,v=Math.cos(A),o=jc(x,o,b*v*-y),a=jc(x,a,-Math.sin(A)*-y),l=jc(x,l,C*v*-y+y)}p!==Vo&&(S+="perspective("+p+es),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(T||o!==Vo||a!==Vo||l!==Vo)&&(S+=l!==Vo||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+es),c!==Qr&&(S+="rotate("+c+es),u!==Qr&&(S+="rotateY("+u+es),h!==Qr&&(S+="rotateX("+h+es),(f!==Qr||d!==Qr)&&(S+="skew("+f+", "+d+es),(g!==1||_!==1)&&(S+="scale("+g+", "+_+es),x.style[Ot]=S||"translate(0, 0)"},cv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(o),S=parseFloat(a),T,A,b,C,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Us,c*=Us,T=Math.cos(l)*h,A=Math.sin(l)*h,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=Us,v=Math.tan(c-u),v=Math.sqrt(1+v*v),b*=v,C*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),T*=v,A*=v)),T=Ht(T),A=Ht(A),b=Ht(b),C=Ht(C)):(T=h,C=f,A=b=0),(y&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(y=Ar(d,"x",o,"px"),S=Ar(d,"y",a,"px")),(g||_||p||m)&&(y=Ht(y+g-(g*T+_*b)+p),S=Ht(S+_-(g*A+_*C)+m)),(i||s)&&(v=d.getBBox(),y=Ht(y+i/100*v.width),S=Ht(S+s/100*v.height)),v="matrix("+T+","+A+","+b+","+C+","+y+","+S+")",d.setAttribute("transform",v),x&&(d.style[Ot]=v)},uv=function(e,t,n,i,s){var o=360,a=on(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Zr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Ad)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Ad)%o-~~(c/o)*o)),e._pt=f=new zn(e._pt,t,n,i,c,Y_),f.e=u,f.u="deg",e._props.push(n),f},Wd=function(e,t){for(var n in t)e[n]=t[n];return e},hv=function(e,t,n){var i=Wd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=zo(n,1),Jr(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],o[Ot]=t,a=zo(n,1),o[Ot]=c);for(l in tr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=gn(c),g=gn(u),h=d!==g?Ar(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new zn(e._pt,a,l,h,f-h,Xc),e._pt.u=g||0,e._props.push(l));Wd(a,i)};kn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Wa[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return nr(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Xd={name:"css",register:Yc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,x,y,S,T,A,b,C;Hc||Yc(),this.styles=this.styles||Ld(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(jn[_]&&gd(_,t,n,i,e,s)))){if(d=typeof u,g=Wa[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Io(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Tr.lastIndex=0,Tr.test(c)||(p=gn(c),m=gn(u)),m?p!==m&&(c=Ar(e,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],on(c)&&~c.indexOf("random(")&&(c=Io(c)),gn(c+"")||c==="auto"||(c+=Kn.units[_]||gn(nr(e,_))||""),(c+"").charAt(1)==="="&&(c=nr(e,_))):c=nr(e,_),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in Ni&&(_==="autoAlpha"&&(f===1&&nr(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),wr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ni[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in tr,y){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=fi(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),S||(T=e._gsap,T.renderTransform&&!t.parseTransform||zo(e,t.parseTransform),A=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new zn(this._pt,a,Ot,0,1,T.renderTransform,T,0,-1),S.dep=1),_==="scale")this._pt=new zn(this._pt,T,"scaleY",T.scaleY,(x?Rs(T.scaleY,x+h):h)-T.scaleY||0,Xc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Hn,0,a[Hn]),u=ov(u),T.svg?$c(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==T.zOrigin&&wr(this,T,"zOrigin",T.zOrigin,m),wr(this,a,_,Xa(c),Xa(u)));continue}else if(_==="svgOrigin"){$c(e,u,1,A,0,this);continue}else if(_ in zd){uv(this,T,_,f,x?Rs(f,x+u):u);continue}else if(_==="smoothOrigin"){wr(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){hv(this,u,e);continue}}else _ in a||(_=Fs(_)||_);if(y||(h||h===0)&&(f||f===0)&&!q_.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=gn(u)||(_ in Kn.units?Kn.units[_]:p),p!==m&&(f=Ar(e,_,c,m)),this._pt=new zn(this._pt,y?T:a,_,f,(x?Rs(f,x+h):h)-f,!y&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?$_:Xc),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=K_);else if(_ in a)sv.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){vc(_,u);continue}y||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}b&&Md(this)},render:function(e,t){if(t.tween._time||!Gc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:nr,aliases:Ni,getSetter:function(e,t,n){var i=Ni[t];return i&&i.indexOf(",")<0&&(t=i),t in tr&&t!==Hn&&(e._gsap.x||nr(e,"x"))?n&&wd===n?t==="scale"?Q_:J_:(wd=n||{})&&(t==="scale"?ev:tv):e.style&&!fc(e.style[t])?j_:~t.indexOf("-")?Z_:Fc(e,t)},core:{_removeProperty:Jr,_getMatrix:Kc}};Vn.utils.checkPrefix=Fs,Vn.core.getStyleSaver=Ld,(function(r,e,t,n){var i=kn(r+","+e+","+t,function(s){tr[s]=1});kn(e,function(s){Kn.units[s]="deg",zd[s]=1}),Ni[i[13]]=r+","+e,kn(n,function(s){var o=s.split(":");Ni[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kn.units[r]="px"}),Vn.registerPlugin(Xd);function fv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function dv(r,e,t){return e&&fv(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dn,qa,ei,Rr,Cr,Bs,qd,ts,Ho,Yd,ir,yi,Kd,$d=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},jd=1,ks=[],ot=[],Ui=[],Go=Date.now,Zc=function(e,t){return t},pv=function(){var e=Ho.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,Ui),ot=n,Ui=i,Zc=function(o,a){return t[o](a)}},Pr=function(e,t){return~Ui.indexOf(e)&&Ui[Ui.indexOf(e)+1][t]},Wo=function(e){return!!~Yd.indexOf(e)},En=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},bn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ya="scrollLeft",Ka="scrollTop",Jc=function(){return ir&&ir.isPressed||ot.cache++},$a=function(e,t){var n=function i(s){if(s||s===0){jd&&(ei.history.scrollRestoration="manual");var o=ir&&ir.isPressed;s=i.v=Math.round(s)||(ir&&ir.iOS?1:0),e(s),i.cacheID=ot.cache,o&&Zc("ss",s)}else(t||ot.cache!==i.cacheID||Zc("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},wn={s:Ya,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:$a(function(r){return arguments.length?ei.scrollTo(r,Zt.sc()):ei.pageXOffset||Rr[Ya]||Cr[Ya]||Bs[Ya]||0})},Zt={s:Ka,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:$a(function(r){return arguments.length?ei.scrollTo(wn.sc(),r):ei.pageYOffset||Rr[Ka]||Cr[Ka]||Bs[Ka]||0})},Gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Lr=function(e,t){var n=t.s,i=t.sc;Wo(e)&&(e=Rr.scrollingElement||Cr);var s=ot.indexOf(e),o=i===Zt.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||En(e,"scroll",Jc);var a=ot[s+o],l=a||(ot[s+o]=$a(Pr(e,n),!0)||(Wo(e)?i:$a(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=dn.getProperty(e,"scrollBehavior")==="smooth"),l},Qc=function(e,t,n){var i=e,s=e,o=Go(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Go();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,p=s,m=Go();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Xo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Jd=function(){Ho=dn.core.globals().ScrollTrigger,Ho&&Ho.core&&pv()},Qd=function(e){return dn=e||$d(),!qa&&dn&&typeof document<"u"&&document.body&&(ei=window,Rr=document,Cr=Rr.documentElement,Bs=Rr.body,Yd=[ei,Rr,Cr,Bs],dn.utils.clamp,Kd=dn.core.context||function(){},ts="onpointerenter"in Bs?"pointer":"mouse",qd=Gt.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yi=Gt.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jd=0},500),Jd(),qa=1),qa};wn.op=Zt,ot.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){qa||Qd(dn)||console.warn("Please gsap.registerPlugin(Observer)"),Ho||Jd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,x=n.onDrag,y=n.onPress,S=n.onRelease,T=n.onRight,A=n.onLeft,b=n.onUp,C=n.onDown,v=n.onChangeX,E=n.onChangeY,P=n.onChange,I=n.onToggleX,F=n.onToggleY,z=n.onHover,X=n.onHoverEnd,k=n.onMove,B=n.ignoreCheck,G=n.isNormalizer,ee=n.onGestureStart,L=n.onGestureEnd,te=n.onWheel,Pe=n.onEnable,Ie=n.onDisable,Re=n.onClick,ge=n.scrollSpeed,$=n.capture,J=n.allowClicks,ue=n.lockAxis,Le=n.onLockAxis;this.target=a=Gn(a)||Cr,this.vars=n,d&&(d=dn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ge=ge||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(Bs).lineHeight)||22);var _e,ke,ut,be,He,je,Be,W=this,N=0,_t=0,nt=n.passive||!u&&n.passive!==!1,Ge=Lr(a,wn),Me=Lr(a,Zt),R=Ge(),M=Me(),U=~o.indexOf("touch")&&!~o.indexOf("pointer")&&yi[0]==="pointerdown",j=Wo(a),Z=a.ownerDocument||Rr,K=[0,0,0],ye=[0,0,0],se=0,we=function(){return se=Go()},Ee=function(De,Ze){return(W.event=De)&&d&&mv(De.target,d)||Ze&&U&&De.pointerType!=="touch"||B&&B(De,Ze)},re=function(){W._vx.reset(),W._vy.reset(),ke.pause(),h&&h(W)},oe=function(){var De=W.deltaX=Zd(K),Ze=W.deltaY=Zd(ye),pe=Math.abs(De)>=i,Ye=Math.abs(Ze)>=i;P&&(pe||Ye)&&P(W,De,Ze,K,ye),pe&&(T&&W.deltaX>0&&T(W),A&&W.deltaX<0&&A(W),v&&v(W),I&&W.deltaX<0!=N<0&&I(W),N=W.deltaX,K[0]=K[1]=K[2]=0),Ye&&(C&&W.deltaY>0&&C(W),b&&W.deltaY<0&&b(W),E&&E(W),F&&W.deltaY<0!=_t<0&&F(W),_t=W.deltaY,ye[0]=ye[1]=ye[2]=0),(be||ut)&&(k&&k(W),ut&&(p&&ut===1&&p(W),x&&x(W),ut=0),be=!1),je&&!(je=!1)&&Le&&Le(W),He&&(te(W),He=!1),_e=0},Te=function(De,Ze,pe){K[pe]+=De,ye[pe]+=Ze,W._vx.update(De),W._vy.update(Ze),c?_e||(_e=requestAnimationFrame(oe)):oe()},Ae=function(De,Ze){ue&&!Be&&(W.axis=Be=Math.abs(De)>Math.abs(Ze)?"x":"y",je=!0),Be!=="y"&&(K[2]+=De,W._vx.update(De,!0)),Be!=="x"&&(ye[2]+=Ze,W._vy.update(Ze,!0)),c?_e||(_e=requestAnimationFrame(oe)):oe()},ae=function(De){if(!Ee(De,1)){De=Xo(De,u);var Ze=De.clientX,pe=De.clientY,Ye=Ze-W.x,Ue=pe-W.y,Ke=W.isDragging;W.x=Ze,W.y=pe,(Ke||(Ye||Ue)&&(Math.abs(W.startX-Ze)>=s||Math.abs(W.startY-pe)>=s))&&(ut=Ke?2:1,Ke||(W.isDragging=!0),Ae(Ye,Ue))}},qe=W.onPress=function(ve){Ee(ve,1)||ve&&ve.button||(W.axis=Be=null,ke.pause(),W.isPressed=!0,ve=Xo(ve),N=_t=0,W.startX=W.x=ve.clientX,W.startY=W.y=ve.clientY,W._vx.reset(),W._vy.reset(),En(G?a:Z,yi[1],ae,nt,!0),W.deltaX=W.deltaY=0,y&&y(W))},D=W.onRelease=function(ve){if(!Ee(ve,1)){bn(G?a:Z,yi[1],ae,!0);var De=!isNaN(W.y-W.startY),Ze=W.isDragging,pe=Ze&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Ye=Xo(ve);!pe&&De&&(W._vx.reset(),W._vy.reset(),u&&J&&dn.delayedCall(.08,function(){if(Go()-se>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(Z.createEvent){var Ue=Z.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,ei,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Ue)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&Ze&&!G&&ke.restart(!0),ut&&oe(),m&&Ze&&m(W),S&&S(W,pe)}},he=function(De){return De.touches&&De.touches.length>1&&(W.isGesturing=!0)&&ee(De,W.isDragging)},ie=function(){return(W.isGesturing=!1)||L(W)},fe=function(De){if(!Ee(De)){var Ze=Ge(),pe=Me();Te((Ze-R)*ge,(pe-M)*ge,1),R=Ze,M=pe,h&&ke.restart(!0)}},ne=function(De){if(!Ee(De)){De=Xo(De,u),te&&(He=!0);var Ze=(De.deltaMode===1?l:De.deltaMode===2?ei.innerHeight:1)*g;Te(De.deltaX*Ze,De.deltaY*Ze,0),h&&!G&&ke.restart(!0)}},Q=function(De){if(!Ee(De)){var Ze=De.clientX,pe=De.clientY,Ye=Ze-W.x,Ue=pe-W.y;W.x=Ze,W.y=pe,be=!0,h&&ke.restart(!0),(Ye||Ue)&&Ae(Ye,Ue)}},ce=function(De){W.event=De,z(W)},Fe=function(De){W.event=De,X(W)},pt=function(De){return Ee(De)||Xo(De,u)&&Re(W)};ke=W._dc=dn.delayedCall(f||.25,re).pause(),W.deltaX=W.deltaY=0,W._vx=Qc(0,50,!0),W._vy=Qc(0,50,!0),W.scrollX=Ge,W.scrollY=Me,W.isDragging=W.isGesturing=W.isPressed=!1,Kd(this),W.enable=function(ve){return W.isEnabled||(En(j?Z:a,"scroll",Jc),o.indexOf("scroll")>=0&&En(j?Z:a,"scroll",fe,nt,$),o.indexOf("wheel")>=0&&En(a,"wheel",ne,nt,$),(o.indexOf("touch")>=0&&qd||o.indexOf("pointer")>=0)&&(En(a,yi[0],qe,nt,$),En(Z,yi[2],D),En(Z,yi[3],D),J&&En(a,"click",we,!0,!0),Re&&En(a,"click",pt),ee&&En(Z,"gesturestart",he),L&&En(Z,"gestureend",ie),z&&En(a,ts+"enter",ce),X&&En(a,ts+"leave",Fe),k&&En(a,ts+"move",Q)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=be=ut=!1,W._vx.reset(),W._vy.reset(),R=Ge(),M=Me(),ve&&ve.type&&qe(ve),Pe&&Pe(W)),W},W.disable=function(){W.isEnabled&&(ks.filter(function(ve){return ve!==W&&Wo(ve.target)}).length||bn(j?Z:a,"scroll",Jc),W.isPressed&&(W._vx.reset(),W._vy.reset(),bn(G?a:Z,yi[1],ae,!0)),bn(j?Z:a,"scroll",fe,$),bn(a,"wheel",ne,$),bn(a,yi[0],qe,$),bn(Z,yi[2],D),bn(Z,yi[3],D),bn(a,"click",we,!0),bn(a,"click",pt),bn(Z,"gesturestart",he),bn(Z,"gestureend",ie),bn(a,ts+"enter",ce),bn(a,ts+"leave",Fe),bn(a,ts+"move",Q),W.isEnabled=W.isPressed=W.isDragging=!1,Ie&&Ie(W))},W.kill=W.revert=function(){W.disable();var ve=ks.indexOf(W);ve>=0&&ks.splice(ve,1),ir===W&&(ir=0)},ks.push(W),G&&Wo(a)&&(ir=W),W.enable(_)},dv(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.13.0",Gt.create=function(r){return new Gt(r)},Gt.register=Qd,Gt.getAll=function(){return ks.slice()},Gt.getById=function(r){return ks.filter(function(e){return e.vars.id===r})[0]},$d()&&dn.registerPlugin(Gt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,zs,at,Lt,ti,vt,eu,ja,qo,Yo,Ko,Za,_n,Ja,tu,An,ep,tp,Vs,np,nu,ip,Rn,iu,rp,sp,Dr,ru,su,Hs,ou,Qa,au,lu,el=1,vn=Date.now,cu=vn(),di=0,$o=0,op=function(e,t,n){var i=ni(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},ap=function(e,t){return t&&(!ni(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gv=function r(){return $o&&requestAnimationFrame(r)},lp=function(){return Ja=1},cp=function(){return Ja=0},Oi=function(e){return e},jo=function(e){return Math.round(e*1e5)/1e5||0},up=function(){return typeof window<"u"},hp=function(){return Ce||up()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},ns=function(e){return!!~eu.indexOf(e)},fp=function(e){return(e==="Height"?ou:at["inner"+e])||ti["client"+e]||vt["client"+e]},dp=function(e){return Pr(e,"getBoundingClientRect")||(ns(e)?function(){return dl.width=at.innerWidth,dl.height=ou,dl}:function(){return rr(e)})},_v=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Pr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?fp(s):e["client"+s])||0}},vv=function(e,t){return!t||~Ui.indexOf(e)?dp(e):function(){return dl}},Fi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Pr(e,n))?o()-dp(e)()[s]:ns(e)?(ti[n]||vt[n])-fp(i):e[n]-e["offset"+i])},tl=function(e,t){for(var n=0;n<Vs.length;n+=3)(!t||~t.indexOf(Vs[n+1]))&&e(Vs[n],Vs[n+1],Vs[n+2])},ni=function(e){return typeof e=="string"},Sn=function(e){return typeof e=="function"},Zo=function(e){return typeof e=="number"},is=function(e){return typeof e=="object"},Jo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},uu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Gs=Math.abs,pp="left",mp="top",hu="right",fu="bottom",rs="width",ss="height",Qo="Right",ea="Left",ta="Top",na="Bottom",Yt="padding",pi="margin",Ws="Width",du="Height",Jt="px",mi=function(e){return at.getComputedStyle(e)},Sv=function(e){var t=mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},gp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rr=function(e,t){var n=t&&mi(e)[tu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},nl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},_p=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},xv=function(e){return function(t){return Ce.utils.snap(_p(e),t)}},pu=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},yv=function(e){return function(t,n){return pu(_p(e))(t,n.direction)}},il=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},an=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},rl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},vp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sl={toggleActions:"play",anticipatePin:0},ol={top:0,left:0,center:.5,bottom:1,right:1},al=function(e,t){if(ni(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ol?ol[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ll=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Lt.createElement("div"),_=ns(n)||Pr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?vt:n,x=e.indexOf("start")!==-1,y=x?c:u,S="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(i===Zt?hu:fu)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],cl(g,0,i,x),g},cl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ws]=1,s["border"+a+Ws]=0,s[n.p]=t+"px",Ce.set(e,s)},it=[],mu={},ia,Sp=function(){return vn()-di>34&&(ia||(ia=requestAnimationFrame(sr)))},Xs=function(){(!Rn||!Rn.isPressed||Rn.startX>vt.clientWidth)&&(ot.cache++,Rn?ia||(ia=requestAnimationFrame(sr)):sr(),di||as("scrollStart"),di=vn())},gu=function(){sp=at.innerWidth,rp=at.innerHeight},ra=function(e){ot.cache++,(e===!0||!_n&&!ip&&!Lt.fullscreenElement&&!Lt.webkitFullscreenElement&&(!iu||sp!==at.innerWidth||Math.abs(at.innerHeight-rp)>at.innerHeight*.25))&&ja.restart(!0)},os={},Mv=[],xp=function r(){return ln(Je,"scrollEnd",r)||cs(!0)},as=function(e){return os[e]&&os[e].map(function(t){return t()})||Mv},ii=[],yp=function(e){for(var t=0;t<ii.length;t+=5)(!e||ii[t+4]&&ii[t+4].query===e)&&(ii[t].style.cssText=ii[t+1],ii[t].getBBox&&ii[t].setAttribute("transform",ii[t+2]||""),ii[t+3].uncache=1)},_u=function(e,t){var n;for(An=0;An<it.length;An++)n=it[An],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Qa=!0,t&&yp(t),t||as("revert")},Mp=function(e,t){ot.cache++,(t||!Cn)&&ot.forEach(function(n){return Sn(n)&&n.cacheID++&&(n.rec=0)}),ni(e)&&(at.history.scrollRestoration=su=e)},Cn,ls=0,Tp,Tv=function(){if(Tp!==ls){var e=Tp=ls;requestAnimationFrame(function(){return e===ls&&cs(!0)})}},Ep=function(){vt.appendChild(Hs),ou=!Rn&&Hs.offsetHeight||at.innerHeight,vt.removeChild(Hs)},bp=function(e){return qo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},cs=function(e,t){if(ti=Lt.documentElement,vt=Lt.body,eu=[at,Lt,ti,vt],di&&!e&&!Qa){an(Je,"scrollEnd",xp);return}Ep(),Cn=Je.isRefreshing=!0,ot.forEach(function(i){return Sn(i)&&++i.cacheID&&(i.rec=i())});var n=as("refreshInit");np&&Je.sort(),t||_u(),ot.forEach(function(i){Sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),Qa=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),au=1,bp(!0),it.forEach(function(i){var s=Fi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),bp(!1),au=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){Sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Mp(su,1),ja.pause(),ls++,Cn=2,sr(2),it.forEach(function(i){return Sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Cn=Je.isRefreshing=!1,as("refresh")},vu=0,ul=1,sa,sr=function(e){if(e===2||!Cn&&!Qa){Je.isUpdating=!0,sa&&sa.update(0);var t=it.length,n=vn(),i=n-cu>=50,s=t&&it[0].scroll();if(ul=vu>s?-1:1,Cn||(vu=s),i&&(di&&!Ja&&n-di>200&&(di=0,as("scrollEnd")),Ko=cu,cu=n),ul<0){for(An=t;An-- >0;)it[An]&&it[An].update(0,i);ul=1}else for(An=0;An<t;An++)it[An]&&it[An].update(0,i);Je.isUpdating=!1}ia=0},Su=[pp,mp,fu,hu,pi+na,pi+Qo,pi+ta,pi+ea,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],hl=Su.concat([rs,ss,"boxSizing","max"+Ws,"max"+du,"position",pi,Yt,Yt+ta,Yt+Qo,Yt+na,Yt+ea]),Ev=function(e,t,n){qs(n);var i=e._gsap;if(i.spacerIsNative)qs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Su.length,o=t.style,a=e.style,l;s--;)l=Su[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[fu]=a[hu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[rs]=nl(e,wn)+Jt,o[ss]=nl(e,Zt)+Jt,o[Yt]=a[pi]=a[mp]=a[pp]="0",qs(i),a[rs]=a["max"+Ws]=n[rs],a[ss]=a["max"+du]=n[ss],a[Yt]=n[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},bv=/([A-Z])/g,qs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(bv,"-$1").toLowerCase())}},fl=function(e){for(var t=hl.length,n=e.style,i=[],s=0;s<t;s++)i.push(hl[s],n[hl[s]]);return i.t=e,i},wv=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},dl={left:0,top:0},wp=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){Sn(e)&&(e=e(l)),ni(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?al("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,x;if(d&&d.seek(0),isNaN(e)||(e=+e),Zo(e))d&&(e=Ce.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&cl(a,n,i,!0);else{Sn(t)&&(t=t(l));var y=(e||"0").split(" "),S,T,A,b;x=Gn(t,l)||vt,S=rr(x)||{},(!S||!S.left&&!S.top)&&mi(x).display==="none"&&(b=x.style.display,x.style.display="block",S=rr(x),b?x.style.display=b:x.style.removeProperty("display")),T=al(y[0],S[i.d]),A=al(y[1]||"0",n),e=S[i.p]-c[i.p]-u+T+s-A,a&&cl(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,v=o._isStart;p="scroll"+i.d2,cl(o,C,i,v&&C>20||!v&&(h?Math.max(vt[p],ti[p]):o.parentNode[p])<=C+1),h&&(c=rr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Jt))}return d&&x&&(p=rr(x),d.seek(f),m=rr(x),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},Av=/(webkit|moz|length|cssText|inset)/i,Ap=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===vt){e._stOrig=s.cssText,a=mi(e);for(o in a)!+o&&!Av.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},Rp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},pl=function(e,t,n){var i={};i[t.p]="+="+n,Ce.set(e,i)},Cp=function(e,t){var n=Lr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=Rp(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ot.cache++,o.tween&&sr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ce.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(e,"wheel",n.wheelHandler),Je.isTouch&&an(e,"touchmove",n.wheelHandler),s},Je=(function(){function r(t,n){zs||r.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ru(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$o){this.update=this.refresh=this.kill=Oi;return}n=gp(ni(n)||Zo(n)||n.nodeType?{trigger:n}:n,sl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,y=s.once,S=s.snap,T=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,v=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:Zt,P=!h&&h!==0,I=Gn(n.scroller||at),F=Ce.core.getCache(I),z=ns(I),X=("pinType"in n?n.pinType:Pr(I,"pinType")||z&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=P&&n.toggleActions.split(" "),G="markers"in n?n.markers:sl.markers,ee=z?0:parseFloat(mi(I)["border"+E.p2+Ws])||0,L=this,te=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Pe=_v(I,z,E),Ie=vv(I,z),Re=0,ge=0,$=0,J=Lr(I,E),ue,Le,_e,ke,ut,be,He,je,Be,W,N,_t,nt,Ge,Me,R,M,U,j,Z,K,ye,se,we,Ee,re,oe,Te,Ae,ae,qe,D,he,ie,fe,ne,Q,ce,Fe;if(L._startClamp=L._endClamp=!1,L._dir=E,p*=45,L.scroller=I,L.scroll=b?b.time.bind(b):J,ke=J(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(np=1,n.refreshPriority===-9999&&(sa=L)),F.tweenScroll=F.tweenScroll||{top:Cp(I,Zt),left:Cp(I,wn)},L.tweenTo=ue=F.tweenScroll[E.p],L.scrubDuration=function(pe){he=Zo(pe)&&pe,he?D?D.duration(pe):D=Ce.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return m&&m(L)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),ae=0,l||(l=i.vars.id)),S&&((!is(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in vt.style&&Ce.set(z?[vt,ti]:I,{scrollBehavior:"auto"}),ot.forEach(function(pe){return Sn(pe)&&pe.target===(z?Lt.scrollingElement||ti:I)&&(pe.smooth=!1)}),_e=Sn(S.snapTo)?S.snapTo:S.snapTo==="labels"?xv(i):S.snapTo==="labelsDirectional"?yv(i):S.directional!==!1?function(pe,Ye){return pu(S.snapTo)(pe,vn()-ge<500?0:Ye.direction)}:Ce.utils.snap(S.snapTo),ie=S.duration||{min:.1,max:2},ie=is(ie)?Yo(ie.min,ie.max):Yo(ie,ie),fe=Ce.delayedCall(S.delay||he/2||.1,function(){var pe=J(),Ye=vn()-ge<500,Ue=ue.tween;if((Ye||Math.abs(L.getVelocity())<10)&&!Ue&&!Ja&&Re!==pe){var Ke=(pe-be)/Ge,Vt=i&&!P?i.totalProgress():Ke,rt=Ye?0:(Vt-qe)/(vn()-Ko)*1e3||0,St=Ce.utils.clamp(-Ke,1-Ke,Gs(rt/2)*rt/.185),Wt=Ke+(S.inertia===!1?0:St),Dt,wt,mt=S,Un=mt.onStart,Et=mt.onInterrupt,pn=mt.onComplete;if(Dt=_e(Wt,L),Zo(Dt)||(Dt=Wt),wt=Math.max(0,Math.round(be+Dt*Ge)),pe<=He&&pe>=be&&wt!==pe){if(Ue&&!Ue._initted&&Ue.data<=Gs(wt-pe))return;S.inertia===!1&&(St=Dt-Ke),ue(wt,{duration:ie(Gs(Math.max(Gs(Wt-Vt),Gs(Dt-Vt))*.185/rt/.05||0)),ease:S.ease||"power3",data:Gs(wt-pe),onInterrupt:function(){return fe.restart(!0)&&Et&&Et(L)},onComplete:function(){L.update(),Re=J(),i&&!P&&(D?D.resetTo("totalProgress",Dt,i._tTime/i._tDur):i.progress(Dt)),ae=qe=i&&!P?i.totalProgress():L.progress,x&&x(L),pn&&pn(L)}},pe,St*Ge,wt-pe-St*Ge),Un&&Un(L,ue.tween)}}else L.isActive&&Re!==pe&&fe.restart(!0)}).pause()),l&&(mu[l]=L),f=L.trigger=Gn(f||d!==!0&&d),Fe=f&&f._gsap&&f._gsap.stRevert,Fe&&(Fe=Fe(L)),d=d===!0?f:Gn(d),ni(a)&&(a={targets:f,className:a}),d&&(g===!1||g===pi||(g=!g&&d.parentNode&&d.parentNode.style&&mi(d.parentNode).display==="flex"?!1:Yt),L.pin=d,Le=Ce.core.getCache(d),Le.spacer?Me=Le.pinState:(A&&(A=Gn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Le.spacerIsNative=!!A,A&&(Le.spacerState=fl(A))),Le.spacer=U=A||Lt.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),Le.pinState=Me=fl(d)),n.force3D!==!1&&Ce.set(d,{force3D:!0}),L.spacer=U=Le.spacer,Ae=mi(d),we=Ae[g+E.os2],Z=Ce.getProperty(d),K=Ce.quickSetter(d,E.a,Jt),xu(d,U,Ae),M=fl(d)),G){_t=is(G)?gp(G,vp):vp,W=ll("scroller-start",l,I,E,_t,0),N=ll("scroller-end",l,I,E,_t,0,W),j=W["offset"+E.op.d2];var pt=Gn(Pr(I,"content")||I);je=this.markerStart=ll("start",l,pt,E,_t,j,0,b),Be=this.markerEnd=ll("end",l,pt,E,_t,j,0,b),b&&(ce=Ce.quickSetter([je,Be],E.a,Jt)),!X&&!(Ui.length&&Pr(I,"fixedMarkers")===!0)&&(Sv(z?vt:I),Ce.set([W,N],{force3D:!0}),re=Ce.quickSetter(W,E.a,Jt),Te=Ce.quickSetter(N,E.a,Jt))}if(b){var ve=b.vars.onUpdate,De=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),ve&&ve.apply(b,De||[])})}if(L.previous=function(){return it[it.indexOf(L)-1]},L.next=function(){return it[it.indexOf(L)+1]},L.revert=function(pe,Ye){if(!Ye)return L.kill(!0);var Ue=pe!==!1||!L.enabled,Ke=_n;Ue!==L.isReverted&&(Ue&&(ne=Math.max(J(),L.scroll.rec||0),$=L.progress,Q=i&&i.progress()),je&&[je,Be,W,N].forEach(function(Vt){return Vt.style.display=Ue?"none":"block"}),Ue&&(_n=L,L.update(Ue)),d&&(!T||!L.isActive)&&(Ue?Ev(d,U,Me):xu(d,U,mi(d),Ee)),Ue||L.update(Ue),_n=Ke,L.isReverted=Ue)},L.refresh=function(pe,Ye,Ue,Ke){if(!((_n||!L.enabled)&&!Ye)){if(d&&pe&&di){an(r,"scrollEnd",xp);return}!Cn&&te&&te(L),_n=L,ue.tween&&!Ue&&(ue.tween.kill(),ue.tween=0),D&&D.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(xe){return xe.vars.immediateRender&&xe.render(0,!0,!0)})),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Vt=Pe(),rt=Ie(),St=b?b.duration():Fi(I,E),Wt=Ge<=.01||!Ge,Dt=0,wt=Ke||0,mt=is(Ue)?Ue.end:n.end,Un=n.endTrigger||f,Et=is(Ue)?Ue.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),pn=L.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,L),Xn=f&&Math.max(0,it.indexOf(L))||0,$t=Xn,jt,rn,Ji,Es,sn,w,O,Y,q,V,le,Se,de;for(G&&is(Ue)&&(Se=Ce.getProperty(W,E.p),de=Ce.getProperty(N,E.p));$t-- >0;)w=it[$t],w.end||w.refresh(0,1)||(_n=L),O=w.pin,O&&(O===f||O===d||O===pn)&&!w.isReverted&&(V||(V=[]),V.unshift(w),w.revert(!0,!0)),w!==it[$t]&&(Xn--,$t--);for(Sn(Et)&&(Et=Et(L)),Et=op(Et,"start",L),be=wp(Et,f,Vt,E,J(),je,W,L,rt,ee,X,St,b,L._startClamp&&"_startClamp")||(d?-.001:0),Sn(mt)&&(mt=mt(L)),ni(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(ni(Et)?Et.split(" ")[0]:"")+mt:(Dt=al(mt.substr(2),Vt),mt=ni(Et)?Et:(b?Ce.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,be):be)+Dt,Un=f)),mt=op(mt,"end",L),He=Math.max(be,wp(mt||(Un?"100% 0":St),Un,Vt,E,J()+Dt,Be,N,L,rt,ee,X,St,b,L._endClamp&&"_endClamp"))||-.001,Dt=0,$t=Xn;$t--;)w=it[$t],O=w.pin,O&&w.start-w._pinPush<=be&&!b&&w.end>0&&(jt=w.end-(L._startClamp?Math.max(0,w.start):w.start),(O===f&&w.start-w._pinPush<be||O===pn)&&isNaN(Et)&&(Dt+=jt*(1-w.progress)),O===d&&(wt+=jt));if(be+=Dt,He+=Dt,L._startClamp&&(L._startClamp+=Dt),L._endClamp&&!Cn&&(L._endClamp=He||-.001,He=Math.min(He,Fi(I,E))),Ge=He-be||(be-=.01)&&.001,Wt&&($=Ce.utils.clamp(0,1,Ce.utils.normalize(be,He,ne))),L._pinPush=wt,je&&Dt&&(jt={},jt[E.a]="+="+Dt,pn&&(jt[E.p]="-="+J()),Ce.set([je,Be],jt)),d&&!(au&&L.end>=Fi(I,E)))jt=mi(d),Es=E===Zt,Ji=J(),ye=parseFloat(Z(E.a))+wt,!St&&He>1&&(le=(z?Lt.scrollingElement||ti:I).style,le={style:le,value:le["overflow"+E.a.toUpperCase()]},z&&mi(vt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(le.style["overflow"+E.a.toUpperCase()]="scroll")),xu(d,U,jt),M=fl(d),rn=rr(d,!0),Y=X&&Lr(I,Es?wn:Zt)(),g?(Ee=[g+E.os2,Ge+wt+Jt],Ee.t=U,$t=g===Yt?nl(d,E)+Ge+wt:0,$t&&(Ee.push(E.d,$t+Jt),U.style.flexBasis!=="auto"&&(U.style.flexBasis=$t+Jt)),qs(Ee),pn&&it.forEach(function(xe){xe.pin===pn&&xe.vars.pinSpacing!==!1&&(xe._subPinOffset=!0)}),X&&J(ne)):($t=nl(d,E),$t&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=$t+Jt)),X&&(sn={top:rn.top+(Es?Ji-be:Y)+Jt,left:rn.left+(Es?Y:Ji-be)+Jt,boxSizing:"border-box",position:"fixed"},sn[rs]=sn["max"+Ws]=Math.ceil(rn.width)+Jt,sn[ss]=sn["max"+du]=Math.ceil(rn.height)+Jt,sn[pi]=sn[pi+ta]=sn[pi+Qo]=sn[pi+na]=sn[pi+ea]="0",sn[Yt]=jt[Yt],sn[Yt+ta]=jt[Yt+ta],sn[Yt+Qo]=jt[Yt+Qo],sn[Yt+na]=jt[Yt+na],sn[Yt+ea]=jt[Yt+ea],R=wv(Me,sn,T),Cn&&J(0)),i?(q=i._initted,nu(1),i.render(i.duration(),!0,!0),se=Z(E.a)-ye+Ge+wt,oe=Math.abs(Ge-se)>1,X&&oe&&R.splice(R.length-2,2),i.render(0,!0,!0),q||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),nu(0)):se=Ge,le&&(le.value?le.style["overflow"+E.a.toUpperCase()]=le.value:le.style.removeProperty("overflow-"+E.a));else if(f&&J()&&!b)for(rn=f.parentNode;rn&&rn!==vt;)rn._pinOffset&&(be-=rn._pinOffset,He-=rn._pinOffset),rn=rn.parentNode;V&&V.forEach(function(xe){return xe.revert(!1,!0)}),L.start=be,L.end=He,ke=ut=Cn?ne:J(),!b&&!Cn&&(ke<ne&&J(ne),L.scroll.rec=0),L.revert(!1,!0),ge=vn(),fe&&(Re=-1,fe.restart(!0)),_n=0,i&&P&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Wt||$!==L.progress||b||_||i&&!i._initted)&&(i&&!P&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(b&&be<-.001&&!$?Ce.utils.normalize(be,He,0):$,!0),L.progress=Wt||(ke-be)/Ge===$?0:$),d&&g&&(U._pinOffset=Math.round(L.progress*se)),D&&D.invalidate(),isNaN(Se)||(Se-=Ce.getProperty(W,E.p),de-=Ce.getProperty(N,E.p),pl(W,E,Se),pl(je,E,Se-(Ke||0)),pl(N,E,de),pl(Be,E,de-(Ke||0))),Wt&&!Cn&&L.update(),u&&!Cn&&!nt&&(nt=!0,u(L),nt=!1)}},L.getVelocity=function(){return(J()-ut)/(vn()-Ko)*1e3||0},L.endAnimation=function(){Jo(L.callbackAnimation),i&&(D?D.progress(1):i.paused()?P||Jo(i,L.direction<0,1):Jo(i,i.reversed()))},L.labelToScroll=function(pe){return i&&i.labels&&(be||L.refresh()||be)+i.labels[pe]/i.duration()*Ge||0},L.getTrailing=function(pe){var Ye=it.indexOf(L),Ue=L.direction>0?it.slice(0,Ye).reverse():it.slice(Ye+1);return(ni(pe)?Ue.filter(function(Ke){return Ke.vars.preventOverlaps===pe}):Ue).filter(function(Ke){return L.direction>0?Ke.end<=be:Ke.start>=He})},L.update=function(pe,Ye,Ue){if(!(b&&!Ue&&!pe)){var Ke=Cn===!0?ne:L.scroll(),Vt=pe?0:(Ke-be)/Ge,rt=Vt<0?0:Vt>1?1:Vt||0,St=L.progress,Wt,Dt,wt,mt,Un,Et,pn,Xn;if(Ye&&(ut=ke,ke=b?J():Ke,S&&(qe=ae,ae=i&&!P?i.totalProgress():rt)),p&&d&&!_n&&!el&&di&&(!rt&&be<Ke+(Ke-ut)/(vn()-Ko)*p?rt=1e-4:rt===1&&He>Ke+(Ke-ut)/(vn()-Ko)*p&&(rt=.9999)),rt!==St&&L.enabled){if(Wt=L.isActive=!!rt&&rt<1,Dt=!!St&&St<1,Et=Wt!==Dt,Un=Et||!!rt!=!!St,L.direction=rt>St?1:-1,L.progress=rt,Un&&!_n&&(wt=rt&&!St?0:rt===1?1:St===1?2:3,P&&(mt=!Et&&B[wt+1]!=="none"&&B[wt+1]||B[wt],Xn=i&&(mt==="complete"||mt==="reset"||mt in i))),v&&(Et||Xn)&&(Xn||h||!i)&&(Sn(v)?v(L):L.getTrailing(v).forEach(function(Ji){return Ji.endAnimation()})),P||(D&&!_n&&!el?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",rt,i._tTime/i._tDur):(D.vars.totalProgress=rt,D.invalidate().restart())):i&&i.totalProgress(rt,!!(_n&&(ge||pe)))),d){if(pe&&g&&(U.style[g+E.os2]=we),!X)K(jo(ye+se*rt));else if(Un){if(pn=!pe&&rt>St&&He+1>Ke&&Ke+1>=Fi(I,E),T)if(!pe&&(Wt||pn)){var $t=rr(d,!0),jt=Ke-be;Ap(d,vt,$t.top+(E===Zt?jt:0)+Jt,$t.left+(E===Zt?0:jt)+Jt)}else Ap(d,U);qs(Wt||pn?R:M),oe&&rt<1&&Wt||K(ye+(rt===1&&!pn?se:0))}}S&&!ue.tween&&!_n&&!el&&fe.restart(!0),a&&(Et||y&&rt&&(rt<1||!lu))&&qo(a.targets).forEach(function(Ji){return Ji.classList[Wt||y?"add":"remove"](a.className)}),o&&!P&&!pe&&o(L),Un&&!_n?(P&&(Xn&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(L)),(Et||!lu)&&(c&&Et&&uu(L,c),k[wt]&&uu(L,k[wt]),y&&(rt===1?L.kill(!1,1):k[wt]=0),Et||(wt=rt===1?1:3,k[wt]&&uu(L,k[wt]))),C&&!Wt&&Math.abs(L.getVelocity())>(Zo(C)?C:2500)&&(Jo(L.callbackAnimation),D?D.progress(1):Jo(i,mt==="reverse"?1:!rt,1))):P&&o&&!_n&&o(L)}if(Te){var rn=b?Ke/b.duration()*(b._caScrollDist||0):Ke;re(rn+(W._isFlipped?1:0)),Te(rn)}ce&&ce(-Ke/b.duration()*(b._caScrollDist||0))}},L.enable=function(pe,Ye){L.enabled||(L.enabled=!0,an(I,"resize",ra),z||an(I,"scroll",Xs),te&&an(r,"refreshInit",te),pe!==!1&&(L.progress=$=0,ke=ut=Re=J()),Ye!==!1&&L.refresh())},L.getTween=function(pe){return pe&&ue?ue.tween:D},L.setPositions=function(pe,Ye,Ue,Ke){if(b){var Vt=b.scrollTrigger,rt=b.duration(),St=Vt.end-Vt.start;pe=Vt.start+St*pe/rt,Ye=Vt.start+St*Ye/rt}L.refresh(!1,!1,{start:ap(pe,Ue&&!!L._startClamp),end:ap(Ye,Ue&&!!L._endClamp)},Ke),L.update()},L.adjustPinSpacing=function(pe){if(Ee&&pe){var Ye=Ee.indexOf(E.d)+1;Ee[Ye]=parseFloat(Ee[Ye])+pe+Jt,Ee[1]=parseFloat(Ee[1])+pe+Jt,qs(Ee)}},L.disable=function(pe,Ye){if(L.enabled&&(pe!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Ye||D&&D.pause(),ne=0,Le&&(Le.uncache=1),te&&ln(r,"refreshInit",te),fe&&(fe.pause(),ue.tween&&ue.tween.kill()&&(ue.tween=0)),!z)){for(var Ue=it.length;Ue--;)if(it[Ue].scroller===I&&it[Ue]!==L)return;ln(I,"resize",ra),z||ln(I,"scroll",Xs)}},L.kill=function(pe,Ye){L.disable(pe,Ye),D&&!Ye&&D.kill(),l&&delete mu[l];var Ue=it.indexOf(L);Ue>=0&&it.splice(Ue,1),Ue===An&&ul>0&&An--,Ue=0,it.forEach(function(Ke){return Ke.scroller===L.scroller&&(Ue=1)}),Ue||Cn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ye||i.kill()),je&&[je,Be,W,N].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),sa===L&&(sa=0),d&&(Le&&(Le.uncache=1),Ue=0,it.forEach(function(Ke){return Ke.pin===d&&Ue++}),Ue||(Le.spacer=0)),n.onKill&&n.onKill(L)},it.push(L),L.enable(!1,!1),Fe&&Fe(L),i&&i.add&&!Ge){var Ze=L.update;L.update=function(){L.update=Ze,ot.cache++,be||He||L.refresh()},Ce.delayedCall(.01,L.update),Ge=.01,be=He=0}else L.refresh();d&&Tv()},r.register=function(n){return zs||(Ce=n||hp(),up()&&window.document&&r.enable(),zs=$o),zs},r.defaults=function(n){if(n)for(var i in n)sl[i]=n[i];return sl},r.disable=function(n,i){$o=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(at,"wheel",Xs),ln(Lt,"scroll",Xs),clearInterval(Za),ln(Lt,"touchcancel",Oi),ln(vt,"touchstart",Oi),il(ln,Lt,"pointerdown,touchstart,mousedown",lp),il(ln,Lt,"pointerup,touchend,mouseup",cp),ja.kill(),tl(ln);for(var s=0;s<ot.length;s+=3)rl(ln,ot[s],ot[s+1]),rl(ln,ot[s],ot[s+2])},r.enable=function(){if(at=window,Lt=document,ti=Lt.documentElement,vt=Lt.body,Ce&&(qo=Ce.utils.toArray,Yo=Ce.utils.clamp,ru=Ce.core.context||Oi,nu=Ce.core.suppressOverwrites||Oi,su=at.history.scrollRestoration||"auto",vu=at.pageYOffset||0,Ce.core.globals("ScrollTrigger",r),vt)){$o=1,Hs=document.createElement("div"),Hs.style.height="100vh",Hs.style.position="absolute",Ep(),gv(),Gt.register(Ce),r.isTouch=Gt.isTouch,Dr=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),iu=Gt.isTouch===1,an(at,"wheel",Xs),eu=[at,Lt,ti,vt],Ce.matchMedia?(r.matchMedia=function(c){var u=Ce.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ce.addEventListener("matchMediaInit",function(){return _u()}),Ce.addEventListener("matchMediaRevert",function(){return yp()}),Ce.addEventListener("matchMedia",function(){cs(0,1),as("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return gu(),gu})):console.warn("Requires GSAP 3.11.0 or later"),gu(),an(Lt,"scroll",Xs);var n=vt.hasAttribute("style"),i=vt.style,s=i.borderTopStyle,o=Ce.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=rr(vt),Zt.m=Math.round(a.top+Zt.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),Za=setInterval(Sp,250),Ce.delayedCall(.5,function(){return el=0}),an(Lt,"touchcancel",Oi),an(vt,"touchstart",Oi),il(an,Lt,"pointerdown,touchstart,mousedown",lp),il(an,Lt,"pointerup,touchend,mouseup",cp),tu=Ce.utils.checkPrefix("transform"),hl.push(tu),zs=vn(),ja=Ce.delayedCall(.2,cs).pause(),Vs=[Lt,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;Lt.hidden?(ep=c,tp=u):(ep!==c||tp!==u)&&ra()},Lt,"DOMContentLoaded",cs,at,"load",cs,at,"resize",ra],tl(an),it.forEach(function(c){return c.enable(0,1)}),l=0;l<ot.length;l+=3)rl(ln,ot[l],ot[l+1]),rl(ln,ot[l],ot[l+2])}},r.config=function(n){"limitCallbacks"in n&&(lu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Za)||(Za=i)&&setInterval(Sp,i),"ignoreMobileResize"in n&&(iu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tl(ln)||tl(an,n.autoRefreshEvents||"none"),ip=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Gn(n),o=ot.indexOf(s),a=ns(s);~o&&ot.splice(o,a?6:2),i&&(a?Ui.unshift(at,i,vt,i,ti,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ni(n)?Gn(n):n).getBoundingClientRect(),a=o[s?rs:ss]*i||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},r.positionInViewport=function(n,i,s){ni(n)&&(n=Gn(n));var o=n.getBoundingClientRect(),a=o[s?rs:ss],l=i==null?a/2:i in ol?ol[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=os.killAll||[];os={},i.forEach(function(s){return s()})}},r})();Je.version="3.13.0",Je.saveStyles=function(r){return r?qo(r).forEach(function(e){if(e&&e.style){var t=ii.indexOf(e);t>=0&&ii.splice(t,5),ii.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),ru())}}):ii},Je.revert=function(r,e){return _u(!r,e)},Je.create=function(r,e){return new Je(r,e)},Je.refresh=function(r){return r?ra(!0):(zs||Je.register())&&cs(!0)},Je.update=function(r){return++ot.cache&&sr(r===!0?2:0)},Je.clearScrollMemory=Mp,Je.maxScroll=function(r,e){return Fi(r,e?wn:Zt)},Je.getScrollFunc=function(r,e){return Lr(Gn(r),e?wn:Zt)},Je.getById=function(r){return mu[r]},Je.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})},Je.isScrolling=function(){return!!di},Je.snapDirectional=pu,Je.addEventListener=function(r,e){var t=os[r]||(os[r]=[]);~t.indexOf(e)||t.push(e)},Je.removeEventListener=function(r,e){var t=os[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)},Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ce.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Sn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Sn(s)&&(s=s(),an(Je,"refresh",function(){return s=e.batchMax()})),qo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var Pp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},yu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===ti&&r(vt,t)},ml={auto:1,scroll:1},Rv=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ce.core.getCache(s),a=vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ml[(l=mi(s)).overflowY]||ml[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ns(s)&&(ml[(l=mi(s)).overflowY]||ml[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Lp=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Rv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&an(Lt,Gt.eventTypes[0],Ip,!1,!0)},onDisable:function(){return ln(Lt,Gt.eventTypes[0],Ip,!0)}})},Cv=/(input|label|select|textarea)/i,Dp,Ip=function(e){var t=Cv.test(e.target.tagName);(t||Dp)&&(e._gsapAllow=!0,Dp=t)},Pv=function(e){is(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Gn(e.target)||ti,u=Ce.core.globals().ScrollSmoother,h=u&&u.get(),f=Dr&&(e.content&&Gn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Lr(c,Zt),g=Lr(c,wn),_=1,p=(Gt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,m=0,x=Sn(i)?function(){return i(a)}:function(){return i||2.8},y,S,T=Lp(c,e.type,!0,s),A=function(){return S=!1},b=Oi,C=Oi,v=function(){l=Fi(c,Zt),C=Yo(Dr?1:0,l),n&&(b=Yo(0,Fi(c,wn))),y=ls},E=function(){f._gsap.y=jo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(S){requestAnimationFrame(A);var G=jo(a.deltaY/2),ee=C(d.v-G);if(f&&ee!==d.v+d.offset){d.offset=ee-d.v;var L=jo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=ot.cache,sr()}return!0}d.offset&&E(),S=!0},I,F,z,X,k=function(){v(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&Ce.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return Dr&&B.type==="touchmove"&&P()||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){S=!1;var B=_;_=jo((at.visualViewport&&at.visualViewport.scale||1)/p),I.pause(),B!==_&&yu(c,_>1.01?!0:n?!1:"x"),F=g(),z=d(),v(),y=ls},e.onRelease=e.onGestureStart=function(B,G){if(d.offset&&E(),!G)X.restart(!0);else{ot.cache++;var ee=x(),L,te;n&&(L=g(),te=L+ee*.05*-B.velocityX/.227,ee*=Pp(g,L,te,Fi(c,wn)),I.vars.scrollX=b(te)),L=d(),te=L+ee*.05*-B.velocityY/.227,ee*=Pp(d,L,te,Fi(c,Zt)),I.vars.scrollY=C(te),I.invalidate().duration(ee).play(.01),(Dr&&I.vars.scrollY>=l||L>=l-1)&&Ce.to({},{onUpdate:k,duration:ee})}o&&o(B)},e.onWheel=function(){I._ts&&I.pause(),vn()-m>1e3&&(y=0,m=vn())},e.onChange=function(B,G,ee,L,te){if(ls!==y&&v(),G&&n&&g(b(L[2]===G?F+(B.startX-B.x):g()+G-L[1])),ee){d.offset&&E();var Pe=te[2]===ee,Ie=Pe?z+B.startY-B.y:d()+ee-te[1],Re=C(Ie);Pe&&Ie!==Re&&(z+=Re-Ie),d(Re)}(ee||G)&&sr()},e.onEnable=function(){yu(c,n?!1:"x"),Je.addEventListener("refresh",k),an(at,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){yu(c,!0),ln(at,"resize",k),Je.removeEventListener("refresh",k),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=Dr,Dr&&!d()&&d(1),Dr&&Ce.ticker.add(Oi),X=a._dc,I=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Rp(d,d(),function(){return I.pause()})},onUpdate:sr,onComplete:X.vars.onComplete}),a};Je.sort=function(r){if(Sn(r))return it.sort(r);var e=at.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})},Je.observe=function(r){return new Gt(r)},Je.normalizeScroll=function(r){if(typeof r>"u")return Rn;if(r===!0&&Rn)return Rn.enable();if(r===!1){Rn&&Rn.kill(),Rn=r;return}var e=r instanceof Gt?r:Pv(r);return Rn&&Rn.target===e.target&&Rn.kill(),ns(e.target)&&(Rn=e),e},Je.core={_getVelocityProp:Qc,_inputObserver:Lp,_scrollers:ot,_proxies:Ui,bridge:{ss:function(){di||as("scrollStart"),di=vn()},ref:function(){return _n}}},hp()&&Ce.registerPlugin(Je);var or=Vn.registerPlugin(Xd)||Vn;or.core.Tween;function Lv(){const r=document.querySelectorAll("[data-fls-spollers]");if(r.length>0){let e=function(a,l=!1){a.forEach(c=>{c=l?c.item:c,l.matches||!l?(c.classList.add("--spoller-init"),t(c)):(c.classList.remove("--spoller-init"),t(c,!1))})},t=function(a,l=!0){let c=a.querySelectorAll("details");c.length&&c.forEach(u=>{let h=u.querySelector("summary");l?(h.removeAttribute("tabindex"),u.hasAttribute("data-fls-spollers-open")?(h.classList.add("--spoller-active"),u.open=!0):(u.open=!1,h.nextElementSibling.hidden=!0)):(h.setAttribute("tabindex","-1"),h.classList.remove("--spoller-active"),u.open=!0,h.nextElementSibling.hidden=!1)})},n=function(a){const l=a.target;if(l.closest("summary")&&l.closest("[data-fls-spollers]")&&(a.preventDefault(),l.closest("[data-fls-spollers]").classList.contains("--spoller-init"))){const c=l.closest("summary"),u=c.closest("details"),h=c.closest("[data-fls-spollers]"),f=h.hasAttribute("data-fls-spollers-one"),d=u.hasAttribute("data-fls-spollers-scroll"),g=h.dataset.flsSpollersSpeed?parseInt(h.dataset.flsSpollersSpeed):500;if(!h.querySelectorAll(".--slide").length){const _=!u.open;if(f&&!u.open&&i(h),u.open?setTimeout(()=>{u.open=!1},g):u.open=!0,c.classList.toggle("--spoller-active"),$g(c.nextElementSibling,g),_&&setTimeout(()=>{const p=u.querySelector(".hero-3d-process");p&&p._threeController&&p._threeController.play()},g),setTimeout(()=>{Je.refresh()},g+50),d&&c.classList.contains("--spoller-active")){const p=u.dataset.flsSpollersScroll,m=+p?+p:0,x=u.hasAttribute("data-fls-spollers-scroll-noheader")?document.querySelector(".header").offsetHeight:0;window.scrollTo({top:u.offsetTop-(m+x),behavior:"smooth"})}}}if(!l.closest("[data-fls-spollers]")){const c=document.querySelectorAll("[data-fls-spollers-close]");c.length&&c.forEach(u=>{const h=u.closest("[data-fls-spollers]");if(u.parentNode,h.classList.contains("--spoller-init")){const f=h.dataset.flsSpollersSpeed?parseInt(h.dataset.flsSpollersSpeed):500;u.classList.remove("--spoller-active"),Cf(u.nextElementSibling,f),setTimeout(()=>{const d=spollerBlock.querySelector(".hero-3d-process");d&&d._threeController&&d._threeController.reset(),spollerBlock.open=!1},f)}})}},i=function(a){const l=a.querySelector("details[open]");if(l&&!a.querySelectorAll(".--slide").length){const c=l.querySelector("summary"),u=a.dataset.flsSpollersSpeed?parseInt(a.dataset.flsSpollersSpeed):500;c.classList.remove("--spoller-active"),Cf(c.nextElementSibling,u),setTimeout(()=>{const h=l.querySelector(".hero-3d-process");h&&h._threeController&&h._threeController.reset(),l.open=!1},u)}};document.addEventListener("click",n);const s=Array.from(r).filter(function(a,l,c){return!a.dataset.flsSpollers.split(",")[0]});s.length&&e(s);let o=Kg(r,"flsSpollers");o&&o.length&&o.forEach(a=>{a.matchMedia.addEventListener("change",function(){e(a.itemsArray,a.matchMedia)}),e(a.itemsArray,a.matchMedia)})}}window.addEventListener("load",Lv);function Dv(){function r(n){let i=n||document.querySelectorAll("[data-fls-digcounter]");i.length&&i.forEach(s=>{s.hasAttribute("data-fls-digcounter-go")||(s.setAttribute("data-fls-digcounter-go",""),s.dataset.flsDigcounter=s.innerHTML,s.innerHTML="0",e(s))})}function e(n){let i=null;const s=parseFloat(n.dataset.flsDigcounterSpeed)?parseFloat(n.dataset.flsDigcounterSpeed):1e3,o=parseFloat(n.dataset.flsDigcounter),a=n.dataset.flsDigcounterFormat?n.dataset.flsDigcounterFormat:" ",l=0,c=u=>{i||(i=u);const h=Math.min((u-i)/s,1),f=Math.floor(h*(l+o));n.innerHTML=typeof n.dataset.flsDigcounterFormat<"u"?jg(f,a):f,h<1?window.requestAnimationFrame(c):n.removeAttribute("data-fls-digcounter-go")};window.requestAnimationFrame(c)}function t(n){const i=n.detail.entry,s=i.target;s.querySelectorAll("[data-fls-digcounter]").length&&!s.querySelectorAll("[data-fls-watcher]").length&&i.isIntersecting&&r(s.querySelectorAll("[data-fls-digcounter]"))}document.addEventListener("watcherCallback",t)}document.querySelector("[data-fls-digcounter]")&&window.addEventListener("load",Dv);class Iv{constructor(e){let t={logging:!0};this.config=Object.assign(t,e),this.observer,document.documentElement.hasAttribute("data-fls-watch")||this.scrollWatcherRun()}scrollWatcherUpdate(){this.scrollWatcherRun()}scrollWatcherRun(){document.documentElement.setAttribute("data-fls-watch",""),this.scrollWatcherConstructor(document.querySelectorAll("[data-fls-watcher]"))}scrollWatcherConstructor(e){e.length&&Zg(Array.from(e).map(function(n){if(n.dataset.flsWatcher==="navigator"&&!n.dataset.flsWatcherThreshold){let i;n.clientHeight>2?(i=window.innerHeight/2/(n.clientHeight-1),i>1&&(i=1)):i=1,n.setAttribute("data-fls-watcher-threshold",i.toFixed(2))}return`${n.dataset.flsWatcherRoot?n.dataset.flsWatcherRoot:null}|${n.dataset.flsWatcherMargin?n.dataset.flsWatcherMargin:"0px"}|${n.dataset.flsWatcherThreshold?n.dataset.flsWatcherThreshold:0}`})).forEach(n=>{let i=n.split("|"),s={root:i[0],margin:i[1],threshold:i[2]},o=Array.from(e).filter(function(l){let c=l.dataset.flsWatcherRoot?l.dataset.flsWatcherRoot:null,u=l.dataset.flsWatcherMargin?l.dataset.flsWatcherMargin:"0px",h=l.dataset.flsWatcherThreshold?l.dataset.flsWatcherThreshold:0;if(String(c)===s.root&&String(u)===s.margin&&String(h)===s.threshold)return l}),a=this.getScrollWatcherConfig(s);this.scrollWatcherInit(o,a)})}getScrollWatcherConfig(e){let t={};if(document.querySelector(e.root)?t.root=document.querySelector(e.root):e.root,t.rootMargin=e.margin,!(e.margin.indexOf("px")<0&&e.margin.indexOf("%")<0)){if(e.threshold==="prx"){e.threshold=[];for(let n=0;n<=1;n+=.005)e.threshold.push(n)}else e.threshold=e.threshold.split(",");return t.threshold=e.threshold,t}}scrollWatcherCreate(e){this.observer=new IntersectionObserver((t,n)=>{t.forEach(i=>{this.scrollWatcherCallback(i,n)})},e)}scrollWatcherInit(e,t){this.scrollWatcherCreate(t),e.forEach(n=>this.observer.observe(n))}scrollWatcherIntersecting(e,t){e.isIntersecting?t.classList.contains("--watcher-view")||t.classList.add("--watcher-view"):t.classList.contains("--watcher-view")&&t.classList.remove("--watcher-view")}scrollWatcherOff(e,t){t.unobserve(e)}scrollWatcherCallback(e,t){const n=e.target;this.scrollWatcherIntersecting(e,n),n.hasAttribute("data-fls-watcher-once")&&e.isIntersecting&&this.scrollWatcherOff(n,t),document.dispatchEvent(new CustomEvent("watcherCallback",{detail:{entry:e}}))}}document.querySelector("[data-fls-watcher]")&&window.addEventListener("load",()=>new Iv({})),document.addEventListener("DOMContentLoaded",()=>{Nv()});const Nv=()=>{const r=document.querySelectorAll("[data-fls-marquee]");if(!r.length)return;const e=t=>t?.offsetWidth||0;r.forEach(t=>{if(t.dataset.flsMarqueeInit==="true")return;t.dataset.flsMarqueeInit="true";const n={inner:"data-fls-marquee-inner",item:"data-fls-marquee-item"};let i=null,s=null;const o=parseFloat(t.getAttribute("data-fls-marquee-space")),a=parseFloat(t.getAttribute("data-fls-marquee-speed"))/10||100,c=t.getAttribute("data-fls-marquee-direction")==="right",u=t.hasAttribute("data-fls-marquee-drag");let h=0,f=performance.now(),d=0,g=!1,_=!1,p=0,m=0,x=0,y=0,S=[],T=null,A,b,C,v;if(!(()=>{const G=t.querySelector(`[${n.inner}]`);if(G)return i=G,s=i.querySelectorAll(`[${n.item}]`),!!s.length;const ee=Array.from(t.children);return ee.length?(ee.forEach(L=>L.setAttribute(n.item,"")),t.innerHTML=`<div ${n.inner}>${t.innerHTML}</div>`,i=t.querySelector(`[${n.inner}]`),s=t.querySelectorAll(`[${n.item}]`),!!i&&!!s.length):!1})())return;const P=parseFloat(getComputedStyle(s[0]).getPropertyValue("margin-right"))||0,I=isNaN(P)?isNaN(o)?30:o:P,F=()=>{const G=e(t);if(G<=0)return!1;let ee=0;d=0;let L=Array.from(i.children);if(S.length?L=[...S]:S=L,i.style.display="flex",i.innerHTML="",L.slice().reverse().forEach(Re=>{const ge=Re.cloneNode(!0);ge.style.marginRight=`${I}px`,ge.style.flexShrink=0,i.insertBefore(ge,i.firstChild)}),L.forEach(Re=>{Re.style.marginRight=`${I}px`,Re.style.flexShrink=0,i.append(Re);const ge=e(Re);ge<=0||(ee+=ge+I,d+=ge+I)}),d<=0)return i.innerHTML="",S.forEach(Re=>{Re.style.marginRight=`${I}px`,Re.style.flexShrink=0,i.append(Re)}),!1;const te=G*2+d;let Pe=0,Ie=0;for(;ee<te&&L.length>0;){L[Pe]||(Pe=0);const Re=L[Pe].cloneNode(!0);Re.style.marginRight=`${I}px`,Re.style.flexShrink=0,i.appendChild(Re);const ge=e(Re);if(ge<=0){if(++Ie>2e3)break;Pe++;continue}if(ee+=ge+I,Pe++,++Ie>2e3)break}return!0},z=()=>{const G=performance.now(),ee=G-f;f=G;const L=.05,te=(c?1:-1)*(a/1e3);y+=((g||_?0:te)-y)*L,h+=y*ee,h<=-d*2&&(h+=d),h>=-d&&(h-=d),i.style.transform=`translateX(${h}px)`,T=requestAnimationFrame(z)},X=()=>{if(i.style.cursor=u?"grab":"",u&&(i.style.touchAction="pan-y"),!u)return;const G=ge=>ge.type.startsWith("touch")?ge.touches[0].clientX:ge.clientX,ee=ge=>ge.type.startsWith("touch")?ge.touches[0].clientY:ge.clientY;let L=!1,te=null;const Pe=6,Ie=1.2;let Re=0;A=ge=>{L=!0,g=!1,te=null,p=G(ge),m=ee(ge),x=h,Re=performance.now(),ge.type==="mousedown"&&ge.preventDefault(),i.style.cursor="grabbing",window.addEventListener("mousemove",b,{passive:!1}),window.addEventListener("mouseup",C,{passive:!0}),window.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",C,{passive:!0}),window.addEventListener("touchcancel",C,{passive:!0})},b=ge=>{if(!L)return;const $=G(ge),J=ee(ge),ue=$-p,Le=J-m,_e=Math.abs(ue),ke=Math.abs(Le);if(!te){if(_e<Pe&&ke<Pe)return;if(_e>ke*Ie)te="x",g=!0,_=!0,x=h,p=$,m=J;else if(ke>_e*Ie)te="y";else return}if(te==="y")return;ge.cancelable&&ge.preventDefault();const ut=$-p;h=x+ut},C=()=>{if(g){const ge=h-x,$=Math.max(performance.now()-Re,16),J=ge/$,ue=1.5;y=Math.abs(J)>.1?Math.max(-ue,Math.min(ue,J)):0,t.dataset.marqueeJustDragged="true",setTimeout(()=>{t.dataset.marqueeJustDragged="false"},0)}L=!1,g=!1,te=null,_=!1,i.style.cursor="grab",window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",C),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",C),window.removeEventListener("touchcancel",C)},v=()=>{document.pointerLockElement||L&&C()},i.addEventListener("mousedown",A),i.addEventListener("touchstart",A,{passive:!0}),i.addEventListener("mouseleave",v)},k=()=>{cancelAnimationFrame(T),T=null,i&&(i.style.cursor="",i.style.touchAction="",i.style.transform="",i.removeEventListener("mousedown",A),i.removeEventListener("touchstart",A),i.removeEventListener("mouseleave",v)),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",C),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",C),window.removeEventListener("touchcancel",C),delete t.dataset.flsMarqueeInit};window.addEventListener("beforeunload",k),(()=>{let G=0;const ee=()=>{if(G++,!F()){if(G<10){requestAnimationFrame(ee);return}d=Math.max(1,Array.from(i.children).reduce((L,te)=>L+e(te)+I,0))}h=0,f=performance.now(),X(),t.hasAttribute("data-fls-marquee-pause")&&(i.addEventListener("mouseenter",()=>{g||(_=!0)}),i.addEventListener("mouseleave",()=>{_=!1})),T=requestAnimationFrame(z)};ee()})()})};document.addEventListener("DOMContentLoaded",()=>{const r=new Date().getFullYear();document.querySelectorAll(".set-year").forEach(e=>{e.textContent=r})}),document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("[data-fls-gallerys]");if(!r)return;const e=r.querySelector("[data-gallery-fullscreen]"),t=e.querySelector("[data-gallery-image]"),n=e.querySelector("[data-gallery-overlay]"),i=e.querySelector("[data-gallery-close]"),s=document.documentElement,o=document.createElement("div");o.classList.add("gallery__loader"),e.appendChild(o);function a(){o.classList.add("is-visible")}function l(){o.classList.remove("is-visible")}function c(f){const d=f.dataset.srcMobile,g=f.dataset.srcDesktop;return window.innerWidth<=600&&d?d:g||d}function u(f,d){a(),t.classList.remove("is-loaded"),t.src="",e.setAttribute("aria-hidden","false"),e.classList.add("is-active"),s.classList.add("lock");const g=new Image;g.src=f,g.alt=d||"",g.onload=()=>{t.src=f,t.alt=d||"",t.classList.add("is-loaded"),l()},g.onerror=()=>{l(),t.src="",console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F:",f)}}function h(){e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"),t.src="",t.classList.remove("is-loaded"),s.classList.remove("lock"),l()}r.addEventListener("click",f=>{const d=f.target.closest("[data-fls-marquee]");if(d&&d.dataset.marqueeJustDragged==="true")return;const g=f.target.closest("[data-gallery-item]");if(!g)return;const _=c(g),p=g.querySelector("img"),m=p?p.alt:"";u(_,m)}),n.addEventListener("click",h),i.addEventListener("click",h),document.addEventListener("keydown",f=>{f.key==="Escape"&&e.classList.contains("is-active")&&h()})});var Uv="1.3.13";function Np(r,e,t){return Math.max(r,Math.min(e,t))}function Ov(r,e,t){return(1-t)*r+t*e}function Fv(r,e,t,n){return Ov(r,e,1-Math.exp(-t*n))}function Bv(r,e){return(r%e+e)%e}var kv=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Np(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Fv(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function zv(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var Vv=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=zv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Up=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Op=100/6,Ir={passive:!1},Hv=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ir),this.element.addEventListener("touchstart",this.onTouchStart,Ir),this.element.addEventListener("touchmove",this.onTouchMove,Ir),this.element.addEventListener("touchend",this.onTouchEnd,Ir)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Up;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Ir),this.element.removeEventListener("touchstart",this.onTouchStart,Ir),this.element.removeEventListener("touchmove",this.onTouchMove,Ir),this.element.removeEventListener("touchend",this.onTouchEnd,Ir)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Op:n===2?this.window.width:1,s=n===1?Op:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Fp=r=>Math.min(1,1.001-Math.pow(2,-10*r)),Gv=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new kv;emitter=new Up;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:x=!0,autoRaf:y=!1,anchors:S=!1,autoToggle:T=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:b=!1}={}){window.lenisVersion=Uv,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Fp:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:x,autoRaf:y,anchors:S,autoToggle:T,allowNestedScroll:A,__experimental__naiveDimensions:b},this.dimensions=new Vv(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Hv(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};onTransitionEnd=r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.internalStop():this.internalStart()}};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href")?.includes("#"));if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;this.scrollTo(s,i)}}};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof u=="function"&&u?.(p)||p.hasAttribute?.("data-lenis-prevent")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?(f=document.querySelector(r),f||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=Np(0,r,this.limit);if(r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=Fp:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const T=window.getComputedStyle(r);i.computedStyle=T;const A=T.overflowX,b=T.overflowY;if(s=["auto","overlay","scroll"].includes(A),o=["auto","overlay","scroll"].includes(b),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let g;if(d==="horizontal")g="x";else if(d==="vertical")g="y";else{const T=e!==0,A=t!==0;T&&s&&a&&(g="x"),A&&o&&l&&(g="y")}if(!g)return!1;let _,p,m,x,y;if(g==="x")_=r.scrollLeft,p=c-h,m=e,x=s,y=a;else if(g==="y")_=r.scrollTop,p=u-f,m=t,x=o,y=l;else return!1;return(m>0?_<p:_>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Bv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mu="182",Wv=0,Bp=1,Xv=2,gl=1,qv=2,oa=3,ar=0,Wn=1,Mi=2,lr=0,Ys=1,kp=2,zp=3,Vp=4,Yv=5,us=100,Kv=101,$v=102,jv=103,Zv=104,Jv=200,Qv=201,e0=202,t0=203,Tu=204,Eu=205,n0=206,i0=207,r0=208,s0=209,o0=210,a0=211,l0=212,c0=213,u0=214,bu=0,wu=1,Au=2,Ks=3,Ru=4,Cu=5,Pu=6,Lu=7,Hp=0,h0=1,f0=2,Bi=0,Gp=1,Wp=2,Xp=3,Du=4,qp=5,Yp=6,Kp=7,$p="attached",d0="detached",jp=300,hs=301,$s=302,Iu=303,Nu=304,_l=306,js=1e3,ki=1001,vl=1002,Qt=1003,Zp=1004,aa=1005,en=1006,Sl=1007,cr=1008,ri=1009,Jp=1010,Qp=1011,la=1012,Uu=1013,zi=1014,gi=1015,ur=1016,Ou=1017,Fu=1018,ca=1020,em=35902,tm=35899,nm=1021,im=1022,_i=1023,hr=1026,fs=1027,Bu=1028,ku=1029,Zs=1030,zu=1031,Vu=1033,xl=33776,yl=33777,Ml=33778,Tl=33779,Hu=35840,Gu=35841,Wu=35842,Xu=35843,qu=36196,Yu=37492,Ku=37496,$u=37488,ju=37489,Zu=37490,Ju=37491,Qu=37808,eh=37809,th=37810,nh=37811,ih=37812,rh=37813,sh=37814,oh=37815,ah=37816,lh=37817,ch=37818,uh=37819,hh=37820,fh=37821,dh=36492,ph=36494,mh=36495,gh=36283,_h=36284,vh=36285,Sh=36286,ua=2300,ha=2301,xh=2302,rm=2400,sm=2401,om=2402,p0=2500,m0=0,am=1,yh=2,g0=3200,lm=0,_0=1,Nr="",cn="srgb",Pn="srgb-linear",El="linear",yt="srgb",Js=7680,cm=519,v0=512,S0=513,x0=514,Mh=515,y0=516,M0=517,Th=518,T0=519,Eh=35044,um="300 es",Vi=2e3,bl=2001;function hm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function E0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function fa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function b0(){const r=fa("canvas");return r.style.display="block",r}const fm={};function wl(...r){const e="THREE."+r.shift();console.log(e,...r)}function Oe(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Xe(...r){const e="THREE."+r.shift();console.error(e,...r)}function da(...r){const e=r.join(" ");e in fm||(fm[e]=!0,Oe(...r))}function w0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dm=1234567;const pa=Math.PI/180,eo=180/Math.PI;function Ti(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function bh(r,e){return(r%e+e)%e}function A0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function R0(r,e,t){return r!==e?(t-r)/(e-r):0}function ma(r,e,t){return(1-t)*r+t*e}function C0(r,e,t,n){return ma(r,e,1-Math.exp(-t*n))}function P0(r,e=1){return e-Math.abs(bh(r,e*2)-e)}function L0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function D0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function I0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function N0(r,e){return r+Math.random()*(e-r)}function U0(r){return r*(.5-Math.random())}function O0(r){r!==void 0&&(dm=r);let e=dm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F0(r){return r*pa}function B0(r){return r*eo}function k0(r){return(r&r-1)===0&&r!==0}function z0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function V0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function H0(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const G0={DEG2RAD:pa,RAD2DEG:eo,generateUUID:Ti,clamp:lt,euclideanModulo:bh,mapLinear:A0,inverseLerp:R0,lerp:ma,damp:C0,pingpong:P0,smoothstep:L0,smootherstep:D0,randInt:I0,randFloat:N0,randFloatSpread:U0,seededRandom:O0,degToRad:F0,radToDeg:B0,isPowerOfTwo:k0,ceilPowerOfTwo:z0,floorPowerOfTwo:V0,setQuaternionFromProperEuler:H0,normalize:Mt,denormalize:Ei};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ur{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=l*f+c*d+u*g+h*_;p<0&&(f=-f,d=-d,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){const x=Math.acos(p),y=Math.sin(x);m=Math.sin(m*x)/y,a=Math.sin(a*x)/y,l=l*m+f*a,c=c*m+d*a,u=u*m+g*a,h=h*m+_*a}else{l=l*m+f*a,c=c*m+d*a,u=u*m+g*a,h=h*m+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new H,pm=new Ur;class Qe{constructor(e,t,n,i,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],x=i[1],y=i[4],S=i[7],T=i[2],A=i[5],b=i[8];return s[0]=o*_+a*x+l*T,s[3]=o*p+a*y+l*A,s[6]=o*m+a*S+l*b,s[1]=c*_+u*x+h*T,s[4]=c*p+u*y+h*A,s[7]=c*m+u*S+h*b,s[2]=f*_+d*x+g*T,s[5]=f*p+d*y+g*A,s[8]=f*m+d*S+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new Qe,mm=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W0(){const r={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(i.r=to(i.r),i.g=to(i.g),i.b=to(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nr?El:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return da("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return da("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Pn]:{primaries:e,whitePoint:n,transfer:El,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),r}const ft=W0();function fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let no;class X0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{no===void 0&&(no=fa("canvas")),no.width=e.width,no.height=e.height;const i=no.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=no}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q0=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ch(i[o].image)):s.push(Ch(i[o]))}else s=Ch(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?X0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let Y0=0;const Ph=new H;class hn extends Qs{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=ki,i=ki,s=en,o=cr,a=_i,l=ri,c=hn.DEFAULT_ANISOTROPY,u=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Ti(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null,hn.DEFAULT_MAPPING=jp,hn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,i=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(d+1)/2,T=(m+1)/2,A=(u+f)/4,b=(h+_)/4,C=(g+p)/4;return y>S&&y>T?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=b/n):S>T?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=b/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K0 extends Qs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new hn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Rh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends K0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _m extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $0 extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(s,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Al.copy(n.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),Rl.subVectors(this.max,ga),io.subVectors(e.a,ga),ro.subVectors(e.b,ga),so.subVectors(e.c,ga),Or.subVectors(ro,io),Fr.subVectors(so,ro),ds.subVectors(io,so);let t=[0,-Or.z,Or.y,0,-Fr.z,Fr.y,0,-ds.z,ds.y,Or.z,0,-Or.x,Fr.z,0,-Fr.x,ds.z,0,-ds.x,-Or.y,Or.x,0,-Fr.y,Fr.x,0,-ds.y,ds.x,0];return!Lh(t,io,ro,so,Rl)||(t=[1,0,0,0,1,0,0,0,1],!Lh(t,io,ro,so,Rl))?!1:(Cl.crossVectors(Or,Fr),t=[Cl.x,Cl.y,Cl.z],Lh(t,io,ro,so,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dr=[new H,new H,new H,new H,new H,new H,new H,new H],bi=new H,Al=new Gi,io=new H,ro=new H,so=new H,Or=new H,Fr=new H,ds=new H,ga=new H,Rl=new H,Cl=new H,ps=new H;function Lh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ps.fromArray(r,s);const a=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),u=n.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const j0=new Gi,_a=new H,Dh=new H;class Wi{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):j0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_a,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Dh)),this.expandByPoint(_a.copy(e.center).sub(Dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pr=new H,Ih=new H,Pl=new H,Br=new H,Nh=new H,Ll=new H,Uh=new H;class Dl{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,t),pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ih.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Ih);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pl),a=Br.dot(this.direction),l=-Br.dot(Pl),c=Br.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ih).addScaledVector(Pl,f),d}intersectSphere(e,t){pr.subVectors(e.center,this.origin);const n=pr.dot(this.direction),i=pr.dot(pr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,t,n,i,s){Nh.subVectors(t,e),Ll.subVectors(n,e),Uh.crossVectors(Nh,Ll);let o=this.direction.dot(Uh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Br.subVectors(this.origin,e);const l=a*this.direction.dot(Ll.crossVectors(Br,Ll));if(l<0)return null;const c=a*this.direction.dot(Nh.cross(Br));if(c<0||l+c>o)return null;const u=-a*Br.dot(Uh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,p){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/oo.setFromMatrixColumn(e,0).length(),s=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z0,e,J0)}lookAt(e,t,n){const i=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),kr.crossVectors(n,si),kr.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),kr.crossVectors(n,si)),kr.normalize(),Il.crossVectors(si,kr),i[0]=kr.x,i[4]=Il.x,i[8]=si.x,i[1]=kr.y,i[5]=Il.y,i[9]=si.y,i[2]=kr.z,i[6]=Il.z,i[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],y=n[7],S=n[11],T=n[15],A=i[0],b=i[4],C=i[8],v=i[12],E=i[1],P=i[5],I=i[9],F=i[13],z=i[2],X=i[6],k=i[10],B=i[14],G=i[3],ee=i[7],L=i[11],te=i[15];return s[0]=o*A+a*E+l*z+c*G,s[4]=o*b+a*P+l*X+c*ee,s[8]=o*C+a*I+l*k+c*L,s[12]=o*v+a*F+l*B+c*te,s[1]=u*A+h*E+f*z+d*G,s[5]=u*b+h*P+f*X+d*ee,s[9]=u*C+h*I+f*k+d*L,s[13]=u*v+h*F+f*B+d*te,s[2]=g*A+_*E+p*z+m*G,s[6]=g*b+_*P+p*X+m*ee,s[10]=g*C+_*I+p*k+m*L,s[14]=g*v+_*F+p*B+m*te,s[3]=x*A+y*E+S*z+T*G,s[7]=x*b+y*P+S*X+T*ee,s[11]=x*C+y*I+S*k+T*L,s[15]=x*v+y*F+S*B+T*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],x=l*d-c*f,y=a*d-c*h,S=a*f-l*h,T=o*d-c*u,A=o*f-l*u,b=o*h-a*u;return t*(_*x-p*y+m*S)-n*(g*x-p*T+m*A)+i*(g*y-_*T+m*b)-s*(g*S-_*A+p*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,y=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,S=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,T=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,A=t*x+n*y+i*S+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=x*b,e[1]=(_*f*s-h*p*s-_*i*d+n*p*d+h*i*m-n*f*m)*b,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*b,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*b,e[4]=y*b,e[5]=(u*p*s-g*f*s+g*i*d-t*p*d-u*i*m+t*f*m)*b,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*b,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*b,e[8]=S*b,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*m-t*h*m)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*b,e[12]=T*b,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*p+t*h*p)*b,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,p=o*h,m=a*h,x=l*c,y=l*u,S=l*h,T=n.x,A=n.y,b=n.z;return i[0]=(1-(_+m))*T,i[1]=(d+S)*T,i[2]=(g-y)*T,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(f+m))*A,i[6]=(p+x)*A,i[7]=0,i[8]=(g+y)*b,i[9]=(p-x)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=oo.set(i[0],i[1],i[2]).length();const o=oo.set(i[4],i[5],i[6]).length(),a=oo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),wi.copy(this);const c=1/s,u=1/o,h=1/a;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=u,wi.elements[5]*=u,wi.elements[6]*=u,wi.elements[8]*=h,wi.elements[9]*=h,wi.elements[10]*=h,t.setFromRotationMatrix(wi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Vi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Vi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===bl)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Vi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Vi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===bl)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oo=new H,wi=new tt,Z0=new H(0,0,0),J0=new H(1,1,1),kr=new H,Il=new H,si=new H,vm=new tt,Sm=new Ur;class Zi{constructor(e=0,t=0,n=0,i=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class xm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q0=0;const ym=new H,ao=new Ur,mr=new tt,Nl=new H,va=new H,eS=new H,tS=new Ur,Mm=new H(1,0,0),Tm=new H(0,1,0),Em=new H(0,0,1),bm={type:"added"},nS={type:"removed"},lo={type:"childadded",child:null},Oh={type:"childremoved",child:null};class Ft extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new H,t=new Zi,n=new Ur,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new Qe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Tm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,t){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Tm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nl.copy(e):Nl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(va,Nl,this.up):mr.lookAt(Nl,va,this.up),this.quaternion.setFromRotationMatrix(mr),i&&(mr.extractRotation(i.matrixWorld),ao.setFromRotationMatrix(mr),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bm),lo.child=e,this.dispatchEvent(lo),lo.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nS),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bm),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,eS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,tS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ft.DEFAULT_UP=new H(0,1,0),Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new H,gr=new H,Fh=new H,_r=new H,co=new H,uo=new H,wm=new H,Bh=new H,kh=new H,zh=new H,Vh=new It,Hh=new It,Gh=new It;class Pi{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ai.subVectors(e,t),i.cross(Ai);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ai.subVectors(i,t),gr.subVectors(n,t),Fh.subVectors(e,t);const o=Ai.dot(Ai),a=Ai.dot(gr),l=Ai.dot(Fh),c=gr.dot(gr),u=gr.dot(Fh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_r.x),l.addScaledVector(o,_r.y),l.addScaledVector(a,_r.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Vh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),Vh.fromBufferAttribute(e,t),Hh.fromBufferAttribute(e,n),Gh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Vh,s.x),o.addScaledVector(Hh,s.y),o.addScaledVector(Gh,s.z),o}static isFrontFacing(e,t,n,i){return Ai.subVectors(n,t),gr.subVectors(e,t),Ai.cross(gr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Ai.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;co.subVectors(i,n),uo.subVectors(s,n),Bh.subVectors(e,n);const l=co.dot(Bh),c=uo.dot(Bh);if(l<=0&&c<=0)return t.copy(n);kh.subVectors(e,i);const u=co.dot(kh),h=uo.dot(kh);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(co,o);zh.subVectors(e,s);const d=co.dot(zh),g=uo.dot(zh);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(uo,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return wm.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(wm,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(co,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Wh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=bh(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Wh(o,s,e+1/3),this.g=Wh(o,s,e),this.b=Wh(o,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=cn){function n(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=Am[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return ft.workingToColorSpace(yn.copy(this),e),Math.round(lt(yn.r*255,0,255))*65536+Math.round(lt(yn.g*255,0,255))*256+Math.round(lt(yn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(yn.copy(this),t);const n=yn.r,i=yn.g,s=yn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=cn){ft.workingToColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,i=yn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(Ul);const n=ma(zr.h,Ul.h,t),i=ma(zr.s,Ul.s,t),s=ma(zr.l,Ul.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new $e;$e.NAMES=Am;let iS=0;class Xi extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=Ys,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=Eu,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tu&&(n.blendSrc=this.blendSrc),this.blendDst!==Eu&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ms extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new H,Ol=new dt;let rS=0;class Ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eh,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eh&&(e.usage=this.usage),e}}class Rm extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cm extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ri extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sS=0;const vi=new tt,Xh=new Ft,ho=new H,oi=new Gi,Sa=new Gi,un=new H;class xi extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hm(e)?Cm:Rm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,n){return vi.makeTranslation(e,t,n),this.applyMatrix4(vi),this}scale(e,t,n){return vi.makeScale(e,t,n),this.applyMatrix4(vi),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ri(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(oi.min,Sa.min),oi.expandByPoint(un),un.addVectors(oi.max,Sa.max),oi.expandByPoint(un)):(oi.expandByPoint(Sa.min),oi.expandByPoint(Sa.max))}oi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)un.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(e,c),un.add(ho)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new H,l[C]=new H;const c=new H,u=new H,h=new H,f=new dt,d=new dt,g=new dt,_=new H,p=new H;function m(C,v,E){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,v),g.fromBufferAttribute(s,E),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[C].add(_),a[v].add(_),a[E].add(_),l[C].add(p),l[v].add(p),l[E].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,v=x.length;C<v;++C){const E=x[C],P=E.start,I=E.count;for(let F=P,z=P+I;F<z;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new H,S=new H,T=new H,A=new H;function b(C){T.fromBufferAttribute(i,C),A.copy(T);const v=a[C];y.copy(v),y.sub(T.multiplyScalar(T.dot(v))).normalize(),S.crossVectors(A,v);const P=S.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,v=x.length;C<v;++C){const E=x[C],P=E.start,I=E.count;for(let F=P,z=P+I;F<z;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Ln(f,u,h)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pm=new tt,gs=new Dl,Fl=new Wi,Lm=new H,Bl=new H,kl=new H,zl=new H,qh=new H,Vl=new H,Dm=new H,Hl=new H;class ai extends Ft{constructor(e=new xi,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(qh.fromBufferAttribute(h,e),o?Vl.addScaledVector(qh,u):Vl.addScaledVector(qh.sub(t),u))}t.add(Vl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(s),gs.copy(e.ray).recast(e.near),!(Fl.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Fl,Lm)===null||gs.origin.distanceToSquared(Lm)>(e.far-e.near)**2))&&(Pm.copy(s).invert(),gs.copy(e.ray).applyMatrix4(Pm),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,T=y;S<T;S+=3){const A=a.getX(S),b=a.getX(S+1),C=a.getX(S+2);i=Gl(this,m,e,n,c,u,h,A,b,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),y=a.getX(p+1),S=a.getX(p+2);i=Gl(this,o,e,n,c,u,h,x,y,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,T=y;S<T;S+=3){const A=S,b=S+1,C=S+2;i=Gl(this,m,e,n,c,u,h,A,b,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=p,y=p+1,S=p+2;i=Gl(this,o,e,n,c,u,h,x,y,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function oS(r,e,t,n,i,s,o,a){let l;if(e.side===Wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ar,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Hl);return c<t.near||c>t.far?null:{distance:c,point:Hl.clone(),object:r}}function Gl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Bl),r.getVertexPosition(l,kl),r.getVertexPosition(c,zl);const u=oS(r,e,t,n,Bl,kl,zl,Dm);if(u){const h=new H;Pi.getBarycoord(Dm,Bl,kl,zl,h),i&&(u.uv=Pi.getInterpolatedAttribute(i,a,l,c,h,new dt)),s&&(u.uv1=Pi.getInterpolatedAttribute(s,a,l,c,h,new dt)),o&&(u.normal=Pi.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};Pi.getNormal(Bl,kl,zl,f.normal),u.face=f,u.barycoord=h}return u}class La extends xi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ri(c,3)),this.setAttribute("normal",new Ri(u,3)),this.setAttribute("uv",new Ri(h,2));function g(_,p,m,x,y,S,T,A,b,C,v){const E=S/b,P=T/C,I=S/2,F=T/2,z=A/2,X=b+1,k=C+1;let B=0,G=0;const ee=new H;for(let L=0;L<k;L++){const te=L*P-F;for(let Pe=0;Pe<X;Pe++){const Ie=Pe*E-I;ee[_]=Ie*x,ee[p]=te*y,ee[m]=z,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[p]=0,ee[m]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Pe/b),h.push(1-L/C),B+=1}}for(let L=0;L<C;L++)for(let te=0;te<b;te++){const Pe=f+te+X*L,Ie=f+te+X*(L+1),Re=f+(te+1)+X*(L+1),ge=f+(te+1)+X*L;l.push(Pe,Ie,ge),l.push(Ie,Re,ge),G+=6}a.addGroup(d,G,v),d+=G,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dn(r){const e={};for(let t=0;t<r.length;t++){const n=fo(r[t]);for(const i in n)e[i]=n[i]}return e}function aS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Im(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const lS={clone:fo,merge:Dn};var cS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cS,this.fragmentShader=uS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=aS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nm extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new H,Um=new dt,Om=new dt;class In extends Nm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,Um,Om),t.subVectors(Om,Um)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const po=-90,mo=1;class hS extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In(po,mo,e,t);i.layers=this.layers,this.add(i);const s=new In(po,mo,e,t);s.layers=this.layers,this.add(s);const o=new In(po,mo,e,t);o.layers=this.layers,this.add(o);const a=new In(po,mo,e,t);a.layers=this.layers,this.add(a);const l=new In(po,mo,e,t);l.layers=this.layers,this.add(l);const c=new In(po,mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fm extends hn{constructor(e=[],t=hs,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bm extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new La(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:fo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:lr});s.uniforms.tEquirect.value=t;const o=new ai(i,s),a=t.minFilter;return t.minFilter===cr&&(t.minFilter=en),new hS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class _s extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fS={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _s;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class km extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eh,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new H;class wf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){wl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zm=new H,Vm=new It,Hm=new It,pS=new H,Gm=new tt,Wl=new H,Kh=new Wi,Wm=new tt,$h=new Dl;class mS extends ai{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$p,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wl),this.boundingBox.expandByPoint(Wl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wl),this.boundingSphere.expandByPoint(Wl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kh.copy(this.boundingSphere),Kh.applyMatrix4(i),e.ray.intersectsSphere(Kh)!==!1&&(Wm.copy(i).invert(),$h.copy(e.ray).applyMatrix4(Wm),!(this.boundingBox!==null&&$h.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$h)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new It,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$p?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===d0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Vm.fromBufferAttribute(i.attributes.skinIndex,e),Hm.fromBufferAttribute(i.attributes.skinWeight,e),zm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Hm.getComponent(s);if(o!==0){const a=Vm.getComponent(s);Gm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(pS.copy(zm).applyMatrix4(Gm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xm extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jh extends hn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Qt,u=Qt,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qm=new tt,gS=new tt;class Af{constructor(e=[],t=[]){this.uuid=Ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:gS;qm.multiplyMatrices(a,t[s]),qm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Af(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jh(t,e,e,_i,gi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Oe("Skeleton: No bone found with UUID:",s),o=new Xm),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Zh extends Ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const go=new tt,Ym=new tt,Xl=[],Km=new Gi,_S=new tt,xa=new ai,ya=new Wi;class vS extends ai{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_S)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,go),Km.copy(e.boundingBox).applyMatrix4(go),this.boundingBox.union(Km)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,go),ya.copy(e.boundingSphere).applyMatrix4(go),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(n),e.ray.intersectsSphere(ya)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,go),Ym.multiplyMatrices(n,go),xa.matrixWorld=Ym,xa.raycast(e,Xl);for(let o=0,a=Xl.length;o<a;o++){const l=Xl[o];l.instanceId=s,l.object=this,t.push(l)}Xl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new jh(new Float32Array(i*this.count),i,this.count,Bu,gi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jh=new H,SS=new H,xS=new Qe;class vs{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jh.subVectors(n,t).cross(SS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xS.getNormalMatrix(e),i=this.coplanarPoint(Jh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Wi,yS=new dt(.5,.5),ql=new H;class Qh{constructor(e=new vs,t=new vs,n=new vs,i=new vs,s=new vs,o=new vs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],p=s[10],m=s[11],x=s[12],y=s[13],S=s[14],T=s[15];if(i[0].setComponents(c-o,d-u,m-g,T-x).normalize(),i[1].setComponents(c+o,d+u,m+g,T+x).normalize(),i[2].setComponents(c+a,d+h,m+_,T+y).normalize(),i[3].setComponents(c-a,d-h,m-_,T-y).normalize(),n)i[4].setComponents(l,f,p,S).normalize(),i[5].setComponents(c-l,d-f,m-p,T-S).normalize();else if(i[4].setComponents(c-l,d-f,m-p,T-S).normalize(),t===Vi)i[5].setComponents(c+l,d+f,m+p,T+S).normalize();else if(t===bl)i[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const t=yS.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ql.x=i.normal.x>0?e.max.x:e.min.x,ql.y=i.normal.y>0?e.max.y:e.min.y,ql.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $m extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new H,Kl=new H,jm=new tt,Ma=new Dl,$l=new Wi,ef=new H,Zm=new H;class tf extends Ft{constructor(e=new xi,t=new $m){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Yl.fromBufferAttribute(t,i-1),Kl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yl.distanceTo(Kl);e.setAttribute("lineDistance",new Ri(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(i),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;jm.copy(i).invert(),Ma.copy(e.ray).applyMatrix4(jm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=u.getX(_),x=u.getX(_+1),y=jl(this,e,Ma,l,m,x,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),m=jl(this,e,Ma,l,_,p,g-1);m&&t.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=jl(this,e,Ma,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=jl(this,e,Ma,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jl(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Yl.fromBufferAttribute(a,i),Kl.fromBufferAttribute(a,s),t.distanceSqToSegment(Yl,Kl,ef,Zm)>n)return;ef.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ef);if(!(c<e.near||c>e.far))return{distance:c,point:Zm.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Jm=new H,Qm=new H;class MS extends tf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Jm.fromBufferAttribute(t,i),Qm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jm.distanceTo(Qm);e.setAttribute("lineDistance",new Ri(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class TS extends tf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class eg extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tg=new tt,nf=new Dl,Zl=new Wi,Jl=new H;class ES extends Ft{constructor(e=new xi,t=new eg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(i),Zl.radius+=s,e.ray.intersectsSphere(Zl)===!1)return;tg.copy(i).invert(),nf.copy(e.ray).applyMatrix4(tg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);Jl.fromBufferAttribute(h,p),ng(Jl,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Jl.fromBufferAttribute(h,g),ng(Jl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ng(r,e,t,n,i,s,o){const a=nf.distanceSqToPoint(r);if(a<t){const l=new H;nf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ta extends hn{constructor(e,t,n=zi,i,s,o,a=Qt,l=Qt,c,u=hr,h=1){if(u!==hr&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bS extends Ta{constructor(e,t=zi,n=hs,i,s,o=Qt,a=Qt,l,c=hr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ig extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lc extends xi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const x=m*f-o;for(let y=0;y<c;y++){const S=y*h-s;g.push(S,-x,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const y=x+c*m,S=x+c*(m+1),T=x+1+c*(m+1),A=x+1+c*m;d.push(y,S,A),d.push(S,T,A)}this.setIndex(d),this.setAttribute("position",new Ri(g,3)),this.setAttribute("normal",new Ri(_,3)),this.setAttribute("uv",new Ri(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class wS extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ql extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lm,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yi extends Ql{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class AS extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RS extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ec(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function CS(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rg(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function sg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ea{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class PS extends Ea{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rm,endingEnd:rm}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sm:s=e,a=2*t-n;break;case om:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sm:o=e,l=2*n-t;break;case om:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,x=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*p+(1.5+d)*_+.5*g,S=d*p-d*_;for(let T=0;T!==a;++T)s[T]=m*o[u+T]+x*o[c+T]+y*o[l+T]+S*o[h+T];return s}}class LS extends Ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class DS extends Ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ci{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ec(t,this.TimeBufferType),this.values=ec(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ec(e.times,Array),values:ec(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new DS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new LS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new PS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ua:t=this.InterpolantFactoryMethodDiscrete;break;case ha:t=this.InterpolantFactoryMethodLinear;break;case xh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&E0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xh,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ci.prototype.ValueTypeName="",Ci.prototype.TimeBufferType=Float32Array,Ci.prototype.ValueBufferType=Float32Array,Ci.prototype.DefaultInterpolation=ha;class _o extends Ci{constructor(e,t,n){super(e,t,n)}}_o.prototype.ValueTypeName="bool",_o.prototype.ValueBufferType=Array,_o.prototype.DefaultInterpolation=ua,_o.prototype.InterpolantFactoryMethodLinear=void 0,_o.prototype.InterpolantFactoryMethodSmooth=void 0;class og extends Ci{constructor(e,t,n,i){super(e,t,n,i)}}og.prototype.ValueTypeName="color";class vo extends Ci{constructor(e,t,n,i){super(e,t,n,i)}}vo.prototype.ValueTypeName="number";class IS extends Ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ur.slerpFlat(s,0,o,c-a,o,c,l);return s}}class So extends Ci{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new IS(this.times,this.values,this.getValueSize(),e)}}So.prototype.ValueTypeName="quaternion",So.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends Ci{constructor(e,t,n){super(e,t,n)}}xo.prototype.ValueTypeName="string",xo.prototype.ValueBufferType=Array,xo.prototype.DefaultInterpolation=ua,xo.prototype.InterpolantFactoryMethodLinear=void 0,xo.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends Ci{constructor(e,t,n,i){super(e,t,n,i)}}yo.prototype.ValueTypeName="vector";class NS{constructor(e="",t=-1,n=[],i=p0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(OS(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Ci.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=CS(l);l=rg(l,1,u),c=rg(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new vo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Oe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Xe("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const p=[],m=[];sg(d,p,m,g),p.length!==0&&_.push(new h(f,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let x=0;x!==f[g].morphTargets.length;++x){const y=f[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}i.push(new vo(".morphTargetInfluence["+_+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(yo,d+".position",f,"pos",i),n(So,d+".quaternion",f,"rot",i),n(yo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function US(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vo;case"vector":case"vector2":case"vector3":case"vector4":return yo;case"color":return og;case"quaternion":return So;case"bool":case"boolean":return _o;case"string":return xo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function OS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=US(r.type);if(r.times===void 0){const t=[],n=[];sg(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const vr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class FS{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const BS=new FS;class Mo{constructor(e){this.manager=e!==void 0?e:BS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sr={};class kS extends Error{constructor(e,t){super(e),this.response=t}}class ag extends Mo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=vr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Sr[e]!==void 0){Sr[e].push({onLoad:t,onProgress:n,onError:i});return}Sr[e]=[],Sr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Sr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){x();function x(){h.read().then(({done:y,value:S})=>{if(y)m.close();else{_+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,b=u.length;A<b;A++){const C=u[A];C.onProgress&&C.onProgress(T)}m.enqueue(S),x()}},y=>{m.error(y)})}}});return new Response(p)}else throw new kS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{vr.add(`file:${e}`,c);const u=Sr[e];delete Sr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Sr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Sr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const To=new WeakMap;class zS extends Mo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=vr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=To.get(o);h===void 0&&(h=[],To.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=fa("img");function l(){u(),t&&t(this);const h=To.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}To.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),vr.remove(`image:${e}`);const f=To.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}To.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class VS extends Mo{constructor(e){super(e)}load(e,t,n,i){const s=new hn,o=new zS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class rf extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const sf=new tt,lg=new H,cg=new H;class of{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lg.setFromMatrixPosition(e.matrixWorld),t.position.copy(lg),cg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cg),t.updateMatrixWorld(),sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class HS extends of{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=eo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class GS extends rf{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new HS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class WS extends of{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0}}class XS extends rf{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new WS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class tc extends Nm{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qS extends of{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ug extends rf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new qS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ba{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const af=new WeakMap;class YS extends Mo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=vr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(af.has(o)===!0)i&&i(af.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return vr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),af.set(l,c),vr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});vr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class KS extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lf="\\[\\]\\.:\\/",$S=new RegExp("["+lf+"]","g"),cf="[^"+lf+"]",jS="[^"+lf.replace("\\.","")+"]",ZS=/((?:WC+[\/:])*)/.source.replace("WC",cf),JS=/(WCOD+)?/.source.replace("WCOD",jS),QS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cf),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cf),tx=new RegExp("^"+ZS+JS+QS+ex+"$"),nx=["material","materials","bones","map"];class ix{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($S,"")}static parseTrackName(e){const t=tx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);nx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=ix,Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray],Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function hg(r,e,t,n){const i=rx(n);switch(t){case nm:return r*e;case Bu:return r*e/i.components*i.byteLength;case ku:return r*e/i.components*i.byteLength;case Zs:return r*e*2/i.components*i.byteLength;case zu:return r*e*2/i.components*i.byteLength;case im:return r*e*3/i.components*i.byteLength;case _i:return r*e*4/i.components*i.byteLength;case Vu:return r*e*4/i.components*i.byteLength;case xl:case yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ml:case Tl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gu:case Xu:return Math.max(r,16)*Math.max(e,8)/4;case Hu:case Wu:return Math.max(r,8)*Math.max(e,8)/2;case qu:case Yu:case $u:case ju:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ku:case Zu:case Ju:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case th:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case nh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ih:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case oh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case dh:case ph:case mh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case gh:case _h:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vh:case Sh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rx(r){switch(r){case ri:case Jp:return{byteLength:1,components:1};case la:case Qp:case ur:return{byteLength:2,components:1};case Ou:case Fu:return{byteLength:2,components:4};case zi:case Uu:case gi:return{byteLength:4,components:1};case em:case tm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}})),typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function sx(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ax=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,px=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ry=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,my=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ry=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ny=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,By=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ky=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:ox,alphahash_pars_fragment:ax,alphamap_fragment:lx,alphamap_pars_fragment:cx,alphatest_fragment:ux,alphatest_pars_fragment:hx,aomap_fragment:fx,aomap_pars_fragment:dx,batching_pars_vertex:px,batching_vertex:mx,begin_vertex:gx,beginnormal_vertex:_x,bsdfs:vx,iridescence_fragment:Sx,bumpmap_pars_fragment:xx,clipping_planes_fragment:yx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:Ex,color_fragment:bx,color_pars_fragment:wx,color_pars_vertex:Ax,color_vertex:Rx,common:Cx,cube_uv_reflection_fragment:Px,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Dx,displacementmap_vertex:Ix,emissivemap_fragment:Nx,emissivemap_pars_fragment:Ux,colorspace_fragment:Ox,colorspace_pars_fragment:Fx,envmap_fragment:Bx,envmap_common_pars_fragment:kx,envmap_pars_fragment:zx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:Jx,envmap_vertex:Hx,fog_vertex:Gx,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:qx,gradientmap_pars_fragment:Yx,lightmap_pars_fragment:Kx,lights_lambert_fragment:$x,lights_lambert_pars_fragment:jx,lights_pars_begin:Zx,lights_toon_fragment:Qx,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:ry,lights_fragment_begin:sy,lights_fragment_maps:oy,lights_fragment_end:ay,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:hy,map_fragment:fy,map_pars_fragment:dy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:_y,morphinstance_vertex:vy,morphcolor_vertex:Sy,morphnormal_vertex:xy,morphtarget_pars_vertex:yy,morphtarget_vertex:My,normal_fragment_begin:Ty,normal_fragment_maps:Ey,normal_pars_fragment:by,normal_pars_vertex:wy,normal_vertex:Ay,normalmap_pars_fragment:Ry,clearcoat_normal_fragment_begin:Cy,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Dy,opaque_fragment:Iy,packing:Ny,premultiplied_alpha_fragment:Uy,project_vertex:Oy,dithering_fragment:Fy,dithering_pars_fragment:By,roughnessmap_fragment:ky,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Hy,shadowmap_vertex:Gy,shadowmask_pars_fragment:Wy,skinbase_vertex:Xy,skinning_pars_vertex:qy,skinning_vertex:Yy,skinnormal_vertex:Ky,specularmap_fragment:$y,specularmap_pars_fragment:jy,tonemapping_fragment:Zy,tonemapping_pars_fragment:Jy,transmission_fragment:Qy,transmission_pars_fragment:eM,uv_pars_fragment:tM,uv_pars_vertex:nM,uv_vertex:iM,worldpos_vertex:rM,background_vert:sM,background_frag:oM,backgroundCube_vert:aM,backgroundCube_frag:lM,cube_vert:cM,cube_frag:uM,depth_vert:hM,depth_frag:fM,distance_vert:dM,distance_frag:pM,equirect_vert:mM,equirect_frag:gM,linedashed_vert:_M,linedashed_frag:vM,meshbasic_vert:SM,meshbasic_frag:xM,meshlambert_vert:yM,meshlambert_frag:MM,meshmatcap_vert:TM,meshmatcap_frag:EM,meshnormal_vert:bM,meshnormal_frag:wM,meshphong_vert:AM,meshphong_frag:RM,meshphysical_vert:CM,meshphysical_frag:PM,meshtoon_vert:LM,meshtoon_frag:DM,points_vert:IM,points_frag:NM,shadow_vert:UM,shadow_frag:OM,sprite_vert:FM,sprite_frag:BM},me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ki={basic:{uniforms:Dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Dn([me.points,me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Dn([me.common,me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Dn([me.sprite,me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Dn([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Dn([me.lights,me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ki.physical={uniforms:Dn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const nc={r:0,b:0,g:0},xs=new Zi,kM=new tt;function zM(r,e,t,n,i,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function _(y){let S=!1;const T=g(y);T===null?m(a,l):T&&T.isColor&&(m(T,1),S=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===_l)?(u===void 0&&(u=new ai(new La(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:fo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xs.copy(S.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(xs)),u.material.toneMapped=ft.getTransfer(T.colorSpace)!==yt,(h!==T||f!==T.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ai(new lc(2,2),new qi({name:"BackgroundMaterial",uniforms:fo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ft.getTransfer(T.colorSpace)!==yt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,S){y.getRGB(nc,Im(r)),n.buffers.color.setClear(nc.r,nc.g,nc.b,S,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:p,dispose:x}}function VM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(E,P,I,F,z){let X=!1;const k=h(F,I,P);s!==k&&(s=k,c(s.object)),X=d(E,F,I,z),X&&g(E,F,I,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(E,P,I,F),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function u(E){return r.deleteVertexArray(E)}function h(E,P,I){const F=I.wireframe===!0;let z=n[E.id];z===void 0&&(z={},n[E.id]=z);let X=z[P.id];X===void 0&&(X={},z[P.id]=X);let k=X[F];return k===void 0&&(k=f(l()),X[F]=k),k}function f(E){const P=[],I=[],F=[];for(let z=0;z<t;z++)P[z]=0,I[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:F,object:E,attributes:{},index:null}}function d(E,P,I,F){const z=s.attributes,X=P.attributes;let k=0;const B=I.getAttributes();for(const G in B)if(B[G].location>=0){const L=z[G];let te=X[G];if(te===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(te=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(te=E.instanceColor)),L===void 0||L.attribute!==te||te&&L.data!==te.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function g(E,P,I,F){const z={},X=P.attributes;let k=0;const B=I.getAttributes();for(const G in B)if(B[G].location>=0){let L=X[G];L===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(L=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(L=E.instanceColor));const te={};te.attribute=L,L&&L.data&&(te.data=L.data),z[G]=te,k++}s.attributes=z,s.attributesNum=k,s.index=F}function _(){const E=s.newAttributes;for(let P=0,I=E.length;P<I;P++)E[P]=0}function p(E){m(E,0)}function m(E,P){const I=s.newAttributes,F=s.enabledAttributes,z=s.attributeDivisors;I[E]=1,F[E]===0&&(r.enableVertexAttribArray(E),F[E]=1),z[E]!==P&&(r.vertexAttribDivisor(E,P),z[E]=P)}function x(){const E=s.newAttributes,P=s.enabledAttributes;for(let I=0,F=P.length;I<F;I++)P[I]!==E[I]&&(r.disableVertexAttribArray(I),P[I]=0)}function y(E,P,I,F,z,X,k){k===!0?r.vertexAttribIPointer(E,P,I,z,X):r.vertexAttribPointer(E,P,I,F,z,X)}function S(E,P,I,F){_();const z=F.attributes,X=I.getAttributes(),k=P.defaultAttributeValues;for(const B in X){const G=X[B];if(G.location>=0){let ee=z[B];if(ee===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(ee=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(ee=E.instanceColor)),ee!==void 0){const L=ee.normalized,te=ee.itemSize,Pe=e.get(ee);if(Pe===void 0)continue;const Ie=Pe.buffer,Re=Pe.type,ge=Pe.bytesPerElement,$=Re===r.INT||Re===r.UNSIGNED_INT||ee.gpuType===Uu;if(ee.isInterleavedBufferAttribute){const J=ee.data,ue=J.stride,Le=ee.offset;if(J.isInstancedInterleavedBuffer){for(let _e=0;_e<G.locationSize;_e++)m(G.location+_e,J.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _e=0;_e<G.locationSize;_e++)p(G.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let _e=0;_e<G.locationSize;_e++)y(G.location+_e,te/G.locationSize,Re,L,ue*ge,(Le+te/G.locationSize*_e)*ge,$)}else{if(ee.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)m(G.location+J,ee.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let J=0;J<G.locationSize;J++)p(G.location+J);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let J=0;J<G.locationSize;J++)y(G.location+J,te/G.locationSize,Re,L,te*ge,te/G.locationSize*J*ge,$)}}else if(k!==void 0){const L=k[B];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(G.location,L);break;case 3:r.vertexAttrib3fv(G.location,L);break;case 4:r.vertexAttrib4fv(G.location,L);break;default:r.vertexAttrib1fv(G.location,L)}}}}x()}function T(){C();for(const E in n){const P=n[E];for(const I in P){const F=P[I];for(const z in F)u(F[z].object),delete F[z];delete P[I]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const I in P){const F=P[I];for(const z in F)u(F[z].object),delete F[z];delete P[I]}delete n[E.id]}function b(E){for(const P in n){const I=n[P];if(I[E.id]===void 0)continue;const F=I[E.id];for(const z in F)u(F[z].object),delete F[z];delete I[E.id]}}function C(){v(),o=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function HM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function GM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==_i&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ri&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==gi&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,maxSamples:T,samples:A}}function WM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new vs,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,y=x*4;let S=m.clippingState||null;l.value=S,S=u(g,f,y,d);for(let T=0;T!==y;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,S=d;y!==_;++y,S+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function XM(r){let e=new WeakMap;function t(o,a){return a===Iu?o.mapping=hs:a===Nu&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Iu||a===Nu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bm(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Hr=4,dg=[.125,.215,.35,.446,.526,.582],ys=20,qM=256,wa=new tc,pg=new $e;let uf=null,hf=0,ff=0,df=!1;const YM=new H;class pf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=YM}=s;uf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uf,hf,ff),this._renderer.xr.enabled=df,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ur,format:_i,colorSpace:Pn,depthBuffer:!1},i=mg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KM(s)),this._blurMaterial=jM(s,e,t),this._ggxMaterial=$M(s,e,t)}return i}_compileMaterial(e){const t=new ai(new xi,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,i,s){const l=new In(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(pg),h.toneMapping=Bi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new La,new ms({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,m=!0):(p.color.copy(pg),m=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const T=this._cubeSize;Eo(i,S*T,y>2?T:0,T,T),h.setRenderTarget(i),m&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===hs||e.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gg());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Hr?n-g+Hr:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Eo(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(a,wa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Eo(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(a,wa)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ys-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ys;p>ys&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ys}`);const m=[];let x=0;for(let b=0;b<ys;++b){const C=b/_,v=Math.exp(-C*C/2);m.push(v),b===0?x+=v:b<p&&(x+=2*v)}for(let b=0;b<m.length;b++)m[b]=m[b]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const S=this._sizeLods[i],T=3*S*(i>y-Hr?i-y+Hr:0),A=4*(this._cubeSize-S);Eo(t,T,A,3*S,2*S),l.setRenderTarget(t),l.render(h,wa)}}function KM(r){const e=[],t=[],n=[];let i=r;const s=r-Hr+1+dg.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Hr?l=dg[o-r+Hr-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*d),y=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let A=0;A<d;A++){const b=A%3*2/3-1,C=A>2?0:-1,v=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];x.set(v,_*g*A),y.set(f,p*g*A);const E=[A,A,A,A,A,A];S.set(E,m*g*A)}const T=new xi;T.setAttribute("position",new Ln(x,_)),T.setAttribute("uv",new Ln(y,p)),T.setAttribute("faceIndex",new Ln(S,m)),n.push(new ai(T,null)),i>Hr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function mg(r,e,t){const n=new Hi(r,e,t);return n.texture.mapping=_l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $M(r,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function jM(r,e,t){const n=new Float32Array(ys),i=new H(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function gg(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function _g(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Iu||l===Nu,u=l===hs||l===$s;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new pf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new pf(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function JM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&da("WebGLRenderer: "+n+" extension not supported."),i}}}function QM(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,S=x.length;y<S;y+=3){const T=x[y+0],A=x[y+1],b=x[y+2];f.push(T,A,A,b,b,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const T=y+0,A=y+1,b=y+2;f.push(T,A,A,b,b,T)}}else return;const p=new(hm(f)?Cm:Rm)(f,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function eT(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function h(f,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=d[x]*_[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nT(r,e,t){const n=new WeakMap,i=new It;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let d=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",d)};f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let T=a.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*A*4*h),C=new _m(b,T,A,h);C.type=gi,C.needsUpdate=!0;const v=S*4;for(let E=0;E<h;E++){const P=m[E],I=x[E],F=y[E],z=T*A*4*E;for(let X=0;X<P.count;X++){const k=X*v;g===!0&&(i.fromBufferAttribute(P,X),b[z+k+0]=i.x,b[z+k+1]=i.y,b[z+k+2]=i.z,b[z+k+3]=0),_===!0&&(i.fromBufferAttribute(I,X),b[z+k+4]=i.x,b[z+k+5]=i.y,b[z+k+6]=i.z,b[z+k+7]=0),p===!0&&(i.fromBufferAttribute(F,X),b[z+k+8]=i.x,b[z+k+9]=i.y,b[z+k+10]=i.z,b[z+k+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new dt(T,A)},n.set(a,f),a.addEventListener("dispose",d)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function iT(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const rT={[Gp]:"LINEAR_TONE_MAPPING",[Wp]:"REINHARD_TONE_MAPPING",[Xp]:"CINEON_TONE_MAPPING",[Du]:"ACES_FILMIC_TONE_MAPPING",[Yp]:"AGX_TONE_MAPPING",[Kp]:"NEUTRAL_TONE_MAPPING",[qp]:"CUSTOM_TONE_MAPPING"};function sT(r,e,t,n,i){const s=new Hi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new Hi(e,t,{type:ur,depthBuffer:!1,stencilBuffer:!1}),a=new xi;a.setAttribute("position",new Ri([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ri([0,2,0,0,2,0],2));const l=new wS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ai(a,l),u=new tc(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,_=null,p=[],m=!1;this.setSize=function(x,y){s.setSize(x,y),o.setSize(x,y);for(let S=0;S<p.length;S++){const T=p[S];T.setSize&&T.setSize(x,y)}},this.setEffects=function(x){p=x,m=p.length>0&&p[0].isRenderPass===!0;const y=s.width,S=s.height;for(let T=0;T<p.length;T++){const A=p[T];A.setSize&&A.setSize(y,S)}},this.begin=function(x,y){if(d||x.toneMapping===Bi&&p.length===0)return!1;if(_=y,y!==null){const S=y.width,T=y.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return m===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=Bi,!0},this.hasRenderPass=function(){return m},this.end=function(x,y){x.toneMapping=g,d=!0;let S=s,T=o;for(let A=0;A<p.length;A++){const b=p[A];if(b.enabled!==!1&&(b.render(x,T,S,y),b.needsSwap!==!1)){const C=S;S=T,T=C}}if(h!==x.outputColorSpace||f!==x.toneMapping){h=x.outputColorSpace,f=x.toneMapping,l.defines={},ft.getTransfer(h)===yt&&(l.defines.SRGB_TRANSFER="");const A=rT[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(_),x.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const vg=new hn,mf=new Ta(1,1),Sg=new _m,xg=new $0,yg=new Fm,Mg=[],Tg=[],Eg=new Float32Array(16),bg=new Float32Array(9),wg=new Float32Array(4);function bo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Mg[i];if(s===void 0&&(s=new Float32Array(i),Mg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function rc(r,e){let t=Tg[e];t===void 0&&(t=new Int32Array(e),Tg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function oT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function aT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function lT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function uT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;wg.set(n),r.uniformMatrix2fv(this.addr,!1,wg),nn(t,n)}}function hT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;bg.set(n),r.uniformMatrix3fv(this.addr,!1,bg),nn(t,n)}}function fT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Eg.set(n),r.uniformMatrix4fv(this.addr,!1,Eg),nn(t,n)}}function dT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function pT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function gT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function _T(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function ST(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function xT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function yT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mf.compareFunction=t.isReversedDepthBuffer()?Th:Mh,s=mf):s=vg,t.setTexture2D(e||s,i)}function MT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xg,i)}function TT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yg,i)}function ET(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sg,i)}function bT(r){switch(r){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return hT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return ST;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return ET}}function wT(r,e){r.uniform1fv(this.addr,e)}function AT(r,e){const t=bo(e,this.size,2);r.uniform2fv(this.addr,t)}function RT(r,e){const t=bo(e,this.size,3);r.uniform3fv(this.addr,t)}function CT(r,e){const t=bo(e,this.size,4);r.uniform4fv(this.addr,t)}function PT(r,e){const t=bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function LT(r,e){const t=bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function DT(r,e){const t=bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function IT(r,e){r.uniform1iv(this.addr,e)}function NT(r,e){r.uniform2iv(this.addr,e)}function UT(r,e){r.uniform3iv(this.addr,e)}function OT(r,e){r.uniform4iv(this.addr,e)}function FT(r,e){r.uniform1uiv(this.addr,e)}function BT(r,e){r.uniform2uiv(this.addr,e)}function kT(r,e){r.uniform3uiv(this.addr,e)}function zT(r,e){r.uniform4uiv(this.addr,e)}function VT(r,e,t){const n=this.cache,i=e.length,s=rc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=mf:o=vg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function HT(r,e,t){const n=this.cache,i=e.length,s=rc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||xg,s[o])}function GT(r,e,t){const n=this.cache,i=e.length,s=rc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||yg,s[o])}function WT(r,e,t){const n=this.cache,i=e.length,s=rc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Sg,s[o])}function XT(r){switch(r){case 5126:return wT;case 35664:return AT;case 35665:return RT;case 35666:return CT;case 35674:return PT;case 35675:return LT;case 35676:return DT;case 5124:case 35670:return IT;case 35667:case 35671:return NT;case 35668:case 35672:return UT;case 35669:case 35673:return OT;case 5125:return FT;case 36294:return BT;case 36295:return kT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return WT}}class qT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bT(t.type)}}class YT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XT(t.type)}}class KT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function Ag(r,e){r.seq.push(e),r.map[e.id]=e}function $T(r,e,t){const n=r.name,i=n.length;for(gf.lastIndex=0;;){const s=gf.exec(n),o=gf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ag(t,c===void 0?new qT(a,r,e):new YT(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new KT(a),Ag(t,h)),t=h}}}class sc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);$T(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Rg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const jT=37297;let ZT=0;function JT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Cg=new Qe;function QT(r){ft._getMatrix(Cg,ft.workingColorSpace,r);const e=`mat3( ${Cg.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case El:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Pg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+JT(r.getShaderSource(e),a)}else return s}function eE(r,e){const t=QT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tE={[Gp]:"Linear",[Wp]:"Reinhard",[Xp]:"Cineon",[Du]:"ACESFilmic",[Yp]:"AgX",[Kp]:"Neutral",[qp]:"Custom"};function nE(r,e){const t=tE[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oc=new H;function iE(){ft.getLuminanceCoefficients(oc);const r=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function sE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oE(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Aa(r){return r!==""}function Lg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aE=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(r){return r.replace(aE,cE)}const lE=new Map;function cE(r,e){let t=et[e];if(t===void 0){const n=lE.get(e);if(n!==void 0)t=et[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _f(t)}const uE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ig(r){return r.replace(uE,hE)}function hE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ng(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const fE={[gl]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function dE(r){return fE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pE={[hs]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[_l]:"ENVMAP_TYPE_CUBE_UV"};function mE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":pE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const gE={[$s]:"ENVMAP_MODE_REFRACTION"};function _E(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":gE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vE={[Hp]:"ENVMAP_BLENDING_MULTIPLY",[h0]:"ENVMAP_BLENDING_MIX",[f0]:"ENVMAP_BLENDING_ADD"};function SE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vE[r.combine]||"ENVMAP_BLENDING_NONE"}function xE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yE(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dE(t),c=mE(t),u=_E(t),h=SE(t),f=xE(t),d=rE(t),g=sE(s),_=i.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Aa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Aa).join(`
`),m.length>0&&(m+=`
`)):(p=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),m=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?et.tonemapping_pars_fragment:"",t.toneMapping!==Bi?nE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,eE("linearToOutputTexel",t.outputColorSpace),iE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),o=_f(o),o=Lg(o,t),o=Dg(o,t),a=_f(a),a=Lg(a,t),a=Dg(a,t),o=Ig(o),a=Ig(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+p+o,S=x+m+a,T=Rg(i,i.VERTEX_SHADER,y),A=Rg(i,i.FRAGMENT_SHADER,S);i.attachShader(_,T),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(T)||"",z=i.getShaderInfoLog(A)||"",X=I.trim(),k=F.trim(),B=z.trim();let G=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,A);else{const L=Pg(i,T,"vertex"),te=Pg(i,A,"fragment");Xe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+L+`
`+te)}else X!==""?Oe("WebGLProgram: Program Info Log:",X):(k===""||B==="")&&(ee=!1);ee&&(P.diagnostics={runnable:G,programLog:X,vertexShader:{log:k,prefix:p},fragmentShader:{log:B,prefix:m}})}i.deleteShader(T),i.deleteShader(A),C=new sc(i,_),v=oE(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(_,jT)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let ME=0;class TE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new EE(e),t.set(e,n)),n}}class EE{constructor(e){this.id=ME++,this.code=e,this.usedTimes=0}}function bE(r,e,t,n,i,s,o){const a=new xm,l=new TE,c=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,E,P,I,F){const z=I.fog,X=F.geometry,k=v.isMeshStandardMaterial?I.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),G=B&&B.mapping===_l?B.image.height:null,ee=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Oe("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const L=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=L!==void 0?L.length:0;let Pe=0;X.morphAttributes.position!==void 0&&(Pe=1),X.morphAttributes.normal!==void 0&&(Pe=2),X.morphAttributes.color!==void 0&&(Pe=3);let Ie,Re,ge,$;if(ee){const ve=Ki[ee];Ie=ve.vertexShader,Re=ve.fragmentShader}else Ie=v.vertexShader,Re=v.fragmentShader,l.update(v),ge=l.getVertexShaderID(v),$=l.getFragmentShaderID(v);const J=r.getRenderTarget(),ue=r.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,ke=!!v.map,ut=!!v.matcap,be=!!B,He=!!v.aoMap,je=!!v.lightMap,Be=!!v.bumpMap,W=!!v.normalMap,N=!!v.displacementMap,_t=!!v.emissiveMap,nt=!!v.metalnessMap,Ge=!!v.roughnessMap,Me=v.anisotropy>0,R=v.clearcoat>0,M=v.dispersion>0,U=v.iridescence>0,j=v.sheen>0,Z=v.transmission>0,K=Me&&!!v.anisotropyMap,ye=R&&!!v.clearcoatMap,se=R&&!!v.clearcoatNormalMap,we=R&&!!v.clearcoatRoughnessMap,Ee=U&&!!v.iridescenceMap,re=U&&!!v.iridescenceThicknessMap,oe=j&&!!v.sheenColorMap,Te=j&&!!v.sheenRoughnessMap,Ae=!!v.specularMap,ae=!!v.specularColorMap,qe=!!v.specularIntensityMap,D=Z&&!!v.transmissionMap,he=Z&&!!v.thicknessMap,ie=!!v.gradientMap,fe=!!v.alphaMap,ne=v.alphaTest>0,Q=!!v.alphaHash,ce=!!v.extensions;let Fe=Bi;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const pt={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:Ie,fragmentShader:Re,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Pn,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:ut,envMap:be,envMapMode:be&&B.mapping,envMapCubeUVHeight:G,aoMap:He,lightMap:je,bumpMap:Be,normalMap:W,displacementMap:N,emissiveMap:_t,normalMapObjectSpace:W&&v.normalMapType===_0,normalMapTangentSpace:W&&v.normalMapType===lm,metalnessMap:nt,roughnessMap:Ge,anisotropy:Me,anisotropyMap:K,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:se,clearcoatRoughnessMap:we,dispersion:M,iridescence:U,iridescenceMap:Ee,iridescenceThicknessMap:re,sheen:j,sheenColorMap:oe,sheenRoughnessMap:Te,specularMap:Ae,specularColorMap:ae,specularIntensityMap:qe,transmission:Z,transmissionMap:D,thicknessMap:he,gradientMap:ie,opaque:v.transparent===!1&&v.blending===Ys&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:ne,alphaHash:Q,combine:v.combine,mapUv:ke&&_(v.map.channel),aoMapUv:He&&_(v.aoMap.channel),lightMapUv:je&&_(v.lightMap.channel),bumpMapUv:Be&&_(v.bumpMap.channel),normalMapUv:W&&_(v.normalMap.channel),displacementMapUv:N&&_(v.displacementMap.channel),emissiveMapUv:_t&&_(v.emissiveMap.channel),metalnessMapUv:nt&&_(v.metalnessMap.channel),roughnessMapUv:Ge&&_(v.roughnessMap.channel),anisotropyMapUv:K&&_(v.anisotropyMap.channel),clearcoatMapUv:ye&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(v.sheenRoughnessMap.channel),specularMapUv:Ae&&_(v.specularMap.channel),specularColorMapUv:ae&&_(v.specularColorMap.channel),specularIntensityMapUv:qe&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:he&&_(v.thicknessMap.channel),alphaMapUv:fe&&_(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(W||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(ke||fe),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ue,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===yt,decodeVideoTextureEmissive:_t&&v.emissiveMap.isVideoTexture===!0&&ft.getTransfer(v.emissiveMap.colorSpace)===yt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mi,flipSided:v.side===Wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(x(E,v),y(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),v.push(a.mask)}function S(v){const E=g[v.type];let P;if(E){const I=Ki[E];P=lS.clone(I.uniforms)}else P=v.uniforms;return P}function T(v,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new yE(r,E,v,s),u.push(P),h.set(E,P)),P}function A(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){l.remove(v)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:C}}function wE(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function AE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ug(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Og(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||AE),n.length>1&&n.sort(f||Ug),i.length>1&&i.sort(f||Ug)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function RE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Og,r.set(n,[o])):i>=s.length?(o=new Og,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function CE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new $e};break;case"SpotLight":t={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function PE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let LE=0;function DE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function IE(r){const e=new CE,t=PE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new tt,o=new tt;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,x=0,y=0,S=0,T=0,A=0,b=0;c.sort(DE);for(let v=0,E=c.length;v<E;v++){const P=c[v],I=P.color,F=P.intensity,z=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Zs?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=I.r*F,h+=I.g*F,f+=I.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],F);b++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,G=t.get(P);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=k,d++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(I).multiplyScalar(F),k.distance=z,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;const B=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,B.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=B.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=X,S++}_++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(I).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=k,p++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const B=P.shadow,G=t.get(P);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,G.shadowCameraNear=B.camera.near,G.shadowCameraFar=B.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[m]=k,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==S||C.numSpotMaps!==T||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=S,C.numSpotMaps=T,C.numLightProbes=b,n.version=LE++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(y.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Fg(r){const e=new IE(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function NE(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Fg(r),e.set(i,[a])):s>=o.length?(a=new Fg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const UE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FE=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],BE=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Bg=new tt,Ra=new H,vf=new H;function kE(r,e,t){let n=new Qh;const i=new dt,s=new dt,o=new It,a=new AS,l=new RS,c={},u=t.maxTextureSize,h={[ar]:Wn,[Wn]:ar,[Mi]:Mi},f=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:UE,fragmentShader:OE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new xi;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ai(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let m=this.type;this.render=function(A,b,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;A.type===qv&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=gl);const v=r.getRenderTarget(),E=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),I=r.state;I.setBlending(lr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=m!==this.type;F&&b.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(X=>X.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,X=A.length;z<X;z++){const k=A[z],B=k.shadow;if(B===void 0){Oe("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const G=B.getFrameExtents();if(i.multiply(G),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/G.x),i.x=s.x*G.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/G.y),i.y=s.y*G.y,B.mapSize.y=s.y)),B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===oa){if(k.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Hi(i.x,i.y,{format:Zs,type:ur,minFilter:en,magFilter:en,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new Ta(i.x,i.y,gi),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=hr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Qt,B.map.depthTexture.magFilter=Qt}else{k.isPointLight?(B.map=new Bm(i.x),B.map.depthTexture=new bS(i.x,zi)):(B.map=new Hi(i.x,i.y),B.map.depthTexture=new Ta(i.x,i.y,zi)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=hr;const L=r.state.buffers.depth.getReversed();this.type===gl?(B.map.depthTexture.compareFunction=L?Th:Mh,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Qt,B.map.depthTexture.magFilter=Qt)}B.camera.updateProjectionMatrix()}const ee=B.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<ee;L++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,L),r.clear();else{L===0&&(r.setRenderTarget(B.map),r.clear());const te=B.getViewport(L);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),I.viewport(o)}if(k.isPointLight){const te=B.camera,Pe=B.matrix,Ie=k.distance||te.far;Ie!==te.far&&(te.far=Ie,te.updateProjectionMatrix()),Ra.setFromMatrixPosition(k.matrixWorld),te.position.copy(Ra),vf.copy(te.position),vf.add(FE[L]),te.up.copy(BE[L]),te.lookAt(vf),te.updateMatrixWorld(),Pe.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Bg.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Bg,te.coordinateSystem,te.reversedDepth)}else B.updateMatrices(k);n=B.getFrustum(),S(b,C,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===oa&&x(B,C),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(v,E,P)};function x(A,b){const C=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hi(i.x,i.y,{format:Zs,type:ur})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,C,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,C,d,_,null)}function y(A,b,C,v){let E=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)E=P;else if(E=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=E.uuid,F=b.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let X=z[F];X===void 0&&(X=E.clone(),z[F]=X,b.addEventListener("dispose",T)),E=X}if(E.visible=b.visible,E.wireframe=b.wireframe,v===oa?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:h[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=r.properties.get(E);I.light=C}return E}function S(A,b,C,v,E){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===oa)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=e.update(A),z=A.material;if(Array.isArray(z)){const X=F.groups;for(let k=0,B=X.length;k<B;k++){const G=X[k],ee=z[G.materialIndex];if(ee&&ee.visible){const L=y(A,ee,v,E);A.onBeforeShadow(r,A,b,C,F,L,G),r.renderBufferDirect(C,null,F,L,A,G),A.onAfterShadow(r,A,b,C,F,L,G)}}}else if(z.visible){const X=y(A,z,v,E);A.onBeforeShadow(r,A,b,C,F,X,null),r.renderBufferDirect(C,null,F,X,A,null),A.onAfterShadow(r,A,b,C,F,X,null)}}const I=A.children;for(let F=0,z=I.length;F<z;F++)S(I[F],b,C,v,E)}function T(A){A.target.removeEventListener("dispose",T);for(const C in c){const v=c[C],E=A.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}const zE={[bu]:wu,[Au]:Pu,[Ru]:Lu,[Ks]:Cu,[wu]:bu,[Pu]:Au,[Lu]:Ru,[Cu]:Ks};function VE(r,e){function t(){let D=!1;const he=new It;let ie=null;const fe=new It(0,0,0,0);return{setMask:function(ne){ie!==ne&&!D&&(r.colorMask(ne,ne,ne,ne),ie=ne)},setLocked:function(ne){D=ne},setClear:function(ne,Q,ce,Fe,pt){pt===!0&&(ne*=Fe,Q*=Fe,ce*=Fe),he.set(ne,Q,ce,Fe),fe.equals(he)===!1&&(r.clearColor(ne,Q,ce,Fe),fe.copy(he))},reset:function(){D=!1,ie=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,ie=null,fe=null,ne=null;return{setReversed:function(Q){if(he!==Q){const ce=e.get("EXT_clip_control");Q?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),he=Q;const Fe=ne;ne=null,this.setClear(Fe)}},getReversed:function(){return he},setTest:function(Q){Q?J(r.DEPTH_TEST):ue(r.DEPTH_TEST)},setMask:function(Q){ie!==Q&&!D&&(r.depthMask(Q),ie=Q)},setFunc:function(Q){if(he&&(Q=zE[Q]),fe!==Q){switch(Q){case bu:r.depthFunc(r.NEVER);break;case wu:r.depthFunc(r.ALWAYS);break;case Au:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case Ru:r.depthFunc(r.EQUAL);break;case Cu:r.depthFunc(r.GEQUAL);break;case Pu:r.depthFunc(r.GREATER);break;case Lu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=Q}},setLocked:function(Q){D=Q},setClear:function(Q){ne!==Q&&(he&&(Q=1-Q),r.clearDepth(Q),ne=Q)},reset:function(){D=!1,ie=null,fe=null,ne=null,he=!1}}}function i(){let D=!1,he=null,ie=null,fe=null,ne=null,Q=null,ce=null,Fe=null,pt=null;return{setTest:function(ve){D||(ve?J(r.STENCIL_TEST):ue(r.STENCIL_TEST))},setMask:function(ve){he!==ve&&!D&&(r.stencilMask(ve),he=ve)},setFunc:function(ve,De,Ze){(ie!==ve||fe!==De||ne!==Ze)&&(r.stencilFunc(ve,De,Ze),ie=ve,fe=De,ne=Ze)},setOp:function(ve,De,Ze){(Q!==ve||ce!==De||Fe!==Ze)&&(r.stencilOp(ve,De,Ze),Q=ve,ce=De,Fe=Ze)},setLocked:function(ve){D=ve},setClear:function(ve){pt!==ve&&(r.clearStencil(ve),pt=ve)},reset:function(){D=!1,he=null,ie=null,fe=null,ne=null,Q=null,ce=null,Fe=null,pt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,x=null,y=null,S=null,T=null,A=null,b=new $e(0,0,0),C=0,v=!1,E=null,P=null,I=null,F=null,z=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=B>=2);let ee=null,L={};const te=r.getParameter(r.SCISSOR_BOX),Pe=r.getParameter(r.VIEWPORT),Ie=new It().fromArray(te),Re=new It().fromArray(Pe);function ge(D,he,ie,fe){const ne=new Uint8Array(4),Q=r.createTexture();r.bindTexture(D,Q),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<ie;ce++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(he+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return Q}const $={};$[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc(Ks),Be(!1),W(Bp),J(r.CULL_FACE),He(lr);function J(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function ue(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Le(D,he){return h[D]!==he?(r.bindFramebuffer(D,he),h[D]=he,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function _e(D,he){let ie=d,fe=!1;if(D){ie=f.get(he),ie===void 0&&(ie=[],f.set(he,ie));const ne=D.textures;if(ie.length!==ne.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,ce=ne.length;Q<ce;Q++)ie[Q]=r.COLOR_ATTACHMENT0+Q;ie.length=ne.length,fe=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,fe=!0);fe&&r.drawBuffers(ie)}function ke(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const ut={[us]:r.FUNC_ADD,[Kv]:r.FUNC_SUBTRACT,[$v]:r.FUNC_REVERSE_SUBTRACT};ut[jv]=r.MIN,ut[Zv]=r.MAX;const be={[Jv]:r.ZERO,[Qv]:r.ONE,[e0]:r.SRC_COLOR,[Tu]:r.SRC_ALPHA,[o0]:r.SRC_ALPHA_SATURATE,[r0]:r.DST_COLOR,[n0]:r.DST_ALPHA,[t0]:r.ONE_MINUS_SRC_COLOR,[Eu]:r.ONE_MINUS_SRC_ALPHA,[s0]:r.ONE_MINUS_DST_COLOR,[i0]:r.ONE_MINUS_DST_ALPHA,[a0]:r.CONSTANT_COLOR,[l0]:r.ONE_MINUS_CONSTANT_COLOR,[c0]:r.CONSTANT_ALPHA,[u0]:r.ONE_MINUS_CONSTANT_ALPHA};function He(D,he,ie,fe,ne,Q,ce,Fe,pt,ve){if(D===lr){_===!0&&(ue(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),D!==Yv){if(D!==p||ve!==v){if((m!==us||S!==us)&&(r.blendEquation(r.FUNC_ADD),m=us,S=us),ve)switch(D){case Ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kp:r.blendFunc(r.ONE,r.ONE);break;case zp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",D);break}else switch(D){case Ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case zp:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vp:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",D);break}x=null,y=null,T=null,A=null,b.set(0,0,0),C=0,p=D,v=ve}return}ne=ne||he,Q=Q||ie,ce=ce||fe,(he!==m||ne!==S)&&(r.blendEquationSeparate(ut[he],ut[ne]),m=he,S=ne),(ie!==x||fe!==y||Q!==T||ce!==A)&&(r.blendFuncSeparate(be[ie],be[fe],be[Q],be[ce]),x=ie,y=fe,T=Q,A=ce),(Fe.equals(b)===!1||pt!==C)&&(r.blendColor(Fe.r,Fe.g,Fe.b,pt),b.copy(Fe),C=pt),p=D,v=!1}function je(D,he){D.side===Mi?ue(r.CULL_FACE):J(r.CULL_FACE);let ie=D.side===Wn;he&&(ie=!ie),Be(ie),D.blending===Ys&&D.transparent===!1?He(lr):He(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const fe=D.stencilWrite;a.setTest(fe),fe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_t(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){E!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),E=D)}function W(D){D!==Wv?(J(r.CULL_FACE),D!==P&&(D===Bp?r.cullFace(r.BACK):D===Xv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ue(r.CULL_FACE),P=D}function N(D){D!==I&&(k&&r.lineWidth(D),I=D)}function _t(D,he,ie){D?(J(r.POLYGON_OFFSET_FILL),(F!==he||z!==ie)&&(r.polygonOffset(he,ie),F=he,z=ie)):ue(r.POLYGON_OFFSET_FILL)}function nt(D){D?J(r.SCISSOR_TEST):ue(r.SCISSOR_TEST)}function Ge(D){D===void 0&&(D=r.TEXTURE0+X-1),ee!==D&&(r.activeTexture(D),ee=D)}function Me(D,he,ie){ie===void 0&&(ee===null?ie=r.TEXTURE0+X-1:ie=ee);let fe=L[ie];fe===void 0&&(fe={type:void 0,texture:void 0},L[ie]=fe),(fe.type!==D||fe.texture!==he)&&(ee!==ie&&(r.activeTexture(ie),ee=ie),r.bindTexture(D,he||$[D]),fe.type=D,fe.texture=he)}function R(){const D=L[ee];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function j(){try{r.texSubImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function Z(){try{r.texSubImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function se(){try{r.texStorage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function we(){try{r.texStorage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function Ee(){try{r.texImage2D(...arguments)}catch(D){Xe("WebGLState:",D)}}function re(){try{r.texImage3D(...arguments)}catch(D){Xe("WebGLState:",D)}}function oe(D){Ie.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ie.copy(D))}function Te(D){Re.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Re.copy(D))}function Ae(D,he){let ie=c.get(he);ie===void 0&&(ie=new WeakMap,c.set(he,ie));let fe=ie.get(D);fe===void 0&&(fe=r.getUniformBlockIndex(he,D.name),ie.set(D,fe))}function ae(D,he){const fe=c.get(he).get(D);l.get(he)!==fe&&(r.uniformBlockBinding(he,fe,D.__bindingPointIndex),l.set(he,fe))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,L={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,x=null,y=null,S=null,T=null,A=null,b=new $e(0,0,0),C=0,v=!1,E=null,P=null,I=null,F=null,z=null,Ie.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:ue,bindFramebuffer:Le,drawBuffers:_e,useProgram:ke,setBlending:He,setMaterial:je,setFlipSided:Be,setCullFace:W,setLineWidth:N,setPolygonOffset:_t,setScissorTest:nt,activeTexture:Ge,bindTexture:Me,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:U,texImage2D:Ee,texImage3D:re,updateUBOMapping:Ae,uniformBlockBinding:ae,texStorage2D:se,texStorage3D:we,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:K,compressedTexSubImage3D:ye,scissor:oe,viewport:Te,reset:qe}}function HE(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return d?new OffscreenCanvas(R,M):fa("canvas")}function _(R,M,U){let j=1;const Z=Me(R);if((Z.width>U||Z.height>U)&&(j=U/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(j*Z.width),ye=Math.floor(j*Z.height);h===void 0&&(h=g(K,ye));const se=M?g(K,ye):h;return se.width=K,se.height=ye,se.getContext("2d").drawImage(R,0,0,K,ye),Oe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+ye+")."),se}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,M,U,j,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===r.RED&&(U===r.FLOAT&&(K=r.R32F),U===r.HALF_FLOAT&&(K=r.R16F),U===r.UNSIGNED_BYTE&&(K=r.R8)),M===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(K=r.R8UI),U===r.UNSIGNED_SHORT&&(K=r.R16UI),U===r.UNSIGNED_INT&&(K=r.R32UI),U===r.BYTE&&(K=r.R8I),U===r.SHORT&&(K=r.R16I),U===r.INT&&(K=r.R32I)),M===r.RG&&(U===r.FLOAT&&(K=r.RG32F),U===r.HALF_FLOAT&&(K=r.RG16F),U===r.UNSIGNED_BYTE&&(K=r.RG8)),M===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(K=r.RG8UI),U===r.UNSIGNED_SHORT&&(K=r.RG16UI),U===r.UNSIGNED_INT&&(K=r.RG32UI),U===r.BYTE&&(K=r.RG8I),U===r.SHORT&&(K=r.RG16I),U===r.INT&&(K=r.RG32I)),M===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(K=r.RGB8UI),U===r.UNSIGNED_SHORT&&(K=r.RGB16UI),U===r.UNSIGNED_INT&&(K=r.RGB32UI),U===r.BYTE&&(K=r.RGB8I),U===r.SHORT&&(K=r.RGB16I),U===r.INT&&(K=r.RGB32I)),M===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),U===r.UNSIGNED_INT&&(K=r.RGBA32UI),U===r.BYTE&&(K=r.RGBA8I),U===r.SHORT&&(K=r.RGBA16I),U===r.INT&&(K=r.RGBA32I)),M===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),M===r.RGBA){const ye=Z?El:ft.getTransfer(j);U===r.FLOAT&&(K=r.RGBA32F),U===r.HALF_FLOAT&&(K=r.RGBA16F),U===r.UNSIGNED_BYTE&&(K=ye===yt?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(R,M){let U;return R?M===null||M===zi||M===ca?U=r.DEPTH24_STENCIL8:M===gi?U=r.DEPTH32F_STENCIL8:M===la&&(U=r.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zi||M===ca?U=r.DEPTH_COMPONENT24:M===gi?U=r.DEPTH_COMPONENT32F:M===la&&(U=r.DEPTH_COMPONENT16),U}function T(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&u.delete(M)}function b(R){const M=R.target;M.removeEventListener("dispose",b),E(M)}function C(R){const M=n.get(R);if(M.__webglInit===void 0)return;const U=R.source,j=f.get(U);if(j){const Z=j[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&v(R),Object.keys(j).length===0&&f.delete(U)}n.remove(R)}function v(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const U=R.source,j=f.get(U);delete j[M.__cacheKey],o.memory.textures--}function E(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Z=0;Z<M.__webglFramebuffer[j].length;Z++)r.deleteFramebuffer(M.__webglFramebuffer[j][Z]);else r.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)r.deleteFramebuffer(M.__webglFramebuffer[j]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const U=R.textures;for(let j=0,Z=U.length;j<Z;j++){const K=n.get(U[j]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(U[j])}n.remove(R)}let P=0;function I(){P=0}function F(){const R=P;return R>=i.maxTextures&&Oe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){const U=n.get(R);if(R.isVideoTexture&&nt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const j=R.image;if(j===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,R,M);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+M)}function k(R,M){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){$(U,R,M);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+M)}function B(R,M){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){$(U,R,M);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+M)}function G(R,M){const U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){J(U,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+M)}const ee={[js]:r.REPEAT,[ki]:r.CLAMP_TO_EDGE,[vl]:r.MIRRORED_REPEAT},L={[Qt]:r.NEAREST,[Zp]:r.NEAREST_MIPMAP_NEAREST,[aa]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[Sl]:r.LINEAR_MIPMAP_NEAREST,[cr]:r.LINEAR_MIPMAP_LINEAR},te={[v0]:r.NEVER,[T0]:r.ALWAYS,[S0]:r.LESS,[Mh]:r.LEQUAL,[x0]:r.EQUAL,[Th]:r.GEQUAL,[y0]:r.GREATER,[M0]:r.NOTEQUAL};function Pe(R,M){if(M.type===gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Sl||M.magFilter===aa||M.magFilter===cr||M.minFilter===en||M.minFilter===Sl||M.minFilter===aa||M.minFilter===cr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ee[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ee[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ee[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,L[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,L[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==aa&&M.minFilter!==cr||M.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ie(R,M){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const j=M.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const K=z(M);if(K!==R.__cacheKey){Z[K]===void 0&&(Z[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Z[K].usedTimes++;const ye=Z[R.__cacheKey];ye!==void 0&&(Z[R.__cacheKey].usedTimes--,ye.usedTimes===0&&v(M)),R.__cacheKey=K,R.__webglTexture=Z[K].texture}return U}function Re(R,M,U){return Math.floor(Math.floor(R/U)/M)}function ge(R,M,U,j){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,U,j,M.data);else{K.sort((re,oe)=>re.start-oe.start);let ye=0;for(let re=1;re<K.length;re++){const oe=K[ye],Te=K[re],Ae=oe.start+oe.count,ae=Re(Te.start,M.width,4),qe=Re(oe.start,M.width,4);Te.start<=Ae+1&&ae===qe&&Re(Te.start+Te.count-1,M.width,4)===ae?oe.count=Math.max(oe.count,Te.start+Te.count-oe.start):(++ye,K[ye]=Te)}K.length=ye+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),we=r.getParameter(r.UNPACK_SKIP_PIXELS),Ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let re=0,oe=K.length;re<oe;re++){const Te=K[re],Ae=Math.floor(Te.start/4),ae=Math.ceil(Te.count/4),qe=Ae%M.width,D=Math.floor(Ae/M.width),he=ae,ie=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,qe,D,he,ie,U,j,M.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,we),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ee)}}function $(R,M,U){let j=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=r.TEXTURE_3D);const Z=Ie(R,M),K=M.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+U);const ye=n.get(K);if(K.version!==ye.__version||Z===!0){t.activeTexture(r.TEXTURE0+U);const se=ft.getPrimaries(ft.workingColorSpace),we=M.colorSpace===Nr?null:ft.getPrimaries(M.colorSpace),Ee=M.colorSpace===Nr||se===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let re=_(M.image,!1,i.maxTextureSize);re=Ge(M,re);const oe=s.convert(M.format,M.colorSpace),Te=s.convert(M.type);let Ae=y(M.internalFormat,oe,Te,M.colorSpace,M.isVideoTexture);Pe(j,M);let ae;const qe=M.mipmaps,D=M.isVideoTexture!==!0,he=ye.__version===void 0||Z===!0,ie=K.dataReady,fe=T(M,re);if(M.isDepthTexture)Ae=S(M.format===fs,M.type),he&&(D?t.texStorage2D(r.TEXTURE_2D,1,Ae,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Ae,re.width,re.height,0,oe,Te,null));else if(M.isDataTexture)if(qe.length>0){D&&he&&t.texStorage2D(r.TEXTURE_2D,fe,Ae,qe[0].width,qe[0].height);for(let ne=0,Q=qe.length;ne<Q;ne++)ae=qe[ne],D?ie&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ae.width,ae.height,oe,Te,ae.data):t.texImage2D(r.TEXTURE_2D,ne,Ae,ae.width,ae.height,0,oe,Te,ae.data);M.generateMipmaps=!1}else D?(he&&t.texStorage2D(r.TEXTURE_2D,fe,Ae,re.width,re.height),ie&&ge(M,re,oe,Te)):t.texImage2D(r.TEXTURE_2D,0,Ae,re.width,re.height,0,oe,Te,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Ae,qe[0].width,qe[0].height,re.depth);for(let ne=0,Q=qe.length;ne<Q;ne++)if(ae=qe[ne],M.format!==_i)if(oe!==null)if(D){if(ie)if(M.layerUpdates.size>0){const ce=hg(ae.width,ae.height,M.format,M.type);for(const Fe of M.layerUpdates){const pt=ae.data.subarray(Fe*ce/ae.data.BYTES_PER_ELEMENT,(Fe+1)*ce/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Fe,ae.width,ae.height,1,oe,pt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,re.depth,oe,ae.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Ae,ae.width,ae.height,re.depth,0,ae.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,re.depth,oe,Te,ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Ae,ae.width,ae.height,re.depth,0,oe,Te,ae.data)}else{D&&he&&t.texStorage2D(r.TEXTURE_2D,fe,Ae,qe[0].width,qe[0].height);for(let ne=0,Q=qe.length;ne<Q;ne++)ae=qe[ne],M.format!==_i?oe!==null?D?ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Ae,ae.width,ae.height,0,ae.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ie&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ae.width,ae.height,oe,Te,ae.data):t.texImage2D(r.TEXTURE_2D,ne,Ae,ae.width,ae.height,0,oe,Te,ae.data)}else if(M.isDataArrayTexture)if(D){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Ae,re.width,re.height,re.depth),ie)if(M.layerUpdates.size>0){const ne=hg(re.width,re.height,M.format,M.type);for(const Q of M.layerUpdates){const ce=re.data.subarray(Q*ne/re.data.BYTES_PER_ELEMENT,(Q+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,oe,Te,ce)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,oe,Te,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,oe,Te,re.data);else if(M.isData3DTexture)D?(he&&t.texStorage3D(r.TEXTURE_3D,fe,Ae,re.width,re.height,re.depth),ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,oe,Te,re.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,oe,Te,re.data);else if(M.isFramebufferTexture){if(he)if(D)t.texStorage2D(r.TEXTURE_2D,fe,Ae,re.width,re.height);else{let ne=re.width,Q=re.height;for(let ce=0;ce<fe;ce++)t.texImage2D(r.TEXTURE_2D,ce,Ae,ne,Q,0,oe,Te,null),ne>>=1,Q>>=1}}else if(qe.length>0){if(D&&he){const ne=Me(qe[0]);t.texStorage2D(r.TEXTURE_2D,fe,Ae,ne.width,ne.height)}for(let ne=0,Q=qe.length;ne<Q;ne++)ae=qe[ne],D?ie&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,oe,Te,ae):t.texImage2D(r.TEXTURE_2D,ne,Ae,oe,Te,ae);M.generateMipmaps=!1}else if(D){if(he){const ne=Me(re);t.texStorage2D(r.TEXTURE_2D,fe,Ae,ne.width,ne.height)}ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Te,re)}else t.texImage2D(r.TEXTURE_2D,0,Ae,oe,Te,re);p(M)&&m(j),ye.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,U){if(M.image.length!==6)return;const j=Ie(R,M),Z=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+U);const K=n.get(Z);if(Z.version!==K.__version||j===!0){t.activeTexture(r.TEXTURE0+U);const ye=ft.getPrimaries(ft.workingColorSpace),se=M.colorSpace===Nr?null:ft.getPrimaries(M.colorSpace),we=M.colorSpace===Nr||ye===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let Q=0;Q<6;Q++)!Ee&&!re?oe[Q]=_(M.image[Q],!0,i.maxCubemapSize):oe[Q]=re?M.image[Q].image:M.image[Q],oe[Q]=Ge(M,oe[Q]);const Te=oe[0],Ae=s.convert(M.format,M.colorSpace),ae=s.convert(M.type),qe=y(M.internalFormat,Ae,ae,M.colorSpace),D=M.isVideoTexture!==!0,he=K.__version===void 0||j===!0,ie=Z.dataReady;let fe=T(M,Te);Pe(r.TEXTURE_CUBE_MAP,M);let ne;if(Ee){D&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,qe,Te.width,Te.height);for(let Q=0;Q<6;Q++){ne=oe[Q].mipmaps;for(let ce=0;ce<ne.length;ce++){const Fe=ne[ce];M.format!==_i?Ae!==null?D?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Fe.width,Fe.height,Ae,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,qe,Fe.width,Fe.height,0,Fe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Fe.width,Fe.height,Ae,ae,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,qe,Fe.width,Fe.height,0,Ae,ae,Fe.data)}}}else{if(ne=M.mipmaps,D&&he){ne.length>0&&fe++;const Q=Me(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,oe[Q].width,oe[Q].height,Ae,ae,oe[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,oe[Q].width,oe[Q].height,0,Ae,ae,oe[Q].data);for(let ce=0;ce<ne.length;ce++){const pt=ne[ce].image[Q].image;D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,pt.width,pt.height,Ae,ae,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,qe,pt.width,pt.height,0,Ae,ae,pt.data)}}else{D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,ae,oe[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,Ae,ae,oe[Q]);for(let ce=0;ce<ne.length;ce++){const Fe=ne[ce];D?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Ae,ae,Fe.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,qe,Ae,ae,Fe.image[Q])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),K.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ue(R,M,U,j,Z,K){const ye=s.convert(U.format,U.colorSpace),se=s.convert(U.type),we=y(U.internalFormat,ye,se,U.colorSpace),Ee=n.get(M),re=n.get(U);if(re.__renderTarget=M,!Ee.__hasExternalTextures){const oe=Math.max(1,M.width>>K),Te=Math.max(1,M.height>>K);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,we,oe,Te,M.depth,0,ye,se,null):t.texImage2D(Z,K,we,oe,Te,0,ye,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),_t(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Z,re.__webglTexture,0,N(M)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Z,re.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(R,M,U){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,Z=j&&j.isDepthTexture?j.type:null,K=S(M.stencilBuffer,Z),ye=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_t(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(M),K,M.width,M.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(M),K,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,K,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{const j=M.textures;for(let Z=0;Z<j.length;Z++){const K=j[Z],ye=s.convert(K.format,K.colorSpace),se=s.convert(K.type),we=y(K.internalFormat,ye,se,K.colorSpace);_t(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(M),we,M.width,M.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(M),we,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,we,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(R,M,U){const j=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ee=s.convert(M.depthTexture.format),re=s.convert(M.depthTexture.type);let oe;M.depthTexture.format===hr?oe=r.DEPTH_COMPONENT24:M.depthTexture.format===fs&&(oe=r.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,oe,M.width,M.height,0,Ee,re,null)}}else X(M.depthTexture,0);const K=Z.__webglTexture,ye=N(M),se=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,we=M.depthTexture.format===fs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===hr)_t(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,we,se,K,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,we,se,K,0);else if(M.depthTexture.format===fs)_t(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,we,se,K,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,we,se,K,0);else throw new Error("Unknown depthTexture format")}function ke(R){const M=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(U)for(let j=0;j<6;j++)_e(M.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?_e(M.__webglFramebuffer[0],R,0):_e(M.__webglFramebuffer,R,0)}else if(U){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=r.createRenderbuffer(),Le(M.__webglDepthbuffer[j],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,K)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Le(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(R,M,U){const j=n.get(R);M!==void 0&&ue(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&ke(R)}function be(R){const M=R.texture,U=n.get(R),j=n.get(M);R.addEventListener("dispose",b);const Z=R.textures,K=R.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=M.version,o.memory.textures++),K){U.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[se]=[];for(let we=0;we<M.mipmaps.length;we++)U.__webglFramebuffer[se][we]=r.createFramebuffer()}else U.__webglFramebuffer[se]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)U.__webglFramebuffer[se]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(ye)for(let se=0,we=Z.length;se<we;se++){const Ee=n.get(Z[se]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&_t(R)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const we=Z[se];U.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[se]);const Ee=s.convert(we.format,we.colorSpace),re=s.convert(we.type),oe=y(we.internalFormat,Ee,re,we.colorSpace,R.isXRRenderTarget===!0),Te=N(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,oe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,U.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)ue(U.__webglFramebuffer[se][we],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we);else ue(U.__webglFramebuffer[se],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(M)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,we=Z.length;se<we;se++){const Ee=Z[se],re=n.get(Ee);let oe=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,re.__webglTexture),Pe(oe,Ee),ue(U.__webglFramebuffer,R,Ee,r.COLOR_ATTACHMENT0+se,oe,0),p(Ee)&&m(oe)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),Pe(se,M),M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)ue(U.__webglFramebuffer[we],R,M,r.COLOR_ATTACHMENT0,se,we);else ue(U.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,se,0);p(M)&&m(se),t.unbindTexture()}R.depthBuffer&&ke(R)}function He(R){const M=R.textures;for(let U=0,j=M.length;U<j;U++){const Z=M[U];if(p(Z)){const K=x(R),ye=n.get(Z).__webglTexture;t.bindTexture(K,ye),m(K),t.unbindTexture()}}}const je=[],Be=[];function W(R){if(R.samples>0){if(_t(R)===!1){const M=R.textures,U=R.width,j=R.height;let Z=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(R),se=M.length>1;if(se)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const we=R.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);const re=n.get(M[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,U,j,0,0,U,j,Z,r.NEAREST),l===!0&&(je.length=0,Be.length=0,je.push(r.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.resolveDepthBuffer===!1&&(je.push(K),Be.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Be)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);const re=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function N(R){return Math.min(i.maxSamples,R.samples)}function _t(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Ge(R,M){const U=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Pn&&U!==Nr&&(ft.getTransfer(U)===yt?(j!==_i||Z!==ri)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",U)),M}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=G,this.rebindTextures=ut,this.setupRenderTarget=be,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function GE(r,e){function t(n,i=Nr){let s;const o=ft.getTransfer(i);if(n===ri)return r.UNSIGNED_BYTE;if(n===Ou)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Fu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===em)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===tm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jp)return r.BYTE;if(n===Qp)return r.SHORT;if(n===la)return r.UNSIGNED_SHORT;if(n===Uu)return r.INT;if(n===zi)return r.UNSIGNED_INT;if(n===gi)return r.FLOAT;if(n===ur)return r.HALF_FLOAT;if(n===nm)return r.ALPHA;if(n===im)return r.RGB;if(n===_i)return r.RGBA;if(n===hr)return r.DEPTH_COMPONENT;if(n===fs)return r.DEPTH_STENCIL;if(n===Bu)return r.RED;if(n===ku)return r.RED_INTEGER;if(n===Zs)return r.RG;if(n===zu)return r.RG_INTEGER;if(n===Vu)return r.RGBA_INTEGER;if(n===xl||n===yl||n===Ml||n===Tl)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hu||n===Gu||n===Wu||n===Xu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Hu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qu||n===Yu||n===Ku||n===$u||n===ju||n===Zu||n===Ju)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qu||n===Yu)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ku)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===$u)return s.COMPRESSED_R11_EAC;if(n===ju)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Zu)return s.COMPRESSED_RG11_EAC;if(n===Ju)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qu||n===eh||n===th||n===nh||n===ih||n===rh||n===sh||n===oh||n===ah||n===lh||n===ch||n===uh||n===hh||n===fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===th)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ih)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ch)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dh||n===ph||n===mh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===dh)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gh||n===_h||n===vh||n===Sh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===gh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_h)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ca?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const WE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ig(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qi({vertexShader:WE,fragmentShader:XE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new lc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YE extends Qs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",p=new qE,m={},x=t.getContextAttributes();let y=null,S=null;const T=[],A=[],b=new dt;let C=null;const v=new In;v.viewport=new It;const E=new In;E.viewport=new It;const P=[v,E],I=new KS;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=T[$];return J===void 0&&(J=new Yh,T[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=T[$];return J===void 0&&(J=new Yh,T[$]=J),J.getGripSpace()},this.getHand=function($){let J=T[$];return J===void 0&&(J=new Yh,T[$]=J),J.getHandSpace()};function X($){const J=A.indexOf($.inputSource);if(J===-1)return;const ue=T[J];ue!==void 0&&(ue.update($.inputSource,$.frame,c||o),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",B);for(let $=0;$<T.length;$++){const J=A[$];J!==null&&(A[$]=null,T[$].disconnect(J))}F=null,z=null,p.reset();for(const $ in m)delete m[$];e.setRenderTarget(y),d=null,f=null,h=null,i=null,S=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",k),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Le=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?fs:hr,Le=x.stencil?ca:zi);const ke={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ke),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Hi(f.textureWidth,f.textureHeight,{format:_i,type:ri,depthTexture:new Ta(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Hi(d.framebufferWidth,d.framebufferHeight,{format:_i,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ge.setContext(i),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B($){for(let J=0;J<$.removed.length;J++){const ue=$.removed[J],Le=A.indexOf(ue);Le>=0&&(A[Le]=null,T[Le].disconnect(ue))}for(let J=0;J<$.added.length;J++){const ue=$.added[J];let Le=A.indexOf(ue);if(Le===-1){for(let ke=0;ke<T.length;ke++)if(ke>=A.length){A.push(ue),Le=ke;break}else if(A[ke]===null){A[ke]=ue,Le=ke;break}if(Le===-1)break}const _e=T[Le];_e&&_e.connect(ue)}}const G=new H,ee=new H;function L($,J,ue){G.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(ue.matrixWorld);const Le=G.distanceTo(ee),_e=J.projectionMatrix.elements,ke=ue.projectionMatrix.elements,ut=_e[14]/(_e[10]-1),be=_e[14]/(_e[10]+1),He=(_e[9]+1)/_e[5],je=(_e[9]-1)/_e[5],Be=(_e[8]-1)/_e[0],W=(ke[8]+1)/ke[0],N=ut*Be,_t=ut*W,nt=Le/(-Be+W),Ge=nt*-Be;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ge),$.translateZ(nt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_e[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Me=ut+nt,R=be+nt,M=N-Ge,U=_t+(Le-Ge),j=He*be/R*Me,Z=je*be/R*Me;$.projectionMatrix.makePerspective(M,U,j,Z,Me,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let J=$.near,ue=$.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(ue=p.depthFar)),I.near=E.near=v.near=J,I.far=E.far=v.far=ue,(F!==I.near||z!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,z=I.far),I.layers.mask=$.layers.mask|6,v.layers.mask=I.layers.mask&3,E.layers.mask=I.layers.mask&5;const Le=$.parent,_e=I.cameras;te(I,Le);for(let ke=0;ke<_e.length;ke++)te(_e[ke],Le);_e.length===2?L(I,v,E):I.projectionMatrix.copy(v.projectionMatrix),Pe($,I,Le)};function Pe($,J,ue){ue===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=eo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function($){return m[$]};let Ie=null;function Re($,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Le=!1;ue.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let be=0;be<ue.length;be++){const He=ue[be];let je=null;if(d!==null)je=d.getViewport(He);else{const W=h.getViewSubImage(f,He);je=W.viewport,be===0&&(e.setRenderTargetTextures(S,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(S))}let Be=P[be];Be===void 0&&(Be=new In,Be.layers.enable(be),Be.viewport=new It,P[be]=Be),Be.matrix.fromArray(He.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(He.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(je.x,je.y,je.width,je.height),be===0&&(I.matrix.copy(Be.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(Be)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const be=h.getDepthInformation(ue[0]);be&&be.isValid&&be.texture&&p.init(be,i.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let be=0;be<ue.length;be++){const He=ue[be].camera;if(He){let je=m[He];je||(je=new ig,m[He]=je);const Be=h.getCameraImage(He);je.sourceTexture=Be}}}}for(let ue=0;ue<T.length;ue++){const Le=A[ue],_e=T[ue];Le!==null&&_e!==void 0&&_e.update(Le,J,c||o)}Ie&&Ie($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ge=new fg;ge.setAnimationLoop(Re),this.setAnimationLoop=function($){Ie=$},this.dispose=function(){}}}const Ms=new Zi,KE=new tt;function $E(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Im(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,y,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,S=x.envMapRotation;y&&(p.envMap.value=y,Ms.copy(S),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),p.envMapRotation.value.setFromMatrix4(KE.makeRotationFromEuler(Ms)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jE(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const S=y.program;n.uniformBlockBinding(x,S)}function c(x,y){let S=i[x.id];S===void 0&&(g(x),S=u(x),i[x.id]=S,x.addEventListener("dispose",p));const T=y.program;n.updateUBOMapping(x,T);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function u(x){const y=h();x.__bindingPointIndex=y;const S=r.createBuffer(),T=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,T,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],S=x.uniforms,T=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,b=S.length;A<b;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,E=C.length;v<E;v++){const P=C[v];if(d(P,A,v,T)===!0){const I=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let X=0;X<F.length;X++){const k=F[X],B=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+z,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,z),z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,y,S,T){const A=x.value,b=y+"_"+S;if(T[b]===void 0)return typeof A=="number"||typeof A=="boolean"?T[b]=A:T[b]=A.clone(),!0;{const C=T[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return T[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(x){const y=x.uniforms;let S=0;const T=16;for(let b=0,C=y.length;b<C;b++){const v=Array.isArray(y[b])?y[b]:[y[b]];for(let E=0,P=v.length;E<P;E++){const I=v[E],F=Array.isArray(I.value)?I.value:[I.value];for(let z=0,X=F.length;z<X;z++){const k=F[z],B=_(k),G=S%T,ee=G%B.boundary,L=G+ee;S+=ee,L!==0&&T-L<B.storage&&(S+=T-L),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=B.storage}}}const A=S%T;return A>0&&(S+=T-A),x.__size=S,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}const ZE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function JE(){return $i===null&&($i=new jh(ZE,16,16,Zs,ur),$i.name="DFG_LUT",$i.minFilter=en,$i.magFilter=en,$i.wrapS=ki,$i.wrapT=ki,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class QE{constructor(e={}){const{canvas:t=b0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ri}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=d,p=new Set([Vu,zu,ku]),m=new Set([ri,zi,la,ca,Ou,Fu]),x=new Uint32Array(4),y=new Int32Array(4);let S=null,T=null;const A=[],b=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=cn;let P=0,I=0,F=null,z=-1,X=null;const k=new It,B=new It;let G=null;const ee=new $e(0);let L=0,te=t.width,Pe=t.height,Ie=1,Re=null,ge=null;const $=new It(0,0,te,Pe),J=new It(0,0,te,Pe);let ue=!1;const Le=new Qh;let _e=!1,ke=!1;const ut=new tt,be=new H,He=new It,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function W(){return F===null?Ie:1}let N=n;function _t(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mu}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",ve,!1),N===null){const O="webgl2";if(N=_t(O,w),N===null)throw _t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Xe("WebGLRenderer: "+w.message),w}let nt,Ge,Me,R,M,U,j,Z,K,ye,se,we,Ee,re,oe,Te,Ae,ae,qe,D,he,ie,fe,ne;function Q(){nt=new JM(N),nt.init(),ie=new GE(N,nt),Ge=new GM(N,nt,e,ie),Me=new VE(N,nt),Ge.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),R=new tT(N),M=new wE,U=new HE(N,nt,Me,M,Ge,ie,R),j=new XM(v),Z=new ZM(v),K=new sx(N),fe=new VM(N,K),ye=new QM(N,K,R,fe),se=new iT(N,ye,K,R),qe=new nT(N,Ge,U),Te=new WM(M),we=new bE(v,j,Z,nt,Ge,fe,Te),Ee=new $E(v,M),re=new RE,oe=new NE(nt),ae=new zM(v,j,Z,Me,se,g,l),Ae=new kE(v,se,Ge),ne=new jE(N,R,Ge,Me),D=new HM(N,nt,R),he=new eT(N,nt,R),R.programs=we.programs,v.capabilities=Ge,v.extensions=nt,v.properties=M,v.renderLists=re,v.shadowMap=Ae,v.state=Me,v.info=R}Q(),_!==ri&&(C=new sT(_,t.width,t.height,i,s));const ce=new YE(v,N);this.xr=ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(w){w!==void 0&&(Ie=w,this.setSize(te,Pe,!1))},this.getSize=function(w){return w.set(te,Pe)},this.setSize=function(w,O,Y=!0){if(ce.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}te=w,Pe=O,t.width=Math.floor(w*Ie),t.height=Math.floor(O*Ie),Y===!0&&(t.style.width=w+"px",t.style.height=O+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(te*Ie,Pe*Ie).floor()},this.setDrawingBufferSize=function(w,O,Y){te=w,Pe=O,Ie=Y,t.width=Math.floor(w*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,O,Y,q){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,O,Y,q),Me.viewport(k.copy($).multiplyScalar(Ie).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,O,Y,q){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,O,Y,q),Me.scissor(B.copy(J).multiplyScalar(Ie).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){Me.setScissorTest(ue=w)},this.setOpaqueSort=function(w){Re=w},this.setTransparentSort=function(w){ge=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,Y=!0){let q=0;if(w){let V=!1;if(F!==null){const le=F.texture.format;V=p.has(le)}if(V){const le=F.texture.type,Se=m.has(le),de=ae.getClearColor(),xe=ae.getClearAlpha(),Ne=de.r,We=de.g,ze=de.b;Se?(x[0]=Ne,x[1]=We,x[2]=ze,x[3]=xe,N.clearBufferuiv(N.COLOR,0,x)):(y[0]=Ne,y[1]=We,y[2]=ze,y[3]=xe,N.clearBufferiv(N.COLOR,0,y))}else q|=N.COLOR_BUFFER_BIT}O&&(q|=N.DEPTH_BUFFER_BIT),Y&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ae.dispose(),re.dispose(),oe.dispose(),M.dispose(),j.dispose(),Z.dispose(),se.dispose(),fe.dispose(),ne.dispose(),we.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Vt),ce.removeEventListener("sessionend",rt),St.stop()};function Fe(w){w.preventDefault(),wl("WebGLRenderer: Context Lost."),E=!0}function pt(){wl("WebGLRenderer: Context Restored."),E=!1;const w=R.autoReset,O=Ae.enabled,Y=Ae.autoUpdate,q=Ae.needsUpdate,V=Ae.type;Q(),R.autoReset=w,Ae.enabled=O,Ae.autoUpdate=Y,Ae.needsUpdate=q,Ae.type=V}function ve(w){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){const O=w.target;O.removeEventListener("dispose",De),Ze(O)}function Ze(w){pe(w),M.remove(w)}function pe(w){const O=M.get(w).programs;O!==void 0&&(O.forEach(function(Y){we.releaseProgram(Y)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,Y,q,V,le){O===null&&(O=je);const Se=V.isMesh&&V.matrixWorld.determinant()<0,de=$t(w,O,Y,q,V);Me.setMaterial(q,Se);let xe=Y.index,Ne=1;if(q.wireframe===!0){if(xe=ye.getWireframeAttribute(Y),xe===void 0)return;Ne=2}const We=Y.drawRange,ze=Y.attributes.position;let st=We.start*Ne,bt=(We.start+We.count)*Ne;le!==null&&(st=Math.max(st,le.start*Ne),bt=Math.min(bt,(le.start+le.count)*Ne)),xe!==null?(st=Math.max(st,0),bt=Math.min(bt,xe.count)):ze!=null&&(st=Math.max(st,0),bt=Math.min(bt,ze.count));const Bt=bt-st;if(Bt<0||Bt===1/0)return;fe.setup(V,q,de,Y,xe);let kt,At=D;if(xe!==null&&(kt=K.get(xe),At=he,At.setIndex(kt)),V.isMesh)q.wireframe===!0?(Me.setLineWidth(q.wireframeLinewidth*W()),At.setMode(N.LINES)):At.setMode(N.TRIANGLES);else if(V.isLine){let Ve=q.linewidth;Ve===void 0&&(Ve=1),Me.setLineWidth(Ve*W()),V.isLineSegments?At.setMode(N.LINES):V.isLineLoop?At.setMode(N.LINE_LOOP):At.setMode(N.LINE_STRIP)}else V.isPoints?At.setMode(N.POINTS):V.isSprite&&At.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)da("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))At.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ve=V._multiDrawStarts,xt=V._multiDrawCounts,gt=V._multiDrawCount,qn=xe?K.get(xe).bytesPerElement:1,bs=M.get(q).currentProgram.getUniforms();for(let Yn=0;Yn<gt;Yn++)bs.setValue(N,"_gl_DrawID",Yn),At.render(Ve[Yn]/qn,xt[Yn])}else if(V.isInstancedMesh)At.renderInstances(st,Bt,V.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xt=Math.min(Y.instanceCount,Ve);At.renderInstances(st,Bt,xt)}else At.render(st,Bt)};function Ye(w,O,Y){w.transparent===!0&&w.side===Mi&&w.forceSinglePass===!1?(w.side=Wn,w.needsUpdate=!0,Et(w,O,Y),w.side=ar,w.needsUpdate=!0,Et(w,O,Y),w.side=Mi):Et(w,O,Y)}this.compile=function(w,O,Y=null){Y===null&&(Y=w),T=oe.get(Y),T.init(O),b.push(T),Y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),w!==Y&&w.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const q=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const le=V.material;if(le)if(Array.isArray(le))for(let Se=0;Se<le.length;Se++){const de=le[Se];Ye(de,Y,V),q.add(de)}else Ye(le,Y,V),q.add(le)}),T=b.pop(),q},this.compileAsync=function(w,O,Y=null){const q=this.compile(w,O,Y);return new Promise(V=>{function le(){if(q.forEach(function(Se){M.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){V(w);return}setTimeout(le,10)}nt.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ue=null;function Ke(w){Ue&&Ue(w)}function Vt(){St.stop()}function rt(){St.start()}const St=new fg;St.setAnimationLoop(Ke),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(w){Ue=w,ce.setAnimationLoop(w),w===null?St.stop():St.start()},ce.addEventListener("sessionstart",Vt),ce.addEventListener("sessionend",rt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const Y=ce.enabled===!0&&ce.isPresenting===!0,q=C!==null&&(F===null||Y)&&C.begin(v,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,F),T=oe.get(w,b.length),T.init(O),b.push(T),ut.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Le.setFromProjectionMatrix(ut,Vi,O.reversedDepth),ke=this.localClippingEnabled,_e=Te.init(this.clippingPlanes,ke),S=re.get(w,A.length),S.init(),A.push(S),ce.enabled===!0&&ce.isPresenting===!0){const Se=v.xr.getDepthSensingMesh();Se!==null&&Wt(Se,O,-1/0,v.sortObjects)}Wt(w,O,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(Re,ge),Be=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Be&&ae.addToRenderList(S,w),this.info.render.frame++,_e===!0&&Te.beginShadows();const V=T.state.shadowsArray;if(Ae.render(V,w,O),_e===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&C.hasRenderPass())===!1){const Se=S.opaque,de=S.transmissive;if(T.setupLights(),O.isArrayCamera){const xe=O.cameras;if(de.length>0)for(let Ne=0,We=xe.length;Ne<We;Ne++){const ze=xe[Ne];wt(Se,de,w,ze)}Be&&ae.render(w);for(let Ne=0,We=xe.length;Ne<We;Ne++){const ze=xe[Ne];Dt(S,w,ze,ze.viewport)}}else de.length>0&&wt(Se,de,w,O),Be&&ae.render(w),Dt(S,w,O)}F!==null&&I===0&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),q&&C.end(v),w.isScene===!0&&w.onAfterRender(v,w,O),fe.resetDefaultState(),z=-1,X=null,b.pop(),b.length>0?(T=b[b.length-1],_e===!0&&Te.setGlobalState(v.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Wt(w,O,Y,q){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Le.intersectsSprite(w)){q&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ut);const Se=se.update(w),de=w.material;de.visible&&S.push(w,Se,de,Y,He.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Le.intersectsObject(w))){const Se=se.update(w),de=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),He.copy(Se.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(ut)),Array.isArray(de)){const xe=Se.groups;for(let Ne=0,We=xe.length;Ne<We;Ne++){const ze=xe[Ne],st=de[ze.materialIndex];st&&st.visible&&S.push(w,Se,st,Y,He.z,ze)}}else de.visible&&S.push(w,Se,de,Y,He.z,null)}}const le=w.children;for(let Se=0,de=le.length;Se<de;Se++)Wt(le[Se],O,Y,q)}function Dt(w,O,Y,q){const{opaque:V,transmissive:le,transparent:Se}=w;T.setupLightsView(Y),_e===!0&&Te.setGlobalState(v.clippingPlanes,Y),q&&Me.viewport(k.copy(q)),V.length>0&&mt(V,O,Y),le.length>0&&mt(le,O,Y),Se.length>0&&mt(Se,O,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function wt(w,O,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){const st=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new Hi(1,1,{generateMipmaps:!0,type:st?ur:ri,minFilter:cr,samples:Ge.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const le=T.state.transmissionRenderTarget[q.id],Se=q.viewport||k;le.setSize(Se.z*v.transmissionResolutionScale,Se.w*v.transmissionResolutionScale);const de=v.getRenderTarget(),xe=v.getActiveCubeFace(),Ne=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(ee),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),Be&&ae.render(Y);const We=v.toneMapping;v.toneMapping=Bi;const ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),_e===!0&&Te.setGlobalState(v.clippingPlanes,q),mt(w,Y,q),U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le),nt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let bt=0,Bt=O.length;bt<Bt;bt++){const kt=O[bt],{object:At,geometry:Ve,material:xt,group:gt}=kt;if(xt.side===Mi&&At.layers.test(q.layers)){const qn=xt.side;xt.side=Wn,xt.needsUpdate=!0,Un(At,Y,q,Ve,xt,gt),xt.side=qn,xt.needsUpdate=!0,st=!0}}st===!0&&(U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le))}v.setRenderTarget(de,xe,Ne),v.setClearColor(ee,L),ze!==void 0&&(q.viewport=ze),v.toneMapping=We}function mt(w,O,Y){const q=O.isScene===!0?O.overrideMaterial:null;for(let V=0,le=w.length;V<le;V++){const Se=w[V],{object:de,geometry:xe,group:Ne}=Se;let We=Se.material;We.allowOverride===!0&&q!==null&&(We=q),de.layers.test(Y.layers)&&Un(de,O,Y,xe,We,Ne)}}function Un(w,O,Y,q,V,le){w.onBeforeRender(v,O,Y,q,V,le),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(v,O,Y,q,w,le),V.transparent===!0&&V.side===Mi&&V.forceSinglePass===!1?(V.side=Wn,V.needsUpdate=!0,v.renderBufferDirect(Y,O,q,V,w,le),V.side=ar,V.needsUpdate=!0,v.renderBufferDirect(Y,O,q,V,w,le),V.side=Mi):v.renderBufferDirect(Y,O,q,V,w,le),w.onAfterRender(v,O,Y,q,V,le)}function Et(w,O,Y){O.isScene!==!0&&(O=je);const q=M.get(w),V=T.state.lights,le=T.state.shadowsArray,Se=V.state.version,de=we.getParameters(w,V.state,le,O,Y),xe=we.getProgramCacheKey(de);let Ne=q.programs;q.environment=w.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(w.isMeshStandardMaterial?Z:j).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",De),Ne=new Map,q.programs=Ne);let We=Ne.get(xe);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Se)return Xn(w,de),We}else de.uniforms=we.getUniforms(w),w.onBeforeCompile(de,v),We=we.acquireProgram(de,xe),Ne.set(xe,We),q.uniforms=de.uniforms;const ze=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=Te.uniform),Xn(w,de),q.needsLights=rn(w),q.lightsStateVersion=Se,q.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function pn(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=sc.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Xn(w,O){const Y=M.get(w);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function $t(w,O,Y,q,V){O.isScene!==!0&&(O=je),U.resetTextureUnits();const le=O.fog,Se=q.isMeshStandardMaterial?O.environment:null,de=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Pn,xe=(q.isMeshStandardMaterial?Z:j).get(q.envMap||Se),Ne=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,bt=!!Y.morphAttributes.color;let Bt=Bi;q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Bt=v.toneMapping);const kt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,At=kt!==void 0?kt.length:0,Ve=M.get(q),xt=T.state.lights;if(_e===!0&&(ke===!0||w!==X)){const Mn=w===X&&q.id===z;Te.setState(q,w,Mn)}let gt=!1;q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==xt.state.version||Ve.outputColorSpace!==de||V.isBatchedMesh&&Ve.batching===!1||!V.isBatchedMesh&&Ve.batching===!0||V.isBatchedMesh&&Ve.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ve.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ve.instancing===!1||!V.isInstancedMesh&&Ve.instancing===!0||V.isSkinnedMesh&&Ve.skinning===!1||!V.isSkinnedMesh&&Ve.skinning===!0||V.isInstancedMesh&&Ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ve.instancingMorph===!1&&V.morphTexture!==null||Ve.envMap!==xe||q.fog===!0&&Ve.fog!==le||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Te.numPlanes||Ve.numIntersection!==Te.numIntersection)||Ve.vertexAlphas!==Ne||Ve.vertexTangents!==We||Ve.morphTargets!==ze||Ve.morphNormals!==st||Ve.morphColors!==bt||Ve.toneMapping!==Bt||Ve.morphTargetsCount!==At)&&(gt=!0):(gt=!0,Ve.__version=q.version);let qn=Ve.currentProgram;gt===!0&&(qn=Et(q,O,V));let bs=!1,Yn=!1,Ao=!1;const Pt=qn.getUniforms(),On=Ve.uniforms;if(Me.useProgram(qn.program)&&(bs=!0,Yn=!0,Ao=!0),q.id!==z&&(z=q.id,Yn=!0),bs||X!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pt.setValue(N,"projectionMatrix",w.projectionMatrix),Pt.setValue(N,"viewMatrix",w.matrixWorldInverse);const Fn=Pt.map.cameraPosition;Fn!==void 0&&Fn.setValue(N,be.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&Pt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,Yn=!0,Ao=!0)}if(Ve.needsLights&&(xt.state.directionalShadowMap.length>0&&Pt.setValue(N,"directionalShadowMap",xt.state.directionalShadowMap,U),xt.state.spotShadowMap.length>0&&Pt.setValue(N,"spotShadowMap",xt.state.spotShadowMap,U),xt.state.pointShadowMap.length>0&&Pt.setValue(N,"pointShadowMap",xt.state.pointShadowMap,U)),V.isSkinnedMesh){Pt.setOptional(N,V,"bindMatrix"),Pt.setOptional(N,V,"bindMatrixInverse");const Mn=V.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Pt.setValue(N,"boneTexture",Mn.boneTexture,U))}V.isBatchedMesh&&(Pt.setOptional(N,V,"batchingTexture"),Pt.setValue(N,"batchingTexture",V._matricesTexture,U),Pt.setOptional(N,V,"batchingIdTexture"),Pt.setValue(N,"batchingIdTexture",V._indirectTexture,U),Pt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Pt.setValue(N,"batchingColorTexture",V._colorsTexture,U));const li=Y.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&qe.update(V,Y,qn),(Yn||Ve.receiveShadow!==V.receiveShadow)&&(Ve.receiveShadow=V.receiveShadow,Pt.setValue(N,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(On.envMap.value=xe,On.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(On.envMapIntensity.value=O.environmentIntensity),On.dfgLUT!==void 0&&(On.dfgLUT.value=JE()),Yn&&(Pt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&jt(On,Ao),le&&q.fog===!0&&Ee.refreshFogUniforms(On,le),Ee.refreshMaterialUniforms(On,q,Ie,Pe,T.state.transmissionRenderTarget[w.id]),sc.upload(N,pn(Ve),On,U)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(sc.upload(N,pn(Ve),On,U),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pt.setValue(N,"center",V.center),Pt.setValue(N,"modelViewMatrix",V.modelViewMatrix),Pt.setValue(N,"normalMatrix",V.normalMatrix),Pt.setValue(N,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Mn=q.uniformsGroups;for(let Fn=0,cc=Mn.length;Fn<cc;Fn++){const Wr=Mn[Fn];ne.update(Wr,qn),ne.bind(Wr,qn)}}return qn}function jt(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function rn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,O,Y){const q=M.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=O,M.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const Y=M.get(w);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const Ji=N.createFramebuffer();this.setRenderTarget=function(w,O=0,Y=0){F=w,P=O,I=Y;let q=null,V=!1,le=!1;if(w){const de=M.get(w);if(de.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(N.FRAMEBUFFER,de.__webglFramebuffer),k.copy(w.viewport),B.copy(w.scissor),G=w.scissorTest,Me.viewport(k),Me.scissor(B),Me.setScissorTest(G),z=-1;return}else if(de.__webglFramebuffer===void 0)U.setupRenderTarget(w);else if(de.__hasExternalTextures)U.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const We=w.depthTexture;if(de.__boundDepthTexture!==We){if(We!==null&&M.has(We)&&(w.width!==We.image.width||w.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(w)}}const xe=w.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(le=!0);const Ne=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?q=Ne[O][Y]:q=Ne[O],V=!0):w.samples>0&&U.useMultisampledRTT(w)===!1?q=M.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?q=Ne[Y]:q=Ne,k.copy(w.viewport),B.copy(w.scissor),G=w.scissorTest}else k.copy($).multiplyScalar(Ie).floor(),B.copy(J).multiplyScalar(Ie).floor(),G=ue;if(Y!==0&&(q=Ji),Me.bindFramebuffer(N.FRAMEBUFFER,q)&&Me.drawBuffers(w,q),Me.viewport(k),Me.scissor(B),Me.setScissorTest(G),V){const de=M.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,Y)}else if(le){const de=O;for(let xe=0;xe<w.textures.length;xe++){const Ne=M.get(w.textures[xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xe,Ne.__webglTexture,Y,de)}}else if(w!==null&&Y!==0){const de=M.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,Y)}z=-1},this.readRenderTargetPixels=function(w,O,Y,q,V,le,Se,de=0){if(!(w&&w.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se]),xe){Me.bindFramebuffer(N.FRAMEBUFFER,xe);try{const Ne=w.textures[de],We=Ne.format,ze=Ne.type;if(!Ge.textureFormatReadable(We)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ze)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-q&&Y>=0&&Y<=w.height-V&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de),N.readPixels(O,Y,q,V,ie.convert(We),ie.convert(ze),le))}finally{const Ne=F!==null?M.get(F).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,O,Y,q,V,le,Se,de=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se]),xe)if(O>=0&&O<=w.width-q&&Y>=0&&Y<=w.height-V){Me.bindFramebuffer(N.FRAMEBUFFER,xe);const Ne=w.textures[de],We=Ne.format,ze=Ne.type;if(!Ge.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,st),N.bufferData(N.PIXEL_PACK_BUFFER,le.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de),N.readPixels(O,Y,q,V,ie.convert(We),ie.convert(ze),0);const bt=F!==null?M.get(F).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,bt);const Bt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await w0(N,Bt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,st),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,le),N.deleteBuffer(st),N.deleteSync(Bt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,Y=0){const q=Math.pow(2,-Y),V=Math.floor(w.image.width*q),le=Math.floor(w.image.height*q),Se=O!==null?O.x:0,de=O!==null?O.y:0;U.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Se,de,V,le),Me.unbindTexture()};const Es=N.createFramebuffer(),sn=N.createFramebuffer();this.copyTextureToTexture=function(w,O,Y=null,q=null,V=0,le=null){le===null&&(V!==0?(da("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=V,V=0):le=0);let Se,de,xe,Ne,We,ze,st,bt,Bt;const kt=w.isCompressedTexture?w.mipmaps[le]:w.image;if(Y!==null)Se=Y.max.x-Y.min.x,de=Y.max.y-Y.min.y,xe=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,We=Y.min.y,ze=Y.isBox3?Y.min.z:0;else{const li=Math.pow(2,-V);Se=Math.floor(kt.width*li),de=Math.floor(kt.height*li),w.isDataArrayTexture?xe=kt.depth:w.isData3DTexture?xe=Math.floor(kt.depth*li):xe=1,Ne=0,We=0,ze=0}q!==null?(st=q.x,bt=q.y,Bt=q.z):(st=0,bt=0,Bt=0);const At=ie.convert(O.format),Ve=ie.convert(O.type);let xt;O.isData3DTexture?(U.setTexture3D(O,0),xt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(U.setTexture2DArray(O,0),xt=N.TEXTURE_2D_ARRAY):(U.setTexture2D(O,0),xt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const gt=N.getParameter(N.UNPACK_ROW_LENGTH),qn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),bs=N.getParameter(N.UNPACK_SKIP_PIXELS),Yn=N.getParameter(N.UNPACK_SKIP_ROWS),Ao=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,kt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,kt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),N.pixelStorei(N.UNPACK_SKIP_ROWS,We),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ze);const Pt=w.isDataArrayTexture||w.isData3DTexture,On=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const li=M.get(w),Mn=M.get(O),Fn=M.get(li.__renderTarget),cc=M.get(Mn.__renderTarget);Me.bindFramebuffer(N.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,cc.__webglFramebuffer);for(let Wr=0;Wr<xe;Wr++)Pt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,M.get(w).__webglTexture,V,ze+Wr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,M.get(O).__webglTexture,le,Bt+Wr)),N.blitFramebuffer(Ne,We,Se,de,st,bt,Se,de,N.DEPTH_BUFFER_BIT,N.NEAREST);Me.bindFramebuffer(N.READ_FRAMEBUFFER,null),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||M.has(w)){const li=M.get(w),Mn=M.get(O);Me.bindFramebuffer(N.READ_FRAMEBUFFER,Es),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,sn);for(let Fn=0;Fn<xe;Fn++)Pt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,li.__webglTexture,V,ze+Fn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,li.__webglTexture,V),On?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mn.__webglTexture,le,Bt+Fn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mn.__webglTexture,le),V!==0?N.blitFramebuffer(Ne,We,Se,de,st,bt,Se,de,N.COLOR_BUFFER_BIT,N.NEAREST):On?N.copyTexSubImage3D(xt,le,st,bt,Bt+Fn,Ne,We,Se,de):N.copyTexSubImage2D(xt,le,st,bt,Ne,We,Se,de);Me.bindFramebuffer(N.READ_FRAMEBUFFER,null),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else On?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(xt,le,st,bt,Bt,Se,de,xe,At,Ve,kt.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(xt,le,st,bt,Bt,Se,de,xe,At,kt.data):N.texSubImage3D(xt,le,st,bt,Bt,Se,de,xe,At,Ve,kt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,le,st,bt,Se,de,At,Ve,kt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,le,st,bt,kt.width,kt.height,At,kt.data):N.texSubImage2D(N.TEXTURE_2D,le,st,bt,Se,de,At,Ve,kt);N.pixelStorei(N.UNPACK_ROW_LENGTH,gt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,bs),N.pixelStorei(N.UNPACK_SKIP_ROWS,Yn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ao),le===0&&O.generateMipmaps&&N.generateMipmap(xt),Me.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&U.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?U.setTextureCube(w,0):w.isData3DTexture?U.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?U.setTexture2DArray(w,0):U.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){P=0,I=0,F=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}function kg(r,e){if(e===m0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===yh||e===am){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===yh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class e1 extends Mo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new S1(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ba.extractUrlBase(e);o=ba.resolveURL(c,this.path)}else o=ba.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ag(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zg){try{o[ct.KHR_BINARY_GLTF]=new x1(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new I1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:o[h]=new i1;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[h]=new y1(s,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[h]=new M1;break;case ct.KHR_MESH_QUANTIZATION:o[h]=new T1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function t1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class n1{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new $e(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Pn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ug(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new XS(u),c.distance=h;break;case"spot":c=new GS(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class i1{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return ms}extendParams(e,t,n){const i=[];e.color=new $e(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,cn))}return Promise.all(i)}}class r1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class s1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new dt(a,a)}return Promise.all(s)}}class o1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class a1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class l1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,cn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class c1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class u1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(a[0],a[1],a[2],Pn),Promise.all(s)}}class h1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class f1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(a[0],a[1],a[2],Pn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,cn)),Promise.all(s)}}class d1{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class p1{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class m1{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class g1{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class _1{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class v1{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class S1{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Si.TRIANGLES&&c.mode!==Si.TRIANGLE_STRIP&&c.mode!==Si.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new tt,p=new H,m=new Ur,x=new H(1,1,1),y=new vS(g.geometry,g.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&x.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,_.compose(p,m,x));for(const S in l)if(S==="_COLOR_0"){const T=l[S];y.instanceColor=new Zh(T.array,T.itemSize,T.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Ft.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const zg="glTF",Ca=12,Vg={JSON:1313821514,BIN:5130562};class x1{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ca),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ca,s=new DataView(e,Ca);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Vg.JSON){const c=new Uint8Array(e,Ca+o,a);this.content=n.decode(c)}else if(l===Vg.BIN){const c=Ca+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class y1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=xf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=xf[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=wo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(d)},a,c,Pn,f)})})}}class M1{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class T1{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class Hg extends Ea{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,p=-2*d+3*f,m=d-f,x=1-p,y=m-f+h;for(let S=0;S!==a;S++){const T=o[_+S+a],A=o[_+S+l]*u,b=o[g+S+a],C=o[g+S]*u;s[S]=x*T+y*A+p*b+m*C}return s}}const E1=new Ur;class b1 extends Hg{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return E1.fromArray(s).normalize().toArray(s),s}}const Si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},wo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gg={9728:Qt,9729:en,9984:Zp,9985:Sl,9986:aa,9987:cr},Wg={33071:ki,33648:vl,10497:js},Sf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w1={CUBICSPLINE:void 0,LINEAR:ha,STEP:ua},yf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function A1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ql({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ar})),r.DefaultMaterial}function Ts(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ji(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function R1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function C1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function P1(r){let e;const t=r.extensions&&r.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mf(t.attributes):e=r.indices+":"+Mf(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Mf(r.targets[n]);return e}function Mf(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Tf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function L1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const D1=new tt;class I1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new t1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new VS(this.options.manager):this.textureLoader=new YS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ag(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ts(s,a,i),ji(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ba.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Sf[i.type],a=wo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ln(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Sf[i.type],c=wo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(d&&d!==h){const m=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(x);y||(_=new c(a,m*d,i.count*d/u),y=new dS(_,d/u),t.cache.add(x,y)),p=new wf(y,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),p=new Ln(_,l,g);if(i.sparse!==void 0){const m=Sf.SCALAR,x=wo[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,T=new x(o[1],y,i.sparse.count*m),A=new c(o[2],S,i.sparse.count*l);a!==null&&(p=new Ln(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let b=0,C=T.length;b<C;b++){const v=T[b];if(p.setX(v,A[b*l]),l>=2&&p.setY(v,A[b*l+1]),l>=3&&p.setZ(v,A[b*l+2]),l>=4&&p.setW(v,A[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Gg[f.magFilter]||en,u.minFilter=Gg[f.minFilter]||cr,u.wrapS=Wg[f.wrapS]||js,u.wrapT=Wg[f.wrapT]||js,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qt&&u.minFilter!==en,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new hn(_);p.needsUpdate=!0,f(p)}),t.load(ba.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ji(h,o),h.userData.mimeType=o.mimeType||L1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new eg,Xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new $m,Xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ql}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const h=i[ct.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Pn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,cn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Mi);const u=s.alphaMode||yf.OPAQUE;if(u===yf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===yf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ms&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new dt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ms&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ms){const h=s.emissiveFactor;a.emissive=new $e().setRGB(h[0],h[1],h[2],Pn)}return s.emissiveTexture!==void 0&&o!==ms&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,cn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),ji(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ts(i,h,s),h})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Xg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=P1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Xg(new xi,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?A1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],p=o[d];let m;const x=c[d];if(p.mode===Si.TRIANGLES||p.mode===Si.TRIANGLE_STRIP||p.mode===Si.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new mS(_,x):new ai(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Si.TRIANGLE_STRIP?m.geometry=kg(m.geometry,am):p.mode===Si.TRIANGLE_FAN&&(m.geometry=kg(m.geometry,yh));else if(p.mode===Si.LINES)m=new MS(_,x);else if(p.mode===Si.LINE_STRIP)m=new tf(_,x);else if(p.mode===Si.LINE_LOOP)m=new TS(_,x);else if(p.mode===Si.POINTS)m=new ES(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&C1(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),ji(m,s),p.extensions&&Ts(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Ts(i,h[0],s),h[0];const f=new _s;s.extensions&&Ts(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new In(G0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ji(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new tt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Af(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let y=0,S=f.length;y<S;y++){const T=f[y],A=d[y],b=g[y],C=_[y],v=p[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const E=n._createAnimationTracks(T,A,b,C,v);if(E)for(let P=0;P<E.length;P++)m.push(E[P])}const x=new NS(s,void 0,m);return ji(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,D1)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Xm:c.length>1?u=new _s:c.length===1?u=c[0]:u=new Ft,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),ji(u,s),s.extensions&&Ts(n,u,s),s.matrix!==void 0){const h=new tt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new _s;n.name&&(s.name=i.createUniqueName(n.name)),ji(s,n),n.extensions&&Ts(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Xi||f instanceof hn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Gr[s.path]===Gr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Gr[s.path]){case Gr.weights:c=vo;break;case Gr.rotation:c=So;break;case Gr.translation:case Gr.scale:c=yo;break;default:switch(n.itemSize){case 1:c=vo;break;case 2:case 3:default:c=yo;break}break}const u=i.interpolation!==void 0?w1[i.interpolation]:ha,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Gr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Tf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof So?b1:Hg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function N1(r,e,t){const n=e.attributes,i=new Gi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=Tf(wo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new H,l=new H;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Tf(wo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Wi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Xg(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=xf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ft.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),ji(r,e),N1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?R1(r,e.targets,t):r})}or.registerPlugin(Je);const ac=new Gv({autoRaf:!1,lerp:.08,wheelMultiplier:1,touchMultiplier:2});ac.on("scroll",Je.update),or.ticker.add(r=>{ac.raf(r*1e3)}),or.ticker.lagSmoothing(0);const U1=-Math.PI*2,O1=5e3,Pa={hero:{targetSize:1.2,cameraZ:3,environment:{color:4210752,intensity:0},material:{color:15198183,metalness:1,roughness:.159},lights:[{position:[0,5,2],intensity:10},{position:[2,0,-2],intensity:25},{position:[-2,0,-2],intensity:12},{position:[-1.5,0,4],intensity:5}]},process:{targetSize:1.6,cameraZ:3.2,environment:{color:4210752,intensity:1},material:{color:15198183,metalness:1,roughness:.159},lights:[{position:[0,5,2],intensity:10},{position:[2,0,-2],intensity:25},{position:[-2,0,-2],intensity:12},{position:[-1.5,0,4],intensity:5}]}},Ef=new Map,F1=new e1;function qg(r){return new Promise((e,t)=>{if(Ef.has(r)){e(Ef.get(r).clone(!0));return}F1.load(r,n=>{Ef.set(r,n.scene),e(n.scene.clone(!0))},void 0,t)})}const bf=new Map;function B1(r,e){if(!e.environment)return null;const t=JSON.stringify(e.environment);if(bf.has(t))return bf.get(t);const n=new pf(r),i=new km;i.background=new $e(e.environment.color);const s=n.fromScene(i,.04);return bf.set(t,s.texture),n.dispose(),s.texture}function Yg(r,e,t){const n=document.createElement("canvas");r.appendChild(n);const i=new km,s=new In(35,r.clientWidth/r.clientHeight,.1,100);s.position.set(0,0,t.cameraZ),s.lookAt(0,0,0);const o=new QE({canvas:n,alpha:!0,antialias:!0});o.setClearColor(0,0),o.setSize(r.clientWidth,r.clientHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.outputColorSpace=cn,o.toneMapping=Du,o.toneMappingExposure=1,o.physicallyCorrectLights=!0;let a=null;new ResizeObserver(()=>{clearTimeout(a),a=setTimeout(()=>{const y=r.clientWidth,S=r.clientHeight;!y||!S||(o.setSize(y,S,!0),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.aspect=y/S,s.updateProjectionMatrix(),o.render(i,s))},100)}).observe(r),t.lights&&t.lights.forEach(({position:y,intensity:S})=>{const T=new ug(16777215,S);T.position.set(...y),i.add(T)});const c=B1(o,t);c&&(i.environment=c,i.environmentIntensity=t.environment?.intensity??1);let u=null,h=!1,f=0,d=0,g=0,_=null,p=!1;qg(e).then(y=>{u=y;const S=new Gi().setFromObject(u),T=new H;S.getSize(T);const A=Math.max(T.x,T.y,T.z),b=t.targetSize/A;u.scale.setScalar(b),S.setFromObject(u);const C=new H;S.getCenter(C),u.position.sub(C),t.material&&u.traverse(v=>{v.isMesh&&(v.material=new Ql({color:t.material.color,metalness:t.material.metalness,roughness:t.material.roughness,side:Mi}))}),i.add(u),t===Pa.hero&&(p=!0,requestAnimationFrame(v=>{x(v),requestAnimationFrame(E=>{x(E),m(!0),r.classList.add("is-visible")})}))});function m(y=!1){u&&(t===Pa.hero&&h||h&&!y||(h=!0,f=performance.now(),d=u.rotation.y,g=d+U1))}t===Pa.hero&&n.addEventListener("mouseenter",m);function x(y){if(p){if(h&&u){const S=Math.min((y-f)/O1,1);u.rotation.y=d+(g-d)*S,S===1&&(h=!1)}o.render(i,s),_=requestAnimationFrame(x)}}return{play(){u&&(p||(p=!0,x(performance.now())),m(!0))},reset(){u&&(p=!1,_&&cancelAnimationFrame(_),_=null,u.rotation.y=0,h=!1,o.render(i,s))}}}function k1(r,e){let t=!1;const n=new IntersectionObserver(i=>{i.forEach(s=>{if(s.isIntersecting&&!t){t=!0;const o=r.dataset["3dSrc"];if(!o)return;const a=Yg(r,o,e);r._threeController=a,n.disconnect()}})},{rootMargin:"1500px",threshold:.1});n.observe(r)}document.querySelectorAll("[data-3d-src]").forEach(r=>{const e=r.dataset["3dSrc"];e&&qg(e)}),document.querySelectorAll(".hero-3d").forEach(r=>{const e=r.dataset["3dSrc"];e&&Yg(r,e,Pa.hero)}),document.querySelectorAll(".hero-3d-process").forEach(r=>{k1(r,Pa.process)}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-gsap], .trust__img img, .fill-form__images img").forEach(x=>{x.style.willChange="transform"});const r=document.querySelector(".page--index");if(!r)return;const e=Array.from(r.children),t=e.length;e.forEach((x,y)=>{x.style.zIndex=t-y});let n;function i(){clearTimeout(n),n=setTimeout(()=>{Je.refresh()},150)}i();function s(){Je.getAll().forEach(y=>y.kill()),window.matchMedia("(min-width: 30.061em)").matches&&document.querySelectorAll("[data-gsap]").forEach(y=>{const S=y.previousElementSibling;if(!S)return;let T=y.dataset.gsapEnd||"35%";const A=parseInt(y.dataset.gsapStartOffset||30,10);or.to(y,{y:0,ease:"none",scrollTrigger:{trigger:S,start:`bottom bottom+=${A}`,end:`bottom ${T}`,scrub:.6,invalidateOnRefresh:!0}});const b=y.querySelector(".trust__img img");b&&or.to(b,{y:0,duration:2,ease:"none",scrollTrigger:{trigger:S,start:`bottom bottom+=${A}`,end:"bottom top",scrub:.6,invalidateOnRefresh:!0}});const C=y.querySelector(".fill-form__images img");C&&or.to(C,{y:0,ease:"none",scrollTrigger:{trigger:S,start:"bottom bottom",end:"bottom top",scrub:.6,invalidateOnRefresh:!0}})})}s();const o=document.querySelectorAll(".item-solutions__txt"),a=window.matchMedia("(min-width: 600px)");function l(){o.forEach(x=>{x.style.minHeight=""})}function c(){if(!a.matches)return;l();let x=0;o.forEach(y=>{const S=y.offsetHeight;S>x&&(x=S)}),o.forEach(y=>{y.style.minHeight=`${x}px`})}a.matches&&c(),a.addEventListener("change",x=>{x.matches?c():l()});let u=window.innerWidth,h=null;new ResizeObserver(x=>{clearTimeout(h),h=setTimeout(()=>{const y=window.innerWidth;y!==u&&(u=y,s(),a.matches&&c())},250)}).observe(document.body);const d=document.querySelectorAll(".list-hero__item");if(d.length){let x=function(){let v=0;function E(){d.forEach(P=>{P.style.transition="none",P.style.opacity="0",P.style.transform="translate(-50%, 100%)"}),requestAnimationFrame(()=>{const P=d[v];P.style.transition=`opacity ${b}ms ease, transform ${b}ms ease`,P.style.opacity="1",P.style.transform="translate(-50%, 0)"}),v=(v+1)%d.length,clearTimeout(T),T=setTimeout(E,C+b)}E()},y=function(){clearTimeout(T),T=null,d.forEach(v=>{v.style.transition="",v.style.opacity="",v.style.transform=""})},S=function(){A.matches?T||x():y()},T=null;const A=window.matchMedia("(max-width: 48.061em)"),b=700,C=1500;S(),A.addEventListener("change",S)}const g=document.querySelector(".portfolio");if(g){let x=function(){y+=(S-y)*A,g.style.transform=`translate3d(${y}px,0,0)`},y=0,S=0;const T=40,A=.03;let b=window.innerWidth/2;window.addEventListener("resize",()=>{b=window.innerWidth/2}),window.addEventListener("mousemove",v=>{S=(v.clientX-b)/b*T},{passive:!0}),new IntersectionObserver(v=>{v.forEach(E=>{E.isIntersecting?or.ticker.add(x):or.ticker.remove(x)})},{threshold:.2}).observe(g);try{g.style.willChange="transform",g.style.backfaceVisibility="hidden"}catch{}}const _=document.querySelector("[data-video-hero]");if(_){let x=function(){b.style.opacity="0",b.style.pointerEvents="none"},y=function(){b.style.opacity="1",b.style.pointerEvents="auto"},S=function(){P.paused?y():x()},T=function(){F=!0,C.classList.add("--not-active"),v.pause(),P.muted=!1,P.volume=.3,P.controls=!0,P.play(),x(),I&&(z=!0,k())},A=function(){P.paused?P.play():P.pause(),S()};const b=_.querySelector(".video-hero__play"),C=_.querySelector(".video-hero__preview"),v=C?.querySelector("video"),P=_.querySelector(".video-hero__main")?.querySelector("video");if(!b||!v||!P)return;const I=Rf.any();let F=!1,z=!1,X=!1;P.pause(),P.muted=!0,P.controls=!1,P.volume=.3,v.muted=!0;async function k(){if(!(!I||X)){X=!0;try{if(typeof P.webkitEnterFullscreen=="function"){P.webkitEnterFullscreen();return}P.requestFullscreen&&await P.requestFullscreen()}catch{}}}_.addEventListener("click",G=>{if(!G.target.closest("video")){if(I){z||T();return}if(!F){T();return}A()}}),P.addEventListener("click",G=>{if(I){z||(G.preventDefault(),T());return}G.preventDefault(),A()}),I||(P.addEventListener("play",S),P.addEventListener("pause",S)),new IntersectionObserver(G=>{G.forEach(ee=>{!ee.isIntersecting&&!P.paused&&(P.pause(),I||y())})},{threshold:.2}).observe(_)}document.addEventListener("click",x=>{const y=x.target.closest("[data-go-link]");if(y){x.preventDefault();const S=y.dataset.goLink,T=document.querySelector(`[data-go-id="${S}"]`);if(!T)return;let C=T.getBoundingClientRect().top+window.scrollY-30;const E=window.getComputedStyle(T).transform;if(E&&E!=="none"){const z=E.match(/matrix.*\((.+)\)/);if(z){const X=z[1].split(","),k=parseFloat(X[5]);isNaN(k)||(C-=k)}}const P=ac.scroll,I=Math.abs(C-P);let F;I<300?F=1.4:I<900?F=1.8:F=2,ac.scrollTo(C,{duration:F,easing:z=>1-Math.pow(1-z,4)})}});const p=new IntersectionObserver(x=>{x.forEach(y=>{const S=y.target;if(y.isIntersecting){try{S.preload=S.preload||"metadata"}catch{}S.play&&S.play().catch(()=>{})}else S&&!S.paused&&S.pause&&S.pause()})},{threshold:.5}),m=document.querySelectorAll(".list-hero__item video, .portfolio video");m.length&&m.forEach(x=>{try{x.preload=x.preload||"metadata"}catch{}p.observe(x)})});
