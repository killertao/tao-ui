# js闭包
>内部函数引用了外部函数的 变量，这些引用的变量会形成一个闭包（在内部函数里面），而不能被销毁    
在内部函数被定义产生闭包    
在包含闭包的函数设置为null时被销毁时    
会形成内存泄漏，冲到可能导致内存溢出


 #eg 闭包的例子，防抖节流
 ~~~javascript
    /**
     * @desc 函数防抖
     * @param func 函数
     * @param wait 延迟执行毫秒数
     * @param immediate true 表立即执行，false 表非立即执行
     */
    debounce(func, wait, immediate) {
        let timeout;
        return function () {
            let context = this;
            let args = arguments;

            if (timeout) clearTimeout(timeout);
            if (immediate) {
                var callNow = !timeout;
                timeout = setTimeout(() => {
                    timeout = null;
                }, wait)
                if (callNow) {
                    func.apply(context, args)
                }
            } else {
                timeout = setTimeout(function () {
                    func.apply(context, args)
                }, wait);
            }
        }
    },
    当指向防抖函数的 时候，生成了内部函数,应为内部函数利用了 外部函数的变量
    当多次掉调用函数 debounce 的，会根据外部变量timeout 的时间 是否到了。来决定内部函的逻辑
 ~~~