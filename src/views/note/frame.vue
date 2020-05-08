<template>
  <div class="note-container">
    <section class="note-top-navmenu">
      <div class="top-navmenu-content">
        <span
          class="navmenu-item"
          v-for="(item,index) of menus"
          :key="item.key"
          :class="{active:activeItemKey===item.key}"
          @click="doActiveItem(index)"
        >{{item.name}}</span>
      </div>
    </section>
    <div class="note-conent-box">
      <CatalogFrame ref="catalogFrame"></CatalogFrame>
    </div>
  </div>
</template>
<script>
import "#/note/frame.less";
import CatalogFrame from "./catalog_frame";
import noteRouter from "./router";
export default {
  components: { CatalogFrame },
  data: function() {
    return {
      menus: [
        { name: "vue", key: "vue" },
        { name: "javascript", key: "js" },
        { name: "html", key: "html" },
        { name: "css", key: "css" },
        { name: "任务", key: "task" },
        { name: "摄影", key: "photography" },
        { name: "其他", key: "other" }
      ],
      activeItemKey: "vue"
    };
  },
  methods: {
    doActiveItem(index) {
      var key = this.menus[index].key;
      if (key === this.activeItemKey) {
        return;
      }
      this.activeItemKey = key;
      this.$refs.catalogFrame.reset({
        route: { path: `/note/${key}/` },
        switchMenu: true
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      var matches = to.path.match(/\/note\/(.+)\/.+/);
      if (matches) {
        vm.activeItemKey = matches[1];
      }
      vm.$refs.catalogFrame.reset({ route: to });
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
    // console.log("此路由被重用");
    //    next(vm => {
    //   vm.$refs.catalogFrame.reset({ route: to });
    // });
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  }
};
</script>