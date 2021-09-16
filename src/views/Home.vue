<template>
  <top-nav></top-nav>
  <van-swipe>
    <van-swipe-item
      v-for="(img, Index) in banners"
      :key="Index"
      :autoplay="1000"
      :duration="500"
      :width="7.5"
      :heigth="200"
      class="vanSwipe"
    >
      <img class="images" v-lazy="img" />
    </van-swipe-item>
  </van-swipe>
  
  <music-list />
</template>

<script lang="ts">
import { defineComponent,defineAsyncComponent } from "vue";
import topNav from "../components/topNav.vue";
import banners from "../api/getBannerUrls";
import iconList from "../components/iconList.vue";
import musicList from "../components/musicList.vue"


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
    iconList,
    musicList,
}
})
</script>

<style lang="less" scoped>
.vanSwipe {
  .images {
    width: 7.5rem;
    border-radius: 0.3rem;
  }
}
</style>
