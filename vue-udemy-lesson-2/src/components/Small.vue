<template>
  <div>
    <span>this is Small</span><br>
    <label>
      <span>{{message}}</span>
    </label>
  </div>
</template>

<script>
import {eventBus} from "../main";
export default {
  data(){
    return{
      message:'',
    }
  },
  created() {
    eventBus.$on('fromBig',(title)=>{
      this.message=title
    })
  }
}
</script>

<style>

</style>