<template>
    <div class="container">
        <!-- {{ mutateTitle }}
        <button @click="tryOne"></button>-->
        <h3>this is try</h3>
        {{ titleBig }}
    </div>
</template>
<script>
export default {
    props: {
        titleBig: {
            type: String, Number,
            required: true,
            default: () => {
                return 'default value'
            },
            validator: (value) => {
               // return ['this is title', 'index', 'header'].indexOf(value) !== -1 // ! = eğer // eğer -1'e eşit değilse true dön
                return value.length === 5
            }
        }
    },
    data() {
        return {
            mutateTitle: this.titleBig
        }
    },
    methods: {
        tryOne() {
            this.mutateTitle = 'new Value'
        }
    },
    //Eğer indexOf parametresi ile array içindeki eleman eşleşirse geriye arraydeki eşleşilen elemanın index numarası döner.
}   
</script>
<style>
.container {
    font-size: 22px;
    color: darkblue;
}
</style>