<script setup>
import { ref } from 'vue';
import loginpage from './loginpage.vue'
import createacc from './createacc.vue'
import { useCounterStore } from '../stores/counter'

let res = useCounterStore()
let page = ref('homepage')

function createaccount(){
  useCounterStore().page = 'createaccount'
  page.value = useCounterStore().page
  console.log(page.value)
}



</script>

<template>

    <div class="homepage" v-if="page === 'homepage'">
    <h1 class="title">TechBlog</h1>
    <div class="btnpage">
      <button @click="loginpage" class="btn">Login</button>
      <button @click="createaccount" class="btn">Create Account</button>
    </div>
  </div>

    <div v-if="page === 'loginpage'">
        <loginpage/>
    </div>

    <div v-if="page === 'createaccount'">
      <createacc/>
    </div>

</template>

<style scoped>

.title{
  font-size: 100px;
  text-align: center;
}

.btnpage{
  margin-top: 100px;
  text-align: center;
}
.btn{
  font-size: 50px;
  background-color: transparent;
  margin-left: 50px;
  margin-right: 50px;
}
</style> 
