<template>
  <div class="card">
    <div class="card-content">
      <button class="button is-danger" @click="loadJoke()">Normal Joke</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NormalJoke",
  computed: {
    joke() {
      return this.$store.getters.getJoke.toLowerCase();
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
