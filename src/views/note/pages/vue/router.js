import principle from "./principle.md";
import lifeCycle from "./lifeCycle.vue";
import basicGrammar from "./basicGrammar.vue";
const routerPrex="vue/";
const NoteChildren=[
    {path:routerPrex+"Principle",component:principle,name:"vue原理"},
    {path:routerPrex+"lifeCycle",component:lifeCycle,name:"生命周期"},
    {path:routerPrex+"basicGrammar",component:basicGrammar,name:"基本语法"},
];
export default NoteChildren;
export {NoteChildren};
