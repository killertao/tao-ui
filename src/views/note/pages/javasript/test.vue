<template>
    <div>
                js测试页面
    </div>
</template>
<script>
//函数内部对象this
function f1(){
    console.log("函数内部对象this",this);
    console.log("函数内部对象arguments",arguments);
    //这里为什么不等于window 因为vue 采用了严格 模式
}
f1();//此时this 是window
var obj={a:1}
var m=f1.bind(obj,'xx')
console.log("xx",m);
m();
var m={a:1,f1(){
    console.log(this);
}}
m.f1();//测试this 就是m 对象
export default {
    
}
</script>