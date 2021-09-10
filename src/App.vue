<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div class="test"></div>
  </div>
  <router-view/>
</template>

<style lang="less">
.test {
  width:3.75rem;
  height: 1rem;
  background-color: red;
}
</style>