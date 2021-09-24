<!--
 * @Author: your name
 * @Date: 2021-09-19 18:03:55
 * @LastEditTime: 2021-09-22 14:49:28
 * @LastEditors: Norip Chan
 * @Description: In User Settings Edit
 * @FilePath: \netease-cloud-music\src\views\musicListInfo.vue
-->
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
      playlist:{
        id:"",
        creator:{},
        tracks:[
          {al:{},}
        ],
      }
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