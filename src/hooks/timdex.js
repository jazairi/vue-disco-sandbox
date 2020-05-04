import { reactive, watch } from '@vue/composition-api';

export const searchTimdexApi = () => {
  const state = reactive({
    search: "",
    loading: true,
    results: []
  });

  watch(() => {
    const TIMDEX_API_URL = `https://timdex.mit.edu/api/v1/search?q=${state.search}`;

    fetch(TIMDEX_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        state.results = jsonResponse.search;
        state.loading = false;
      });
  });

  return state;
};
