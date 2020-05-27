<template>
    <div>
        <div class="markdown-body">
            <h1>对象，对象的创建</h1>
            <blockquote>
              js 对象都是构造函数创建的，每个对象都有1个constructor属性指向它的构造函数
              还有一个隐式原型_prpto_ ===constructor.prototype
            </blockquote>   
            <h2>使用工场模式创建对象</h2>
            <markdown>
~~~js
function createObj(pms){
    var ojb={};
    obj.a=1;
    obj.fun=function(){console.log("111")}
    Object.assign(obj,pms);
    return obj;
}
//此时创建的对象里面属性都会开启一块新的内存，各个对象没有相对应的关系
~~~                
            </markdown>
            <h2>使用构造函数，原型的模式创建对象</h2>
            <markdown>
~~~js
function CreateObj (pms){
    this.a=1;
    this.fun=console.log("1");
    Object.assign(this.pms);
}
~~~                
            </markdown>
            <blockquote>
            其实构造函数，也是相当于工厂函数，只是使用了一个<router-link to="prototype">new语法糖</router-link> <br>
            这里每个对象的属性还是创建了一个新的内存。可以利用<router-link to="prototype">原型链</router-link>将方法存在原型上。
            这样所有的方法都是指向同一个引用
            </blockquote>
            <markdown>
~~~js
function CreateObj (pms){
    this.a=1;
    Object.assign(this,pms);
}
//这样写不会破快原有的prototype 对象
Object.assign(CreateObj,{
    fun:function(){console.log(1)}
})  
//或者直接破环手动
CreateObj.prototype={
    constructor:CreateObj,
    fun:function(){console.log(1)}
}
//或者直接添加一个属性
CreateObj.prototype.fun=function(){console.log(1)}
~~~                
            </markdown>
            <h2>es6 语法创建对象</h2>
            <blockquote>
                es6语法 都说了是个语法，也是1个语法糖，（归根结底也是构造函数原型创造对象） 我们就不管他怎么实现了。
            </blockquote>
            <markdown>
~~~js
class Obj {
    constructor(pms){
        Object.assign(this,pms);
        this.a=1;
    }
    fun(){
        console.log(1)
    }
}
//构造函数只是用一个 constructor方法代替了，里面还是一样的
//所有的方法函数，都会被写到prototype 上面， constructor方法也是protoype 上面的一个属性
~~~
            </markdown>
        </div>
    
    </div>
</template>
<script>


export default {
    
}
</script>