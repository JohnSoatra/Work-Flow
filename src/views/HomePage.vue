<template >
    <Header />
    <PaperPen />
    <Footer />
</template>
<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import PaperPen from "../components/Content/PaperPenDark.vue";

export default {
    components: {
        Header,
        Footer,
        PaperPen
    },
}
</script>

<style>
</style>
