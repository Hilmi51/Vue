<template>
  <div>
    <!-- <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{tab}}</button>
    <component :is="currentTab"></component>
    <first :title-big="titleValue" />
    -->
    <CompA>
      <!-- <template #content>
        <h2>this is content</h2>
      </template>-->

      <template #[slot1]="{ person: value }">
        <h2>this is title</h2>
        {{ value.name }}
      </template>
    </CompA>
  </div>
</template>

<script>
// import GlobalComponent from "./components/GlobalComponent"
import CompA from "./components/CompA.vue"
export default {
  data() {
    return {
      // slotValue: '<h3>this is slot with html</h3>',
      // currentTab: 'first',
      // tabs: ["first", "second", "third"],
      // titleValue: 'title'
      slot1:''
    }
  },
  components: {
    //   ...GlobalComponent
    CompA
  }
}

/*
  default value özellikle propsun gönderilmesinin şart olmadığı yerlerde kullanılır.
*/

</script>

<style>
</style>