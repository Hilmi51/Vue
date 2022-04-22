<template>
    <div>
        <div v-if="tryOne">
            this is bigger
            <label>
                <input placeholder="1" key="1">
            </label>
        </div>
        <div v-show="value">
            this is smaller
            <label>
                <input placeholder="2" key="2">
            </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value:false
        }
    },
    methods: {

    },
    computed: {
        tryOne() {
            const a = Math.random() > 0.5;
            console.log(a);
            return a
        }
    }
}
</script>

<style>

</style>