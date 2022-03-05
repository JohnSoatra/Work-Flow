<template>
    <a :href="website" class="logo">
        <img :src="src" :alt="alt" class="w-100p">
    </a>
</template>
<script>
export default {
    props: {
        website: String,
        src: String,
        alt: String
    }
}
</script>
<style scoped>
    .logo {
        width: 25%;
        max-width: 100px;
    }
</style>