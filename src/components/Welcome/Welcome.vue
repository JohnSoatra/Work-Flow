<template>
    <svg v-if="!worked" class="svg-icon process-icon process-icon-big" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
    <div
        v-else-if="notLogin"
        class="
            not-login title-welcome flex fd-c jc-c
            xs-fs-18
            sm-fs-20
            md-fs-24
        ">
        <p>You are currently logout.</p>
        <p>Please login again. <span class="im" @click="loginClicked">Login</span>.</p>
    </div>
    <div v-else class="flex fd-c ai-c wrapper">
        <p v-if="invalid" class="invalid">New <span class="fw-500">{{invalid}}</span> is invalid.</p>
        <p class="
            title-welcome
            xs-fs-20
            sm-fs-22
            md-fs-24
        ">Nice to see you again, 
            <span class="
                em
                xs-fs-22
                sm-fs-24
                md-fs-26
            ">{{user.username}}</span>.</p>
        <div class="box">
            <img :src="image" alt="profile" class="
                image-profile
                xs-mxw-100
                sm-mxw-130
                md-mxw-160
            ">
            <input
                type="file"
                class="d-n"
                id="input_file"
                @input="onFileInput">
            <span @click="onBtnImageClicked" class="to-br r--40">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M788.864 995.776H181.312A181.504 181.504 0 0 1 0 814.464V204.224A178.88 178.88 0 0 1 178.752 25.536h587.264a25.472 25.472 0 1 1 0 50.944H178.752A127.808 127.808 0 0 0 51.072 204.16v610.24c0 71.808 58.496 130.176 130.304 130.176h607.552a130.368 130.368 0 0 0 130.368-130.176v-456.96a25.472 25.472 0 0 1 50.88 0v457.024a181.44 181.44 0 0 1-181.312 181.312z" /><path d="M408.512 638.336a25.472 25.472 0 0 1-18.048-43.52L977.728 7.552a25.536 25.536 0 0 1 36.032 36.096L426.624 630.784a25.408 25.408 0 0 1-18.112 7.552z" /></svg>
            </span>
        </div>
        <div class="
            profile-info flex ta-s
            md-fs-18
        ">
            <div class="key">
                <span class="key-text">
                    <p>Name</p>
                    <p>:</p>
                </span>
                <span class="key-text">
                    <p>Email</p>
                    <p>:</p>
                </span>
                <span class="key-text">
                    <p>Password</p>
                    <p>:</p>
                </span>
                <span class="key-text">
                    <p>Gender</p>
                    <p>:</p>
                </span>
                <span class="key-text">
                    <p>Contact Info</p>
                    <p>:</p>
                </span>
            </div>
            <form class="value" id="form_info" @submit="formSubmit">
                <span class="value-side">
                    <p v-if="!btnUsernameClicked" class="value-text">{{username}}</p>
                    <Input
                        name="username"
                        type="text"
                        login
                        v-if="btnUsernameClicked"
                        @blur="btnUsernameClicked = false"
                        :value="username" @input="evt => {username = evt.target.value; userChanged = true;}"/>
                    <span v-if="!btnUsernameClicked" @click="btnUsernameClicked = true">
                        <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M81.23 959.96c-4.51 0-8.91-1.78-12.18-5.05a17.2 17.2 0 0 1-4.44-16.7c7.78-28.66 77.36-281.32 123.73-327.69l508.14-508.14c51.15-51.12 134.31-51.09 185.4 0l39.73 39.71c24.75 24.76 38.4 57.68 38.4 92.7s-13.65 67.93-38.4 92.67l-508.2 508.21c-46.35 46.34-299 115.91-327.66 123.69-1.5 0.4-3.01 0.6-4.52 0.6zM789.19 98.48c-24.75 0-49.5 9.41-68.35 28.26L212.7 634.88c-27.65 27.66-76.01 174.78-106.71 283.09 108.31-30.7 255.41-79.04 283.05-106.66L897.23 303.1c18.24-18.24 28.3-42.5 28.3-68.31 0-25.81-10.06-50.08-28.3-68.33l-39.73-39.71c-18.82-18.84-43.56-28.27-68.31-28.27z m-387.97 725h0.17-0.17z"  /><path d="M856.04 385.83c-4.41 0-8.82-1.68-12.18-5.05L643.13 180.03c-6.73-6.73-6.73-17.64 0-24.37s17.63-6.73 24.37 0l200.73 200.76c6.73 6.73 6.73 17.64 0 24.37a17.211 17.211 0 0 1-12.19 5.04zM405.9 836.02c-4.41 0-8.82-1.68-12.18-5.05L192.96 630.23c-6.73-6.73-6.73-17.63 0-24.37s17.63-6.73 24.37 0L418.09 806.6c6.73 6.73 6.73 17.63 0 24.37a17.18 17.18 0 0 1-12.19 5.05z"  /></svg>
                    </span>
                </span>
                <span class="value-side">
                    <p v-if="!btnEmailClicked" class="value-text">{{email}}</p>
                    <Input
                        name="email"
                        type="email"
                        login
                        v-if="btnEmailClicked"
                        @blur="btnEmailClicked = false"
                        :value="email" @input="evt => {email = evt.target.value; userChanged = true;}"/>
                    <span v-if="!btnEmailClicked" @click="btnEmailClicked = true">
                        <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M81.23 959.96c-4.51 0-8.91-1.78-12.18-5.05a17.2 17.2 0 0 1-4.44-16.7c7.78-28.66 77.36-281.32 123.73-327.69l508.14-508.14c51.15-51.12 134.31-51.09 185.4 0l39.73 39.71c24.75 24.76 38.4 57.68 38.4 92.7s-13.65 67.93-38.4 92.67l-508.2 508.21c-46.35 46.34-299 115.91-327.66 123.69-1.5 0.4-3.01 0.6-4.52 0.6zM789.19 98.48c-24.75 0-49.5 9.41-68.35 28.26L212.7 634.88c-27.65 27.66-76.01 174.78-106.71 283.09 108.31-30.7 255.41-79.04 283.05-106.66L897.23 303.1c18.24-18.24 28.3-42.5 28.3-68.31 0-25.81-10.06-50.08-28.3-68.33l-39.73-39.71c-18.82-18.84-43.56-28.27-68.31-28.27z m-387.97 725h0.17-0.17z"  /><path d="M856.04 385.83c-4.41 0-8.82-1.68-12.18-5.05L643.13 180.03c-6.73-6.73-6.73-17.64 0-24.37s17.63-6.73 24.37 0l200.73 200.76c6.73 6.73 6.73 17.64 0 24.37a17.211 17.211 0 0 1-12.19 5.04zM405.9 836.02c-4.41 0-8.82-1.68-12.18-5.05L192.96 630.23c-6.73-6.73-6.73-17.63 0-24.37s17.63-6.73 24.37 0L418.09 806.6c6.73 6.73 6.73 17.63 0 24.37a17.18 17.18 0 0 1-12.19 5.05z"  /></svg>
                    </span>
                </span>
                <span class="value-side">
                    <p v-if="!btnPasswordClicked" class="value-text">{{"•".repeat(8)}}</p>
                    <Input
                        name="password"
                        type="password"
                        login
                        v-if="btnPasswordClicked"
                        @blur="btnPasswordClicked = false"
                        :value="password" @input="evt => {password = evt.target.value; userChanged = true;}"/>
                    <span v-if="!btnPasswordClicked" @click="btnPasswordClicked = true">
                        <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M81.23 959.96c-4.51 0-8.91-1.78-12.18-5.05a17.2 17.2 0 0 1-4.44-16.7c7.78-28.66 77.36-281.32 123.73-327.69l508.14-508.14c51.15-51.12 134.31-51.09 185.4 0l39.73 39.71c24.75 24.76 38.4 57.68 38.4 92.7s-13.65 67.93-38.4 92.67l-508.2 508.21c-46.35 46.34-299 115.91-327.66 123.69-1.5 0.4-3.01 0.6-4.52 0.6zM789.19 98.48c-24.75 0-49.5 9.41-68.35 28.26L212.7 634.88c-27.65 27.66-76.01 174.78-106.71 283.09 108.31-30.7 255.41-79.04 283.05-106.66L897.23 303.1c18.24-18.24 28.3-42.5 28.3-68.31 0-25.81-10.06-50.08-28.3-68.33l-39.73-39.71c-18.82-18.84-43.56-28.27-68.31-28.27z m-387.97 725h0.17-0.17z"  /><path d="M856.04 385.83c-4.41 0-8.82-1.68-12.18-5.05L643.13 180.03c-6.73-6.73-6.73-17.64 0-24.37s17.63-6.73 24.37 0l200.73 200.76c6.73 6.73 6.73 17.64 0 24.37a17.211 17.211 0 0 1-12.19 5.04zM405.9 836.02c-4.41 0-8.82-1.68-12.18-5.05L192.96 630.23c-6.73-6.73-6.73-17.63 0-24.37s17.63-6.73 24.37 0L418.09 806.6c6.73 6.73 6.73 17.63 0 24.37a17.18 17.18 0 0 1-12.19 5.05z"  /></svg>
                    </span>
                </span>
                <span class="value-side">
                    <p v-if="!btnGenderClicked" class="value-text">{{gender}}</p>
                    <Input
                        name="gender"
                        type="text"
                        login
                        v-if="btnGenderClicked"
                        @blur="btnGenderClicked = false"
                        :value="gender" @input="evt => {gender = evt.target.value; userChanged = true;}"/>
                    <span v-if="!btnGenderClicked" @click="btnGenderClicked = true">
                        <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M81.23 959.96c-4.51 0-8.91-1.78-12.18-5.05a17.2 17.2 0 0 1-4.44-16.7c7.78-28.66 77.36-281.32 123.73-327.69l508.14-508.14c51.15-51.12 134.31-51.09 185.4 0l39.73 39.71c24.75 24.76 38.4 57.68 38.4 92.7s-13.65 67.93-38.4 92.67l-508.2 508.21c-46.35 46.34-299 115.91-327.66 123.69-1.5 0.4-3.01 0.6-4.52 0.6zM789.19 98.48c-24.75 0-49.5 9.41-68.35 28.26L212.7 634.88c-27.65 27.66-76.01 174.78-106.71 283.09 108.31-30.7 255.41-79.04 283.05-106.66L897.23 303.1c18.24-18.24 28.3-42.5 28.3-68.31 0-25.81-10.06-50.08-28.3-68.33l-39.73-39.71c-18.82-18.84-43.56-28.27-68.31-28.27z m-387.97 725h0.17-0.17z"  /><path d="M856.04 385.83c-4.41 0-8.82-1.68-12.18-5.05L643.13 180.03c-6.73-6.73-6.73-17.64 0-24.37s17.63-6.73 24.37 0l200.73 200.76c6.73 6.73 6.73 17.64 0 24.37a17.211 17.211 0 0 1-12.19 5.04zM405.9 836.02c-4.41 0-8.82-1.68-12.18-5.05L192.96 630.23c-6.73-6.73-6.73-17.63 0-24.37s17.63-6.73 24.37 0L418.09 806.6c6.73 6.73 6.73 17.63 0 24.37a17.18 17.18 0 0 1-12.19 5.05z"  /></svg>
                    </span>
                </span>
                <span class="value-side">
                    <p v-if="!btnContactInfoClicked" class="value-text">{{contact_info}}</p>
                    <Input
                        name="contact_info"
                        type="text"
                        login
                        v-if="btnContactInfoClicked"
                        @blur="btnContactInfoClicked = false"
                        :value="contact_info" @input="evt => {contact_info = evt.target.value; userChanged = true;}"/>
                    <span v-if="!btnContactInfoClicked" @click="btnContactInfoClicked = true">
                        <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M81.23 959.96c-4.51 0-8.91-1.78-12.18-5.05a17.2 17.2 0 0 1-4.44-16.7c7.78-28.66 77.36-281.32 123.73-327.69l508.14-508.14c51.15-51.12 134.31-51.09 185.4 0l39.73 39.71c24.75 24.76 38.4 57.68 38.4 92.7s-13.65 67.93-38.4 92.67l-508.2 508.21c-46.35 46.34-299 115.91-327.66 123.69-1.5 0.4-3.01 0.6-4.52 0.6zM789.19 98.48c-24.75 0-49.5 9.41-68.35 28.26L212.7 634.88c-27.65 27.66-76.01 174.78-106.71 283.09 108.31-30.7 255.41-79.04 283.05-106.66L897.23 303.1c18.24-18.24 28.3-42.5 28.3-68.31 0-25.81-10.06-50.08-28.3-68.33l-39.73-39.71c-18.82-18.84-43.56-28.27-68.31-28.27z m-387.97 725h0.17-0.17z"  /><path d="M856.04 385.83c-4.41 0-8.82-1.68-12.18-5.05L643.13 180.03c-6.73-6.73-6.73-17.64 0-24.37s17.63-6.73 24.37 0l200.73 200.76c6.73 6.73 6.73 17.64 0 24.37a17.211 17.211 0 0 1-12.19 5.04zM405.9 836.02c-4.41 0-8.82-1.68-12.18-5.05L192.96 630.23c-6.73-6.73-6.73-17.63 0-24.37s17.63-6.73 24.37 0L418.09 806.6c6.73 6.73 6.73 17.63 0 24.37a17.18 17.18 0 0 1-12.19 5.05z"  /></svg>
                    </span>
                </span>
            </form>
        </div>
        <div class="flex jc-se mt-20 mb-20 btns">
            <Button
                v-if="userChanged"
                background="d64141"
                @click="onCancelClicked">
                Cancel
            </Button>
            <Button
                v-if="userChanged"
                background="218bc9"
                class="flex jc-c ai-c"
                :disabled="btnSaveClicked"
                @click="onSaveClicked">
                {{btnSaveClicked ? "Saving" : "Save"}}
                <svg v-if="btnSaveClicked" class="svg-icon process-icon" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
            </Button>
        </div>
        <Button
            class="btn-logout"
            background="transparent"
            color="d64141"
            @click="onLogoutClicked">
            Log out
        </Button>
    </div>
