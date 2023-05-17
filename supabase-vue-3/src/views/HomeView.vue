<script>
import { ref } from 'vue';
import loginpage from './loginpage.vue'

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
    }
  },
  components:{
    loginpage
  }
}
</script>

<template>

    <div class="homepage" v-if="page === 'homepage'">
    <h1 class="title">TechBlog</h1>
    <div class="btnpage">
      <button @click="loginpage" class="btn">Login</button>
      <button class="btn">Create Account</button>
    </div>
  </div>

    <div v-if="page === 'loginpage'">
        <loginpage/>
    </div>

</template>

<style scoped>

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
