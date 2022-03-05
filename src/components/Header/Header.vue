<template>
    <div class="header flex mnh-44 ai-c bgc-e4ebf3a1" v-if="items.length">
        <div class="container flex jc-s ai-c">
            <img src="../../assets/logo.png" alt="logo" height="26">
            <div class="w-10"></div>
            <h2 class="pb-3">Lab</h2>
            <div class="f-1"></div>
            <TopBarItem 
                v-for="item in items"
                :key="item"
                :item="item">
            </TopBarItem>
        </div>
    </div>
</template>

<script>
import TopBarItem from "./TopBarItem.vue";

export default {
    data: function () {
        return {
            items: [
                "Home",
                "Docs",
                "Labo",
                "Login"
            ]
        }
    },
    components: {
        TopBarItem
    }

}
</script>
<style scoped>
    .header {
        box-shadow: 0px 0px 6px 1px rgba(65, 65, 65, 0.418);
        position: sticky;
        top: 0px;
        left: 0px;
        z-index: 1;
        backdrop-filter: blur(5px);
    }
</style>