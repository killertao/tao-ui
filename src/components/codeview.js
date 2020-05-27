<template>
<div ref="xx">
    <div>{{a}}+{{b}}={{a*b}}
        <button @click="doViewCode">查看代码</button>
    </div>
    <div v-if="viewCode">
    </div>
</template>
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
    render (){
     debugger;
   } ,
   methods:{
      doViewCode(){
          this.viewCode=!this.viewCode;
      }
      
   }
}

</script>