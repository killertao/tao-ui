<template>
  <div>
    <div v-for="item of data">
      <p>{{item.name}}</p>
      <div class="ml10">
        <my-self v-if="hasChidren(item)" :data="item.children"></my-self>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Array
  },
  components: {
    MySelf: () => import("@/components/multilevel.vue")
  },
  methods: {
    hasChidren(item) {
      return item.children && item.children.length;
    }
  }
};
</script>