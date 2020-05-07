import closure from "./closure.md"
import memoryLeak from "./memoryLeak.md"
const routerPrefix = "js/";
const jsRouter = [{
    path: `${routerPrefix}js1`,
    component: closure,
    name:"什么是闭包",
},
{
    path: `${routerPrefix}memoryLeak`,
    component: js2,
    name:"存储泄漏溢出",
}
]
export default jsRouter;
export {jsRouter}