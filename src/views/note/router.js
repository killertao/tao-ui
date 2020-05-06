import Frame from "./frame";
import Vue from "./pages/vue/router";
import Js from "./pages/javasript/router";
import Html from "./pages/html/router";
const router = [{
    path: "/note", component: Frame,
    children:[
        ...Vue,
        ...Js,
        ...Html,
    ],
}];
export default router;
