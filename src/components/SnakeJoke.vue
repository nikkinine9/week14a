<template>
  <div class="card">
    <div class="card-content">
      <button class="button is-danger" @click="loadJoke()">Snake Joke</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnakeJoke",
  computed: {
    joke() {
      return this.$store.getters.getJoke.split(" ").join("_");
    }
  },
  methods: {
    loadJoke() {
      this.$store.commit("SET_NEW_JOKE", this.joke);
    }
  }
};
</script>

<style scope></style>
