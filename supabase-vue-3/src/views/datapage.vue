<template>
<h1></h1>
</template>


<script>
import { ref} from 'vue'
import { supabase } from '../supabase'

export default{
  data() {
    return{
      postdata: []
    }
  },
  methods:{
    getdata: async function(){
      let { data, error } = await supabase
     .from('userpost')
     .select()
     console.log(data)
    }
  },
  beforeMount(){
    this.getdata()
  }
}


</script>
