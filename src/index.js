// import Vue from "vue/dist/vue"; 
/*
完整版vue 需要在运行是编辑template 模板，
【eg没有指定模板（默认把$el当做模板的时候需要用到完整版的vue）】
且要注意bundle.js 需要在凡在放在$el最后面
*/
// new Vue({
//   el:"#app",//document.querySelector("#app"),
// //   data:{name:"xxx"},
//   created:function(){
//       console.log(this,"xx");
//   },
//   data:function(){
//       return {name:"xxxx"}
//   }
// })
import Vue from "vue";
import App from "@/app";
import router from "@/router/index"
import initOther from "@/init"
const vm=new Vue({
  router,
  render:h=>h(App)
}).$mount("#app");
