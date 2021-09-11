<template>
  <div id="nav">

  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  mounted (){
    this.$router.push({
      name:'Home'
    })
  },
  setup() {
    return {};
  },
});
</script>


<style lang="less">
</style>