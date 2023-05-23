<script setup>
    import { ref } from 'vue';
    import { supabase } from '../supabase'
    
    let usernameinput = ref('')
    let passwordinput =ref('')
    
async function createacc(){     
    
const { data, error } = await supabase
  .from('useraccount')
  .insert([
    { username: `${usernameinput.value}`, password: `${passwordinput.value}` },
  ])

}

    
    
    </script>

<template>
    <div>
        <h1 class="title">Login</h1>
    </div>
    
    <div class="accountinfo">
        Username<input v-model="usernameinput" type="text">
        Password<input v-model="passwordinput" type="text"> 
    </div>
    
    <div>
        <button class="createbtn" @click="createacc">Create Account</button>
    </div>
    
    <div>
    
    </div>
    </template>
    <style scoped>
    .title{
        font-size: 50px;
        text-align: center;
    }
    
    .accountinfo{
        display: flex;
        flex-direction: column
    }
    
    input{
        width: 800px;
        font-size: 20px;
    }
    
    .createbtn{
        margin-top: 20px;
        background-color: white;
    }
    </style>
