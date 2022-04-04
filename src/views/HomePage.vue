<template >
    <Header :light="version == 2 || null" />
    <PaperPenLight v-if="version == 2"/>
    <PaperPenDark v-else />
    <Footer :light="version == 2 || null" />
</template>
<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import PaperPenDark from "../components/Content/PaperPenDark.vue";
import PaperPenLight from "../components/Content/PaperPenLight.vue";

export default {
    data() {
        return {
            version: localStorage.getItem("version")
        }
    },
    components: {
        Header,
        Footer,
        PaperPenDark,
        PaperPenLight,
    }
}
</script>

<style>
</style>
