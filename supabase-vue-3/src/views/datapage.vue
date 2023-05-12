<template>
<h1>{{ data }}</h1>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { onBeforeMount } from 'vue';
import { supabase } from '../supabase'

async function getdata(){
  let { data, error } = await supabase
  .from('userpost')
  .select()
  console.log(data)
}



onMounted(() => {
getdata()
})

</script>
