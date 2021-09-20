<template>
  <div class="navContainer">
      <img :src="playlist.coverImgUrl" class="backgroundImg">
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-houtui"></use>
      </svg>
      <span class="text">歌单</span>
    </div>
    <div class="left">
      <svg class="icon iconLeft" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon iconLeft" aria-hidden="true">
        <use xlink:href="#icon-more"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "musicListTopNav",
  props: ["playlist"],
  mounted: function () {
    console.log(this.playlist);
  },
  updated: function () {
    console.log(this.playlist);
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.navContainer{
    width: 7.5rem;
    height: 7.5rem;
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    .backgroundImg {
        position: fixed;
        width:7.5rem;
        height: 7.5rem;
        filter: blur(58px)

    }
    .right,.left {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .icon {
            width: 0.6rem;
            height: 0.6rem;
        }

       .iconLeft {
           margin-top: 0.2rem;
       }

        .text {
            width: 1rem;
            font-size: 0.4rem;
            height: 1rem;
            line-height: 1rem;
        }
        
    }
}
</style>