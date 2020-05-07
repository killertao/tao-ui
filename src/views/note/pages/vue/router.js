
// /import ES6 from "./es6.md"
import _Promise from "./promise.vue"
import ConstructorFun from "./constuctor_fun.vue"
import CloseZone from "./closezone.vue"
import Async from "./async.vue"
import Datatype from "./datatype.vue"
import Principle from "./vue_principle.md";

const ES6=()=>import("./es6.md");
const routerPrex="vue/";
const NoteChildren=[
    {
        path:routerPrex+"es6",
        component:ES6,
        name:"es6",
    },
    {path:routerPrex+"Principle",component:Principle,name:"vue原理"},
    {path:routerPrex+"Promise",component:_Promise,name:"promise异步"},
    {path:routerPrex+"ConstructorFun",component:ConstructorFun,name:"构造函数"},
    {path:routerPrex+"CloseZone",component:CloseZone,name:"闭包"},
    {path:routerPrex+"Async",component:Async,name:"async 异步"},
    {path:routerPrex+"Datatype",component:Datatype,name:"基础数据类型"},
  
];
export default NoteChildren;
export {NoteChildren};
