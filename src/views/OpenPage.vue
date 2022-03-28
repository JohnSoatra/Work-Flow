<template>
    <Header />
    <div class="f-1 flex fd-c">
        <Show />
    </div>
    <Copyright />
</template>
<script>
import Header from "../components/Header/Header.vue";
import Copyright from "../components/Footer/Copyright.vue";
import Show from "../components/Open/Show.vue";

export default {
    components: {
        Header,
        Copyright,
        Show
    }
}
</script>