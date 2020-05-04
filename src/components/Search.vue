<template>
  <form class="search">
    <input type="text"
           v-bind:value="searchTerms"
           v-on:keyup="handleChange"
    />
    <input v-on:click="handleSubmit" type="submit" value="Search" />
  </form>
</template>

<script>
  import { ref } from '@vue/composition-api';

  export default {
    name: 'Search',
    props: ['search'],
    setup({ search }, { emit }) {
      const searchTerms = ref(search);

      return {
        searchTerms,
        handleSubmit(event) {
          event.preventDefault();
          emit('search', searchTerms.value);
        },
        handleChange(event) {
          searchTerms.value = event.target.value;
        }
      }
    }
  };
</script>
