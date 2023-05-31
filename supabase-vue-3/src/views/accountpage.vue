<template>
<div>
    <h1 class="title">My Account</h1>
</div>

<div class="accountinfosection">
<h1>Email: {{ useCounterStore().email }}</h1>
<h1>Password: {{ useCounterStore().password }}</h1>
</div>

<div>
    <div>
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
            <img
              class="report"
              src="https://thumbs.dreamstime.com/b/report-button-rounded-sign-white-background-isolated-196831119.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
</div>
</div>
</template>

<style scoped>
.title{
    font-size: 100px;
    text-align: center;
}

h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: black;
  text-align: center;
}
body {
  background-color: rgb(255, 89, 100);
  text-align: center;
}

.heart {
  margin-left: 10px;
  height: 32px;
}
.report {
  margin-left: 500px;

  height: 32px;
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
  margin-bottom: 35px;
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
import { useCounterStore } from '../stores/counter';
import {ref, onMounted} from 'vue'
import {supabase} from '../supabase'
ref(useCounterStore())


let database = ref('')

async function getdata() {
  const { data, error } = await supabase.from('userpost').select()
  console.log(data)
}

onMounted(() => {
  getdata()
})
</script>