<template>
    <div class="note-container">
        <section class="note-top-navmenu">
          <p v-for="(item,index) of items" :key="item"
            :class="{active:activeItemIndex===index}"
            @click="doActiveItem(index)"
          >{{item}}</p>
        </section>
        <div class="note-conent-box">
           <CatalogFrame ref="catalogFrame"></CatalogFrame>
        </div>
    </div>
</template>
<script>
import "#/note/frame.less";
import CatalogFrame from "./catalog_frame";
export default {
    components:{CatalogFrame,},
    data:function(){
        return {
            items:['vue','javascript','html','css','任务','摄影','其他',],
            activeItemIndex:0, 
        }
    },
    methods:{
        doActiveItem(index){
            this.activeItemIndex=index;
        }
    },
    beforeRouteEnter(to,from,next){
            console.log("frame");
            next(vm=>{
                vm.$refs.catalogFrame.reset({route:to});
            });
    }
}
</script>