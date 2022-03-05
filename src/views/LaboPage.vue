<template>
    <Header />
    <div class="f-1">
        <Storage />
    </div>
    <Copyright />
</template>
<script>
import Header from "../components/Header/Header.vue";
import Storage from "../components/Labo/Storage.vue";
import Copyright from "../components/Footer/Copyright.vue";

export default {
    components: {
        Header,
        Copyright,
        Storage
    }
}
</script>