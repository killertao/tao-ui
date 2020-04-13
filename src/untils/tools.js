export default {
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
    //点击事件防抖 默认立即执行， 400 毫秒执行一次
    debounceClick(func) {
        return this.debounce(func, 400, true)
    },
    /**防抖立即执行和promise 执行完成 双向控制 */
    debouncePromise(func, onceTime) {
        let isRuning, timeout;
        return function () {
            let that = this;
            let args = arguments;
            if (!isRuning && !timeout) {
                // console.log("方法被立即执行");
                var result = func.apply(that, args);
                if (result instanceof Promise) {
                    result.then(() => {
                        isRuning = false;
                        // console.log("promise执行完毕")
                    })
                } else {
                    isRuning = false;
                }
            }
            if (onceTime) {
                timeout = setTimeout(() => {
                    timeout = null;
                    // console.log("time等待完毕")
                }, onceTime)
            }

        }
    },
    throttle: function (func, wait) {
        let previous = 0;
        return function () {
            let now = Date.now();
            let context = this;
            let args = arguments;
            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }
    },
    //==============================================================
    
}