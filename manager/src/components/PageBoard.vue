<template>
  <div class="page-board">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PageBoard'
}
</script>

<style scoped>
.page-board {
  position: fixed;
  top: 60px;
  left: 250px;
  width: 100%;
  height: 100%;
  background-color: #00B7FF;
  padding: 30px;
}
</style>
