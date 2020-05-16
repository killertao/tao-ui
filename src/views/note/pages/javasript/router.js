import _function from "./function.md"
import closure from "./closure.md"
import memoryLeak from "./memoryLeak.md"
import jsThis from "./this.md"
import executionStack from "./executionStack.md"
import prototype from "./prototype.md"
import _event from "./event.md"
import test from "./test.vue";
const routerPrefix = "js/";
const jsRouter = [
{path: `${routerPrefix}function`,component: _function,name:"函数基本,递归,自执行"},
{path: `${routerPrefix}this`,component: jsThis,name:"函数内部对象this"},
{path: `${routerPrefix}closure`,component: closure,name:"什么是闭包"},
{path: `${routerPrefix}memoryLeak`,component: memoryLeak,name:"存储泄漏溢出"},
{path: `${routerPrefix}executionStack`,component: executionStack,name:"js执行栈与下上文"},
{path: `${routerPrefix}prototype`,component: prototype,name:"原型链,new 干了什么"},
{path: `${routerPrefix}event`,component: _event,name:"event，事件流，事件委托"},
{path: `${routerPrefix}test`,component: test,name:"js 测试页面"},
]
export default jsRouter;
export {jsRouter}