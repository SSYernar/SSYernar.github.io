(function(t){function e(e){for(var r,o,i=e[0],l=e[1],u=e[2],c=0,p=[];c<i.length;c++)o=i[c],n[o]&&p.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},n={app:0},a=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var r=s("87dc"),n=s.n(r);n.a},"56d7":function(t,e,s){"use strict";s.r(e);var r=s("2b0e"),n=s("bb71");s("da64");r["a"].use(n["a"],{iconfont:"md"});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{dark:t.dark}},[s("v-content",[s("v-container",[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-layout",[s("v-flex",{attrs:{xs3:"",sm3:"","offset-xs9":"","offset-sm11":""}},[s("v-icon",{attrs:{large:""},on:{click:function(e){t.changeTheme()}}},[t._v("brightness_6")])],1)],1)],1),s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-2":""}},[s("v-card",[s("v-card-title",[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-select",{attrs:{items:t.groups,label:"Топты танданыз",outline:""},on:{change:function(e){t.selectedGroupsCount=2,t.selectedStudents=[]}},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-select",{attrs:{items:t.studentssss,label:"Кімнен басқа",multiple:""},model:{value:t.selectedStudents,callback:function(e){t.selectedStudents=e},expression:"selectedStudents"}},[s("v-divider",{staticClass:"mb-2",attrs:{slot:"append-item"},slot:"append-item"}),s("v-list-tile",{attrs:{slot:"append-item"},slot:"append-item"},[s("v-list-tile-avatar",{attrs:{color:"grey lighten-3"}},[s("v-icon",[t._v("face")])],1),s("v-list-tile-content",[s("v-list-tile-title",[t._v("Оқушылар саны")]),s("v-list-tile-sub-title",[t._v(t._s(t.selectedStudents.length))])],1)],1)],1)],1),s("v-flex",{attrs:{xs12:""}},[s("v-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[s("v-radio",{attrs:{value:"generateList"}},[s("div",{attrs:{slot:"label"},slot:"label"},[t._v("Кездейсоқ тізім")])]),s("v-radio",{attrs:{value:"divideToGroups"}},[s("div",{staticClass:"in-one-line",attrs:{slot:"label"},slot:"label"},[s("p",{staticClass:"pt-4"},[t._v("")]),s("v-select",{staticClass:"ml-2 mr-2",attrs:{items:t.groupsCount},model:{value:t.selectedGroupsCount,callback:function(e){t.selectedGroupsCount=e},expression:"selectedGroupsCount"}}),s("p",{staticClass:"pt-4"},[t._v("топқа бөлу")])],1)])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"700px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-btn",{staticClass:"primary mr-2 mb-2",attrs:{slot:"activator"},on:{click:function(e){t.randomize()}},slot:"activator"},[t._v("Randomize!")]),s("v-card",[s("v-card-title",{staticClass:"headline"},["generateList"===t.radio?s("div",[t._v("Кездейсоқ тізім")]):s("div",[t._v("Кездейсоқ "+t._s(t.selectedGroupsCount)+" топ")])]),s("v-card-text",["generateList"===t.radio?s("div",t._l(t.studentsss,function(e,r){return s("p",{key:r},[t._v("\n                        "+t._s(r+1)+") "+t._s(e)+"\n                      ")])})):s("div",t._l(t.generatedGroups,function(e,r){return s("div",{key:r},[s("strong",[t._v(t._s(r+1)+" Топ:")]),t._l(e,function(e){return s("span",{key:e},[t._v("\n                          "+t._s(e)+"\n                        ")])})],2)}))]),s("v-card-actions",[s("v-spacer"),s("v-btn",{staticClass:"primary",nativeOn:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1)],1)],1)],1)],1)],1)],1)],1),s("v-footer",{staticClass:"pa-3"},[s("div",[t._v("\n      Made with\n      "),s("v-icon",{staticClass:"red--text"},[t._v("favorite")]),t._v("\n      by "),s("a",{staticClass:"cyan--text",attrs:{href:"https://vk.com/ssyernar",target:"_blank"}},[t._v("Yernar Sadybekov")])],1),s("v-spacer"),s("div",[t._v("© "+t._s((new Date).getFullYear()))])],1)],1)},o=[];function i(t){let e,s,r;for(r=t.length-1;r>0;r--)e=Math.floor(Math.random()*(r+1)),s=t[r],t[r]=t[e],t[e]=s;return t}var l={name:"App",data:()=>({dark:!1,radio:"generateList",dialog:!1,group:"Сынып",selectedStudents:[],selectedGroupsCount:2,groups:["Сынып","1-ші топ","2-ші топ"],groupsCountt:[2,3,4,6],students:["Жанибек","Толкынай","Алих Семск","Дамиля","Анель","Данай","Арай","Ернар","Ажар","Айнур","Сайфуддин","Алан","Олжас","Елигай","Маулен","Амина","Нуржигит","Алихан","Зере","Мухсин","Тогжан","Сырым","Акежан","Дарын"].sort(),secondGroupStudents:["Жанибек","Дамиля","Анель","Арай","Ернар","Алан","Олжас","Маулен","Нуржигит","Алихан","Акежан","Дарын"].sort(),studentsss:[],generatedGroups:null}),methods:{changeTheme(){this.dark=!this.dark},randomize(){let t=i(this.studentss),e=t.length;if("generateList"===this.radio)this.studentsss=t;else{let s=Math.floor(e/this.selectedGroupsCount),r=e,n=[],a=0,o=this.selectedGroupsCount;for(let t=0;t<this.selectedGroupsCount;t++)n.push([]);for(let e=0;e<this.selectedGroupsCount;e++)if(r%o--!==0){r-=s+1;for(let r=1;r<=s+1;r++)n[e].push(t[a++])}else{r-=s;for(let r=1;r<=s;r++)n[e].push(t[a++])}this.generatedGroups=[...n]}}},computed:{groupsCount(){return"Сынып"===this.group?[...this.groupsCountt,12]:this.groupsCountt},firstGroupStudents(){let t=[...this.students];for(let e=0;e<this.secondGroupStudents.length;e++){let s=t.indexOf(this.secondGroupStudents[e]);t.splice(s,1)}return t},studentss(){if("Класс"===this.group){let t=[...this.students];for(let e=0;e<this.selectedStudents.length;e++){let s=t.indexOf(this.selectedStudents[e]);t.splice(s,1)}return t}if("1-ші топ"===this.group){let t=[...this.firstGroupStudents];for(let e=0;e<this.selectedStudents.length;e++){let s=t.indexOf(this.selectedStudents[e]);t.splice(s,1)}return t}let t=[...this.secondGroupStudents];for(let e=0;e<this.selectedStudents.length;e++){let s=t.indexOf(this.selectedStudents[e]);t.splice(s,1)}return t},studentssss(){return"Сынып"===this.group?this.students:"1-ші топ"===this.group?this.firstGroupStudents:this.secondGroupStudents}}},u=l,d=(s("034f"),s("2877")),c=s("6544"),p=s.n(c),v=s("7496"),f=s("8336"),h=s("b0af"),g=s("99d9"),b=s("12b2"),m=s("a523"),_=s("549c"),x=s("169a"),C=s("ce7e"),y=s("0e8f"),S=s("553a"),G=s("132d"),V=s("a722"),k=s("ba95"),O=s("c954"),w=s("5d23"),T=s("67b6"),L=s("43a6"),j=s("b56d"),M=s("9910"),P=Object(d["a"])(u,a,o,!1,null,null,null);P.options.__file="App.vue";var A=P.exports;p()(P,{VApp:v["a"],VBtn:f["a"],VCard:h["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:b["a"],VContainer:m["a"],VContent:_["a"],VDialog:x["a"],VDivider:C["a"],VFlex:y["a"],VFooter:S["a"],VIcon:G["a"],VLayout:V["a"],VListTile:k["a"],VListTileAvatar:O["a"],VListTileContent:w["a"],VListTileSubTitle:w["b"],VListTileTitle:w["c"],VRadio:T["a"],VRadioGroup:L["a"],VSelect:j["a"],VSpacer:M["a"]}),r["a"].config.productionTip=!1,new r["a"]({render:t=>t(A)}).$mount("#app")},"87dc":function(t,e,s){}});
//# sourceMappingURL=app.acc8fe02.js.map
