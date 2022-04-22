<template>
  <div>
    <!--
    <ProductPage @sendToData="sendTo = $event"/>
    <span>{{sendTo}}</span>
    //
    <ProductPage product="a" @updateValue="updateMainComponent($event)"/>
    {{cartValue.length}}
    //
    <ProductPage2 :myCallBackFunction="otherFunc" :message="value"/>
    <span>{{value}}</span>
    -->
    <Big />
    <Small />
  </div>
</template>

<script>
// import ProductPage from "./components/ProductPage";
// import ProductPage2 from "./components/ProductPage2";
import Big from "./components/Big";
import Small from "./components/Small";
export default {
  components:{
    // ProductPage
    // ProductPage2
    Big,
    Small
  },
  data(){
    return{
      // sendTo:'',
      // cartValue:[1,2,'a',5]
      // value:''
    }
  },
  methods:{
    /*
    updateMainComponent(e){
      this.cartValue.push(e)
    }
    //
    otherFunc(message){
      this.value = message
    }
    */
  }
}
</script>

<style>

</style>
