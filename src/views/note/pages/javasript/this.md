# 函数内部对象this
>this 是函数内部的一个对象，    
当这个函数被谁调用的时候this指向的就是谁    
当没有人调用的时候 严格模式('use strict';)下 是undefined  非严格模式下是Window对象
## 例子
~~~javascript
function f1(){
    console.log("函数内部对象this",this);
    console.log("函数内部对象arguments",arguments);       
}
f1();//此时this 当严格模式('use strict';)下 是undefined  非严格模式调用下是window对象
var m={a:1,f1(){
    console.log(this);
}}
m.f1();//测试this 就是m 对象
~~~

## 利用函数方法call,apply bind 动态改变this 对象
>3个方法第一个参数都this 改成的对象 
 call,apply 都会直接调用当前函数    
 bind 不会调用当前函数，而是一个绑定函数 绑定函数 exotic function object（怪异函数对象）需要手动再次调用 [参考链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
~~~javascript
function f1(){
    console.log("函数内部对象this",this);
    console.log("函数内部对象arguments",arguments);    
}
f1();//window
f1.call({a:1},"pms1","pms2");
f1.apply({a:1},["pms1","pms2"]);
var bind=f1.bind({a:1},"pms1","pms2");
bind();
~~~



