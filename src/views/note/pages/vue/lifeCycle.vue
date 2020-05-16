<template>
<div>
  <div class="markdown-body" >
    <h1>
      vue生命周期
      <a href="https://cn.vuejs.org/v2/api/#beforeCreate">参考链接</a>
    </h1>
     <blockquote>
        1.beforeCreate:在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
        new Vue()刚进来就调用了,此时vue 里面什么都没有
      </blockquote>
      <blockquote>2.created: 此时Observer,watch/event 事件回调,此时$el 还没生效 表示comipler 还没有被执行</blockquote>
      <blockquote>3.beforeMount: 在挂载开始之前被调用：相关的 render 函数首次被调用。</blockquote>
      <blockquote>3.mounted: 此时 el 被新创建的 vm.$el 替换了 当 mounted 被调用时 vm.$el 也在文档内。</blockquote>
      <blockquote>beforeUpdate:数据更新时调用，发生在虚拟 DOM 打补丁之前</blockquote>
      <blockquote>updated:数据更新时调用，发生在虚拟 DOM 打补丁之前</blockquote>
      <blockquote>beforeDestroy:在当前示例被销毁之前触发 在这里 释放一下闭包 的变量，比如外部的变量，计时器变量</blockquote>
      <blockquote>destoryed:实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。</blockquote>
      <blockquote>errorCaptured:当捕获子组件错误是 会被调用</blockquote>
      <blockquote>activated:被 keep-alive 缓存的组件激活时调用。</blockquote>
      <blockquote>deactivated：:被 keep-alive 缓存的组件停用时调用。</blockquote>
      <p>eg:</p>
  </div>
  <codeview></codeview>
</div>
</template>
<script>
import markdown from "@/components/markdown";
import codeview from "@/components/codeview";
export default {
  components: { markdown,codeview },
  data: function() {
    return {
      a: "我是里面变量a"
    };
  }
};
</script>