<template>
  <body>
    <div>
      <h1 class="heading">My Account</h1>
    </div>

    <div class="accountinfosection">
      <h1>Email: {{ useCounterStore().email }}</h1>
      <h1>Password: {{ useCounterStore().password }}</h1>
    </div>

    <div v-for="data in mypost">
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
            <button @click="deletepost" class="btn">Delete</button>
            <button class="btn">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.btn {
  background-color: transparent;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
body {
  padding: 200px;
}
.accountinfosection {
  text-align: center;
}
.heading {
  font-size: 100px;
  text-align: center;
}
h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: black;
  text-align: center;
}

.blogpage {
  display: flex;
  align-items: center;
  justify-content: center;
}
.postbox {
  background-color: white;
  width: 650px;
  height: 750px;
  border: 3px black solid;
  margin-bottom: 50px;
}
.createdby {
  font-size: 20px;
}

.postimage {
  display: flex;
  justify-content: center;
}
.img {
  border: 2px black solid;
  width: 630px;
  height: 550px;
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
import { useCounterStore } from '../stores/counter'
import { ref } from 'vue'
import { supabase } from '../supabase'
import { onMounted } from 'vue'
ref(useCounterStore())

let mypost = ref('')
async function getdata() {
  const { data, error } = await supabase.from('userposts').select()
  let data2 = []
  data.forEach((data) => {
    if (data.userid === `${useCounterStore().id}`) {
      data2.push({
        title: data.title,
        description: data.description,
        imagelink: data.imagelink
      })
    }
  })
  mypost.value = data2
}

async function deletepost() {
  const { data, error } = await supabase.from('userposts').select()
}

onMounted(() => {
  getdata()
})
</script>
