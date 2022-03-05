<template>
    <label :for="name">{{text}}</label>
</template>
<script>
export default {
    props: {
        name: String,
        text: String
    }
}
</script>
<style scoped>
    label {
        font-weight: 500;
    }
</style>