<template>
    <form class="panel" @submit="formSubmit" id="form_create">
        <h2 class="ta-c title-login">Create account</h2>
        <div class="input">
            <Label name="username" text="Username" />
            <Input
                type="text"
                name="username"
                :login="!(invalidUsername || tokenUsername) || null"
                :invalid="(invalidUsername || tokenUsername) || null"
                :value="username" @input="evt => username = evt.target.value" />
            <div class="invalid">
                <div v-if="invalidUsername">
                    <p>Invalid username! Must has no symbol and no whitespace.</p>
                    <p>Example: <span class="em">Soatra</span></p>
                </div>
                <p v-if="tokenUsername">This Username was token.</p>
            </div>
        </div>
        <div class="input">
            <Label name="email" text="Email" />
            <Input
                name="email"
                type="email"
                :login="!(invalidEmail || usedEmail) || null"
                :invalid="(invalidEmail || usedEmail) || null"
                :value="email" @input="evt => email = evt.target.value" />
            <div class="invalid">
                <div v-if="invalidEmail">
                    <p>Invalid email ! Must contains your name, symbol @ and e-mail server name.</p>
                    <p>Example: <span class="em">johnsoatra@github.com</span></p>
                </div>
                <p v-if="usedEmail">This Email is already used with an existing account.</p>
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
            class="xs-12 mt-15 flex jc-c ai-c"
            :disabled="btnCreateClicked"
            @click="onCreate">
            {{btnCreateClicked ? 'Creating' : 'Create'}}
            <svg v-if="btnCreateClicked" class="svg-icon process-icon" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
        </Button>
    </form>
</template>
<script>
import Input from "../Items/Input.vue";
import Button from "../Items/Button.vue";
import Label from "../Items/Label.vue";
import { post } from "../../helpers/fetch_php";
import url from "../../constants/url";
import reg from "../../constants/reg";
import { sha256 } from "../../helpers/hash";
import { setCookie } from '../../helpers/cookie';
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
            email: "",
            password: "",
            invalidUsername: false,
            invalidEmail: false,
            invalidPassword: false,
            tokenUsername: false,
            usedEmail: false,
            btnCreateClicked: false
        }
    },
    methods: {
        resetInvalidData() {
            this.invalidUsername = false;
            this.invalidEmail = false;
            this.invalidPassword = false;
            this.tokenUsername = false;
            this.usedEmail = false;
        },
        onCreate(evt) {
            this.formSubmit(evt);
        },
        async formSubmit(evt) {
            evt.preventDefault();
            this.resetInvalidData();
            this.btnCreateClicked = true;
            if (!reg.username.test(this.username)) {
                document.getElementById("form_create").username.focus();
                this.invalidUsername = true;
            } else if (!reg.email.test(this.email)) {
                document.getElementById("form_create").email.focus();
                this.invalidEmail = true;
            } else if (!reg.password.test(this.password)) {
                document.getElementById("form_create").password.focus();
                this.invalidPassword = true;
            } else {
                const password = await sha256(this.password);
                const result = await post(
                    url.base + "/users",
                    {
                        username: this.username,
                        email: this.email,
                        password: password
                    }
                );
                if (!result.ok) {
                    const json = await result.json();
                    if (json.error == "username") {
                        document.getElementById("form_create").username.focus();
                        this.tokenUsername = true;
                    } else {
                        document.getElementById("form_create").email.focus();
                        this.usedEmail = true;
                    }
                } else {
                    setCookie("username", this.username);
                    setCookie("password", password);
                    refreshState();
                    this.$router.push({ name: "Profile" });
                }
            }
            this.btnCreateClicked = false;
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