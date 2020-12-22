/* eslint-disable prettier/prettier */
<template>
  <div class="card">
    <div class="card-content">
      <button class="button is-primary" @click="loadJoke">Load Joke</button>
      <hr />
      <p v-if="errorMessage" class="notification is-danger">
        {{ errorMessage }}
      </p>
      <p v-if="currentJoke" class="notification">
        {{ currentJoke }}
      </p>
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
  data() {
    return {};
  },
  methods: {
    loadJoke() {
      return this.$store.state("loadJoke");
    }
  }
};
</script>

<style scope></style>
