<template>
  <div>
    {{ route.query.id }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {useRoute} from 'vue-router'

export default defineComponent({
  name: "musicListInfo",
  setup() {
      let route = useRoute();

    return {
        route,
    };
  },
});
</script>

<style lang="less" scoped>
</style>