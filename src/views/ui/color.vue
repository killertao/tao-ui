<template>
    <div>
        <section class="flex-grow child-ml10" style="width:50%">
             <div class="block-min" :class="[`bg-${name}`]" v-for="name of colors" :key="name">
                    <h2>{{name}}</h2>
             </div>         
        </section>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
           colors:['main','warn','danger','info'],      
        }
    }
}
</script>