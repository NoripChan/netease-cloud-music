<template>
<top-nav></top-nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import topNav from '../components/topNav.vue'

export default defineComponent({
  name: 'Home',
  components: {
    topNav
  },
});
</script>

<style lang="less" scoped>
.h1ss {
  font-size: 2rem;
}

</style>
