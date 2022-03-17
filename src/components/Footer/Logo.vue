<template>
    <a :href="website" class="f-1">
        <img :src="src" :alt="alt" class="
            image
            xs-mxw-60
            sm-mxw-80
            md-mxw-100
        ">
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
    .image {
        width: 100%
    }
</style>