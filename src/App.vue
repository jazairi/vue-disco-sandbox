<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/libraries-logo.jpg" />
    <Header />
    <Search v-bind:search="state.search" v-on:search="handleSearch" />
    <div class="records">
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
