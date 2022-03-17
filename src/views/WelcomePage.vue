<template>
    <Header />
    <div class="f-1 flex jc-c">
        <Welcome />
    </div>
    <Copyright />
</template>
<script>
import Header from "../components/Header/Header.vue";
import Copyright from "../components/Footer/Copyright.vue";
import Welcome from "../components/Welcome/Welcome.vue";

export default {
    components: {
        Header,
        Copyright,
        Welcome
    }
}
</script>
