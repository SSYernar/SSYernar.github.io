(function(t){function e(e){for(var n,o,l=e[0],a=e[1],u=e[2],c=0,p=[];c<l.length;c++)o=l[c],r[o]&&p.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,l=1;l<s.length;l++){var a=s[l];0!==r[a]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=a;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("87dc"),r=s.n(n);r.a},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),r=s("bb71");s("da64");n["a"].use(r["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{dark:t.dark}},[s("v-content",[s("v-container",[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-layout",[s("v-flex",{attrs:{xs3:"",sm3:"","offset-xs9":"","offset-sm11":""}},[s("v-icon",{attrs:{large:""},on:{click:function(e){t.changeTheme()}}},[t._v("brightness_6")])],1)],1)],1),s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-2":""}},[s("v-card",[s("v-card-title",[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-select",{attrs:{items:t.groups,label:"Топты танданыз",outline:""},on:{change:function(e){t.selectedGroupsCount=2,t.selectedStudents=[]}},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-select",{attrs:{items:t.studentssss,label:"Кімнен басқа",multiple:""},model:{value:t.selectedStudents,callback:function(e){t.selectedStudents=e},expression:"selectedStudents"}},[s("v-divider",{staticClass:"mb-2",attrs:{slot:"append-item"},slot:"append-item"}),s("v-list-tile",{attrs:{slot:"append-item"},slot:"append-item"},[s("v-list-tile-avatar",{attrs:{color:"grey lighten-3"}},[s("v-icon",[t._v("face")])],1),s("v-list-tile-content",[s("v-list-tile-title",[t._v("Оқушылар саны")]),s("v-list-tile-sub-title",[t._v(t._s(t.selectedStudents.length))])],1)],1)],1)],1),s("v-flex",{attrs:{xs12:""}},[s("v-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[s("v-radio",{attrs:{value:"generateList"}},[s("div",{attrs:{slot:"label"},slot:"label"},[t._v("Кездейсоқ тізім")])]),s("v-radio",{attrs:{value:"divideToGroups"}},[s("div",{staticClass:"in-one-line",attrs:{slot:"label"},slot:"label"},[s("p",{staticClass:"pt-4"}),s("v-select",{staticClass:"ml-2 mr-2",attrs:{items:t.groupsCount},model:{value:t.selectedGroupsCount,callback:function(e){t.selectedGroupsCount=e},expression:"selectedGroupsCount"}}),s("p",{staticClass:"pt-4"},[t._v("топқа бөлу")])],1)])],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"700px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-btn",{staticClass:"primary mr-2 mb-2",attrs:{slot:"activator"},on:{click:function(e){t.randomize()}},slot:"activator"},[t._v("Randomize!")]),s("v-card",[s("v-card-title",{staticClass:"headline"},["generateList"===t.radio?s("div",[t._v("Кездейсоқ тізім")]):s("div",[t._v("Кездейсоқ "+t._s(t.selectedGroupsCount)+" топ")])]),s("v-card-text",["generateList"===t.radio?s("div",t._l(t.studentsss,function(e,n){return s("p",{key:n},[t._v("\n                        "+t._s(n+1)+") "+t._s(e)+"\n                      ")])})):s("div",t._l(t.generatedGroups,function(e,n){return s("div",{key:n},[s("strong",[t._v(t._s(n+1)+" Топ:")]),t._l(e,function(e){return s("span",{key:e},[t._v("\n                          "+t._s(e)+"\n                        ")])})],2)}))]),s("v-card-actions",[s("v-spacer"),s("v-btn",{staticClass:"primary",nativeOn:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1)],1)],1)],1)],1)],1)],1)],1),s("v-footer",{staticClass:"pa-3"},[s("div",[t._v("\n      Made with\n      "),s("v-icon",{staticClass:"red--text"},[t._v("favorite")]),t._v("\n      by "),s("a",{staticClass:"cyan--text",attrs:{href:"https://vk.com/ssyernar",target:"_blank"}},[t._v("Yernar Sadybekov")])],1),s("v-spacer"),s("div",[t._v("© "+t._s((new Date).getFullYear()))])],1)],1)},o=[];function l(t){let e,s,n;for(n=t.length-1;n>0;n--)e=Math.floor(Math.random()*(n+1)),s=t[n],t[n]=t[e],t[e]=s;return t}Array.prototype.contains=function(t){var e=this.length;while(e--)if(this[e]==t)return!0;return!1};var a={name:"App",data:()=>({dark:!1,radio:"generateList",dialog:!1,group:"Сынып",selectedStudents:[],selectedGroupsCount:2,groups:["Сынып","1-ші топ","2-ші топ"],groupsCountt:[2,3,4,6],students:["Жанибек","Толкынай","Алих Семск","Дамиля","Анель","Данай","Арай","Ернар","Ажар","Айнур","Сайфуддин","Алан","Олжас","Елигай","Маулен","Амина","Нуржигит","Алихан","Зере","Мухсин","Тогжан","Сырым","Акежан","Дарын"].sort(),girlss:["Жанибек","Толкынай","Алих Семск","Дамиля","Анель","Арай","Ажар","Айнур","Елигай","Амина","Зере","Тогжан"],secondGroupStudents:["Аружан","Дамиля","Анель","Арай","Ернар","Алан","Олжас","Маулен","Нуржигит","Алихан","Акежан","Дарын"].sort(),studentsss:[],generatedGroups:null}),methods:{changeTheme(){this.dark=!this.dark},randomize(){let t=l(this.studentss),e=t.length;if("generateList"===this.radio)this.studentsss=t;else{let t=Math.floor(e/this.selectedGroupsCount),s=e-t*this.selectedGroupsCount,n=this.selectedGroupsCount-s,r=t+1,i=[],o=l(this.boys),a=l(this.girls),u=Math.floor(a.length/this.selectedGroupsCount),d=a.length-u*this.selectedGroupsCount,c=this.selectedGroupsCount-d,p=u+1,f=0,h=0;for(let e=0;e<n;e++){let e=[];for(let t=0;t<u;t++)e.push(a[f++]);for(let s=0;s<t-u;s++)e.push(o[h++]);c--,c<=0&&(c=d,u=p),i.push(e)}for(let e=0;e<s;e++){let t=[];for(let e=0;e<u;e++)t.push(a[f++]);for(let e=0;e<r-u;e++)t.push(o[h++]);c--,c<=0&&(c=d,u=p),i.push(t)}this.generatedGroups=[...i]}}},computed:{boyss(){let t=[];for(let e=0;e<24;e++)this.girls.contains(this.students[e])||t.push(this.students[e]);return t},groupsCount(){return"Сынып"===this.group?[...this.groupsCountt,12]:this.groupsCountt},firstGroupStudents(){let t=[...this.students];for(let e=0;e<this.secondGroupStudents.length;e++){let s=t.indexOf(this.secondGroupStudents[e]);t.splice(s,1)}return t},studentss(){if("Сынып"===this.group){let t=[...this.students];for(let e=0;e<this.selectedStudents.length;e++){let s=t.indexOf(this.selectedStudents[e]);t.splice(s,1)}return t}if("1-ші топ"===this.group){let t=[...this.firstGroupStudents];for(let e=0;e<this.selectedStudents.length;e++){let s=t.indexOf(this.selectedStudents[e]);t.splice(s,1)}return t}let t=[...this.secondGroupStudents];for(let e=0;e<this.selectedStudents.length;e++){let s=t.indexOf(this.selectedStudents[e]);t.splice(s,1)}return t},studentssss(){return"Сынып"===this.group?this.students:"1-ші топ"===this.group?this.firstGroupStudents:this.secondGroupStudents},girls(){let t=[...this.girlss];for(let e=0;e<this.selectedStudents.length;e++)t.contains(this.selectedStudents[e])&&t.splice(t.indexOf(this.selectedStudents[e]),1);if("1-ші топ"===this.group)for(let e=0;e<this.secondGroupStudents.length;e++)t.contains(this.secondGroupStudents[e])&&t.splice(t.indexOf(this.secondGroupStudents[e]),1);else if("2-ші топ"===this.group)for(let e=0;e<this.firstGroupStudents.length;e++)t.contains(this.firstGroupStudents[e])&&t.splice(t.indexOf(this.firstGroupStudents[e]),1);return t},boys(){let t=[...this.boyss];for(let e=0;e<this.selectedStudents.length;e++)t.contains(this.selectedStudents[e])&&t.splice(t.indexOf(this.selectedStudents[e]),1);if("1-ші топ"===this.group)for(let e=0;e<this.secondGroupStudents.length;e++)t.contains(this.secondGroupStudents[e])&&t.splice(t.indexOf(this.secondGroupStudents[e]),1);else if("2-ші топ"===this.group)for(let e=0;e<this.firstGroupStudents.length;e++)t.contains(this.firstGroupStudents[e])&&t.splice(t.indexOf(this.firstGroupStudents[e]),1);return t}}},u=a,d=(s("034f"),s("2877")),c=s("6544"),p=s.n(c),f=s("7496"),h=s("8336"),v=s("b0af"),g=s("99d9"),b=s("12b2"),S=s("a523"),m=s("549c"),x=s("169a"),_=s("ce7e"),G=s("0e8f"),y=s("553a"),C=s("132d"),V=s("a722"),k=s("ba95"),O=s("c954"),w=s("5d23"),T=s("67b6"),L=s("43a6"),j=s("b56d"),M=s("9910"),A=Object(d["a"])(u,i,o,!1,null,null,null);A.options.__file="App.vue";var P=A.exports;p()(A,{VApp:f["a"],VBtn:h["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:b["a"],VContainer:S["a"],VContent:m["a"],VDialog:x["a"],VDivider:_["a"],VFlex:G["a"],VFooter:y["a"],VIcon:C["a"],VLayout:V["a"],VListTile:k["a"],VListTileAvatar:O["a"],VListTileContent:w["a"],VListTileSubTitle:w["b"],VListTileTitle:w["c"],VRadio:T["a"],VRadioGroup:L["a"],VSelect:j["a"],VSpacer:M["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:t=>t(P)}).$mount("#app")},"87dc":function(t,e,s){}});
//# sourceMappingURL=app.912a03f3.js.map
