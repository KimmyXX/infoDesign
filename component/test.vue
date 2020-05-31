<template>
  <div>
    <div>test</div>
    <router-link to="/test/testchildren">testchildren</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  div {
    width: 200px;
    height: 200px;
    background-color: red;
  }
</style>