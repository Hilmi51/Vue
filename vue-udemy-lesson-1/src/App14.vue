<template>
  <div :style="styleObj">
    this is try
  </div>
  <div :style="{color:activeColor, fontSize:fontSize1}">
    this is try
  </div>
  <div :style="[styleObj,styleObj2,{color:activeColor}]">
    this is try
  </div>
</template>

<script>
export default {
  data(){
    return{ // camelCase kebap-case
      activeColor:'blue',
      fontSize1:'23px',
      styleObj:{
        fontsize:'34px',
        color:'red'
      },
      styleObj2:{
        color:'yellow'
      }
    }
  },
  methods:{

  },
  watch:{

  }
}
</script>

<style>

</style>