(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(4),i=a.n(r),o=(a(10),a(3)),d="02db419a7c0f44463ec4a1a566dd93b5",l="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)({}),i=Object(o.a)(r,2),u=i[0],h=i[1];return(new Date).getFullYear,Object(n.jsx)("div",{className:"undefined"!=typeof u.main&&u.main.temp<16?"app warm":"app",children:Object(n.jsxs)("main",{children:[Object(n.jsx)("div",{className:"search-box",children:Object(n.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return s(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(a,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){h(e),s(""),console.log(e)}))}})}),"undefined"!=typeof u.main?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"location-box",children:[Object(n.jsxs)("div",{className:"location",children:[u.name,", ",u.sys.country]}),Object(n.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a,", ").concat(c)}(new Date)})]}),Object(n.jsxs)("div",{className:"weather-box",children:[Object(n.jsxs)("div",{className:"temp",children:[Math.round(u.main.temp),"\xb0c"]}),Object(n.jsx)("div",{className:"weather",children:u.weather[0].description}),Object(n.jsxs)("div",{className:"feelslike",children:["Feels Like ",Math.round(u.main.feels_like),"\xb0c"]})]})]}):""]})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),h()}},[[11,1,2]]]);
//# sourceMappingURL=main.9849cea2.chunk.js.map