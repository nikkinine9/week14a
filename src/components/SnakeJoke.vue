<template>
  <div class="card">
    <br />
    <button class="button is-danger" @click="loadJoke">Snake Joke</button>
    <br />
  </div>
</template>

<script>
export default {
  name: "SnakeJoke",
  data() {
    return {
      currentJoke: "",
      errorMessage: ""
    };
  },
  methods: {
    loadJoke(state) {
      state.$store.commit("loadJoke");
    }
  }
};
</script>

<style scoped></style>
