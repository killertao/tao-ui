
# vue 基本语法 [参考链接](https://cn.vuejs.org/v2/guide/syntax.html)

## vue 怎么改变元素对象
~~~javascript
    1. 插入文本:使用{{varnameExp}}
    eg:<p>{{content}}</p> <span>{{user.name}}</span>
    2. 插入原生html ,使用v-html 指令
    eg:<p v-html="varhtml"></p> 
    3. 给元素加入属性attribute 使用指令v-bind:attributeName
    eg:<p v-bind:data-name="data.name">{{data.content}}</p> 
    4. 给元素添加1个事件 使用指令v-on:eventName
    eg: <button v-on:click="sumbit">提交</button>
~~~
> ### 以上共性 
~~~text
  1.都可以使用原生js，但必须是但单独表达式 eg  <p>{{user.age+1}}</p>
  2.v-bind:attributeName,v-on:eventName 可以缩写为 :attributeName,和@eventName
  3.模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。
~~~ 

## 修饰符
> 修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
~~~html
   <form v-on:submit.prevent="onSubmit">...</form> 
~~~

## Class 与 Style 绑定
 > ### :class="string|object|array"
~~~html
    1.字符串语法 
    <p :class="className className2"></p> 
    2.对象语法 ,对象的key 表示要 渲染的类名，val 布尔值表示是否渲染这个类名
    <p :class="{className:boolean1,className:boolean2}"></p> 
    3.数组语法  数组里面的 值表示的是类名的变量，而真正的类名 是这个变量的值
    <p :class="['varClassName','varClassName2']">
~~~
> ### :style="object|array"  array 对的之也应该是对象

>class style 介绍   
 1.可以智能合并，和原有的class style 不会冲突    
 2.style vue.js 可以自动 添加css3 浏览器前缀    
 3.用在组件上的话，做直接作用与组件的根元素上

## 条件渲染 [参考链接](https://cn.vuejs.org/v2/guide/conditional.html)
### v-if,v-show
~~~html
    <div v-show="showButtn">{{conent}}<div>
    <div v-if="name>50">老年人<div>
    <div v-else-if="name>30">中年人<div>
    <div v-else-if="name>16">青年人<div>
    <div v-else>儿童<div>
~~~
>v-if 1有1个dom元素会存在，而且dom元素会被复用 不想被服用请加上key值    
 v-if 惰性渲染，只有在值为true 的 是才会真正的渲染
 v-show,dom 一直存在，只是改变了display:block|none, v-show 不能作用在template 非实体dom元素上，因为要改变样式 dispaly

 ## 列表渲染
~~~html
    //遍历值是1个数字
    <ul><li v-for="item in num"><li></ul>
    //遍历值是1个对象
    <ul><li v-for="val,key,index in obj"><li></ul>
    //遍历值是1个数组
    <ul><li v-for="item,index in array"><li></ul>
    //遍历非单一元素
    <template v-for="num in 5">
        <span>{{num}}</span>
         <span>{{users[num-1]}}</span>
    </template>
~~~
> 当 遍历值是数组的时候，利用索引改变数组项的值，或者是 改变数组长度，是不会触发更新检测的  
必须使用以下方法
push()
pop()
shift()
unshift()
splice()
sort()
reverse()，或则是重新赋值，来重新启用Observer   
在组件上使用v-for 的 时候key值是必须的


 



