<template>
  <form class="search">
    <input type="text" v-bind:value="searchTerms" v-on:keyup="handleChange" />
    <input
      class="button-primary"
      v-on:click="handleSubmit"
      type="submit"
      value="Search"
    />
  </form>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  name: "Search",
  props: ["search"],
  setup({ search }, { emit }) {
    const searchTerms = ref(search);

    return {
      searchTerms,
      handleSubmit(event) {
        event.preventDefault();
        emit("search", searchTerms.value);
      },
      handleChange(event) {
        searchTerms.value = event.target.value;
      }
    };
  }
};
</script>

<style>
.search {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  padding: 1rem 1.5rem;
}
input {
  -webkit-appearance: none;
  width: 100%;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 6px 12px;
}
.results-more {
  margin-top: 1rem;
  font-size: 1.3rem;
}
.results-more a {
  display: block;
  text-align: center;
}
</style>
