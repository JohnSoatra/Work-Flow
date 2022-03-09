<template>
    <div class="box bgc-fff">
        <img
            src="../assets/cloud.png"
            alt="cover"
            class="cover"
            @load="onCoverLoaded">
        <div class="cover-desc" v-if="coverLoaded">
            <h1>Lab</h1>
            <h3>The greatest server for your documents.</h3>
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