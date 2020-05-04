<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/libraries-logo.jpg" />
    <Header v-bind:title="'Distinctive Collections Discovery'" />
    <Search v-bind:search="state.search" v-on:search="handleSearch" />
  </div>
</template>

<script>
  import { reactive, watch } from '@vue/composition-api';
  import Header from './components/Header.vue';
  import Search from './components/Search.vue';
  import Record from './components/Record.vue';

  export default {
    name: "App",
    components: {
      Header, Search, Record
    },
    setup() {
      const state = reactive({
        term: 'popcorn',
        loading: true,
        searchResults: [],
        errorMessage: null
      });

      watch(() => {
        const TIMDEX_API_URL = `'https://timdex.mit.edu/api/v1/search?q=${state.term}`;

        fetch(TIMDEX_API_URL)
          .then(response => response.json())
          .then(data => {
            state.searchResults = data.Search;
            state.loading = false;
          });
      });

      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
