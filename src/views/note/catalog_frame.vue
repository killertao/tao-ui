<!--
左右目录模式模式
-->
<template>
  <div class="frame-catalog">
    <div class="catalog-right" ref="catalogRight">
      <router-view ref></router-view>
    </div>
    <div class="catalog-left">
      <span
        v-for="(item,index) of noteCatalog"
        class="catalog-item"
        :key="index"
        :class="{'active':index==activeIndexCatalog}"
        @click="doActiveCatalog(item,index)"
      >{{item.name}}</span>
    </div>
  </div>
</template>
<script>
import NoteVueChildren from "./pages/vue/router";
import NoteJsChildren from "./pages/javasript/router";
import NoteHtmlChildren from "./pages/html/router";
import NotePythonChildren from "./pages/python/router";
import Tools from "@/untils/tools";
import tools from '../../untils/tools';
export default {
  name: "CatalogFrame",
  components: {
    // Multilevel
  },
  data: function() {
    return {
      activeIndexCatalog: 0,
      dynamicMenu: "vue"
    };
  },
  computed: {
    childrenMap:function(){
      return  {
        vue: NoteVueChildren,
        js: NoteJsChildren,
        html: NoteHtmlChildren,
        python:NotePythonChildren.filter((item)=>!item.redirect)
      };
    },
    noteCatalog: function() {
      var children=this.childrenMap[this.dynamicMenu];
      if (!children) {
        // console.error("找不到对应的子路由");
        return null;
      }
      return children;
    }
  },
  methods: {
    //这里根据路由激活选中的catalog
    //switchMenu 是否是点击上面的菜单
    reset({ route, switchMenu }) {
      //父级路由
      var routePath = route.path.toLocaleLowerCase();

      //下面写默认路由，应为结构"note/xx/targer 因为是动态的，并没有默认路由1级默认路由
      if (/^\/note\/?$/.test(routePath)) {
        this.activeIndexCatalog = 0;
        this.$router.push({ name: this.noteCatalog[0].name });
        return;
      }

      //根据取到的头部路由动态计算noteCatlog
      if (/^\/note\/(.+)\//.test(routePath)) {
        var menu = routePath.match(/^\/note\/(.+)\//)[1];
        this.dynamicMenu = menu;
      }
      if (switchMenu) {
        if (!this.noteCatalog) {
          this.$router.push({ path: route.path });
          return;
        }
        this.activeIndexCatalog = 0;
        this.$router.push({ name: this.noteCatalog[0].name || "" });
        return;
      }
      //下面是在激活左边的index
      var reg = /^\/note\//;
      if (reg.test(routePath)) {
        var childPath = routePath.replace(reg, "");
      }
      let i = 0;
      for (; i < this.noteCatalog.length; i++) {
        if (childPath == this.noteCatalog[i].path.toLowerCase()) {
          break;
        }
      }
      this.activeIndexCatalog = i;
    },
    doActiveCatalog(item, index) {
      if (this.activeIndexCatalog == index) {
        return;
      }
      this.activeIndexCatalog = index;
      this.$refs.catalogRight.scrollTop=0;
      this.$router.push({ name: item.name }).then(() => {});
    }
  }
};
</script>
