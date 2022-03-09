<template>
    <form class="panel" id="form_login" @submit="formSubmit">
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
        <Button class="w-100p mt-15" content="Login" background="2aa052fc" />
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
import cookie from "../../helpers/cookie";
import { sha256 } from "../../helpers/hash";

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
            notExist: false
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
            if (!reg.username.test(this.username)) {
                document.getElementById("form_login").username.focus();
                this.invalidUsername = true;
            } else if (!reg.password.test(this.password)) {
                document.getElementById("form_login").password.focus();
                this.invalidPassword = true;
            } else {
                const password = sha256(this.password);
                const endpoint = url.base + `/users?username=${this.username}&password=${password}`;
                const result = await get(endpoint);
                if (!result.ok) {
                    this.notExist = true;
                } else {
                    cookie.setCookie("username", this.username);
                    cookie.setCookie("password", password);
                    this.$router.push({ name: "Profile"});
                }
            }
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
</style>