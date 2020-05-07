function Observer(data) {
    console.log(`定义了一条劫持数据`,data)
    //这里通过递归劫持了所有的数据
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    constructor: Observer,
    walk: function(data) {
        var me = this;
        Object.keys(data).forEach(function(key) {
            me.convert(key, data[key]);
        });
    },
    convert: function(key, val) {
        this.defineReactive(this.data, key, val);
    },

    defineReactive: function(data, key, val) {
        var dep = new Dep();//这里会创建一个dep
        var childObj = observe(val);
        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
                console.log("劫持到了1个数据get");
                if (Dep.target) {//当全局Dep 构造函数 其实也是对象。有target 的时候，触发dep.depend ,
                    //就是调用这个target 的 addDep方法
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                console.log("劫持到了1个数据set")
                // 新的值是object的话，重新劫持监听，为了让子也监听到
                childObj = observe(newVal);
                 // 通知订阅者
                 dep.notify();
            }
        });
    }
};

function observe(value, vm) {
    //对object 数据使用 Object.defineProperty  进行劫持
    if (!value || typeof value !== 'object') {
        return;
    }
    return new Observer(value);
};


var uid = 0;

function Dep() {
    this.id = uid++;
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },

    depend: function() {
        Dep.target.addDep(this); //把当前 dep  传给当前表达式watcher 
        //1. dep sub 添加了 1个watcher 
        //2. watcher 添加1个depId 
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;


