<template>
    <div>
        this is comp A
        <br />
        <!-- <slot name="content"></slot> -->
        <slot name="title" :person="person">{{ person.age }}</slot>
        <!-- fallback content -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            person: { name: 'vue', age: 33 }
        }
    },
}
</script>

<style>
</style>