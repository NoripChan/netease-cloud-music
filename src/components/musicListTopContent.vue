<template>
  <div class="contentContainer">
    <div class="left">
      <img :src="playlist.coverImgUrl" class="coverImg" />

      <div class="playCount">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ziyuan"></use>
        </svg>
        <span class="text">{{ countFormat(playlist.playCount) }}</span>
      </div>
    </div>

    <div class="right">
      <div class="contentTitle">{{ playlist.name }}</div>
      <div>
        <img :src="playlist.creator.avatarUrl" class="avatar" />
        <span class="name">{{ playlist.creator.nickname }}</span>
      </div>
      <div class="description">{{ playlist.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "musicListTopContent",
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
.contentContainer {
  display: flex;
  justify-content: space-between;
  width: 7.5rem;
  height: 4.5rem;
  .right {
    width: 4rem;
    height: 4rem;
    .contentTitle {
      width: 90%;
      height: 1rem;
      font-size: 0.5rem;
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      width: 4rem;
      height: 1rem;

      img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }

      span {
        width: 3rem;
        height: 1rem;
        font-size: 0.5rem;
        line-height: 1rem;
        vertical-align: text-top;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .description {
      width: 3rem;
      height: 2rem;
      font-size: 0.7rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient:vertical;
      overflow: hidden;
    }
  }
  .left {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      padding: 0 0.3rem;

      width: 3rem;
      height: 3rem;
    }

    .playCount {
      position: absolute;
      top: 0.1rem;
      left: 1.9rem;
      width: 3.5rem;
      height: 0.3rem;

      .icon {
        width: 0.3rem;
        height: 0.2rem;
      }
      span {
        font-size: 0.3rem;
        line-height: 0.3rem;
      }
    }
  }
}
</style>