<template>
    <Header />
    <div class="f-1">
        <Document />
    </div>
    <Copyright />
</template>

<script>
import Header from "../components/Header/Header.vue";
import Copyright from "../components/Footer/Copyright.vue";
import Document from "../components/Docs/Document.vue";

export default {
    components: {
        Header,
        Copyright,
        Document,
    }
}
</script>
