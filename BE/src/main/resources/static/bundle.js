!function(e){var t={};function s(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=2)}([function(e,t,s){},function(e,t){const s=document.querySelector("header"),r=s.querySelector(".menu:first-child"),a=s.querySelector(".menu:last-child"),n=document.querySelector(".container");r.addEventListener("touchstart",()=>n.style.left=0,{passive:!1}),a.addEventListener("touchstart",()=>n.style.left="-100vw",{passive:!1})},function(e,t,s){"use strict";s.r(t);s(0);class r{constructor(){this._observers={fetchData:new Set,scrollBarGraph:new Set,handleForecastAnimation:new Set}}addObserver({type:e,observer:t}){this._observers[e].add(t)}removeObserver({type:e,observer:t}){this._observers[e]=[...this._observers].filter(e=>e!==t)}notify({type:e,data:t}){this._observers[e].forEach(e=>e(t))}}class a{async get(e){const t=await fetch(e);return await t.json()}}const n=(e,t)=>e.querySelector(t),d={CURRENT_24HOURS:"http://34.236.160.204:8080/api/dust-status/location?",FORECAST:"http://34.236.160.204:8080/api/dust/forecast"},i=127.033419,o=37.490846,c="fetchData",l="scrollBarGraph",u={1:["😀","좋음","#4e8deb"],2:["🙂","보통","#4dd188"],3:["😷","나쁨","#f3ac41"],4:["😱","최악","#d34e44"]},h={CONTAINER:".container",VIEWPORT:".big-screen",NO_GPS:".no-gps",LOADING:".loading"},p={PANEL:".dust__panel",GRAPH:".dust__graph",EMOJI:".grade__emoji",TEXT:".grade__text",DETAILS_VALUE:".details__value",DETAILS_TIME:".details__time"};function f(e,{stationName:t,data:s}){return`<div class="page dust">${function(e,{dataTime:t,pm10Value:s,pm10Grade:r}){const a=`<div class="grade__emoji">${u[r][0]}</div>`,n=`<div class="grade__text">${u[r][1]}</div>`,d=`<div class="dust__details"><span>\n\t\t\t<span class="details__value">${s}</span> 𝜇g/m³\n    </span><span class="details__time">${t}</span></div>`,i=`<div class="dust__station">\n\t\t<span class="station__name">${e}</span> 측정소 기준\n\t</div>`;return`<div class="dust__panel" style="background:linear-gradient(${u[r][2]}, #fff);"><h1>미세먼지 앱</h1>${a}${n}${d}${i}</div>`}(t,s[0])}${function(e){return`<div class="dust__graph">${e.reduce((e,{dataTime:t,pm10Value:s,pm10Grade:r})=>e+=`<div class="bar-container" data-time="${t}" data-value="${s}" data-grade="${r}">\n\t\t<div class="bar" style="width:${s/200*100}%; background:${u[r][2]};"></div>\n\t\t<span class="value">${s}</span>\n\t</div>`,"")}</div>`}(s)}</div>`}function v(e,t){return`<div class="page forecast">${function({imageUrls:e,informOverall:t,informGrade:s}){const r=e.reduce((e,t,s)=>e+=`<img src="${t}" alt="forecast image ${s+1}" width="100%"/>`,"");return`<div class="forecast__panel"><h1>미세먼지 예보</h1>${`<div class="forecast__image">${r}</div>`}<div class="forecast__controls"><span class="button">▶️</span><progress class="controller" value="0" max="9"></progress></div>${`<div class="forecast__overall">${t}</div>`}${`<div class="forecast__grade">${s}</div>`}</div>`}(t)}</div>`}s(1);const b=new class extends r{constructor(){super(),this.http=new a,this.indexOfCurrentData=0}fetchData(e,t){const s=`${d.CURRENT_24HOURS}longitude=${i}&latitude=${o}`;this.http.get(s).then(this.handleResponse.bind(this)).catch(this.handleError)}handleResponse(e){if(200!==e.code)throw Error(`네트워크 에러 --- ${e.code}`);this.notify({type:c,data:e}),this.hideLoadingScreen()}handleError(e){console.error(e)}showNoGpsScreen(){n(document,h.NO_GPS).style.display="flex"}hideLoadingScreen(){n(document,h.LOADING).style.display="none"}updateDisplayedData(e){this.indexOfCurrentData=e,this.notify({type:l,data:e})}},_=new class extends r{constructor(){super(),this.http=new a}fetchData(){const e=d.FORECAST;this.http.get(e).then(this.handleResponse.bind(this)).catch(this.handleError)}handleResponse(e){if(200!==e.code)throw Error(`네트워크 에러 --- ${e.code}`);this.notify({type:c,data:e.data})}handleError(e){console.error(e)}},m=new class{constructor(e){this.dustModel=e,this.dustPanel=null,this.dustGraph=null,this.dustGraphBars=null,this.previousIndexOfBar=0}subscribe(){this.dustModel.addObserver({type:c,observer:this.render}),this.dustModel.addObserver({type:c,observer:this.cacheDomElements.bind(this)}),this.dustModel.addObserver({type:c,observer:this.bindOnScrollListener.bind(this)}),this.dustModel.addObserver({type:l,observer:this.updateDustPanelView.bind(this)})}render(e){const t=f`${e}`;n(document,h.CONTAINER).insertAdjacentHTML("afterbegin",t)}cacheDomElements(){this.dustPanel=n(document,p.PANEL),this.dustGraph=n(document,p.GRAPH),this.dustGraphBars=[...this.dustGraph.children]}updateDustPanelView(e){const t=this.dustGraphBars[e],{grade:s,value:r,time:a}=t.dataset,[d,i,o]=u[s];this.dustPanel.style.background=`linear-gradient(${o}, #fff)`,n(this.dustPanel,p.EMOJI).textContent=d,n(this.dustPanel,p.TEXT).textContent=i,n(this.dustPanel,p.DETAILS_VALUE).textContent=r,n(this.dustPanel,p.DETAILS_TIME).textContent=a}barGraphScrollHandler(e){const t=Math.floor(e/20);t!==this.previousIndexOfBar&&(this.dustModel.updateDisplayedData(t),this.previousIndexOfBar=t)}bindOnScrollListener(){var e,t,s;e=this.dustGraph,t="scroll",s=e=>this.barGraphScrollHandler(e.target.scrollTop),e.addEventListener(t,s)}}(b),y=new class{constructor(e){this.forecastModel=e}subscribe(){this.forecastModel.addObserver({type:c,observer:this.render})}render(e){const t=v`${e}`;n(document,h.CONTAINER).insertAdjacentHTML("beforeend",t)}}(_);window.addEventListener("DOMContentLoaded",()=>{m.subscribe(),y.subscribe(),b.fetchData(),_.fetchData()})}]);