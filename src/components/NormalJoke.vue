<template>
  <div class="card">
    <br />
    <button class="button is-danger" @click="loadJoke">Normal Joke</button>
    <br />
  </div>
</template>

<script>
export default {
  name: "NormalJoke",
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
