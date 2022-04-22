<template>
  <div>
    {{number === 4 ? ' four ' : ' not four '}}<br>
    {{msg.length}}<br>
    {{msg.split('').reverse().join('')}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      number:4,
      msg:'this is message'
    }
  }
}
</script>

<style>

</style>