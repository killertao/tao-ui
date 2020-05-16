# 事件Event，事件流 事件的冒泡与委托
>在 js中事件 统一指的是 在DOM中发生的任何事件   

## 参考链接  
>1.[参考链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)  
     2.[事件流](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)   
     3.[事件流2](https://www.cnblogs.com/starof/p/4066381.html)     
    
### 事件的一些属性和方法
>bubbles:表示该事件是否在冒泡中 
 cancelBubble:可以在事件处理程序时设置ture 阻止事件的冒泡   
 cancelable:表示该事件是否可以取消  
 currentTarget:当前事件注册对象的引用 保持对象变量都是引用 （指针）  
 defaultPrevented：表示该事件 是否已经调用了stopPropagation 方法，取消了改时间  
 stopPropagation():可以阻断事件的冒泡   
 preventDefault() :可以取消事件 事件可以取消，  就是有些事件有默认行为就可以取消 eg :a 标签的 点击事件,
 


 ## 事件怎么触发的
 >1.一些是用户生成的（例如鼠标或键盘事件），
  2.他由 API 生成（例如指示动画已经完成运行的事件，视频已被暂停等等）


## 事件的分发
> 事件触发时，都会调用 EventTarget.dispatchEvent(event) 将其派发到一个指定的目标

## 事件的注册
 ### 1.利用dom元素属性在浏览器内部自己注册
 ~~~html
    <button id="submit" onclick="submit()"></button>
 ~~~
 ### 2.利用dom元素属性使用js手动注册
 ~~~js
    var $submitBtn=document.querySelector("#submit");
    $submitBtn.onclick=function submit(){
        console.log("提交代码")
    }
 ~~~
 ### 3 EventTarget.addEventListener() 方法注册  而Dom对象继承了这个接口
  ~~~js
    var $submitBtn=document.querySelector("#submit");
    $submitBtn.addEventListener(type,listener,options)//或
    $submitBtn.addEventListener(type, listener, useCapture);
 ~~~
 >1.type:事件的类型eg click,mouseover   
  2.listener：事件的监听方法
  3.useCapture：true 是表示事件分发冒泡阶段不会触发当前listener
  options.captrue 同useCaptrue,
  options.once :表示listener 最多只调用一次，调用完就 会被移除
  options.passive true 表示当前事件不可取消 当手动调用的时候会抛出控制台警告


## 事件流这里指的是dom的事件（这就是事件为什么有冒泡 和取消的原因）
> dom事件流分为3个阶段    
  1.补过阶段， 当点击页面上的1个元素时， 会用顶级元素document ，往dom 树下面进行查找到目标元素    
  2.目标阶段，找到了事件的注册对象 此时可以指示 事件的一些行为     
  3.冒泡阶段，也就是事件的分发了。 会一层层的向上分发（当事件指定了冒泡行为时） 

  如图 
 ![事件流](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)
## 事件的委托
 >事件的委托是依赖于事件的冒泡的,就是比如 像点击父元素里面的任务一个子元素都需要触发1个相同的方法，就可以采用事件的委托

eg
~~~html
    <section class="person" onclick="goToPersonDetail()">
        <img>
        <blockquote>
          我是一个开朗的人xxx............
        </blockquote>
    </section> 
    这里点击img 或者是介绍快都可以触发goToPerson 方法，来查看详细
~~~

    

   


  
