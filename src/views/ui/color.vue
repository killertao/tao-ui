<template>
  <div>
    <div>
      <section class="flex-grow child-ml10" style="width:50%">
        <div class="block-min" :class="[`bg-${name}`]" v-for="name of colors" :key="name">
          <h2>{{name}}</h2>
        </div>
      </section>
    </div>
    <menu-nested :data="menudata">
        <template v-slot="slotProps">
          {{slotProps.item.name}
        </template>
    </menu-nested>
  </div>
</template>
<style scoped>
/*from b-color*/
.aa {
  font-size: 20px;
}
</style>
<script>
import MenuNested from "@/components/multilevel";
export default {  
  components: {
    MenuNested,
  },
  data: function() {
    return {
      colors: ["main", "warn", "danger", "info"],
      menudata:[
        {name:"1级",children:[{name:"1.1级"},{name:"1.2级"}]},
        {name:"2级"},
        {name:"3级"}
        ]
    };
  }
};
</script>
