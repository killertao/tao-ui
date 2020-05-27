# eventLoop，微任务，宏任务 [参考链接](https://segmentfault.com/a/1190000016278115?utm_source=tag-newest)

>js本来即使单线程执行的语言，为了实现异步，在各种应用运行环境（浏览器，node）有独特的一种执行过程， 就是eventLoop   
 1.js 语句都是在stack栈中被执行的   
 2.当运行一条语句是，进栈，出站  
 3.当这条语句产出了宏任务或者是微任务的时候，会分别加入各自的队列里  
 4.当栈执行为空的时，会去执行完所有的微任务 ，然后在去执行宏任务。    
 5.当执行宏任务 产生了新的任务时， 会重复3，4阶段直到完成
## 宏任务，微任务（这里都是异步任务的一种）
### 宏任务macrotask有
- setTimeout
- setInterval
- setImmediate (Node独有)
- requestAnimationFrame (浏览器独有)
- I/0
- UI rendering (浏览器独有) 
### 微任务有microtaskt有
- process.nextTick (Node独有)
- Promise
- Object.observe
- MutationObserve

eg
~~~js
console.log("start")
 setTimeout(function(){
    console.log("1");   
    Promise.reslove("2").then(data=>{
        console.log(data);
        return "3";
    }).then(data=>{
        console.log(data);
    })
  })
  var p=new Promise(function(s,r){
    console.log(5);
    s(4);
  })
  p.then(data=>{console.log(data)});
  console.log("end")
 //输出结果 start,5,end,4,1,2,3
 ~~~



