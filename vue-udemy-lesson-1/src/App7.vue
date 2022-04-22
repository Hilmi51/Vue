<template>
  <div>
    {{B}}
    <button v-on:click="changeArray()" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      A:['a','b','c','d','e'],
      B:[1,2,3,4,5,6],
      newArray:[]
    }
  },
  methods:{
    changeArray() {
      // this.newArray = this.A.map(item => item === 'c' ? 'newC' : item);
      // this.newArray = this.A.filter(item => item === 'c');
      // this.newArray = this.B.filter(item => item %3 === 0 );
      // this.A.reverse();
      this.B.sort(function () {
        return 0.5 - Math.random()
      });
    }
  }
}
</script>

<style>

</style>