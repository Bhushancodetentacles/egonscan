import{_ as pe}from"./index-7485d795.js";const me=Symbol(),ee=Object.getPrototypeOf,J=new WeakMap,ge=e=>e&&(J.has(e)?J.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),he=e=>ge(e)&&e[me]||null,te=(e,t=!0)=>{J.set(e,t)},G=e=>typeof e=="object"&&e!==null,D=new WeakMap,$=new WeakSet,Ee=(e=Object.is,t=(n,_)=>new Proxy(n,_),s=n=>G(n)&&!$.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),a=n=>n.configurable&&n.enumerable&&n.writable,c=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},d=new WeakMap,g=(n,_,C=c)=>{const E=d.get(n);if((E==null?void 0:E[0])===_)return E[1];const b=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return te(b,!0),d.set(n,[_,b]),Reflect.ownKeys(n).forEach(j=>{if(Object.getOwnPropertyDescriptor(b,j))return;const P=Reflect.get(n,j),S={value:P,enumerable:!0,configurable:!0};if($.has(P))te(P,!1);else if(P instanceof Promise)delete S.value,S.get=()=>C(P);else if(D.has(P)){const[y,F]=D.get(P);S.value=g(y,F(),C)}Object.defineProperty(b,j,S)}),Object.preventExtensions(b)},m=new WeakMap,h=[1,1],T=n=>{if(!G(n))throw new Error("object required");const _=m.get(n);if(_)return _;let C=h[0];const E=new Set,b=(i,o=++h[0])=>{C!==o&&(C=o,E.forEach(l=>l(i,o)))};let j=h[1];const P=(i=++h[1])=>(j!==i&&!E.size&&(j=i,y.forEach(([o])=>{const l=o[1](i);l>C&&(C=l)})),C),S=i=>(o,l)=>{const r=[...o];r[1]=[i,...r[1]],b(r,l)},y=new Map,F=(i,o)=>{if(E.size){const l=o[3](S(i));y.set(i,[o,l])}else y.set(i,[o])},Y=i=>{var o;const l=y.get(i);l&&(y.delete(i),(o=l[1])==null||o.call(l))},ue=i=>(E.add(i),E.size===1&&y.forEach(([l,r],v)=>{const W=l[3](S(v));y.set(v,[l,W])}),()=>{E.delete(i),E.size===0&&y.forEach(([l,r],v)=>{r&&(r(),y.set(v,[l]))})}),z=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),Z=(i,o,l,r,v)=>{if(i&&(e(o,r)||m.has(r)&&e(o,m.get(r))))return;Y(l),G(r)&&(r=he(r)||r);let W=r;if(r instanceof Promise)r.then(A=>{r.status="fulfilled",r.value=A,b(["resolve",[l],A])}).catch(A=>{r.status="rejected",r.reason=A,b(["reject",[l],A])});else{!D.has(r)&&s(r)&&(W=T(r));const A=!$.has(W)&&D.get(W);A&&F(l,A)}v(W),b(["set",[l],r,o])},K=t(z,{deleteProperty(i,o){const l=Reflect.get(i,o);Y(o);const r=Reflect.deleteProperty(i,o);return r&&b(["delete",[o],l]),r},set(i,o,l,r){const v=Reflect.has(i,o),W=Reflect.get(i,o,r);return Z(v,W,o,l,A=>{Reflect.set(i,o,A,r)}),!0},defineProperty(i,o,l){if(a(l)){const r=Reflect.getOwnPropertyDescriptor(i,o);if(!r||a(r))return Z(!!r&&"value"in r,r==null?void 0:r.value,o,l.value,v=>{Reflect.defineProperty(i,o,{...l,value:v})}),!0}return Reflect.defineProperty(i,o,l)}});m.set(n,K);const fe=[z,P,g,ue];return D.set(K,fe),Reflect.ownKeys(n).forEach(i=>{const o=Object.getOwnPropertyDescriptor(n,i);"value"in o&&(K[i]=n[i],delete o.value,delete o.writable),Object.defineProperty(z,i,o)}),K})=>[T,D,$,e,t,s,a,c,d,g,m,h],[be]=Ee();function L(e={}){return be(e)}function N(e,t,s){const a=D.get(e);let c;const d=[],g=a[3];let m=!1;const T=g(n=>{if(d.push(n),s){t(d.splice(0));return}c||(c=Promise.resolve().then(()=>{c=void 0,m&&t(d.splice(0))}))});return m=!0,()=>{m=!1,T()}}function ye(e,t){const s=D.get(e),[a,c,d]=s;return d(a,c(),t)}const u=L({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:u,subscribe(e){return N(u,()=>e(u))},push(e,t){e!==u.view&&(u.view=e,t&&(u.data=t),u.history.push(e))},reset(e){u.view=e,u.history=[e]},replace(e){u.history.length>1&&(u.history[u.history.length-1]=e,u.view=e)},goBack(){if(u.history.length>1){u.history.pop();const[e]=u.history.slice(-1);u.view=e}},setData(e){u.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),a.endsWith("/")||(a=`${a}/`),this.setWalletConnectDeepLink(a,s);const c=encodeURIComponent(t);return`${a}wc?uri=${c}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let a=e;a.endsWith("/")||(a=`${a}/`),this.setWalletConnectDeepLink(a,s);const c=encodeURIComponent(t);return`${a}wc?uri=${c}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.6.1")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},Ie=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),f=L({enabled:Ie,userSessionId:"",events:[],connectedWalletId:void 0}),ve={state:f,subscribe(e){return N(f.events,()=>e(ye(f.events[f.events.length-1])))},initialize(){f.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(f.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){f.connectedWalletId=e},click(e){if(f.enabled){const t={type:"CLICK",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}},track(e){if(f.enabled){const t={type:"TRACK",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}},view(e){if(f.enabled){const t={type:"VIEW",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}}},O=L({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:O,subscribe(e){return N(O,()=>e(O))},setChains(e){O.chains=e},setWalletConnectUri(e){O.walletConnectUri=e},setIsCustomDesktop(e){O.isCustomDesktop=e},setIsCustomMobile(e){O.isCustomMobile=e},setIsDataLoaded(e){O.isDataLoaded=e},setIsUiLoaded(e){O.isUiLoaded=e},setIsAuth(e){O.isAuth=e}},x=L({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),V={state:x,subscribe(e){return N(x,()=>e(x))},setConfig(e){var t,s;ve.initialize(),I.setChains(e.chains),I.setIsAuth(!!e.enableAuthMode),I.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),I.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign(x,e)}};var Ae=Object.defineProperty,se=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_e=(e,t)=>{for(var s in t||(t={}))Oe.call(t,s)&&ne(e,s,t[s]);if(se)for(var s of se(t))we.call(t,s)&&ne(e,s,t[s]);return e};const q="https://explorer-api.walletconnect.com",Q="wcm",X="js-2.6.1";async function B(e,t){const s=_e({sdkType:Q,sdkVersion:X},t),a=new URL(e,q);return a.searchParams.append("projectId",V.state.projectId),Object.entries(s).forEach(([c,d])=>{d&&a.searchParams.append(c,String(d))}),(await fetch(a)).json()}const R={async getDesktopListings(e){return B("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return B("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return B("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return B("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${q}/w3m/v1/getWalletImage/${e}?projectId=${V.state.projectId}&sdkType=${Q}&sdkVersion=${X}`},getAssetImageUrl(e){return`${q}/w3m/v1/getAssetImage/${e}?projectId=${V.state.projectId}&sdkType=${Q}&sdkVersion=${X}`}};var Pe=Object.defineProperty,oe=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,De=(e,t)=>{for(var s in t||(t={}))Ce.call(t,s)&&re(e,s,t[s]);if(oe)for(var s of oe(t))We.call(t,s)&&re(e,s,t[s]);return e};const ae=p.isMobile(),w=L({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Ve={state:w,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=V.state;if(e==="NONE"||t==="ALL"&&!e)return w.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:a}=await R.getAllListings(s),c=Object.values(a);c.sort((d,g)=>{const m=e.indexOf(d.id),h=e.indexOf(g.id);return m-h}),w.recomendedWallets=c}else{const{chains:s,isAuth:a}=I.state,c=s==null?void 0:s.join(","),d=p.isArray(t),g={page:1,sdks:a?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:c,version:2,excludedIds:d?t.join(","):void 0},{listings:m}=ae?await R.getMobileListings(g):await R.getDesktopListings(g);w.recomendedWallets=Object.values(m)}return w.recomendedWallets},async getWallets(e){const t=De({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:a}=V.state,{recomendedWallets:c}=w;if(a==="ALL")return w.wallets;c.length?t.excludedIds=c.map(_=>_.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:d,search:g}=e,{listings:m,total:h}=ae?await R.getMobileListings(t):await R.getDesktopListings(t),T=Object.values(m),n=g?"search":"wallets";return w[n]={listings:[...w[n].listings,...T],total:h,page:d??1},{listings:T,total:h}},getWalletImageUrl(e){return R.getWalletImageUrl(e)},getAssetImageUrl(e){return R.getAssetImageUrl(e)},resetSearch(){w.search={listings:[],total:0,page:1}}},U=L({open:!1}),H={state:U,subscribe(e){return N(U,()=>e(U))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:a}=I.state;if(p.removeWalletConnectDeepLink(),I.setWalletConnectUri(e==null?void 0:e.uri),I.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&a)U.open=!0,t();else{const c=setInterval(()=>{const d=I.state;d.isUiLoaded&&d.isDataLoaded&&(clearInterval(c),U.open=!0,t())},200)}})},close(){U.open=!1}};var Le=Object.defineProperty,ie=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Re=(e,t)=>{for(var s in t||(t={}))Te.call(t,s)&&le(e,s,t[s]);if(ie)for(var s of ie(t))Se.call(t,s)&&le(e,s,t[s]);return e};function Me(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const k=L({themeMode:Me()?"dark":"light"}),ce={state:k,subscribe(e){return N(k,()=>e(k))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(k.themeMode=t),s&&(k.themeVariables=Re({},s))}},M=L({open:!1,message:"",variant:"success"}),ke={state:M,subscribe(e){return N(M,()=>e(M))},openToast(e,t){M.open=!0,M.message=e,M.variant=t},closeToast(){M.open=!1}};class Ne{constructor(t){this.openModal=H.open,this.closeModal=H.close,this.subscribeModal=H.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),V.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index-18199414.js"),["assets/index-18199414.js","assets/index-7485d795.js","assets/index-8b8e171c.css"]);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),I.setIsUiLoaded(!0)}}}const Ke=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Ne},Symbol.toStringTag,{value:"Module"}));export{ve as R,de as T,p as a,Ke as i,ce as n,ke as o,I as p,H as s,Ve as t,V as y};
