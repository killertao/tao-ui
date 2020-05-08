# vue原理 [参考链接](https://www.bilibili.com/video/BV1Wp411d7Ur?p=75)
> 数据驱动 大致3个模块  
1.Observer 数据劫持     
2.Compiler 命令解析模块       
3.Watcher 数据变动监听模块    

## 数据劫持
>使用的的Object.defineProperty 进行数据代理
~~~javascript
function defineReactive(){
    var dep=new Dep();
    Object.defineProperty(obj,prop,{
        enumerable: true,//是否可以枚举
        configurable: false,//是否可以重新定义，vue里面这里false 防止覆盖了定义的书
        get(){
           if(wather.get){
               
           }  
        },
        set(){
            //改变值重新监听，
            //通知dep-subs 里面的watcher 去更新
        },
    })
}
//在 每个属性监听的时候会会创建1个闭包对象dep 这个dep dep 里的subs 用来存储当前属性用到的每个watcher
~~~

## 模板数据解析 Compiler
> 在vue 初始化的会解析模板     
  每个表达式都会都会去解析变量的值    
  在递层解析每一个属性值的时候，都会创建1个wachter    
  当在获取每个属性值的时候，会触发 Observer 里面的get 方法 调用全局变量Dep  给当前属性dep 添加当前watcher   

## Watcher 
>是在compiler 和Observer 闭包Dep 丢下里面的1个中间维持对象  
 用来更新vue 表达式以及当整个对象改变的时候，有新的dep 生成，将当前watcher 加入新的watcher 里面


 ## 整体概叙
 >new Vue();    
  1.创建Observer 给每个属性创造劫持，并有个依赖对象Dep  eg {a:1,b:{2,c:3}}  会给
  a,b,c 创建劫持，  
  2.解析Vue模板  每个表达式（都是有属性参与）都会递层创建1个watcher ,在获取这个值的时候会触发 当前get方法 从而建立 Dep 和watcher 之前的关系     
  3.当数据改变的时候，会触发当前属性的set 方法，然后去通过 当前属性 Dep 对象里面的所有Watcher 更新重新Compiler  
  4 watcher 与dep 之前的关系， 每个dep 对应多个watcher , wather 里面要存1个当前dep 防止watcher 内重复添加到了dep 中  
  5.当改变了1个对象的时候，此时属性劫持已经破坏了，需要重新劫持。 以及吧当前watcher 加入新的属性dep 里面    
  6.wather 是在什么时候加入Dep 里面的，实在watcher 初始化时，或者是更新时 获取当前属性值的触发get 方法加入

  
  
 

  

