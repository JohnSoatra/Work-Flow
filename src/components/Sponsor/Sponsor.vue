<template>
    <div class="desScope">
        <h2 class="
            title
            xs-fs-18
            sm-fs-20
            md-fs-23
        ">Sponsors</h2>
        <div
            class="container grid profile-wrapper jc-se"
            v-if="profiles.length">
            <Profile
                v-for="profile in profiles"
                class_p="xs-12 sm-4 md-4"
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
        padding: 20px;
        margin-top: 20px;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        background-color: #fbfbfb;
        box-shadow: 0px 0px 4px 2px rgba(119, 119, 119, 0.288);
    }
    .title {
        color: #349e9c;
        font-weight: 500;
        text-align: center;
        text-decoration: underline;
    }
    /* .profile-wrapper {
         padding-top: 40px;
         padding-bottom: 40px;
    } */
</style>
