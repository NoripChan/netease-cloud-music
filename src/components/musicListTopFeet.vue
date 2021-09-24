<template>
  <div class="feetContainer">
    <div class="item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liaotian-04"></use>
      </svg>
      <span>{{playlist.commentCount}}</span>
    </div>
    <div class="item">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tubiaozhizuo-"></use>
      </svg>
      <span>{{playlist.shareCount}}</span>
    </div>
    <div class="item download">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai"></use>
      </svg>
      <svg class="icon vip" aria-hidden="true">
        <use xlink:href="#icon-vip"></use>
      </svg>
      <span>下载</span>
    </div>
    <div class="item">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-newxuanzhongduoxuan"></use>
      </svg>
      <span>多选</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "musicListTopFeet",
  props: ["playlist"],
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.feetContainer {
    width: 7.5rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
            width: 1rem;
            height: 1rem;
        }

        span {
            font-size: 0.5rem;
        }

        
    }

    .download {
            position: relative;

             .vip {
                position:absolute;
                width: 0.6rem;
                height: 0.6rem;
                top:0.4rem;
                right: 0rem;
            }

        }
}
</style>