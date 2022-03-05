<template>
    <Header />
    <div class="f-1 flex jc-c ai-fs">
        <Reset />
    </div>
    <Copyright />
</template>
<script>
import Header from "../components/Header/Header.vue";
import Copyright from "../components/Footer/Copyright.vue";
import Reset from "../components/Login/Reset.vue";

export default {
    components: {
        Header,
        Copyright,
        Reset
    }
}
</script>