webpackJsonp([1],{"+sKz":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("BO1k"),a=t.n(i),r=t("gyMJ"),o={name:"challenge",components:{MarkdownPreview:function(){return t.e(7).then(t.bind(null,"KK/Z"))}},data:function(){return{menuConfig:{width:"240px",backgroundColor:"#545c64",textColor:"#fff",activeTextColor:"#ffd04b",uniqueOpened:!1},markdownConfig:{copyCode:!1},showMenu:!1,routeType:"",menuLoading:!1,analysisLoading:!1,path:{},stages:[],shixuns:[],analysis:{},currentChallengeId:0,currentShixunIdentifier:""}},created:function(){var e=this;console.log("Chalenge created");var n=this.$route.params,t=n.path_id,i=n.identifier,a=n.challenge_id;console.info("params",this.$route.params),t=parseInt(t),a=parseInt(a),console.info({path_id:t,identifier:i,challenge_id:a}),this.$route.params.hasOwnProperty("path_id")?this.routeType="path":(this.routeType="shixun",this.currentShixunIdentifier=i),a&&(this.currentChallengeId=a,this.refreshAnalysisData(a)),this.refreshMenu({path_id:t,identifier:i}).then(function(n){e.currentChallengeId||(e.currentChallengeId=e.getDefaultChallengeId(),e.refreshRoute(),e.refreshAnalysisData())})},methods:{onClickShowMenuBtn:function(){this.showMenu=!this.showMenu},onMarkdownSelectStart:function(e){return this.markdownConfig.copyCode},onCopyCode:function(e){this.markdownConfig.copyCode&&this.$notify({type:"success",message:"复制成功"})},onMenuSelect:function(e,n){var t=this,i=parseInt(e),a=n[0];console.info("select menu",{identifier:a,challenge_id:i}),i!=this.currentChallengeId?(this.currentChallengeId=i,this.currentShixunIdentifier=a,this.refreshAnalysisData(),this.refreshRoute(),setTimeout(function(){t.showMenu=!1},400)):this.showMenu=!1},refreshRoute:function(){return console.info("refreshRoute",this.routeType,{identifier:this.currentShixunIdentifier,challenge_id:this.currentChallengeId}),"path"==this.routeType?this.$router.replace({name:"paths.$.challenges.$",params:{path_id:this.path.id,challenge_id:this.currentChallengeId}}):this.$router.replace({name:"shixuns.$.challenges.$",params:{identifier:this.currentShixunIdentifier,challenge_id:this.currentChallengeId}})},refreshMenu:function(e){var n=this,t=e.path_id,i=e.identifier;return this.menuLoading=!0,(t=parseInt(t))||(t=this.path.id),"path"==this.routeType?Object(r.a)("path",{id:t},{method:"post"}).then(function(e){var t=e.data,i=t.id,a=t.member_count,r=t.name,o=t.stages;return n.path={id:i,member_count:a,name:r},n.stages=o,n.menuLoading=!1,e.data}):Object(r.a)("shixunsByIdentifier",{identifier:i},{method:"post"}).then(function(e){return n.shixuns=e.data.shixuns,n.menuLoading=!1,e.data})},refreshAnalysisData:function(e){var n=this;this.analysisLoading=!0,e||(e=this.currentChallengeId),this.getAnalysisData(e).then(function(e){n.analysis=e.data}).catch(function(e){var t=e.message||e.errMsg||"网络出现问题";n.$notify({type:"warning",message:t,duration:2500}),n.analysis.content='\n<h1 style="color:#E6A23C">'+t+"</h1>\n        "}).finally(function(){n.analysisLoading=!1})},getAnalysisData:function(e){return e=parseInt(e),Object(r.a)("analysis",{challenge_id:e},{method:"post"})},getDefaultChallengeId:function(){if("path"==this.routeType){var e=this.stages,n=!0,t=!1,i=void 0;try{for(var r,o=a()(e);!(n=(r=o.next()).done);n=!0){var s=r.value,l=!0,u=!1,c=void 0;try{for(var d,h=a()(s.shixuns);!(l=(d=h.next()).done);l=!0){var f=d.value,g=!0,p=!1,m=void 0;try{for(var y,v=a()(f.challenges);!(g=(y=v.next()).done);g=!0){return y.value.id}}catch(e){p=!0,m=e}finally{try{!g&&v.return&&v.return()}finally{if(p)throw m}}}}catch(e){u=!0,c=e}finally{try{!l&&h.return&&h.return()}finally{if(u)throw c}}}}catch(e){t=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(t)throw i}}}else{var C=this.shixuns,x=this.currentShixunIdentifier,_=!0,w=!1,k=void 0;try{for(var I,b=a()(C);!(_=(I=b.next()).done);_=!0){if((f=I.value).identifier==x){var M=!0,S=!1,T=void 0;try{for(var O,$=a()(f.challenges);!(M=(O=$.next()).done);M=!0){return O.value.id}}catch(e){S=!0,T=e}finally{try{!M&&$.return&&$.return()}finally{if(S)throw T}}}}}catch(e){w=!0,k=e}finally{try{!_&&b.return&&b.return()}finally{if(w)throw k}}}return 0},getPreChallenge:function(){},getNextChallenge:function(){}}},s={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-container",{staticClass:"container"},[t("el-container",[t("el-aside",{directives:[{name:"loading",rawName:"v-loading",value:e.menuLoading,expression:"menuLoading"}],staticClass:"side-menu-wrap",style:{background:e.menuConfig.backgroundColor},attrs:{width:e.menuConfig.width}},[t("div",{class:{"menu-container":!0,show:e.showMenu}},["path"==e.routeType?t("el-menu",{staticClass:"side-menu",attrs:{"background-color":e.menuConfig.backgroundColor,"text-color":e.menuConfig.textColor,"active-text-color":e.menuConfig.activeTextColor,"unique-opened":e.menuConfig.uniqueOpened,mode:"vertical",collapse:!1,"default-active":e.currentChallengeId},on:{select:e.onMenuSelect}},[t("div",{staticStyle:{padding:"10px","font-weight":"bold","font-size":"14px","text-align":"left"}},[t("span",{staticStyle:{color:"white"}},[e._v(e._s(e.path.name))])]),e._v(" "),e._l(e.stages,function(n){return t("el-menu-item-group",{key:n.position,attrs:{title:n.name}},e._l(n.shixuns,function(n){return t("el-submenu",{key:n.identifier,attrs:{index:n.identifier}},[t("template",{slot:"title"},[t("span",[e._v(e._s(n.name))])]),e._v(" "),e._l(n.challenges,function(n){return t("el-menu-item",{key:n.id,attrs:{index:n.id}},[t("span",[e._v(e._s("第"+n.position+"关:"+n.name))])])})],2)}),1)})],2):t("el-menu",{staticClass:"side-menu",attrs:{"background-color":e.menuConfig.backgroundColor,"text-color":e.menuConfig.textColor,"active-text-color":e.menuConfig.activeTextColor,"unique-opened":e.menuConfig.uniqueOpened,mode:"vertical",collapse:!1,"default-active":e.currentChallengeId},on:{select:e.onMenuSelect}},[t("div",{staticStyle:{padding:"10px","font-weight":"bold","font-size":"14px","text-align":"left"}},[t("span",{staticStyle:{color:"white"}},[e._v("实训列表")])]),e._v(" "),e._l(e.shixuns,function(n){return t("el-submenu",{key:n.identifier,attrs:{index:n.identifier}},[t("template",{slot:"title"},[t("span",[e._v(e._s(n.name))])]),e._v(" "),e._l(n.challenges,function(n){return t("el-menu-item",{key:n.id,attrs:{index:n.id}},[t("span",[e._v(e._s("第"+n.position+"关:"+n.name))])])})],2)})],2)],1)]),e._v(" "),t("el-main",{directives:[{name:"loading",rawName:"v-loading.body",value:e.analysisLoading,expression:"analysisLoading",modifiers:{body:!0}}],staticClass:"main-container"},[t("div",{staticClass:"menu-btn-header"},[t("el-button",{attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-s-unfold"},on:{click:e.onClickShowMenuBtn}},[e._v("列表")])],1),e._v(" "),t("div",{staticClass:"content-container"},[t("div",{class:{"no-copy":!e.markdownConfig.copyCode},attrs:{onselectstart:"return "+e.markdownConfig.copyCode}},[t("MarkdownPreview",{attrs:{initialValue:e.analysis.content,copyCode:e.markdownConfig.copyCode},on:{"on-copy":e.onCopyCode}})],1)]),e._v(" "),t("el-backtop",{attrs:{target:".main-container"}})],1)],1)],1)},staticRenderFns:[]};var l=t("VU/8")(o,s,!1,function(e){t("khO1")},"data-v-aa77464a",null);n.default=l.exports},BO1k:function(e,n,t){e.exports={default:t("fxRn"),__esModule:!0}},fxRn:function(e,n,t){t("+tPU"),t("zQR9"),e.exports=t("g8Ux")},g8Ux:function(e,n,t){var i=t("77Pl"),a=t("3fs2");e.exports=t("FeBl").getIterator=function(e){var n=a(e);if("function"!=typeof n)throw TypeError(e+" is not iterable!");return i(n.call(e))}},khO1:function(e,n){}});