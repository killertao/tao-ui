<template>
  <div>
    <div v-cloak class="app-container app">
      <router-view></router-view>
      <footer class="footer">
        <p>本网站没有借助任何脚手架工，纯手工一个一个模块的引入，加载。是为了更全面的了解项目的构建组成</p>
        <p>
          ©2020 李涛 &nbsp; &nbsp; &nbsp; &nbsp;
          <a class="pointer"
            style="color:white"
            target="_blank"
            href="https://github.com/killertao/tao-ui"
          >github地址</a>
          <span class="ml20 pointer goTop cur-default" @click="goTop">回到顶部<i class="iconfont icongotop"></i> </span>
        </p>
      </footer>
    </div>
    <div class="bg">
      <div class="xy xy-font">喜欢的人就去追，想做的事就去做</div>
    </div>
    
    <div class="person" v-if="ifPerson">
      <section>
        <span class="close iconfont iconguanbi1" @click="closePerson"></span>
        <img class="img-w100" src="/images/myinfo.jpg" alt />
        <div style="padding:0 0 10px 18px">
          <p>Tel:15112345736</p>
          <p>Email:codekiler@foxmail.com</p>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import "./styles/reset.less";
import "./styles/common.less";
import "#/note/article.less";
import "#/github-markdown.css";
import tools from "./untils/tools";
//其实不管css在哪里导入加载，都会打包到到整改页面的css里面，
export default {
  name: "appContainer",
  data: function() {
    return {
      ifPerson: true
    };
  },
  methods: {
    goTop: tools.goTop,
    closePerson: function() {
      this.ifPerson = false;
    }
  }
};
</script>
<style scoped>
.footer {
  width: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bg {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background: var(--htmlBgColor);
  display: flex;
  align-items: flex-end;
  top: 0;
}
.bg .xy {
  margin-bottom: 100px;
}
.xy-font {
  font-size: 100px;
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  white-space: nowrap;
  justify-content: space-around;
  color: gray;
  text-shadow: 20px 20px 20px;
  font-weight: 700;
}
.goTop {
  font-weight: 700;
  color: orange;
}
.app {
  z-index: 2;
  position: relative;
}
.person {
  background: #fff;
  width: 250px;
  min-height: 200px;
  position: fixed;
  left: calc(50% + 0.5 * 55% + 20px);
  bottom: 0;
  z-index: 3;
}
.close {
  position: absolute;
  right: -15px;
  top: -10px;
  font-size: 30px;
}
</style>