<template>
  <div id="app">
    <span v-colorChanger="{color:'yellow', fontsize:''}">try</span><br>
    <span v-colorChanger="{color:'green', fontsize:''}">try</span>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  directives:{
    colorChanger:{
      bind:(el,binding)=>{
        el.style.backgroundColor= binding.value.color
        console.log(el.style);
        if(binding.modifiers.border){
          el.style.border = 'thick solid #0000ff'
          console.log("directive work with modifiers");
        }
        if(binding.arg.bold){
          el.style.fontWeight = 'bold'
        }
      }
    }
  }
}
</script>

<style>

</style>