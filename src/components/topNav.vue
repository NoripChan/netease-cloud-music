<template>
  <div class="topNavContainer">
    <div class="left">
      <span class="iconfont icon-sousuo"> </span>
    </div>
    <div class="content">
      <div class="contentItem">我的</div>
      <div class="contentItem">发现</div>
      <div class="contentItem">探索</div>
      <div class="contentItem">广播</div>
    </div>
    <div class="right">
      <svg class="icon topNavRight" aria-hidden="true">
        <use xlink:href="#icon-tuijianchanpinji"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "topNav",
  setup() {

      
    return {};
  },
});
</script>

<style scoped lang="less" >
.topNavContainer {
  width: 100%;
  height: 2 rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    width: 1.5rem;
  }

  .content {
    width: 4.5rem;
    display: flex;
    justify-content: space-around;

    .contentItem {
      width: 2rem;
    }
  }

  .topNavRight {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>