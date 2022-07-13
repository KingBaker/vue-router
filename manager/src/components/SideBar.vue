<template>
  <div class="side-bar">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
    </ul>
    <template v-for="(item, index) of $store.state.userRouters">
      <MenuItem :key="index" :item="item"></MenuItem>
    </template>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'

export default {
  name: 'SideBar',
  components: {
    MenuItem
  }
}
</script>

<style scoped>
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 250px;
  padding-top: 90px;
  background-color: gray;
  color: white;
  box-sizing: border-box;
}
</style>
