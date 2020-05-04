<template>
  <div class="record">
    <h2>{{ record.title }}</h2>
    <p>{{ record.sourceLink }}</p>
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api';

  export default {
    name: "Record",
    props: ['record'],
    setup({ record }) {
      const altText = computed(() => `The record titled ${record.title}`);
      
      return { altText };
    }
  }
</script>
