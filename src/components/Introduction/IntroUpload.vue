<template>
    <Intro :src="image_src">
        Then you can upload
        <span class="im">everything</span> from
        <span class="im">everywhere</span>.
    </Intro>
</template>

<script>
import Intro from "./Intro.vue";

export default {
    components: {
        Intro
    },
    data() {
        return {
            image_src: require("../../assets/upload.png")
        }
    }
}
</script>
