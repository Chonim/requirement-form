<template>
  <div id="app">
    <main-page />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    MainPage: () => import('@/components/Main')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
