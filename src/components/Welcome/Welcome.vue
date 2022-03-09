<template>
    <div
        v-if="notLogin && worked"
        class="not-login title-welcome flex fd-c ai-c jc-c xs-12">
        <p>You are currently logout.</p>
        <p>Please login again. <span class="im" @click="loginClicked">Login</span>.</p>
    </div>  
    <div v-else-if="worked" class="flex fd-c ai-c jc-c xs-12">
        <p class="title-welcome">Nice to see you again, <span class="em">{{user.username}}</span>.</p>
        <div class="box image-wrapper">
            <img :src="user.image" alt="profile" class="image-profile">
            <span class="to-br">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M788.864 995.776H181.312A181.504 181.504 0 0 1 0 814.464V204.224A178.88 178.88 0 0 1 178.752 25.536h587.264a25.472 25.472 0 1 1 0 50.944H178.752A127.808 127.808 0 0 0 51.072 204.16v610.24c0 71.808 58.496 130.176 130.304 130.176h607.552a130.368 130.368 0 0 0 130.368-130.176v-456.96a25.472 25.472 0 0 1 50.88 0v457.024a181.44 181.44 0 0 1-181.312 181.312z" /><path d="M408.512 638.336a25.472 25.472 0 0 1-18.048-43.52L977.728 7.552a25.536 25.536 0 0 1 36.032 36.096L426.624 630.784a25.408 25.408 0 0 1-18.112 7.552z" /></svg>
            </span>
        </div>
        <div class="profile-info flex ta-s ml-50 mt-20px">
            <div class="key mr-10">
                <p>Name</p>
                <p>Email</p>
                <p>Password</p>
                <p>Gender</p>
                <p>Contact Info</p>
            </div>
            <div class="value">
                <p>: {{user.username}}</p>
                <p>: {{user.email}}</p>
                <p>: {{password}}</p>
                <p>: {{user.gender}}</p>
                <p>: {{user.contact_info}}</p>
            </div>
        </div>
        <Button
            content="Logout"
            background="d64141"
            class="mt-20"
            @click="logoutClicked" />
    </div>
</template>
<script>
import cookie from "../../helpers/cookie";
import { get } from "../../helpers/fetch_php";
import url from "../../constants/url";
import Button from "../Items/Button.vue";

export default {
    components: {
        Button
    },
    data: function() {
        return {
            worked: false,
            notLogin: false,
            user: {},
            password: ""
        }
    },
    methods: {
        loginClicked() {
            this.$router.push({ name: "Login" });
        },
        logoutClicked() {
            this.removeCookie();
            this.notLogin = true;
        },
        removeCookie() {
            cookie.setCookie("username", "", 0);
            cookie.setCookie("password", "", 0);
        }
    },
    beforeMount: async function() {
        const hasUsername = cookie.checkCookie("username");
        const hasPassword = cookie.checkCookie("password");
        if (hasUsername && hasPassword) {
            const username = cookie.getCookie("username");
            const password = cookie.getCookie("password");
            const endpoint = url.base + `/users?username=${username}&password=${password}`;
            const result = await get(endpoint);
            if (!result.ok) {
                this.notLogin = true;
            } else {
                this.user = await result.json();
                this.password = "•".repeat(this.user.password.length);
            }
        } else {
            this.notLogin = true;
        }
        this.worked = true;
    }
}
</script>
<style scoped>
    .profile-info {
        font-size: 18px;
    }
    .image-profile {
        width: 100%;
    }
    .image-wrapper {
        min-width: 65px;
        max-width: 170px;
        border-radius: 20px;
        object-fit: fill;
        border: solid 1px rgba(80, 80, 80, 0.356);
    }
    .title-welcome {
        font-size: 24px;
        padding-bottom: 10px;
    }
    .em {
        font-size: 26px;
        font-weight: 500;
    }
    .not-login {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .im {
        cursor: default
    }
</style>