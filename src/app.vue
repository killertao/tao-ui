<template>
     <div v-cloak class="app-container">
         <router-view></router-view>
         <!-- <footer style="height:200px;width:100%;background:black;color:white">
        <p>111111111111111111111</p>
        </footer> -->
     </div> 
      
</template>
<script>
import "./styles/reset.less"
import './styles/common.less'
import "#/note/article.less"
import "#/github-markdown.css"

//其实不管css在哪里导入加载，都会打包到到整改页面的css里面，
export default {
    name:"appContainer"
}
</script>