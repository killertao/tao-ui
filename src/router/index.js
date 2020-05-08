/*
vueRouter 干了些什么事情
https://blog.csdn.net/q3254421/article/details/84304228 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//  import {pathToRegexp} from 'path-to-regexp'
var pathToRegexp = require('path-to-regexp');
Vue.use(VueRouter);
import Error from "@/views/error"
import UIFrame from "@/views/ui/ui_frame"
import routerUI from "@/views/ui/router"
import routerNote from "@/views/note/router"
const routes = [
    {//默认路由
        path:"",
        redirect:routerNote[0],
    },
    ...routerNote,
    {
        path: "/(ui|ui2|xx)",
        component: UIFrame,
        children: routerUI
    },
    { //error 路由一定要放到最后所有的路由都会到这里来，这里当作错误路由的
        path: "*",
        component: Error
    },
]
const router = new VueRouter({
    routes,
})
router.beforeEach((to, from, next) => {
    next();
})
export default router;