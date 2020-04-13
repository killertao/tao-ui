<!--
左右目录模式模式
-->
<template>
  <div class="frame-catalog">
    <div class="catalog-left">
      <p v-for="(item,index) of noteCatalog" class="catalog-item" :key="index"
        :class="{'active':index==activeIndexCatalog}"
       @click="doActiveCatalog(item,index)" 
       >{{item.name}}</p>
    </div>
    <div class="catalog-right">
        <router-view ref=""></router-view>
    </div>
  </div>
</template>
<script>

import  {NoteChildren} from "../note/router"
import Tools from "@/untils/tools"
export default {
  name: "CatalogFrame",
  components: {
    // Multilevel
  },
  data: function() {
    return {
      activeIndexCatalog:0,
      noteCatalog:NoteChildren,
    };
  },
  methods:{
      reset({route}){
          //父级路由
          if(["/note"].includes(route.path)){
            this.activeIndexCatalog=0;
            return;
          }
          //子路由
          var pathArr=route.path.split("/");
          var key=pathArr[pathArr.length-1];
          let i=0;
          for(;i<this.noteCatalog.length;i++){
              if(key==this.noteCatalog[i].path){
                  break;
              }
          }
          this.activeIndexCatalog=i;
      },
      doActiveCatalog(item,index){
        if(this.activeIndexCatalog==index){return}
        this.activeIndexCatalog=index; 
        this.$router.push({name:item.name}).then(()=>{
        });
      }
  },

};
</script>
