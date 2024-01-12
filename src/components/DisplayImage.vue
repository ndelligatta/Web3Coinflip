<script setup>
const props = defineProps(['path', 'size']);
</script>

<template>
<div>
    <img 
    :src="props.path"
    :style="{
        width: props.size,
        height: auto
    }"
    >
</div>
</template>

<style scoped>

</style>
