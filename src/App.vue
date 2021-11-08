<template>
  <user></user>
</template>

<script>
import User from "../src/views/user/user.vue";
export default {
  name: "app",
  components: {
    User,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
