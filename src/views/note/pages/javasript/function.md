# 函数
> 函数即方法    
  有两个内置内心 this,arguments,prototype 对象
  在Funtion.prototype上有bind,call,apply 方法来改变内置对象this 
  函数声明会产生函数提升，而使用表达式不会
  ~~~text
  this执向的是调用当前函数的对象
  arguments:参数数组，伪数组
  prototype对象 都有1个 constructor 属性指向当前函数。 用来做原型链用的
  ~~~

## 函数的递归
> 自己调用自己，但必须有1个结束的条件，否则会造成是死循环，造成内存溢出。浏览器崩溃。   f
  当使用递归最好使用 在里面最好使用 arguments.callee执行当前的函数 来调用自己

~~~javascript
    //1.计算阶乘
    function fact(n){
        if(n===1){
            return 1;
        }
        return n*fact(n-1);
    } 
~~~
上面的递归 只是解析了 阶乘的表达式，可以先算出来  也就是尾递归了
~~~javascript
    //1.计算阶乘
   function fact(n,all=1){
        if(n<=1){
            return all;
        }
        return  fact(n-1,n*all)
    } 
~~~



## 构造函数
> 构造函数通常是大写字母开头，使用new ConstructorFun()  创建1给对象
   



