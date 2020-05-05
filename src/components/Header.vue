<template>
  <header class="header">
    <img alt="Vue logo" src="../assets/libraries-logo.jpg" />
    <h1>Distinctive Collections Discovery</h1>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title'],
    setup() {}
  }
</script>

<style>
  #header .header-slim .logo-mit-lib img {
    height: 35px;
    align: center;
  }
</style>
