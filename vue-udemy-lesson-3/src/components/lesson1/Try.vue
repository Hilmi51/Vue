<template>
    <div>
        <span class="content">
            This is try component
            <slot/>
        </span><br>

    </div>
</template>


<script>
export default {
    data() {
        return {

        }
    },
}
</script>



<style>
.content {
    font-size: 22px;
    font-family: Caladea, sans-serif;
    color: royalblue;
}
</style>