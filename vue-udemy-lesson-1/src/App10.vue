<template>
  <div>
    {{message}}<br>
    {{reverseMessage}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:'this is message'
    }
  },
  methods:{

  },
  computed:{
    reverseMessage(){
      return this.message.split('').reverse().join('');
    }
  }
}
</script>

<style>

</style>