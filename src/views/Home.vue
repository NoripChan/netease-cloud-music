<template>
  <top-nav></top-nav>
  <van-swipe>
    <van-swipe-item
      v-for="(img, Index) in banners"
      :key="Index"
      class="vanSwipe"
    >
      <img class="images" v-lazy="img" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import topNav from "../components/topNav.vue";
import banners from "../api/getBannerUrls";

export default defineComponent({
  name: "Home",
  data() {
    return {
      banners,
    };
  },
  mounted() {
    banners.then((banners) => {
      console.log(banners);
      this.$data.banners = banners;
    });
  },
  components: {
    topNav,
  },
});
</script>

<style lang="less" scoped>
.vanSwipe {
  .images {
    width: 7.5rem;
    border-radius: 0.3rem;
  }
  
}


</style>
