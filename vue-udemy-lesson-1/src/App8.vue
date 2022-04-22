<template>
  <div>
    <ul>
      <li v-for="(item,index) in items" :key="index">Product Name : {{item.type}} Stock Quantity : {{item.number}}</li>
    </ul>
    <button @click="tryArray()">Add</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {type:'pen',number:33},
        {type:'ball',number:344},
        {type:'rocket',number:563},
        {type:'guitar',number:64},
        {type:'table',number:12},
      ]
    }
  },
  methods:{
    tryArray(){
      // this.items.push({type:'pencil',number:888})
      // this.items.unshift({type:'pencil',number:888})
      // const a=this.items.pop();
      // const a=this.items.shift();
      // this.items.splice(1,2,'abc',3,null); //verilen indexten itibaren verilen sayıda eleman silinir!!
      // const a=this.items.concat({type:'pencil',number:888});
      // const a=[...this.items,{type:'pencil',number:888}];
      // this.items[2]={type:'pencil',number:888}
      this.$set(this.items,2,{type:'new-pencil',number:888});
      // console.log(a)
    }
  }
}
</script>

<style>

</style>