</template>
<script>
import { setCookie, getCookie, checkCookie } from "../../helpers/cookie";
import { get, postFile, put } from "../../helpers/fetch_php";
import url from "../../constants/url";
import Button from "../Items/Button.vue";
import Input from "../Items/Input.vue";
import { refreshState } from '../../state';
import { sha256 } from '../../helpers/hash';
import { dataUrl } from "../../helpers/fetch_file";
import reg from "../../constants/reg";

export default {
    components: {
        Button,
        Input
    },
    data: function() {
        return {
            aborter: null,
            worked: false,
            notLogin: false,
            user: {},
            username: "",
            email: "",
            password: "",
            gender: "",
            contact_info: "",
            image: "",
            file: "",
            invalid: null,
            btnUsernameClicked: false,
            btnEmailClicked: false,
            btnPasswordClicked: false,
            btnGenderClicked: false,
            btnContactInfoClicked: false,
            btnSaveClicked: false,
            userChanged: false,
        }
    },
    methods: {
        loginClicked() {
            this.$router.push({ name: "Login" });
        },
        onLogoutClicked() {
            this.removeCookie();
            this.notLogin = true;
            sessionStorage.removeItem("image");
        },
        onSaveClicked(evt) {
            this.formSubmit(evt);
        },
        onCancelClicked() {
            this.resetData();
            if (this.aborter) {
                this.aborter.abort();
            }
            this.userChanged = false;
            this.btnSaveClicked = false;
        },
        onBtnImageClicked() {
            document.getElementById("input_file").click();
        },
        async onFileInput(evt) {
            const file = evt.target.files[0];
            if (file) {
                const url = await dataUrl(file);
                this.file = file;
                this.image = url;
                this.userChanged = true;
            }
        },
        async formSubmit(evt) {
            evt.preventDefault();
            const password = this.password ? await sha256(this.password) : false;
            const changes = {}
            this.btnSaveClicked = true;
            this.aborter = new AbortController();
            if (this.username != this.user.username) {
                if(reg.username.test(this.username)) {
                    changes["username"] = this.username;
                } else {
                    this.invalid = "username";
                    return;
                }
            }
            if (this.email != this.user.email) {
                if (reg.email.test(this.email)) {
                    changes["email"] = this.email;
                } else {
                    this.invalid = "email";
                    return;
                }
            }
            if (password && password != this.user.password) {
                if (reg.password.test(this.password)) {
                    changes["password"] = password;
                } else {
                    this.invalid = "password";
                    return;
                }
            }
            if (this.gender != this.user.gender) {
                if(reg.gender.test(this.gender)) {
                    changes["gender"] = this.gender;
                } else {
                    this.invalid = "gender";
                    return;
                }
            }
            if (this.contact_info != this.user.contact_info) {
                changes["contact_info"] = this.contact_info;
            }
            if (this.image != url.base + "/images/" + this.user.image) {
                const endPoint = url.base + "/users/" + this.user.id;
                try {
                    const result = await postFile(
                        endPoint,
                        { "profile": this.file },
                        {},
                        { signal: this.aborter.signal }
                    );
                    changes["image"] = await result.text();
                } catch(ex) { return; }
            }
            if (Object.keys(changes).length > 0) {
                let endPoint = url.base + "/users/" + this.user.id;
                try {
                    const result = await put(
                        endPoint,
                        changes,
                        { signal: this.aborter.signal }
                    );
                    const json = await result.json();
                    this.user = json;
                    setCookie("username", json.username);
                    setCookie("password", json.password);
                    sessionStorage.setItem("image", this.image);
                    if (changes["image"]) { this.$router.go(); }
                } catch(ex) { return; }
            }
            this.userChanged = false;
            this.btnSaveClicked = false;
        },
        resetData() {
            const dataUrl = sessionStorage.getItem("image");
            this.username = this.user.username;
            this.email = this.user.email;
            this.password = "";
            this.gender = this.user.gender;
            this.contact_info = this.user.contact_info;
            this.file = "";
            if (dataUrl) this.image = dataUrl;
            else this.image = url.base + "/images/" + this.user.image;
        },
        removeCookie() {
            setCookie("username", "", 0);
            setCookie("password", "", 0);
            refreshState();
        }
    },
    beforeMount: async function() {
        const hasUsername = checkCookie("username");
        const hasPassword = checkCookie("password");
        if (hasUsername && hasPassword) {
            const username = getCookie("username");
            const password = getCookie("password");
            const endpoint = url.base + `/users?username=${username}&password=${password}`;
            const result = await get(endpoint);
            if (result.ok) {
                this.user = await result.json();
                this.resetData();
            } else {
                this.notLogin = true;
            }
        } else {
            this.notLogin = true;
        }
        this.worked = true;
    },
    updated: function() {
        if (this.btnUsernameClicked) {
            document.getElementById("form_info").username.focus();
        } else if (this.btnEmailClicked) {
            document.getElementById("form_info").email.focus();
        } else if (this.btnPasswordClicked) {
            document.getElementById("form_info").password.focus();
        } else if (this.btnGenderClicked) {
            document.getElementById("form_info").gender.focus();
        } else if (this.btnContactInfoClicked) {
            document.getElementById("form_info").contact_info.focus();
        }
        if (this.invalid) {
            setTimeout(() => {
                this.invalid = null;
            }, 3500);
        }
    }
}
</script>
<style scoped>
    .wrapper {
        box-shadow: 0px 0px 3px 1px rgba(138, 138, 138, 0.493);
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: #f4f4f4;
    }
    .btns {
        width: 300px;
    }
    .btn-logout {
        border: solid 1px #d64141;
    }
    .value-side {
        display: flex;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    .value-text {
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
    }
    .key-text {
        display: flex;
        justify-content: space-between;
    }
    .profile-info {
        margin-left: 50px;
        margin-top: 20px;
    }
    .image-profile {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0px 0px 3px 1px #8686866b;
    }
    .key {
        margin-right: 10px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .value {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .title-welcome {
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .em {
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
    .invalid {
        color: #c92929;
    }
    .process-icon {
        width: 18px;
        fill: #fff;
        animation: rotate 2000ms linear 0ms infinite normal both;
    }
    .process-icon:hover {
        filter: brightness(1);
    }
    .process-icon:active {
        transform: scale(1, 1);
    }
    .process-icon-big {
        width: 40px;
        fill: #8d8d8d;
        animation-duration: 1300ms;
    }
</style>