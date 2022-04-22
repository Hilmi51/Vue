<template>
  <div>
    <span>this is Big</span><br>
    <label>
      <input v-model="title" @keyup="eventBusFunction"/>
    </label>
  </div>
</template>

<script>
import {eventBus} from "../main";
export default {
  data(){
    return{
      title:'',
    }
  },
  methods:{
    eventBusFunction(){
      eventBus.$emit('fromBig',this.title)
    }
  }
}
</script>

<style>

</style>