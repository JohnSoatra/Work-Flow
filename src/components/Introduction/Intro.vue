<template>
    <div class="container grid des wrapper xs-10">
        <div class="xs-12 sm-6 flex jc-c ai-c">
            <img :src="src" alt="intro" class="
                image
                xs-mxh-200
                sm-mxh-250
                md-mxh-300
            " />
        </div>
        <div class="
            xs-12 sm-6 flex jc-c ai-c
            xs-fs-18
            sm-fs-20
            md-fs-23
            xs-pt-28
            sm-pt-0
        ">
            <p class="desc">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        src: String
    }
}
</script>

<style scoped>
    .desc {
        font-weight: 500;
    }
    .wrapper {
        background-color: #fbfbfb;
        padding: 20px;
        margin-top: 20px;
    }
</style>

