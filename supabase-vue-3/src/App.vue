<script setup>
import { RouterLink, RouterView } from 'vue-router'
import datapage from './views/datapage.vue'
</script>

<template>
  <body>
    <header>
      <RouterLink to="/">123123</RouterLink>
      <RouterLink to="/about">123123123</RouterLink>
    </header>

    <RouterView />
  </body>
</template>

<style scoped>
body {
  background-color: rgb(255, 89, 100);
}
</style>
