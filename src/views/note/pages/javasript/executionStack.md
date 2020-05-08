# 执行栈 执行上下文
>所有的js 代码在运行时都是在执行上下文中执行的。 会产生1个个执行栈 ，栈里面的内容叫做执行上下文
>栈后进先出   每个执行栈执行完成就会释放

>执行栈上下文分为3大类  
1.全局执行上下文    
2.函数执行上下文    
3.eval执行上下文

### 全局执行栈 
>在执行全局代码前会 将window  作为执行上下文的第一语句，
>然后执行var 声明的变量提升  为window的 对象
>最后执行 声明函数 的提升    为window 对象     
>然后在按顺序执行其他代码
~~~javascript
    console.log(typeof(f1));
    function f1(){
        console.log("我是声明函数");
    }
    var f1;
    var m=1;
    var f2=function(){
        console.log("我是表达式函数");
    }
    let b=2;
~~~
相当于执行了如下代码
~~~javascript
    var window;// 窗口内置对象
    var f1;
    var m;
    var f2;
    var f1=function(){
        console.log("我是声明函数");
    }
    //上面是准备工作，
    m=1;
    f2=function(){
        console.log("我是表达式函数");
    }
    let b=2;
~~~


## 函数执行上下文
>1.会先执行内部对象arguments 是函数的形参，转换为 实参 以及this 对象为调用当前函数的对象，没有是window 严格模式下是undefined
>2.按照全局执行上下文来

~~~javascript
    console.log(m);// undefined
    var m=1;
    function f(m){
        if(m>=4){return};
        console.log("top"+m);
        arguments.callee(m+1);
        console.log("bottom"+m);
    }
    f(m);
    console.log(m);// 1 
~~~
~~~text
    此时执行堆栈是 
    window=>f(1)=>f(2)=>f(3)=(f4)   
    f4释放=>f3是释放=>f2释放=>f1释放    
    输出的结果是 undefined,top1,top2,top3,bottom3,bottom2,bottom1,1;
~~~