<template>
  <div>
    <p>a页面</p>
    <button @click="doChangeUsers">user改变</button>
    <child :data="data.arr"></child>   
  </div>
</template>
<script>
import Child from "./child";
import $ from "jquery"
export default {
  components:{Child},
  data: function() {
    return {
        data:{
            arr: {
          users: [],
          crouses: []
            }
        }
    };
  },
  methods:{
      doChangeUsers(){
          console.log($(".app-container"));
          this.data.arr.users=[(100*Math.random()).toFixed(0),(100*Math.random()).toFixed(0),(100*Math.random()).toFixed(0)]
      }
  },
  watch:{
      'data.arr.users':function(val){
          console.log("付组件",val);
      }
  }
};
</script>