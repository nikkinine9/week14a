<template>
  <div id="app">
    <vue-joke></vue-joke>
  </div>
</template>

<script>
import VueJoke from "./components/VueJoke.vue";

export default {
  name: "App",
  components: {
    VueJoke
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  margin: 60px;
}
</style>
