<script>
import { ref } from 'vue';
import loginpage from './loginpage.vue'
import createacc from './createacc.vue'

export default{
  data(){
    return{
      page: 'homepage'
    }
  },
  methods:{
    loginpage: function(){
      this.page = 'loginpage'
    },
    createaccount: function(){
      this.page = 'createaccount'
    },
    returnback: function(){
      this.page = 'homepage'
    }
  },
  components:{
    loginpage,
    createacc
  }
}
</script>

<template>

    <div class="homepage" v-if="page === 'homepage'">
    <h1 class="title">TechBlog</h1>
    <div class="btnpage">
      <button @click="loginpage" class="btn">Login</button>
      <button @click="createaccount" class="btn">Create Account</button>
    </div>
  </div>

    <div v-if="page === 'loginpage'">
      <button class="back">Back</button>
        <loginpage/>
    </div>

    <div v-if="page === 'createaccount'">
      <button @click="returnback" class="back">Back</button>
      <createacc/>
    </div>

</template>

<style scoped>

.back{
  font-size: 20px;
  background-color: white;
}
.title{
  font-size: 100px;
  text-align: center;
}

.btnpage{
  margin-top: 100px;
  text-align: center;
}
.btn{
  font-size: 50px;
  background-color: transparent;
  margin-left: 50px;
  margin-right: 50px;
}
</style> 
