<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{tab}}</button>
    <!--  -->
    <keep-alive>
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import CompA from "./components/CompA";
import CompB from "./components/CompB";
export default {
  components: {
    CompA,
    CompB
  },
  data(){
    return{
      currentTab:'CompA',
      tabs:['CompA','CompB']
    }
  }
}
</script>

<style>

</style>
