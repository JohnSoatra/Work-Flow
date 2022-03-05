<template>
    <Header />
    <Cover />
    <div class="pt-20">
        <Introduction />
        <IntroLogin />
        <IntroUpload />
        <IntroDownload />
        <Sponsor />
    </div>
    <Footer />
</template>
<script>
import Header from "../components/Header/Header.vue";
import Cover from "../components/Cover.vue";
import Introduction from "../components/Introduction/Introduction.vue";
import IntroLogin from "../components/Introduction/IntroLogin.vue";
import IntroUpload from "../components/Introduction/IntroUpload.vue";
import IntroDownload from "../components/Introduction/IntroDownload.vue";
import Sponsor from "../components/Sponsor/Sponsor.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
    name: "Home",
    data: function() {
        return {

        };
    },
    components: {
        Header,
        Cover,
        Introduction,
        IntroLogin,
        IntroUpload,
        IntroDownload,
        Sponsor,
        Footer
    }
}
</script>

<style>
    .des {
        box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.418);
        border-radius: 5px;
        max-width: 800px;
    }
    .im {
        color: #0281ff
    }
    .line {
        height: 1px;
        background-color: #b4b4b4b0;
    }
</style>
