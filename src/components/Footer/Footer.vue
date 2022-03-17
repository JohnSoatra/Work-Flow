<template>
    <div class="line"></div>
    <div class="footer" v-if="logos.length">
        <div class="container">
            <p class="
                follow
                xs-fs-18
                sm-fs-20
                md-fs-22
            ">
                Follow us.
            </p>
            <div class="flex jc-c ai-c logos">
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
        text-align: center;
        font-weight: bold;
    }
    .footer {
        background-color: #fbfbfb;
        padding-top: 10px;
    }
    .logos {
        padding-top: 10px;
        padding-bottom: 20px;
    }
</style>
