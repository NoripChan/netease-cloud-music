<template>
  <div v-if="isShowed">
    <van-swipe :autoplay="3000" lazy-render :width="300">
      <van-swipe-item
        v-for="(picUrl) in imgUrlArr"
        class="vanSwipe"
        :key="picUrl"
      >
        <img :src="picUrl" class="images"  />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import type from "../store/type";
import { useStore } from "vuex";

export default defineComponent({
  name: "musicList",
  setup() {
    let store = useStore();
    let isShowed = ref(false);
    let imgUrlArr = ref([]);

    onMounted(async () => {
      await store.dispatch(type.actions.getMusicList);
      console.log(store.state.musicList);
      imgUrlArr.value = store.state.musicList.map((item: any) => {
        return  item.picUrl;
      });
      console.log("----mount----");
      console.log(imgUrlArr);

      isShowed.value = true;
    });

    return {
      isShowed,
      store,
      imgUrlArr,
    };
  },
});
</script>

<style lang="less" scoped>
.vanSwipe {
  .images {
    width: 7.5rem;
    height: 3rem;
    border-radius: 0.3rem;
  }
}
</style>