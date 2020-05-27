<template>
  <div>
    <h1>transform:rotate 2d 旋转</h1>
    <p>利用旋转做一个照片墙</p>
    <div class="container">
        <img  v-for="num in 4"  :key="num" :src="`/tx/susu${num}.jpg`" />
    </div>
  </div>
</template>
<style lang="less" scoped >
/* form transformRotate.vue */
.container {
//   display: flex;
  width: 200px;
  margin-left: 200px;
  position: relative;  
  >img{
      position: absolute;
      width:100%;
      display: block;
      padding: 10px;
      background: #fff;
      &:nth-of-type(1){
        
          transform:translate(10px,0) rotate(7deg);
      }
      &:nth-of-type(2){
        transform:translate(20px,0) rotate(16deg);
      }
      &:nth-of-type(3){
      transform:translate(30px,0) rotate(21deg);
      }
      &:nth-of-type(4){
          transform:translate(50px, 20px) rotate(40deg);
      }
    } 
  }

</style>