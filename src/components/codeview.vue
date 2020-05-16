<template>
<div ref="xx">
    <div>{{a}}+{{b}}={{a*b}}
        <button @click="doViewCode">查看代码</button>
    </div>
    <div v-if="viewCode">
<markdown>
~~~js
export default {
   data(){
     return {
         a:1,
         b:2    
     }
   }
}
~~~
</markdown>
    </div>
</div>
</template>
<script>
debugger;
import markdown from "@/components/markdown"
export default {
   components:{markdown},
   data(){
     return {
         a:1,
         b:2,
         viewCode:false,
     }
   },
   computed:{
       
   },
   beforeCreate:function(){
       debugger;
   },
   created:function(){
      debugger;
   },
   beforeMount:function(){
      debugger;
   },
     mounted:function(){
      debugger;
   },
   methods:{
      doViewCode(){
          debugger;
          this.viewCode=!this.viewCode;
      }
      
   }
}

</script>