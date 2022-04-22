<template>
  <div>
    <div :class="[tryNewOne,{class1: tryOne()}]">
      this is try
    </div>
    <div :class="{class1: tryOne()}">
      this is try
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:false,
    }
  },
  methods:{
    tryOne(){
      return !this.value
    }
  },
  computed:{
    tryNewOne(){
        return{
        class1 : !this.value
      }
    }
  },
}

//
</script>

<style>
 .class1{
   background-color: red;
   color: aqua;
 }
</style>
