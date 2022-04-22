<template>
  <div>
    <label>
      <input v-model.trim="edit" placeholder="edit me">
      <textarea v-model="area" />
      <input type="checkbox" v-model="checked" />
      <!-- <label>
        <select v-model="selected">
          <option disabled>Select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
      </label> -->
      <label>
        <select v-model="selected">
          <option v-for="(item,index) in items" v-bind:value="item.value" v-bind:key="index">{{item.option}}</option>
        </select>
      </label>
      <div>
        <input type="radio" value="1" id="1" v-model="radio"/>
        <label for="1">1</label>
        <input type="radio" value="2" id="2" v-model="radio"/>
        <label for="2">2</label>
        <input type="radio" value="3" id="3" v-model="radio"/>
        <label for="3">3</label>
      </div>
    </label>
    <p style="color: white">{{edit}}</p>
    <p style="color: white">{{area}}</p>
    <p style="color: white">{{checked}}</p>
    <p style="color: white">{{selected}}</p>
    <p>{{typeof(edit)}}</p>
    <p>{{radio}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      edit:'',
      area:'',
      checked:'',
      selected:null,
      items:[
        {option:'a', value:'one'},
        {option:'b', value:'two'},
        {option:'c', value:'three'}
      ],
      radio:null
    }
  },
  methods:{

  }
}
</script>

<style>

</style>