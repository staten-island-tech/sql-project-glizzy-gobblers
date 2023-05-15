<template>

<div class="blogsection">

<div class="blogcontainer">

  <div class="blogbox">

<div class="username">
       created by Kevin
</div>

<div class="image">
      <img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f">
</div>

<div class="blogdescription">
     this is my fist bloidhsdj
</div>

</div>

</div>

</div>

<div v-for="data in database">
<h1>{{ data.title }}</h1>
</div>
</template>

<style scoped>
.blogcontainer{
  display: flex;
  justify-content: center;
  border: 3px solid black;
}
</style>


<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

let database = ref('')

async function getdata(){
  const { data, error } = await supabase
  .from('userpost')
  .select()
console.log(data)
database.value = data
}

onMounted(() => {
getdata()
})
</script>
