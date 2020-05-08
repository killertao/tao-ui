<template>
    <div>
        <h1>vue基本语法 <a href="https://cn.vuejs.org/v2/guide/syntax.html">参考链接</a></h1>
        <section>
            <h2>插值html文本</h2>
            <p>1.使用两个花括号 {{text}}</p>
            <p>eg</p>
            <p>{{str}}</p>
        </section>
         <section>
            <h2>插值 原生 html</h2>
            <p>1.使用两个花括号 {{text}}</p>
            <p>eg</p>
            
        </section>
        <section>
            <h2>插值html attribute </h2>
            <p>使用v-bind:attributeName 可以省略v-bind 直接:attributeName</p>
            <p></p>
        </section>
        <section>以上的都可以使用原生的js 必须是一个单独的表达式 </section>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            text:"{{varname}}",
            str:"我是一串字符串",
        }
    }
}
</script>