import element from "./element.md"
import all_element from "./all_element.vue"
import http from "./http.md"
import webpack from "./webpack.md"
const routerPrefix = "html/";
const htmlRouter = [{
    path: `${routerPrefix}element`,
    component: element,
    name:"元素概括",
},
{
    path: `${routerPrefix}elementdetail`,
    component: all_element,
    name:"元素讲解",
},
{
    path: `${routerPrefix}http`,
    component: http,
    name:"http详解",
},
{
    path: `${routerPrefix}webpack`,
    component: webpack,
    name:"webpack详解",
},
]
export default htmlRouter;
export {htmlRouter}