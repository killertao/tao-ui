function MVVM(options) {
    this.$options = options || {};
    var data = this._data = this.$options.data;
    var me = this;
    //数据代理 把data 上的数据代理到vm 上
    Object.keys(data).forEach((key) => {
        me._proxyData(key);
    })
    observe(data,vm);//数据劫持，订阅者模式

    new Compile(options.el || document.body, this);
    //解析表达式的 获取属性值 时候 创建 Dep, Watcher 之前的关系
    //1每个属性值都有一个Dep 对象  里面有subs 对象是每个表达式的 watcher
    //2 每个watcher 都存了多个dep  主要是层级的关系，当 
    //2.当属性之改变的时候，通知dep 里面所偶的watcher 去跟新

}
MVVM.prototype = {
    _proxyData: function (key) {
        var me = this;
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                console.log(`使用代理调用了${key}属性`);
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                console.log(`使用代理赋值了${key}属性`);
                me._data[key] = newVal;
            }
        })
    }
}