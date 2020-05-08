import Frame from "./frame";
import Vue from "./pages/vue/router";
import Js from "./pages/javasript/router";
import Html from "./pages/html/router";
const children=[
    ...Vue,
    ...Js,
    ...Html,
];
const router = [{
    path: "/note", component: Frame,
    children:children,
}];
export default router;
