(this.webpackJsonpsoftwarely=this.webpackJsonpsoftwarely||[]).push([[0],{44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(2),a=r.n(c),s=r(10),i=r.n(s),o=r(9),l=r(11),p=r.n(l),u=(r(39),r(6)),j=r.n(u),b=r(12);function d(){return(d=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data-tree.json",{mode:"cors"});case 2:return t=e.sent,e.prev=3,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(3),Error("Error fetching data.");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function m(e){var t=e.error;return Object(n.jsxs)("div",{className:"error",children:[Object(n.jsx)("h1",{className:"error__heading",children:"Sorry, an error occurred..."}),Object(n.jsx)("p",{className:"error__text",children:t.message})]})}function h(e){var t,r=e.memberName,c=e.memberDescription;return e.id%2===0&&(t="--odd"),Object(n.jsxs)("li",{className:"tree__endpoint ".concat(t),children:[Object(n.jsx)("h4",{className:"heading__endpoint",children:r}),Object(n.jsx)("p",{className:"description__endpoint",children:c})]})}var x=r(7),O=r(8);function f(e){var t=e.inputType,r=e.labelId,c=e.labelText;return Object(n.jsxs)("label",{className:"input__label",htmlFor:r,children:[Object(n.jsxs)("span",{className:"input__button --".concat(t),children:[Object(n.jsx)(x.a,{icon:O.b,className:"input__icon-plus"}),Object(n.jsx)(x.a,{icon:O.a,className:"input__icon-minus"})]}),c]})}function _(e){var t=e.parentLabel,r=e.inputType,c=e.groupName,a=e.groupMembers,s=e.groupId,i=e.groupDescription,o="".concat(t,"-").concat(c,"-").concat(s),l=Object(n.jsx)("h4",{className:"heading__node",children:c});return Object(n.jsxs)("li",{className:"tree__node",children:[Object(n.jsx)("input",{type:r,id:o,name:t,className:"input"}),Object(n.jsx)(f,{inputType:r,labelId:o,labelText:l}),Object(n.jsx)("p",{className:"description__node",children:i}),Object(n.jsx)(N,{members:a,parentLabel:o}),Object(n.jsx)("div",{className:"vertical-line"})]})}function v(e){if("checkbox group"===e)return"checkbox";if("radio group"===e)return"radio";throw new Error("Wrong group type!")}function N(e){var t=e.members,r=e.parentLabel,c=t.map((function(e,t){if("endpoint"===e.type)return Object(n.jsx)(h,{id:t,memberName:e.name,memberDescription:e.description},t);var c=v(e.type);return Object(n.jsx)(_,{parentLabel:r,inputType:c,groupName:e.name,groupDescription:e.description,groupMembers:e.members,groupId:t},t)}));return Object(n.jsx)("ul",{children:c})}function g(e){var t=e.tree,r="tree-".concat(t["tree title"]),c=t["multi-line description"].map((function(e,t){return Object(n.jsx)("p",{className:"description__title",children:e},t)})),a=v(t.type),s=Object(n.jsx)("h1",{className:"heading__primary",children:t["tree title"]});return Object(n.jsxs)("div",{className:"tree",children:[Object(n.jsx)("input",{type:a,id:r,name:t.name,className:"input"}),Object(n.jsx)(f,{parentLabel:r,inputType:a,labelId:r,labelText:s}),c,Object(n.jsx)(N,{members:t.members,parentLabel:r}),Object(n.jsx)("div",{className:"vertical-line"})]})}r(44);var y=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(void 0),i=Object(o.a)(s,2),l=i[0],u=i[1];return Object(c.useEffect)((function(){void 0===l&&function(){return d.apply(this,arguments)}().then((function(e){return u(e)})).catch((function(e){return function(e){a(e)}(e)}))}),[l]),r?Object(n.jsx)(m,{error:r}):void 0===l?Object(n.jsx)(p.a,{className:"flex-center",type:"Oval",color:"#2998ff",height:50,width:50,timeout:3e3}):Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(g,{tree:l})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.bdfda8d4.chunk.js.map