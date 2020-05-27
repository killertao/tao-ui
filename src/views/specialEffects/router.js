const transformScale = () => import(/* webpackChunkName: "specialEffects" */ './css/transformScale.vue' )
const transformRotate = () => import(/* webpackChunkName: "specialEffects" */ './css/transformRotate.vue' )
export default [
    {path:"/tx",redirect:"/tx/transformScale"},
    {path:"/tx/transformScale",component:transformScale,name:"transformScale应用"},
    {path:"/tx/transformRotate",component:transformRotate,name:"transformRotate应用"},
]