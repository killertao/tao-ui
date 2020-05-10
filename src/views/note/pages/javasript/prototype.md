# 原型链 [参考链接](https://www.cnblogs.com/loveyaxin/p/11151586.html)
> 每个 方法上面都有1个对象prototype  是原型对象。（因为每个都有1个构造函数）       
  而prototype 上面有个constructor 属性 指向当前函数     
  而每个对象都有1个 _prototype_ 属性也是指向构造当前对象的函数
  而读取对象属性的时候会先找自身属性，找不到的话回去原型（__prototype_或者叫做隐式原型）上找，递层往上找，直到没有找到
  因此就有原型链一说（实例与原型的链条）
~~~javascript
    function Person(name){
        this.name=name;
    }
    //下面不直接点会破坏已经存在的原型链
    Person.prototype.sayName=function(){
        console.log(`my name is ${this.name}`)
    }
    p1=new Person("张三");
    console.log("获取本身属性",p1.name);
    console.log("获取原型上的属性",p1.sayName,p1.constructor);
~~~

## 在new ConstructorFun()的时候做了什么操作 
> new 就是1个js 的语法糖
~~~javascript
    var m=new Person();
    //其实是
    var obj={};//第一步创建新的对象
    obj._prototype_=Person.prototype;//第二步 赋值隐式原型为构造函数的prototpe 对象
    Person.call(obj);//使用call 调用构造函数。并改变函数内部对象this 新创键的对象
~~~


 

