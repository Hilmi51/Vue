<template>
  <div>
    <!--
    <label>
      <input type="text" v-model.lazy="inputValue"  @keyup="sendData"/>
    </label>
    -->
    <button @click="addToCart">clik me</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      inputValue:'',
    }
  },
  methods:{
    /*
    sendData(){
      this.$emit('sendToData',this.inputValue)
    }
    */
    addToCart(){
      this.$emit('updateValue',this.product)
    },
    props:{
      product:String
    }

  }
}
</script>

<style>

</style>