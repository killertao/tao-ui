<template>
     <div v-cloak class="app-container">
         <router-view></router-view>
     </div> 
</template>
<script>
import "./styles/reset.less"
import './styles/common.less'
import './styles/ui/index.less'
export default {
    data:function(){
        return {
            name:"11"
        }
    }
}
</script>