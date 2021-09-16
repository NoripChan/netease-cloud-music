<template>
  <div class="iconListContainer">
    <div class="iconListItem" style="margin-left:'0.5rem'">
      <span class="icon iconfont icon-fenlei"></span>
      <span class="iconText">分类</span>
    </div>
    <div class="iconListItem">
      <span class="icon iconfont icon-shoucang"></span>
      <span class="iconText">收藏</span>
    </div>
    <div class="iconListItem">
      <span class="icon iconfont icon-paihang"></span>
      <span class="iconText">排行</span>
    </div>
    <div class="iconListItem">
      <span class="icon iconfont icon-gequdan"></span>
      <span class="iconText">歌曲单</span>
    </div>
    <div class="iconListItem">
      <svg class="iconSvg" aria-hidden="true">
        <use xlink:href="#icon-FM_weixuanze"></use>
      </svg>
      <span class="iconText">私人FM</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "iconList",
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.iconListContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 7.5rem;
  height: 1.5rem;
  .iconListItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1.5rem;

    .iconfont {
      width: 1.5rem;
      height: 0.8rem;
      font-size: 0.6rem;
    }
    .iconText {
      width: 1.5rem;
      height: 0.7rem;
      font-size: 0.3rem;
    }
    .iconSvg {
      width: 0.5rem;
      height: 0.8rem;
      margin-top: -0.15rem;
      margin-bottom: -0.15rem;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
}
</style>