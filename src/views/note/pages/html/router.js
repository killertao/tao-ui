import element from "./element.md"
import all_element from "./all_element.vue"
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
]
export default htmlRouter;
export {htmlRouter}