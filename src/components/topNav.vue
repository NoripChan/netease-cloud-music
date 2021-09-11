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

  <van-nav-bar
    left-text="Back"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #title>
      <div class="vantNavbarContent">
        <div class="vantNavbarContentItem">我的</div>
        <div class="vantNavbarContentItem">发现</div>
        <div class="vantNavbarContentItem">探索</div>
        <div class="vantNavbarContentItem">广播</div>
      </div>
    </template>
    <!-- <div class="vantNavbar"> -->
    <template #right>
      <!-- <div class="vantNavbar right"> -->
      <svg class="icon vantNavbar" aria-hidden="true">
        <use xlink:href="#icon-tuijianchanpinji"></use>
      </svg>
      <!-- </div> -->
    </template>
    <!-- </div> -->
  </van-nav-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Toast } from "vant";

export default defineComponent({
  name: "topNav",
  methods: {
    onClickLeft() {
      Toast("Back");
    },
    onClickRight() {
      Toast("Button");
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less" >
.topNavContainer {
  width: 7.2rem;
  height: 1rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    padding-bottom: 0.3rem;
    span {
      width: 1rem;
    }
  }

  .content {
    width: 4.5rem;
    display: flex;
    justify-content: space-around;

    .contentItem {
      width: 1rem;
      font-size: 0.5rem;
    }
  }

  .topNavRight {
    width: 1rem;
    height: 1rem;
    padding-top: 0.3rem;
  }
}

.vantNavbar {
  width: 1rem;
  height: 1rem;
  padding-top: 0.3rem;
}

.vantNavbarContent {
    width: 4.5rem;
    display: flex;
    justify-content: space-around;

    .vantNavbarContentItem {
      width: 1rem;
      font-size: 0.5rem;
    }
  }


</style>