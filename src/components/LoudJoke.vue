<template>
  <div class="card">
    <div class="card-content">
      <button class="button is-danger" @click="loadJoke()">Loud Joke</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoudJoke",
  computed: {
    joke() {
      return this.$store.getters.getJoke.toUpperCase();
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
