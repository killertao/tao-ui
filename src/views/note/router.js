import Frame from "./frame"
// import ES6 from "./pages/es6.md"
import _Promise from "./pages/promise.vue"
import ConstructorFun from "./pages/constuctor_fun.vue"
import CloseZone from "./pages/closezone.vue"
import Async from "./pages/async.vue"
import Datatype from "./pages/datatype.vue"
const ES6=()=>import("./pages/es6.md");
import noteRouter from './router.node';
var m=noteRouter.a;
console.log(m);
const NoteChildren=[
    {
        path:"es6",
        component:ES6,
        name:"es6",
    },
    {path:"Promise",component:_Promise,name:"promise异步"},
    {path:"ConstructorFun",component:ConstructorFun,name:"构造函数"},
    {path:"CloseZone",component:CloseZone,name:"闭包"},
    {path:"Async",component:Async,name:"async 异步"},
    {path:"Datatype",component:Datatype,name:"基础数据类型"},
];
const  router=[{
    path:"/note",component:Frame,
    children:[
        {path:"",component:ES6},
        ...NoteChildren]
    
}];
export default router;
export {NoteChildren};
