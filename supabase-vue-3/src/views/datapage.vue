<template>
<h1>about</h1>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

async function getdata(){
  

  const { data, error } = await supabase
  .from('countries')
  .select()
console.log(data)
}

onMounted(() => {
getdata()
})
</script>
