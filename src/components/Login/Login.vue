<template>
    <div
        class="mt-30"
        v-if="checkCookie('username') && checkCookie('password')">
        <p class="fs-25 fw-500">You already Logged in.</p>
    </div>
    <form 
        v-else
        class="panel"
        id="form_login"
        @submit="formSubmit">
        <h2 class="ta-c title-login">Login to Lab</h2>
        <div class="invalid ta-s" v-if="notExist">
            <p>Given information is not correct.</p>
            <p>Please make sure your information is correct</p>
            <p>or create new one if you don't have yet.</p>
        </div>
        <div class="input">
            <Label name="username" text="Username" />
            <Input
                name="username"
                :login="!invalidUsername || null"
                :invalid="invalidUsername || null"
                :value="username" @input="evt => username = evt.target.value" />
            <div class="invalid" v-if="invalidUsername">
                <p>Invalid username! Must has no symbol and no whitespace.</p>
                <p>Example: <span class="em">Soatra</span></p>
            </div>
        </div>
        <div class="input">
            <Label name="password" text="Password" />
            <Input
                name="password"
                type="password"
                :login="!invalidPassword || null"
                :invalid="invalidPassword || null"
                :value="password" @input="evt => password = evt.target.value" />
            <div class="invalid" v-if="invalidPassword">
                <p>Invalid password ! Must has 8 or more characters.</p>
                <p>Example: <span class="em">wordPass</span></p>
            </div>
        </div>
        <Button 
            class="flex jc-c ai-c xs-12 mt-15"
            :disabled="btnLoginClicked">
            {{btnLoginClicked ? 'Logging in' : 'Login'}}
            <svg v-if="btnLoginClicked" class="svg-icon process-icon" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
        </Button>
        <div class="pt-20 options">
            <p>Don't have an account? <span class="im cs-p" @click="create">Create account</span>.</p>
            <p>Forgot your password? <span class="im cs-p" @click="reset">Reset password</span>.</p>
        </div>
    </form>
</template>
<script>
import Input from "../Items/Input.vue";
import Button from "../Items/Button.vue";
import Label from "../Items/Label.vue";
import url from "../../constants/url";
import reg from "../../constants/reg";
import { get } from "../../helpers/fetch_php";
import cookie, { checkCookie } from "../../helpers/cookie";
import { sha256 } from "../../helpers/hash";
import { refreshState } from "../../state";

export default {
    components: {
        Input,
        Button,
        Label
    },
    data: function() {
        return {
            username: "",
            password: "",
            invalidUsername: false,
            invalidPassword: false,
            notExist: false,
            btnLoginClicked: false,
            checkCookie
        }
    },
    methods: {
        resetInvalidData() {
            this.invalidUsername = false;
            this.invalidPassword = false;
            this.notExist = false;
        },
        create() {
            this.$router.push({ name: "Create account" });
        },
        reset() {
            this.$router.push({ name: "Reset password" })
        },
        login(evt) {
            this.formSubmit(evt);
        },
        async formSubmit(evt) {
            evt.preventDefault();
            this.resetInvalidData();
            this.btnLoginClicked = true;
            if (!reg.username.test(this.username)) {
                document.getElementById("form_login").username.focus();
                this.invalidUsername = true;
            } else if (!reg.password.test(this.password)) {
                document.getElementById("form_login").password.focus();
                this.invalidPassword = true;
            } else {
                const password = await sha256(this.password);
                const endpoint = url.base + `/users?username=${this.username}&password=${password}`;
                const result = await get(endpoint);
                if (!result.ok) {
                    this.notExist = true;
                } else {
                    cookie.setCookie("username", this.username);
                    cookie.setCookie("password", password);
                    refreshState();
                    this.$router.push({ name: "Profile"});
                }
            }
            this.btnLoginClicked = false;
        }
    }
}
</script>
<style scoped>
    Input {
        width: 100%;
    }
    .input {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 10px;
        text-align: start;
    }
    .panel {
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 40px;
        width: 320px;
        box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.418);
        border-radius: 5px;
    }
    .title-login {
        font-weight: 400;
    }
    .options p {
        color: #3e5c7a
    }
    .invalid {
        color: #c92929;
    }
    .em {
        font-weight: 500;
    }
    .svg-icon {
        width: 18px;
        fill: #fff;
    }
    .svg-icon:hover {
        filter: brightness(1);
    }
    .svg-icon:active {
        transform: scale(1, 1);
    }
    .process-icon {
        animation: rotate 2000ms linear 0ms infinite normal both;
    }
</style>