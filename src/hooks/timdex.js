import { reactive, watch } from '@vue/composition-api';

export const searchTimdexApi = () => {
  const state = reactive({
    search: "",
    loading: true,
    results: null
  });

  watch(() => {
    const TIMDEX_API_URL = `https://timdex.mit.edu/api/v1/search?q=${state.search}`;

    fetch(TIMDEX_API_URL)
      .then(response => response.json())
      .then(data => {
        state.results = data.results;
        state.loading = false;
      });
  });

  return state;
};
