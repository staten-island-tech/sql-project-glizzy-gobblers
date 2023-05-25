<template>
  <div>
    <h1 class="title">Login to Account</h1>
  </div>

  <div>
    <button class="return" @click="returnto">Back</button>
  </div>

  <div class="accountinfo">
    Email<input v-model="emailinput" type="text" /> Password<input
      v-model="passwordinput"
      type="text"
    />
  </div>

  <div>
    <h1>{{ alertmessage }}</h1>
  </div>

  <div>
    <button @click="signInWithEmail" class="loginbtn">Login</button>
  </div>
</template>

<style scoped>
.title {
  font-size: 50px;
  text-align: center;
}

.accountinfo {
  display: flex;
  flex-direction: column;
}

input {
  width: 800px;
  font-size: 20px;
}

.loginbtn {
  margin-top: 20px;
  background-color: white;
}

.return {
  background-color: white;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useCounterStore } from '../stores/counter'
let emailinput = ref('')
let passwordinput = ref('')
let alertmessage = ref('')

function returnto() {
  useCounterStore().page = 'homepage'
}

async function signInWithEmail() {
  
  if(emailinput.value === ''){
    alertmessage.value = 'Please enter email/password'
  } else if(passwordinput.value === ''){
    alertmessage.value = 'Please enter email/password'
  }else{
    alertmessage.value = ''
  const { data, error } = await supabase.auth.signInWithPassword({
    email: `${emailinput.value}`,
    password: `${passwordinput.value}`,
  })
  console.log(data)
  if(data.user === null){
    alertmessage.value === 'Wrong username or password'
  }else{
    useCounterStore().email = data.user.email
    useCounterStore().password = data.user.password
    useCounterStore().id = data.user.id
    useCounterStore().page = ''
    useCounterStore().loggedIn = true
    useCounterStore().password = `${passwordinput.value}`
  }
  }}

</script>
