/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data() {
            return {
                currentJoke: "",
                errorMessage: ""
            };
        }
    },
    mutations: {
        loadJoke(state) {
            axios
                .request({
                    type: "GET",
                    url: "https://cors-anywhere.herokuapp.com/geek-jokes.sameerkumar.website/api?format=json",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    paramaters: {
                        format: "text"
                    }
                })
                .then(response => {
                    console.log(response);
                    state.currentJoke = response.data.joke;
                })
                .catch(error => {
                    state.errorMessage = error;
                    console.log(error);
                });
        }
    },
    actions: {},
    modules: {}
});