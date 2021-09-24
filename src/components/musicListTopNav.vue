<!--
 * @Author: your name
 * @Date: 2021-09-20 14:16:15
 * @LastEditTime: 2021-09-23 12:47:23
 * @LastEditors: Norip Chan
 * @Description: In User Settings Edit
 * @FilePath: \netease-cloud-music\src\components\musicListTopNav.vue
-->
<template>
  <img :src="playlist.coverImgUrl" class="backgroundImg" />
  <div class="navContainer">
    <div class="right" @click="gotoBack">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-houtui"></use>
      </svg>
      <span class="text" @click="handleClick">歌单</span>
    </div>
    <div class="left" @click="handleClick">
      <svg class="icon iconLeft" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon iconLeft" aria-hidden="true">
        <use xlink:href="#icon-more"></use>
      </svg>
    </div>
  </div>
  <music-list-top-content :playlist="playlistfromCtx" />
  <music-list-top-feet :playlist="playlistfromCtx" />
  <!-- <suspense>
    <template #default> -->
      <playList1 :playlistId="playlistfromCtx.id" />
    <!-- </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense> -->
</template>

<script lang="ts">
import { defineComponent, toRef, defineAsyncComponent } from "vue";
import musicListTopContent from "@/components/musicListTopContent.vue";
import musicListTopFeet from "@/components/musicListTopFeet.vue";
import { useRouter } from "vue-router";
// import playList from "@/components/playList.vue";

function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
};

const playList1 = defineAsyncComponent(() => import("@/components/playList.vue"));
let id: string = '2514517350';
export default defineComponent({
  name: "musicListTopNav",
  props: ["playlist"],

  methods: {
    /**
     * @description:
     * @param {*}
     * @return {*}
     */
    handleClick() {
      console.log("Hand!");
    },
  },
  mounted: function () {
    console.log(this.playlist);
  },

  setup(ctx) {
    let Router = useRouter();
    console.log("------------");

    console.log(Router);

    function gotoBack() {
      console.log("go back");

      Router.go(-1);
    }

    console.log(ctx);
    let playlistfromCtx = toRef(ctx, "playlist");
    console.log(playlistfromCtx);

    return {
      playlistfromCtx,
      gotoBack,
      id,
    };
  },
  components: {
    musicListTopContent,
    musicListTopFeet,
    playList1,
  },
});
</script>

<style lang="less" scoped>
.backgroundImg {
  position: fixed;
  width: 7.5rem;
  height: 7.5rem;
  filter: blur(100px);
  z-index: -1;
}
.navContainer {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .right,
  .left {
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