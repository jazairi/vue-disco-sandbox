<template>
  <div id="app">
    <div class="wrap-content">
      <MainHeader />
      <Search :search="state.query" @search="handleSearch" />
      <div v-if="state.loading">
        Searching...
      </div>
      <div v-else-if="state.results.length">
        <Record
          v-for="record in state.results"
          :record="record"
          :key="record.id"
        />
      </div>
      <div v-else>
        No results from MIT ArchivesSpace
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import Search from "./components/Search.vue";
import Record from "./components/Record.vue";
import { searchTimdexApi } from "./hooks/timdex";

export default {
  name: "App",
  components: { MainHeader, Search, Record },
  setup() {
    const state = searchTimdexApi();
    console.log(state);

    return {
      state,
      handleSearch(searchTerm) {
        state.loading = true;
        state.query = searchTerm;
      }
    };
  }
};
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
