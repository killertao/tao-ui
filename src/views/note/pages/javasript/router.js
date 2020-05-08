import closure from "./closure.md"
import memoryLeak from "./memoryLeak.md"
import jsThis from "./this.md"
import executionStack from "./executionStack.md"
import test from "./test.vue";
const routerPrefix = "js/";
const jsRouter = [
{path: `${routerPrefix}closure`,component: closure,name:"什么是闭包"},
{path: `${routerPrefix}memoryLeak`,component: memoryLeak,name:"存储泄漏溢出"},
{path: `${routerPrefix}this`,component: jsThis,name:"函数内部对象this"},
{path: `${routerPrefix}executionStack`,component: executionStack,name:"js执行栈与下上文"},
{path: `${routerPrefix}test`,component: test,name:"js 测试页面"},
]
export default jsRouter;
export {jsRouter}