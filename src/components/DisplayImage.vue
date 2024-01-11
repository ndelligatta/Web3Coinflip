<script setup>
const props = defineProps(['path', 'size']);
</script>

<template>
    <img 
    :src="props.path"
    :style="{
        width: props.size,
        height: auto
    }"
    >
</template>

<style scoped>

</style>
