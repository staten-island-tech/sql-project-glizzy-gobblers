<script setup>
import { RouterLink, RouterView } from 'vue-router'
import datapage from './views/datapage.vue'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
  <RouterView />
</template>

<style scoped></style>
