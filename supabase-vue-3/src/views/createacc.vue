<!-- <script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useCounterStore } from '../stores/counter'
ref(useCounterStore())

let usernameinput = ref('')
let passwordinput = ref('')
let alertmessage = ref('')

async function createacc() {
  //create account if account username is not taken//
  const { data, error } = await supabase
    .from('useraccount')
    .insert([
      { username: `${usernameinput.value}`, password: `${passwordinput.value}`, admin: false }
    ])
}

async function checkaccount() {
  alertmessage.value = ''
  //verify if account username is taken already//
  const { data, error } = await supabase.from('useraccount').select()
  let allusername = []
  data.forEach((data) => {
    allusername.push(data.username)
  })
  if (usernameinput.value === '') {
    if (passwordinput.value === '') {
      alertmessage.value = 'Please enter a username and password'
    } else {
      alertmessage.value = 'Please enter a username'
    }
  } else if (passwordinput.value === '') {
    if (usernameinput.value === '') {
      alertmessage.value = 'Please enter a username and password'
    } else {
      alertmessage.value = 'Please enter a password'
    }
  } else {
    if (allusername.includes(usernameinput.value)) {
      alertmessage.value = 'Username taken, use another one plz'
    } else {
      createacc() //if all requirement are fulfilled//
      alertmessage.value = 'Account Created'
    }
  }
}

function returnto() {
  useCounterStore().page = 'homepage'
}
</script>

<template>
  <div>
    <h1 class="title">Create Account</h1>
  </div>

  <div>
    <button class="return" @click="returnto">Back</button>
  </div>

  <div class="accountinfo">
    Username<input v-model="usernameinput" type="text" /> Password<input
      v-model="passwordinput"
      type="text"
    />
  </div>

  <div>
    <h1>{{ alertmessage }}</h1>
  </div>

  <div>
    <button class="createbtn" @click="checkaccount">Create Account</button>
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

.createbtn {
  margin-top: 20px;
  background-color: white;
}

.return {
  background-color: white;
  font-size: 20px;
  margin-bottom: 20px;
}
</style> -->


<template>
<div class="infobox">
  Email<input type="text"> 
  Password<input type="text"> 
</div>
</template>

<style scoped>
.infobox{
  display: flex;
  flex-direction: column;
}

input {
  width: 800px;
  font-size: 20px;
}
</style>

<script setup>
import { supabase } from '../supabase';
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

async function signup(){
  const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
}

</script>