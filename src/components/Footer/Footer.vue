<template>
    <div class="line"></div>
    <div class="bgc-fbfbfb footer pt-20" v-if="logos.length">
        <div class="container">
            <h3 class="ta-c follow">Follow us.</h3>
            <div class="flex jc-c ai-c pt-10 pb-20">
                <Logo
                    v-for="logo in logos"
                    :key="logo.alt"
                    :alt="logo.alt"
                    :src="logo.src"
                    :website="logo.website" />
            </div>
        </div>
        <Copyright />
    </div>
</template>
<script>
import Logo from "./Logo.vue";
import Copyright from "./Copyright.vue";

export default {
    components: {
        Logo,
        Copyright
    },
    data: function() {
        return {
            logos: [
                {
                    alt: "Youtube",
                    src: require("../../assets/apps/youtube.svg"),
                    website: "https://youtube.com"
                },
                {
                    alt: "Facebook",
                    src: require("../../assets/apps/facebook.svg"),
                    website: "https://facebook.com"
                },
                {
                    alt: "Gmail",
                    src: require("../../assets/apps/gmail.svg"),
                    website: "https://gmail.com"
                },
                {
                    alt: "Telegram",
                    src: require("../../assets/apps/telegram.svg"),
                    website: "https://telegram.org"
                },
                {
                    alt: "Twitter",
                    src: require("../../assets/apps/twitter.svg"),
                    website: "https://twitter.com"
                }
            ]
        }
    }
}
</script>
<style scoped>
    .follow {
        color: #4f6377;
    }
</style>
