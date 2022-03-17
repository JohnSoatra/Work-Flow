<template>
    <Intro :src="image_src">And download your data whenever you want.</Intro>
</template>

<script>
import Intro from "./Intro.vue";

export default {
    components: {
        Intro
    },
    data() {
        return {
            image_src: require("../../assets/download.png")
        }
    }
}
</script>
