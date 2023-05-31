<template>
    <div>
        <h1 class="title">Create Blog</h1>
    </div>


    <div class="bloginfo">
        Name<input v-model="name" type="text">
        Title<input v-model="title" type="text">
        Description<input v-model="description" type="text">
        Image<input v-model="image" type="text">
    </div>

<div>
    <h1>{{ alertmessage }} </h1>
</div>

    <div>
        <button @click="checkblog">Create Blog</button>
    </div>
    </template>
    
    <style scoped>
    .title{
        font-size: 100px;
        text-align: center;
    }
    .bloginfo{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
    }
    </style>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '../stores/counter'
import { supabase } from '../supabase'
let alertmessage = ref('')
let name = ref('')
let title = ref('')
let description = ref('')
let image = ref('')


async function checkblog(){
   createblog()
}

async function createblog(){
    const { data, error } = await supabase
  .from('userpost')
  .insert([
    { title: `${title.value}`, description: `${description.value}`, createdby: `${name.value}`, imagelink: `${image.value}`, userid: `${useCounterStore().id}` },
  ])

}

</script>