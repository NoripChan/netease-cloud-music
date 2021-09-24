<!--
 * @Author: Norip Chan
 * @Date: 2021-09-17 15:04:08
 * @LastEditTime: 2021-09-24 14:05:35
 * @LastEditors: Norip Chan
 * @Description: 
 * @FilePath: \netease-cloud-music\src\App.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <router-view />
  <play-controller class="playController"/>
  
</template>

<script lang="ts">
import { defineComponent } from "vue"
import playController from '@/components/playController.vue'

export default defineComponent({
  components: { playController },
  name: "App",
  mounted (){
    this.$router.push({
      name:'Home'
    })
  },
  setup() {
    return {};
  },
});
</script>


<style lang="less">
.playController {
  
  position: fixed;
  left:0;
  bottom:0;
  
}
</style>