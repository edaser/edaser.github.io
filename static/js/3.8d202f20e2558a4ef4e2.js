webpackJsonp([3],{RKGq:function(e,n){},bWY1:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("mvHQ"),a=t.n(i),s=t("gyMJ"),l={created:function(){var e=this.$route.params.identifier;this.identifier=e,this.refresh()},methods:{refresh:function(){var e=this;this.loading=!0;var n=this.identifier;Object(s.a)({name:"shixun",data:{identifier:n,random:123},config:{method:"get"}}).then(function(n){e.shixun=n.data.shixun,e.challenge_list=n.data.challenge_list,e.loading=!1,document.title=e.shixun.name+" | 实训题解"}).catch(function(n){e.loading=!1,e.$notify({title:"错误提示",message:n.message||"数据获取失败",type:"error",duration:0})})},enterAnalysisPage:function(e){var n=this.identifier,t=this.$router.resolve({name:"shixuns.$.challenges.$",params:{identifier:n,challenge_id:e}});console.log(t),window.open(t.href,"_blank")},addSubscribeHistory:function(){var e=JSON.parse(localStorage.getItem("challenge.subscribe.times"))||[],n=Date.now(),t=n-432e5;(e=e.filter(function(e){return e>=t})).push(n),localStorage.setItem("challenge.subscribe.times",a()(e))},checkIfbeyondSubscribeCount:function(){var e=JSON.parse(localStorage.getItem("challenge.subscribe.times"))||[],n=Date.now()-432e5;return e.filter(function(e){return e>=n}).length>=5},subscribeAnalysis:function(e,n,t){var i=this;if(this.checkIfbeyondSubscribeCount())this.$msgbox({type:"warning",title:"提示",message:"您24小时内订阅次数已用完，请24小时后再试"});else{var a=localStorage.getItem("challenge.subscribe.email")||"";e=parseInt(e);var l=this.identifier,r=this.shixun.name;this.$prompt("实训题解将会通过邮件传递给您","请输入邮箱",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:a||"",inputPlaceholder:"请输入邮箱",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"邮箱格式不正确"}).then(function(a){var c=a.value;console.log("email为",c),localStorage.setItem("challenge.subscribe.email",c);var o=i.$message({iconClass:"el-icon-loading",message:"请稍候"});Object(s.a)({name:"challenge.subscribe",data:{challenge_id:e,identifier:l,shixun_name:r,challenge_name:n,challenge_position:t,email:c}}).then(function(e){o.close(),0!=e.status&&1!=e.status||(i.$confirm("信息已提交成功，请您耐心等待","提示",{confirmButtonText:"确定",type:"success",showCancelButton:!1}),0==e.status&&i.addSubscribeHistory())}).catch(function(e){o.close(),i.$msgbox({type:"warning",title:"提示",message:e.message})})})}}},data:function(){return{loading:!1,identifier:"",challenge_list:[],title:"关卡列表",shixun:{}}}},r={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"shixun-wrap"},[e.shixun.name?t("h1",[e._v(e._s(e.shixun.name)+"\n    "),t("el-link",{attrs:{target:"_blank",type:"primary",href:"https://www.educoder.net/shixuns/"+e.identifier+"/challenges"}},[e._v("\n      打开实训\n      "),t("i",{staticClass:"el-icon-view el-icon--right"})])],1):e._e(),e._v(" "),t("h2",[e._v(e._s(e.title))]),e._v(" "),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[e.challenge_list?t("div",{staticClass:"challenge-list"},e._l(e.challenge_list,function(n){return t("div",{key:n.challenge_id,staticClass:"challenge-wrp"},[t("div",{class:["challenge-name",{lock:1!=n.has_analysis}]},[t("i",{class:1==n.has_analysis?"el-icon-circle-check":"el-icon-lock"}),e._v(" "),t("span",[e._v("第"+e._s(n.position)+"关："+e._s(n.name))])]),e._v(" "),1==n.has_analysis?t("el-button",{staticClass:"operation",attrs:{type:"primary"},on:{click:function(t){return e.enterAnalysisPage(n.challenge_id)}}},[e._v("\n            阅读题解\n        ")]):-1==n.has_analysis?t("el-button",{staticClass:"operation",attrs:{type:"primary",disabled:"1",plain:""}},[e._v("\n            暂无题解\n        ")]):t("el-button",{staticClass:"operation",attrs:{type:"primary",plain:""},on:{click:function(t){return e.subscribeAnalysis(n.challenge_id,n.name,n.position)}}},[e._v("\n            订阅实训题解\n        ")])],1)}),0):e._e()])])},staticRenderFns:[]};var c=t("VU/8")(l,r,!1,function(e){t("RKGq")},"data-v-8650b3d8",null);n.default=c.exports},mvHQ:function(e,n,t){e.exports={default:t("qkKv"),__esModule:!0}},qkKv:function(e,n,t){var i=t("FeBl"),a=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}}});