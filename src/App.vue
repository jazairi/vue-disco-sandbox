<template>
  <div id="app">
    <Header class="wrap-content header" />
    <Search v-bind:search="state.search" v-on:search="handleSearch" />
    <div class="records wrap-content">
      <Record v-for="record in state.results" v-bind:record="record" v-bind:key = 'record.id'/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Search from './components/Search.vue';
  import Record from './components/Record.vue';
  import { searchTimdexApi } from './hooks/timdex'

  export default {
    name: "App",
    components: { Header, Search, Record },
    setup() {
      const state = searchTimdexApi();

      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        }
      };
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>

<link rel="stylesheet" src="./assets/mit.css" />

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css"
/>
<link
  href="https://use.fontawesome.com/38304317ff.css"
  media="all"
  rel="stylesheet"
/>
