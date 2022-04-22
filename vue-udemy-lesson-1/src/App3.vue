<template>
  <div>
    <p v-for="i in 4" v-bind:key="i">{{i}}</p>
    <p v-for="(item,index) in person" v-bind:key="index">FirtName / Age : {{item.name}} , {{item.age}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      person:[
        {name:'Hilmi', age:18},
        {name:'Burak', age:13},
        {name:'Muhammed', age:26},
        {name:'Fatih', age:45},
      ]
    }
  },
}
</script>

<style>

</style>