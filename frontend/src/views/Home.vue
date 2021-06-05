<template>
  <div class="home">
    <img alt="logo" src="../assets/icon-above-font.png">
    <Groupomania msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Groupomania from '@/components/Groupomania.vue'

export default {
  name: 'Home',
  components: {
    Groupomania
  }
}
</script>
