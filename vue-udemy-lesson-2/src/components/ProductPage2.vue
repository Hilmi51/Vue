<template>
  <div>
    <label>
      <input v-model.lazy="message" @keyup.right="keyFunc"/>
    </label>
  </div>
</template>
<!-- Keyup bir key modifiredır. Yani klavye iventlerini yakalar. Herhangi birşey yazmasanız yanına her kılavye iventini
 yakalar. Ama .space dersek sadece space tuşuna basıldığı zaman key functionunu çalıştırır.
 .enter dersek sadece enter tuşuna basıldığı zaman key functionunu çalıştırır.
 .right dersek sadece yön tuşundan sağ ok tuşuna basıldığı zaman key functionunu çalıştırır.-->
<script>
export default {
  props:{
    // message:String,
    myCallBackFunction:Function
  },
  data(){
    return{
      message:''
    }
  },
  methods:{
    keyFunc(){
      this.myCallBackFunction(this.message)
    }
  },
}
</script>

<style>

</style>