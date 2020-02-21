
/*
vueRouter 干了些什么事情
https://blog.csdn.net/q3254421/article/details/84304228 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import NoteFrame from "../views/home/note_frame"
import UIFrame from "../views/home/ui_frame"
import routerUI from "../views/ui/router"
const routes=[
     {path:"/note",component:NoteFrame},
     {path:"/ui",component:UIFrame,children:routerUI},
     {path:"",component:UIFrame,children:routerUI},
] 
const router=new VueRouter({
    routes,
})
export default router;
