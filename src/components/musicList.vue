<template>
  <div v-if="isShowed">
    <van-swipe :autoplay="3000" lazy-render :width="300">
      <van-swipe-item v-for="item in musicList" class="vanSwipe" :key="item.id">
        <router-link :to="{ name: 'musicListInfo', query: { id: item.id } }">
          <div class="itemContainer">
            <img :src="item.picUrl" class="images" :alt="item.name" />
            <span class="counterIndicator">{{
              countFormat(item.playCount)
            }}</span>
            <span class="text">{{ item.name }}</span>
          </div>
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
  <br />
  <div v-if="isShowed">
    <swiper
      ref="mySwiper"
      :lazy="true"
      :slidesPerView="3"
      :loop="true"
      class="swiper-container"
      :autoplay="true"
    >
      <swiper-slide
        v-for="item in musicList"
        :key="item.id"
        class="siperSlide"
        :spaceBetween="0"
      >
        <!-- Required swiper-lazy class and image source specified in data-src attribute -->
        <img
          :data-src="item.picUrl"
          :alt="item.name"
          class="swiper-lazy img1"
        />
        <!-- Preloader image -->
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>
    </swiper>
  </div>
  <div @click="handle">TTTTTTTT</div>
  <button style="width: 1rem; height: 1rem"></button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import type from "../store/type";
import { useStore, mapState } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import "swiper/components/lazy/lazy.min.css";
import SwiperCore, { Lazy, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Lazy, Autoplay]);

export default defineComponent({
  name: "musicList",
  data() {
    return {
      swiperOptions: {},
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper;
    },
    ...mapState(["musicList"]),
  },
  methods: {
    handle() {
      console.log(this.countFormat);
    },
    countFormat(value: number) {
      if (value > 10000) return `${(value / 10000).toFixed(2)}万`;
      else return value;
    },
  },
  setup() {
    let store = useStore();
    let isShowed = ref(false);
    let imgUrlArr = ref([]);

    onMounted(async () => {
      await store.dispatch(type.actions.getMusicList);
      console.log(store.state.musicList);
      imgUrlArr.value = store.state.musicList.map((item: any) => {
        return item.picUrl;
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
  .itemContainer {
    position: relative;
    .counterIndicator {
      position: absolute;
      font-size: 0.3rem;
      top: 0.2rem;
      right: 0.1rem;
      color: red;
    }
    .images {
      width: 7.5rem;
      height: 3rem;
      border-radius: 0.3rem;
    }
    .text {
      width: 100%;
      height: 0.6rem;
      font-size: 0.3rem;
      word-wrap: normal;
    }
  }
}

.swiper-container {
  .img1 {
    width: 3rem;
    height: 2rem;
    border-radius: 0.2rem;
  }
}
</style>