<template>
  <music-list-top-nav :playlist="response.playlist" />
</template>

<script lang="ts">
import { defineComponent, onMounted,reactive } from "vue";
import { useRoute } from "vue-router";
import { getMusicListInfo } from "@/api/index";
import musicListTopNav from '@/components/musicListTopNav.vue'

export default defineComponent({
  name: "musicListInfo",
  components :{
    musicListTopNav,
  },
  setup() {
    let route = useRoute();
    let musicListInfo;
    let response= reactive({
      playlist:{}
    });
    onMounted(async () => {
      musicListInfo = await getMusicListInfo(Number(route.query.id));
      console.log(musicListInfo);
      response.playlist=musicListInfo.data.playlist;
      
      
    });

    return {
      route,
      response,
    };
  },
});
</script>

<style lang="less" scoped>
</style>