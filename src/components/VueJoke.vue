/* eslint-disable prettier/prettier */
<template>
  <div class="card">
    <div class="card-content">
      <button class="button is-primary" @click="loadJoke()">Load Joke</button>
      <hr />
      <p>{{ this.joke }}</p>
      <normal-joke></normal-joke>
      <snake-joke></snake-joke>
      <loud-joke></loud-joke>
    </div>
  </div>
</template>

<script>
import NormalJoke from "./NormalJoke.vue";
import SnakeJoke from "./SnakeJoke.vue";
import LoudJoke from "./LoudJoke.vue";

export default {
  name: "VueJoke",
  components: {
    NormalJoke,
    SnakeJoke,
    LoudJoke
  },
  computed: {
    joke() {
      return this.$store.getters.getJoke;
    }
  },
  methods: {
    loadJoke() {
      this.$store.dispatch("loadJoke");
    }
  }
};
</script>

<style scope></style>
