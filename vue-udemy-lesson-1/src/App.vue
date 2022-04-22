<template>
  <div>
    <!--
    <p>{{value}}</p>  // Mustance
    <p>{{ Value }}</p>-->
    <label>
      <input v-bind:placeholder="inputHolder" v-if="tryIt()" v-on:change="chanceInput($event)" />
      <input v-bind:maxlength="maxValue" v-else-if="3 > 7" />
      <button v-on:click="buttonClick" v-else />
      <input placeholder="input 1" v-show="see" />
    </label>
  </div>
</template>

<script>
export default { // Case sensitive
  data() {
    return {
      /* 1.Ders
      value:'TRY',
      Value:'try'
      */
      inputHolder: 'try it again',
      maxValue: 10,
      see: true
    }
  },
  methods: {
    chanceInput($event) {
      console.log($event.target.value);
    },
    buttonClick() {
      console.log('tıklandı');
    },
    tryIt(){
      if(this.see === true){
        return false
      }else{
        return true
      }
    }
  }
}
</script>

<style>
</style>
