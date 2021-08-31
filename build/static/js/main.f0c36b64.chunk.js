(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n,r,c=a(10),s=a.n(c),i=a(4),l=a(11),u=a(1),o=a(3),d=a(5),b=Object(d.b)("tasks/add",(function(e,t){return{payload:{task:e,date:t},meta:{generateId:["taskId"]}}})),j=Object(d.b)("tasks/delete",(function(e){return{payload:e}})),p=Object(d.b)("task/checked",(function(e){return{payload:e}})),O=Object(d.c)([],(n={},Object(o.a)(n,b,(function(e,t){var a=t.payload,n=t.taskId;e.push({id:n,text:a.task,date:a.date,isChecked:!1})})),Object(o.a)(n,j,(function(e,t){var a=t.payload;return e.filter((function(e){return e.id!==a}))})),Object(o.a)(n,p,(function(e,t){var a=t.payload,n=e.find((function(e){return e.id===a}));n.isChecked=!n.isChecked})),n)),f=function(e){return e.tasks},h=a(8),m=a.n(h),x=a(2),_=Object(i.b)(null,(function(e){return{onSubmit:function(t,a){return e(b(t,a))}}}))((function(e){var t=e.onSubmit,a=Object(u.useState)(new Date),n=Object(l.a)(a,2),r=n[0],c=n[1];return Object(x.jsx)("div",{children:Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==e.target.text.value&&(t(e.target.text.value,r),e.target.text.value="")},children:Object(x.jsxs)("div",{className:m.a.wrapper,children:[Object(x.jsx)("input",{type:"text",name:"text",className:m.a.text}),Object(x.jsx)("input",{type:"date",value:r.toISOString().substring(0,10),onChange:function(e){c(e.target.valueAsDate)},className:m.a.data}),Object(x.jsx)("button",{className:m.a.submit,children:"ADD"})]})})})})),k=a(9),v=a.n(k),g=a.p+"static/media/header.ffbbcc81.png",w=function(){return Object(x.jsxs)("header",{className:v.a.banner,children:[Object(x.jsx)("img",{className:v.a.img,src:g,alt:"banner"}),Object(x.jsxs)("div",{className:v.a.wrapper,children:[Object(x.jsx)("h1",{className:v.a.heading,children:"TO-DO"}),Object(x.jsx)(_,{})]})]})},y=a(15),N=a.n(y),D=a(18),C=a.n(D),I=["title","titleId"];function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function T(e,t){var a=e.title,n=e.titleId,c=S(e,I);return u.createElement("svg",E({id:"Capa_1",enableBackground:"new 0 0 512 512",height:"20px",viewBox:"0 0 512 512",width:"20px",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},c),a?u.createElement("title",{id:n},a):null,r||(r=u.createElement("g",null,u.createElement("g",null,u.createElement("circle",{cx:256,cy:256.08,fill:"#fff7bf",r:246.252}),u.createElement("path",{d:"m320.93 256.08 71.581-71.581c17.93-17.93 17.93-47 0-64.929-17.93-17.93-47-17.93-64.93 0l-71.581 71.58-71.581-71.581c-17.93-17.93-47-17.93-64.93 0-17.93 17.93-17.93 47 0 64.929l71.581 71.581-71.581 71.581c-17.93 17.93-17.93 47 0 64.93 17.93 17.93 47 17.93 64.93 0l71.581-71.581 71.581 71.581c17.93 17.93 47 17.93 64.93 0 17.93-17.93 17.93-47 0-64.93z",fill:"#e38eba"})),u.createElement("g",null,u.createElement("path",{d:"m399.604 112.476c-21.813-21.811-57.303-21.811-79.116 0l-64.488 64.488-64.488-64.488c-21.813-21.811-57.303-21.811-79.116 0-21.812 21.813-21.812 57.303 0 79.116l64.489 64.488-64.489 64.488c-21.812 21.813-21.812 57.303 0 79.116 21.813 21.811 57.303 21.811 79.116 0l64.488-64.489 64.488 64.488c10.906 10.905 25.232 16.359 39.558 16.359s28.652-5.453 39.558-16.359c21.812-21.813 21.812-57.303 0-79.116l-64.489-64.488 64.489-64.488c21.812-21.812 21.812-57.303 0-79.115zm-14.186 64.93-71.581 71.581c-3.917 3.917-3.917 10.269 0 14.186l71.581 71.581c13.991 13.99 13.991 36.754 0 50.744-13.99 13.99-36.754 13.99-50.744 0l-71.581-71.581c-1.959-1.958-4.526-2.938-7.093-2.938s-5.134.98-7.093 2.938l-71.581 71.581c-13.99 13.99-36.754 13.99-50.744 0-13.991-13.99-13.991-36.754 0-50.744l71.581-71.581c3.917-3.917 3.917-10.269 0-14.186l-71.581-71.581c-13.991-13.99-13.991-36.754 0-50.744 13.99-13.99 36.754-13.99 50.744 0l71.581 71.581c3.917 3.916 10.269 3.916 14.186 0l71.581-71.581c13.99-13.99 36.754-13.99 50.744 0s13.99 36.754 0 50.744z"}),u.createElement("path",{d:"m258.302 20.617c5.522-.082 9.936-4.625 9.858-10.148-.078-5.522-4.618-9.932-10.14-9.85-5.522.082-9.936 4.625-9.858 10.148.078 5.522 4.618 9.932 10.14 9.85z"}),u.createElement("path",{d:"m451.654 90.176c-37.624-44.57-89.835-75.166-147.016-86.154-5.442-1.047-10.699 2.517-11.743 7.958-1.045 5.44 2.517 10.698 7.957 11.743 52.688 10.124 100.799 38.32 135.473 79.393 40.631 48.132 60.075 109.222 54.748 172.016-5.326 62.796-34.787 119.779-82.956 160.451-42.999 36.308-96.3 55.739-151.915 55.737-6.685-.001-13.414-.282-20.151-.848-62.789-5.277-119.744-34.69-160.376-82.821-40.631-48.133-60.075-109.223-54.748-172.017 5.326-62.796 34.787-119.779 82.956-160.452 31.743-26.804 70.005-44.802 110.651-52.052 5.454-.973 9.086-6.182 8.114-11.636-.973-5.455-6.187-9.081-11.636-8.114-44.115 7.868-85.635 27.396-120.071 56.473-52.261 44.129-84.225 105.954-90.004 174.086-5.779 68.136 15.319 134.423 59.409 186.651 44.09 52.229 105.893 84.147 174.025 89.872 7.314.615 14.608.92 21.865.92 60.338 0 118.176-21.081 164.825-60.471 52.26-44.127 84.223-105.952 90.003-174.084 5.778-68.135-15.32-134.423-59.41-186.651z"})))))}var Y=u.forwardRef(T),z=(a.p,a(6)),F=a.n(z),H=Object(i.b)(null,(function(e,t){var a=t.task;return{onDelete:function(){return e(j(a.id))},isChecked:function(){return e(p(a.id))}}}))((function(e){var t=e.task,a=e.onDelete,n=e.isChecked;return Object(x.jsxs)("div",{className:F.a.wrapper,children:[Object(x.jsx)("input",{type:"checkbox",id:"activeCheck",className:F.a.checkbox,checked:t.isChecked,onChange:n}),Object(x.jsx)("label",{htmlFor:"checkbox",className:C()(F.a.text,Object(o.a)({},F.a.text\u0421rossOut,t.isChecked)),children:t.text}),Object(x.jsx)("button",{onClick:a,className:F.a.button,children:Object(x.jsx)(Y,{})})]})})),M=a(19),Q=(a(30),function(e){var t=e.startDate,a=e.setStartDate;return Object(x.jsx)("div",{children:Object(x.jsx)(M.a,{onChange:a,value:t,locale:"en-EN",className:"calendar"})})}),A=a(7),B=a.n(A),J=Object(i.b)((function(e){return{tasks:f(e)}}))((function(e){var t=e.tasks,a=Object(u.useState)(new Date),n=Object(l.a)(a,2),r=n[0],c=n[1],s=t.filter((function(e){return N()(e.date).isSame(r,"day")}));return Object(x.jsxs)("div",{className:B.a.wrapper,children:[Object(x.jsxs)("div",{className:B.a.task_inner,children:[Object(x.jsxs)("h1",{className:B.a.heading,children:["Your plan for the ",N()(r).format("dddd, MMMM Do YYYY")]}),s.length>0?s.map((function(e){return Object(x.jsx)(H,{task:e},e.id)})):Object(x.jsx)("p",{className:B.a.emptyList,children:"Add the task to your list"})]}),Object(x.jsx)("div",{className:B.a.calendar_inner,children:Object(x.jsx)(Q,{setStartDate:c,startDate:r})})]})})),L=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(w,{}),Object(x.jsx)(J,{})]})},P=a(17),R=a(20),q=a(34),K=["meta"],G={tasks:O},W=[function(e){return function(e){return function(t){var a;if(!(null===(a=t.meta)||void 0===a?void 0:a.generateId))return e(t);var n=t.meta,r=Object(R.a)(t,K);e(Object(P.a)(Object(P.a)({},r),{},Object(o.a)({},n.generateId,Object(q.a)())))}}}],X=Object(d.a)({reducer:G,middleware:W});a(31);s.a.render(Object(x.jsx)(i.a,{store:X,children:Object(x.jsx)(L,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={wrapper:"Task_wrapper__3NRgh",checkbox:"Task_checkbox__38D1G",text:"Task_text__12uQj","text\u0421rossOut":"Task_text\u0421rossOut__3vvS6",button:"Task_button__6Tlgq"}},7:function(e,t,a){e.exports={heading:"Tasks_heading__2Qxiv",emptyList:"Tasks_emptyList__2eED-",wrapper:"Tasks_wrapper__2KvCq",calendar_inner:"Tasks_calendar_inner__w-5fH",task_inner:"Tasks_task_inner__2u329"}},8:function(e,t,a){e.exports={text:"Form-Input_text__3MiWX",data:"Form-Input_data__2Io4Z",submit:"Form-Input_submit__2j_zJ",wrapper:"Form-Input_wrapper__2kYOO"}},9:function(e,t,a){e.exports={banner:"Header_banner__10RCN",img:"Header_img__1QFYu",wrapper:"Header_wrapper__50s_Q",heading:"Header_heading__32Kgy"}}},[[32,1,2]]]);
//# sourceMappingURL=main.f0c36b64.chunk.js.map