<template>
    <Intro :src="image_src">
        At first you need to
        <span class="im" @click="onLoginClicked">login</span>
        to identify who you are.
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
            image_src: require("../../assets/login.png")
        }
    },
    methods: {
        onLoginClicked() {
            this.$router.push({ name: "Login" });
        }
    }
}
</script>
<style scoped>
    .im {
        cursor: default;
    }
</style>
