/* eslint-disable prettier/prettier */
import axios from "axios";

import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        vueJoke: "",
    },
    mutations: {
        SET_NEW_JOKE(state, payload) {
            state.vueJoke = payload;
        },
    },
    actions: {
        loadJoke() {
            axios
                .request({
                    type: "GET",
                    url: "https://cors-anywhere.herokuapp.com/geek-jokes.sameerkumar.website/api?format=json",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        format: "text",
                    },
                })
                .then((response) => {
                    this.commit("SET_NEW_JOKE", response.data.joke);
                })
                .catch((error) => {
                    this.errorMessage = error;
                    console.log(error);
                });
        },
    },
    getters: {
        getJoke(state) {
            return state.vueJoke;
        },
    },
});