<template>
  <div>
    <h1 class="title">Login to Account</h1>
  </div>

  <div>
    <button id="but" class="return" @click="returnto">Back</button>
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
    <button @click="verifylogin" class="loginbtn" id="but">Login</button>
  </div>
</template>

<style scoped>
#but {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
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
let usernameinput = ref('')
let passwordinput = ref('')
let alertmessage = ref('')

function returnto() {
  useCounterStore().page = 'homepage'
}

async function logintoaccount() {
  useCounterStore().username = usernameinput.value
  useCounterStore().password = passwordinput.value
  useCounterStore().page = ''
  useCounterStore().loggedIn = true
}

async function verifylogin() {
  alertmessage.value = ''
  const { data, error } = await supabase.from('useraccount').select()

  let verification1 = false

  //verify if username and password is entered//
  if (usernameinput.value === '') {
    alertmessage.value = 'Please enter a username'
  } else if (passwordinput.value === '') {
    alertmessage.value === 'Please enter a password'
  } else {
    verification1 = true
  }

  //verify if username and password entered matches database

  let correctusername = ''
  let correctpassword = ''
  if (verification1 === true) {
    data.forEach((data) => {
      if (data.username === `${usernameinput.value}`) {
        correctusername = data.username
        correctpassword = data.password
      }
    })
    if (usernameinput.value === correctusername) {
      if (passwordinput.value === correctpassword) {
        logintoaccount() //if matches, log in
      }
    } else {
      alertmessage.value = 'Wrong username or password'
    }
  }
}
</script>
