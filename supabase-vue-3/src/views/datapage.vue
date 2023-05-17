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
  <body>
    <div v-for="data in database">
      <div class="blogpage">
        <div class="postbox">
          <h1 class="createdby">{{ data.createdby }}</h1>
          <div class="postimage">
            <img class="img" :src="data.imagelink" />
          </div>
          <div class="titlepage">
            <h1 class="title">{{ data.title }}</h1>
          </div>
          <div class="descriptionpage">
            <h1 class="postdescription">
              {{ data.description }}
            </h1>
            <img class="heart" src="https://i.stack.imgur.com/Ui4gd.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
h1 {
  color: brown;
  text-align: center;
}
body {
  background-color: rgb(248, 200, 220);
}
.heart {
  margin-left: 10px;

  height: 35px;
}
.blogpage {
  display: flex;
  align-items: center;
  justify-content: center;
}
.postbox {
  background-color: white;
  width: 500px;
  height: 600px;
  border: 3px black solid;
  margin-bottom: 25px;
}
.createdby {
  margin-left: 10px;
  font-size: 20px;
}

.postimage {
  display: flex;
  justify-content: center;
}
.img {
  width: 480px;
  height: 400px;
  object-fit: cover;
}

.title {
  font-size: 30px;
}
.postdescription {
  font-size: 20px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

let database = ref('')

async function getdata() {
  const { data, error } = await supabase.from('userpost').select()
  console.log(data)
  database.value = data
}

onMounted(() => {
  getdata()
})
</script>
