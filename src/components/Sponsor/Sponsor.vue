<template>
    <div class="bgc-fbfbfb p-20 ta-c desScope fs-18 fw-400 mt-20">
        <h2 class="ta-c td-u title">Sponsors</h2>
        <div
            class="container flex ai-c jc-se pt-40 pb-40"
            v-if="profiles.length">
            <Profile
                v-for="profile in profiles"
                :key="profile.name"
                :src="profile.src"
                :name="profile.name" />
        </div>
    </div>
</template>
<script>
import Profile from "./Profile.vue";

export default {
    data: function() {
        return {
            profiles: [
                {
                    src: require("../../assets/profiles/pheareak.jpg"),
                    name: "Pheareak"
                },
                {
                    src: require("../../assets/profiles/sreyone.jpg"),
                    name: "Sreyone"
                },
                {
                    src: require("../../assets/profiles/soatra.png"),
                    name: "Soatra"
                }
            ]
        }
    },
    components: {
        Profile
    }    
}
</script>
<style scoped>
    .desScope{
        box-shadow: 0px 0px 4px 2px rgba(119, 119, 119, 0.288);
        line-height: 1.5;
    }
    .title {
        color: #349e9c;
        font-weight: 500;
        font-size: 30px;
    }
</style>
