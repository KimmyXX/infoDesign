<template>
  <div>
    <div>123</div>
    <router-link to="/test">test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 1
    }
  }
}
</script>

<style scoped>
  div {
    width: 100px;
    height: 100px;
    background: blue;
  }
</style>