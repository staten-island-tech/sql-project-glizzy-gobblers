<template>
  <div class="btnsection">
    <button class="btn">Public Blogs</button>
    <button class="btn">Account</button>
    <button class="btn">Create Blog</button>
    <button @click="signout" class="btn">Sign Out</button>
  </div>
  <div v-if="page === 'blogpage'">
    <blogpage />
  </div>
</template>

<style scoped>
.btnsection {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.btn {
  font-size: 20px;
  background-color: white;
}
</style>

<script setup>
import blogpage from './blogpage.vue'
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useCounterStore } from '../stores/counter'

let page = ref('blogpage')

function signout() {
  useCounterStore().loggedIn = false
  useCounterStore().page = 'homepage'
  username = ''
  password = ''
}
</script>
