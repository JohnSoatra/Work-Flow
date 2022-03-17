<template>
    <div class="box bgc-fff">
        <img
            src="../assets/cloud.png"
            alt="cover"
            class="cover"
            @load="onCoverLoaded">
        <div class="cover-desc" v-if="coverLoaded">
            <p class="
                fw-bold
                xs-fs-25
                sm-fs-30
            ">
                Lab
            </p>
            <p class="
                xs-fs-18
                sm-fs-20
                fw-500
            ">
                The greatest server for your documents.
            </p>
        </div>
    </div>
</template>
<script>

export default {
    data: function() {
        return {
            coverLoaded: false
        }
    },
    methods: {
        onCoverLoaded() {
            this.coverLoaded = true;
            this.$emit("cover-loaded");
        }
    }
}
</script>
<style scoped>
    .cover {
        width: 100%;
        max-width: 1200px;
    }
    .cover-desc {
        padding: 15px;
        background-color: #ffffffb8;
        margin-top: 17%;
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translate(-50%, 0px);
    }
</style>