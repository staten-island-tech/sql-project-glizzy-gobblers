<template>

<!-- <div class="blogpage">

  <div class="postbox">

  <h1 class="createdby">Kevin</h1>
        <div class="postimage">
           <img class="img" src="https://cdn.britannica.com/34/233234-050-1649BFA9/Pug-dog.jpg">
        </div>
        <div class="titlepage">
          <h1 class="title">Title</h1>
        </div>
  <div class="descriptionpage">
       <h1 class="postdescription">
        see a dog post a dog! yall ever seen a dog?
       </h1>
  </div>

  </div>

</div> -->

 <div v-for="data in database">
     <div class="blogpage">

  <div class="postbox">

  <h1 class="createdby">{{ data.createdby }}</h1>
        <div class="postimage">
           <img class="img" :src="data.imagelink">
        </div>
        <div class="titlepage">
          <h1 class="title">{{ data.title }}</h1>
        </div>
  <div class="descriptionpage">
       <h1 class="postdescription">
        {{ data.description }}
       </h1>
  </div>

  </div>

</div>
</div>

</template>

<style scoped>

.blogpage{
  margin-left: 40px;
}
.postbox{
  width: 500px;
  height: 700px;
  border: 3px black solid;
  margin-bottom: 20px;
}
.createdby{
  margin-left: 10px;
  font-size: 20px;
}

.postimage{
  display: flex;
  justify-content: center;
}
.img{
  width: 480px;
  height: 400px;
  object-fit: cover;
}

.title{
  font-size: 30px;
}
.postdescription{
  font-size: 20px;
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
