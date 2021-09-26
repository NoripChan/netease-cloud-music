<!--
 * @Author: Norip Chan
 * @Date: 2021-09-21 19:45:49
 * @LastEditTime: 2021-09-26 12:47:00
 * @LastEditors: Norip Chan
 * @Description: 
 * @FilePath: \netease-cloud-music\src\components\playList.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="playlistContainer">
    <div class="topNav">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ziyuan"></use>
        </svg>
        <span class="txt1">播放全部</span>

        <span class="total"
          >（共{{ $store.state.playlist.tracks.length }}首）</span
        >
      </div>
      <div class="right">
        <div class="btn">
          +收藏（共{{ store.state.playlist.tracks.length }}首）
        </div>
      </div>
    </div>
    <div class="playlistContent">
      <div
        class="playlistItem"
        v-for="(item, index) in $store.getters.tracks"
        :key="index"
      >
        <div class="left">
          <div class="index">{{ index }}</div>
          <div class="body">
            <div class="top">{{ item.name }}</div>
            <div class="buttom">
              <div class="author">
                {{ $store.getters.authorByIndex(index) }}
              </div>
              <div class="ablum">{{ $store.getters.ablumByIndex(index) }}</div>
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
import { toRefs, onBeforeMount, computed, reactive, ref } from "vue";
import { useStore, mapState } from "vuex";
import axios from "axios";
import Type from "@/store/type";

function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
}

export default {
  name: "playList",
  props: ["playlistId"],
  computed: mapState({
    tracks: function (state: any) {
      console.log("---in computed---", this);

      return this.$store.state.playlist.tracks;
    },
  }),
  methods: {
  },
  data() {
    return {
      listLength: 9,
    };
  },
  setup(ctx: any) {
    let store = useStore();
    const idAsRefs = toRefs(ctx);
    console.log("----setup----", ctx, idAsRefs.playlistId.value);
    let tracks;

    onBeforeMount(async () => {
      let response: any;

      do {
        await sleep(5000);
        console.log("sleep 5s.");
      } while (!ctx.playlistId);

      response = await axios.get("/playlist/detail", {
        params: {
          id: idAsRefs.playlistId.value,
        },
      });
      console.log(response.data);

      await store.commit(Type.commit.updatePlayList, response.data.playlist);
    });

    return {
      store,
      tracks,
    };
  },
};
</script>

<style lang="less" scoped>
.playlistContainer {
  
  width: 7.5rem;
  height: 1rem;

  .topNav {
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;

    .right {
      width: 3rem;
      height: 1rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .btn {
        width: 2.5rem;
        height: 0.7rem;
        background-color: red;
        border-radius: 0.4rem;
        color: white;
        font-size: 0.3rem;
        line-height: 0.7rem;
        text-align: end;
        margin-right: 0.2rem;
      }
    }

    .left {
      width: 4rem;
      height: 1rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .icon {
        width: 0.5rem;
        height: 0.5rem;
        margin-left: 0.5rem;
      }

      span {
        font-size: 0.35rem;
      }

      .txt1 {
        color: black;
        font-weight: 900;
      }

      .total {
        font-size: 0.3rem;
        color: brown;
      }
    }
  }

  .playlistContent {
    // width:7.5rem;
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    .playlistItem {
      width: 7.5rem;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        height: 1rem;
        width: 5rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .index {
          height: 1rem;
          width: 0.4rem;
          font-size: 0.5rem;
          line-height: 1rem;
          margin-left: 0.1rem;
        }

        .body {
          width: 2.7rem;
          height: 1rem;
          display: flex;
          flex-direction: column;

          .top {
            width: 2.7rem;
            height: 0.5rem;
            font-size: 0.3rem;
            font-weight: 300;
            line-height: 0.5rem;
            overflow: hidden;
            white-space: nowrap;
            margin-bottom: -0.1rem;
            margin-top: 0.1rem;
            // overflow: ellipsis;
          }

          .buttom {
            margin-top: -0.1rem;
            width: 2.7rem;
            height: 0.5rem;
            line-height: 0.5rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .author {
              font-size: 0.25rem;
              line-height: 0.5rem;
              overflow: hidden;
              white-space: nowrap;
              // overflow: ellipsis;
            }

            .ablum {
              font-size: 0.25rem;
              line-height: 0.5rem;
              color: red;
              overflow: hidden;
              white-space: nowrap;
              // overflow: ellipsis;
            }
          }
        }
      }

      .right {
        width:2.3rem;
        height: 1rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .icon {
          width:0.5rem;
          height: 0.5rem;
          fill:#ccc;
          margin-right: .15rem;
        }

      }
    }


  }
}
</style>