<!--
 * @Author: your name
 * @Date: 2021-09-21 19:45:49
 * @LastEditTime: 2021-09-21 21:53:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \netease-cloud-music\src\components\playList.vue
-->

<template>
  <div class="playlistContainer">
    <div class="title">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ziyuan"></use>
        </svg>
        <span class="playAll">播放全部</span>
        <span class="total">(共{{ playlist.tracks.length }}首)</span>
      </div>
      <div class="right">
        <div class="bookmarkBtn">
          +收藏（{{ countFormat(playlist.subscribedCount) }}）
        </div>
      </div>
    </div>
    <div
      class="listContent"
      v-for="(item, index) in playlist.tracks"
      :key="index"
    >
      <div class="playItem">
        <div class="left">
          <span class="index">{{ index + 1 }}</span>
          <div class="leftContent">
            <div class="top">
              <span class="title"> {{ item.name }}</span>
            </div>
            <div class="buttom">
              <span class="author"> {{ item.al.name }}----</span
              ><span class="name">{{ item.name }}</span>
            </div>
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "playList",
  props: ["playlist"],
  methods: {
    countFormat(value: number) {
      if (value > 10000) return `${(value / 10000).toFixed(2)}万`;
      else return value;
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.playlistContainer {
  width: 7.5rem;
  background-color: white;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  //   height: 1.5rem;

  .title {
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: 1rem;
        height: 1rem;
      }
      span {
        font-size: 0.3rem;
      }
      span.total {
        font-size: 0.2rem;
        color: #ccc;
      }
    }

    .right {
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      padding-right: 0.2rem;

      .bookmarkBtn {
        width: 2.5rem;
        height: 1rem;
        background-color: red;
        line-height: 1rem;
        font-size: 0.3rem;
        border-radius: 0.5rem;
        // padding-right: 0.2rem;
        text-indent: 0.2rem;
      }
    }
  }

  .listContent {
      
    .playItem {
        width:7.5rem;
      display: flex;
      justify-content: space-between;

      .right {
          width:2rem;
          height:1rem;

        display: flex;
        align-items: center;

        .icon {
          width: 0.8rem;
          height: 0.8rem;
          fill: #ccc;
        }
      }

      .left {
          width:3rem;
          height: 1rem;
        display: flex;
        justify-content: space-between;
        // align-items: center;

        .index{
            width: 0.6rem;
            font-size: 0.5rem;
        }

        .leftContent {
            width:3rem;
          height: 1rem;
          display: flex;
          flex-direction: column;
        //   align-items: center;

          .top .title {
              width:3rem;
          height: 1rem;
            font-size: 0.3rem;
          }

          .buttom span {
            font-size: 0.2rem;
            color: #ccc;
          }
        }
      }
    }
  }
}
</style>