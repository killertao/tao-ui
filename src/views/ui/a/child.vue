<template>
    <div>
        <p v-for="item of data.users"> {{item}}</p>
    </div>  
</template>
<script>
export default {
    props:{
        data:[Object,Array]
    },
    watch:{
        'data.users':function(val){
            console.log("子组件",val);
        }
    }
}
</script>