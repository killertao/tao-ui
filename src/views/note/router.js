import Frame from "./frame";
import Vue from "./pages/vue/router";
import Js from "./pages/javasript/router";
const router = [{
    path: "/note", component: Frame,
    children:[
        ...Vue,
        ...Js,
    ],
}];
export default router;
