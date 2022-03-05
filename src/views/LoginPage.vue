<template>
    <Header />
    <div class="f-1 flex jc-c ai-fs">
        <Login />
    </div>
    <Copyright />
</template>
<script>
import Header from "../components/Header/Header.vue";
import Login from "../components/Login/Login.vue";
import Copyright from "../components/Footer/Copyright.vue";

export default {
    components: {
        Header,
        Copyright,
        Login
    }
}
</script>