<template>
  <div>
    <!-- <h6 v-for="(i,index) in content" :key="index">{{i.number}} {{i.content}}</h6> -->
    <!-- <button @click="addNewContent()">add ne object</button> -->
    <h2>{{item.number}}</h2>
    <h4>{{item.content}}</h4>
    <div v-html="value">

    </div>
  </div>
</template>

<script>
  export  default {
    props:{
      item:Object,
      value:String
    },
    methods:{
      /*
      addNewContent(){
        // eslint-disable-next-line vue/no-mutating-props
        this.content.push({number:5, content:'five'})
      }
      */

    }
  }
</script>
