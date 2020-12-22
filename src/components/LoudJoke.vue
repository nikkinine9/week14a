<template>
  <div class="card">
    <br />
    <button class="button is-danger" @click="toUpperCase">Loud Joke</button>
    <br />
  </div>
</template>

<script>
export default {
  name: "LoudJoke",
  data() {
    return {
      currentJoke: "",
      errorMessage: ""
    };
  },
  methods: {
    loadJoke(state) {
      state.$store.commit("loadJoke");
    },
    toUpperCase() {
      var str = "";
      var res = str.toUpperCase();
      document.getElementById("demo").innerHTML = res;
    }
  }
};
</script>

<style scoped></style>
