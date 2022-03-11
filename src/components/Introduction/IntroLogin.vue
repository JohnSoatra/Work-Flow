<template>
    <div class="container bgc-fbfbfb p-20 flex ai-c mt-20 des">
        <img 
            src="../../assets/login.png"
            alt="login"
            class="w-50% mxw-400 mb--30" />
        <p class="fs-23 fw-500">At first you need to <span class="im" @click="onLoginClicked">login</span> to identify who you are.</p>
    </div>
</template>
<script>
export default {
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
