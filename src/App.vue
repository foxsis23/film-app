<template>
  <NavBar/>
  <Carousel/>
  <router-view/>
</template>


<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Carousel from '@/components/Carousel.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  letter-spacing: 0.1em;
}

a{
  text-decoration: none;
  text-decoration-line: none;
}
</style>
