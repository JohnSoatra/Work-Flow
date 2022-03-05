<template>
    <Header />
    <div class="f-1 flex jc-c ai-fs">
        <Create />
    </div>
    <Copyright />
</template>
<script>
import Header from "../components/Header/Header.vue";
import Copyright from "../components/Footer/Copyright.vue";
import Create from "../components/Login/Create.vue";

export default {
    components: {
        Header,
        Copyright,
        Create
    }
}
</script>