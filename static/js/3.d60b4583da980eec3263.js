webpackJsonp([3],{"+wUO":function(e,t){},bWY1:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("mvHQ"),s=i.n(n),a=i("gyMJ"),l={created:function(){var e=this.$route.params.identifier;this.identifier=e,this.refresh()},methods:{refresh:function(){var e=this;this.loading=!0;var t=this.identifier;Object(a.a)({name:"shixun",data:{identifier:t,random:123},config:{method:"get"}}).then(function(t){e.shixun=t.data.shixun,e.challenge_list=t.data.challenge_list,e.loading=!1,document.title=e.shixun.name+" | 实训题解"}).catch(function(t){e.loading=!1,e.$msgbox({title:"错误提示",message:t.message||"数据获取失败",type:"error"})})},enterAnalysisEdit:function(e){var t=this.identifier,i=this.$router.resolve({name:"shixuns.$.challenges.$.edit",params:{identifier:t,challenge_id:e}});window.open(i.href,"_blank")},enterAnalysisPage:function(e){var t=this.identifier,i=this.$router.resolve({name:"shixuns.$.challenges.$",params:{identifier:t,challenge_id:e}});console.log(i),window.open(i.href,"_blank")},addSubscribeHistory:function(){var e=JSON.parse(localStorage.getItem("challenge.subscribe.times"))||[],t=Date.now(),i=t-216e5;(e=e.filter(function(e){return e>=i})).push(t),localStorage.setItem("challenge.subscribe.times",s()(e))},checkIfbeyondSubscribeCount:function(){var e=JSON.parse(localStorage.getItem("challenge.subscribe.times"))||[],t=Date.now()-36e5;return e.filter(function(e){return e>=t}).length>=20},subscribeAnalysis:function(e,t,i){var n=this;if(this.checkIfbeyondSubscribeCount())this.$msgbox({type:"warning",title:"提示",message:"您24小时内订阅次数已用完，请24小时后再试"});else{var s=localStorage.getItem("challenge.subscribe.email")||"";e=parseInt(e);var l=this.identifier,r=this.shixun.name;this.$prompt("实训题解将会通过邮件传递给您","请输入邮箱",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:s||"",inputPlaceholder:"请输入邮箱",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"邮箱格式不正确"}).then(function(s){var c=s.value;console.log("email为",c),localStorage.setItem("challenge.subscribe.email",c);var o=n.$message({iconClass:"el-icon-loading",message:"请稍候"});Object(a.a)({name:"challenge.subscribe",data:{challenge_id:e,identifier:l,shixun_name:r,challenge_name:t,challenge_position:i,email:c}}).then(function(e){if(o.close(),0==e.status||1==e.status){var t=void 0;0==e.status?(t="信息已提交成功，请您耐心等待",n.addSubscribeHistory()):t="您已经订阅成功",n.$confirm(t,"提示",{confirmButtonText:"确定",type:"success",showCancelButton:!1})}else n.$msgbox({type:"error",title:"错误提示",message:e.message||"出现未知错误"})}).catch(function(e){o.close(),n.$msgbox({type:"error",title:"错误提示",message:e.message||"订阅失败，请您稍后重试"})})})}}},data:function(){return{loading:!1,identifier:"",challenge_list:[],title:"关卡列表",shixun:{}}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shixun-wrap"},[e.shixun.name?i("h1",[e._v(e._s(e.shixun.name)+"\n    "),i("el-link",{attrs:{target:"_blank",type:"primary",href:"https://www.educoder.net/shixuns/"+e.identifier+"/challenges"}},[e._v("\n      打开实训\n      "),i("i",{staticClass:"el-icon-link el-icon--right"})])],1):e._e(),e._v(" "),i("h2",[e._v(e._s(e.title))]),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[e.challenge_list?i("div",{staticClass:"challenge-list"},e._l(e.challenge_list,function(t){return i("div",{key:t.challenge_id,staticClass:"challenge-wrp"},[i("div",{class:["challenge-name",{lock:1!=t.has_analysis}]},[i("i",{class:1==t.has_analysis?"el-icon-circle-check":"el-icon-lock"}),e._v(" "),i("span",[e._v("第"+e._s(t.position)+"关："+e._s(t.name))])]),e._v(" "),i("div",{staticStyle:{display:"flex","align-items":"center"}},[1!=t.has_analysis?i("el-tooltip",{staticClass:"hide-in-mobile",attrs:{content:"分享实训题解",placement:"left"}},[i("i",{staticClass:"el-icon-edit",staticStyle:{padding:"4px 8px",cursor:"pointer"},on:{click:function(i){return e.enterAnalysisEdit(t.challenge_id)}}})]):e._e(),e._v(" "),1==t.has_analysis?i("el-button",{staticClass:"operation",attrs:{type:"primary"},on:{click:function(i){return e.enterAnalysisPage(t.challenge_id)}}},[e._v("\n            阅读题解\n          ")]):-1==t.has_analysis?i("el-button",{staticClass:"operation",attrs:{type:"primary",disabled:"1",plain:""}},[e._v("\n            暂无题解\n          ")]):i("el-button",{staticClass:"operation",attrs:{type:"primary",plain:""},on:{click:function(i){return e.subscribeAnalysis(t.challenge_id,t.name,t.position)}}},[e._v("\n            订阅实训题解\n          ")])],1)])}),0):e._e()])])},staticRenderFns:[]};var c=i("VU/8")(l,r,!1,function(e){i("+wUO")},"data-v-4170e0cf",null);t.default=c.exports}});