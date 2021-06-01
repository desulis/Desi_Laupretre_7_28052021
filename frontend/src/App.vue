<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/icon-above-font.png">
    <Groupomania msg="Groupomania"/>
  </div>
</template>

<script>
import Groupomania from './components/Groupomania.vue'

export default {
  name: 'App',
  components: {
    Groupomania
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
