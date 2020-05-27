import Frame from "./frame";
import Vue from "./pages/vue/router";
import Js from "./pages/javasript/router";
import Html from "./pages/html/router";
import Python from "./pages/python/router"
const children=[
    ...Vue,
    ...Js,
    ...Html,
    ...Python,
];
const router = [{
    path: "/note", component: Frame,
    children:children,
}];
export default router;
