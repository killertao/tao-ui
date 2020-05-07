# 内存泄漏和内存溢出
>内存泄漏会 导致内存溢出.当运行的内存不够时就会溢出 
 当定义的变量得不到销毁就会形成内存泄漏

## 存储泄漏的表现形式 
~~~javascript
    1 window 下的 全局变量
    eg:
    function(){
        m=1;//var m=1 菜不会形成全局变量
    }
    2 setInteval 没有即使销毁
    eg:
    var si=setTimeInterval(function(){
        console.log(1);
    })
    //si=null ;当不销毁si 的时候内存会泄漏
~~~