<template>
    <article class="article">
        <h1>ES6介绍</h1>
        <section class="resource">
                <p class="subject">参考资料</p>
                <div>
                    <p><a target="_blank" href="https://es6.ruanyifeng.com">https://es6.ruanyifeng.com</a></p>
                    <p>https://www.jianshu.com/p/c50eff5c36a2</p>
                    <p>https://www.baidu.com</p>
                </div>
              
        </section>
    </article>
</template>
<script>
import Tools from "@/untils/tools"    
export default {
    data:function(){
        return {
            count:0,
        }
    },
    methods:{
        doSave:Tools.debouncePromise(function(){
           return  new Promise((reslove,reject)=>{
                setTimeout(()=>{
                    this.count++;
                    reslove();
                },1000*5)
            })
        },1000*10)
    }
}
</script>