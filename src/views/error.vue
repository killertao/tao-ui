<template>
  <div class="bg-red fullparent" style="overflow:hidden">
    <div class="error-content color-fff" style>
      <h1 class="">没有找到此页面，请检查链接路径...</h1>
      <div class="back" @click="doGoBack"><h1>Back</h1></div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
       doGoBack(){
           this.$router.back();
       } 
    }
}
</script>
<style scoped>
.back {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-weight: 700;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 130px;
  text-shadow: 0.3em 0.3em 0.3em;
  cursor: pointer;
}
.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
}

</style>