const basegrammar=()=> import(/*webpackChunkName:"python"*/'./basegrammar.md' )
const dataType=()=> import(/*webpackChunkName:"python"*/'./datatypeuse.md')
const smtp=()=> import(/*webpackChunkName:"python"*/'./smtp.md')
const routerPrex="python/";
const router=[
    {path:routerPrex+"",redirect:routerPrex+"basegrammar"},
    {path:routerPrex+"basegrammar",component:basegrammar,name:"python基础语法"},
    {path:routerPrex+"dataType",component:dataType,name:"各种数据类型的使用"},
    {path:routerPrex+"smtp",component:smtp,name:"邮件发送"},
];
export default router;
export {router};
