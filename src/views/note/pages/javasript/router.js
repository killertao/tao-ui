import js1 from "./js1.vue"
import js2 from "./js2.vue"
const routerPrefix = "js/";
const jsRouter = [{
    path: `${routerPrefix}js1`,
    component: js1,
    name:"js1",
},
{
    path: `${routerPrefix}js2`,
    component: js2,
    name:"js2",
}
]
export default jsRouter;
export {jsRouter}