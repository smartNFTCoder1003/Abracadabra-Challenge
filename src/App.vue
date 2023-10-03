<template>
  <Header />
  <router-view />
  <div class="bg-shine bg-main"></div>
</template>

<script>
import './scss/_app.scss'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
