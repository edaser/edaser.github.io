webpackJsonp([3],{Qcuv:function(e,t){},bWY1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("gyMJ"),a={created:function(){var e=this.$route.params.identifier;this.identifier=e,this.refresh()},methods:{refresh:function(){var e=this;this.loading=!0;var t=this.identifier;Object(i.a)({name:"shixun",data:{identifier:t}}).then(function(t){e.shixun=t.data.shixun,e.challenge_list=t.data.challenge_list,e.loading=!1,document.title=e.shixun.name+" | 实训笔记"}).catch(function(t){e.loading=!1})},getAnalysis:function(e){var t=this,n=localStorage.getItem("challenge.subscribe.email")||"";console.log(n),e=parseInt(e),this.$prompt("实训笔记将会通过邮件传递给您","请输入邮箱",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:n||"",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"邮箱格式不正确"}).then(function(n){var a=n.value;console.log("email为",a),localStorage.setItem("challenge.subscribe.email",a),Object(i.a)({name:"challenge.subscribe",data:{challenge_id:e,email:a}}).then(function(e){0==e.status&&t.$confirm("信息已提交成功，请耐心等待","提示",{confirmButtonText:"确定",type:"success",showCancelButton:!1})})}).catch(function(){})}},data:function(){return{loading:!1,identifier:"",challenge_list:[],title:"关卡列表",shixun:{}}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.shixun.name?n("h1",[e._v(e._s(e.shixun.name)+"\n    "),n("el-link",{attrs:{target:"_blank",type:"primary",href:"https://www.educoder.net/shixuns/"+e.identifier+"/challenges"}},[e._v("\n      打开实训\n      "),n("i",{staticClass:"el-icon-view el-icon--right"})])],1):e._e(),e._v(" "),n("h2",[e._v(e._s(e.title))]),e._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[e.challenge_list?n("div",e._l(e.challenge_list,function(t){return n("div",{key:t.challenge_id,staticClass:"challenge-wrp"},[n("div",{staticClass:"challenge-item"},[n("i",{staticClass:"el-icon-circle-check"}),e._v(" "),n("span",[e._v("第"+e._s(t.position)+"关："+e._s(t.name))])]),e._v(" "),n("el-button",{staticClass:"operation",attrs:{type:"primary"},on:{click:function(n){return e.getAnalysis(t.challenge_id)}}},[e._v("\n            获取实训笔记\n        ")])],1)}),0):e._e()])])},staticRenderFns:[]};var s=n("VU/8")(a,l,!1,function(e){n("Qcuv")},"data-v-4e3ea1c8",null);t.default=s.exports}});