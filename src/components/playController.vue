<!--
 * @Author: Norip Chan
 * @Date: 2021-09-24 12:54:48
 * @LastEditTime: 2021-09-26 13:03:48
 * @LastEditors: Norip Chan
 * @Description: 
 * @FilePath: \netease-cloud-music\src\components\playController.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="playContrlllerContainer">
    <div class="left">
      <img
        :src="currentPlayImgUrl"
      />
      <div class="content">
        <div class="top">{{playItemName}}</div>
        <div class="bottom">横滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ziyuan"></use>
      </svg>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-more"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import {mapGetters,mapState} from 'vuex'

export default defineComponent({
  name: "playController",
  computed : {
      ...mapGetters(['currentPlayImgUrl']),
      ...mapState({
          'playItemName': (state:any)=>state.playlist.tracks[state.currentPlaying].al.name,
      })
      
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.playContrlllerContainer {
  background-color: rgba(16, 161, 197, 0.562);
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    width: 4rem;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      width: .7rem;
      height: .7rem;
      border-radius: 50%;
      margin-bottom: .1rem;
    }

    .content {
      width: 2.9rem;
      height: 1rem;
      display: flex;
      flex-wrap: wrap;
      margin-left: .3rem;

      .top {
        width: 2.5rem;
        height: 0.5rem;
        font-size: 0.4rem;
        line-height: 0.5rem;
      }

      .bottom {
        width: 2.5rem;
        height: 0.5rem;
        font-size: 0.25rem;
        line-height: 0.5rem;
        color: #ccc;
        margin-top: -.1rem;
        
      }
    }
  }

  .right {
    width: 3rem;
    height: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #ccc;
      margin-right: .2rem;
    }
  }
}
</style>