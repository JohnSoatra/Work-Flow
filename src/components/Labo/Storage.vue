<template>
    <div
        v-if="hasCredential"
        class="container wrapper f-1 xs-10">
        <div class="flex ai-c bgc-eee title-bar">
            <button @click="onBack" class="btn-icon">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M333.436236 512.002048l363.098222-362.900598c18.226434-18.226434 18.226434-47.770666 0-65.998124s-47.770666-18.226434-65.998124 0L234.422666 479.000938c-18.226434 18.226434-18.226434 47.770666 0 65.998124l396.112643 395.942666c18.227458 18.18138 47.77169 18.18138 65.998124 0 18.226434-18.227458 18.226434-47.77169 0-65.998124L333.436236 512.002048z"/></svg>
            </button>
            <p class="name">{{folder}}</p>
            <div class="f-1"></div>
            <!-- <button
                v-if="selectedIndex > -1 || selectedIndex == -2"
                class="btn-icon"
                @mousedown="onSelectAll"
                @blur="onUnSelectAll">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M37.488 308.368l459.936 250.64c4.624 2.512 9.712 3.792 14.816 3.792 5.056 0 10.096-1.248 14.704-3.728l464.768-250.64c10.144-5.456 16.432-16.112 16.272-27.632-0.144-11.568-6.688-22.048-16.944-27.28L531.088 19.76c-8.768-4.448-19.12-4.48-27.952-0.064L38.384 253.456c-10.288 5.184-16.88 15.648-17.056 27.184C21.152 292.176 27.376 302.864 37.488 308.368zM516.992 82.128l393.2 199.84-397.856 214.56L119.104 282.24 516.992 82.128zM985.728 481.296l-91.936-46.704L827.424 470.4l77.44 39.36L507.008 724.32 113.776 510.032l82.592-41.536-66.192-36.096-97.12 48.832C22.784 486.416 16.192 496.896 16 508.432c-0.176 11.536 6.048 22.224 16.16 27.728l459.936 250.64c4.624 2.512 9.712 3.792 14.816 3.792 5.056 0 10.112-1.248 14.704-3.728L986.4 536.224c10.128-5.456 16.432-16.112 16.272-27.648C1002.528 497.008 995.984 486.528 985.728 481.296zM985.728 698.304l-87.104-42.832-66.368 35.808 72.608 35.488-397.856 214.56L113.776 727.04l76.784-34.752-66.192-36.096-91.312 42.048C22.784 703.424 16.192 713.904 16 725.44c-0.176 11.536 6.048 22.224 16.16 27.728l459.936 250.656c4.624 2.512 9.712 3.792 14.816 3.792 5.056 0 10.112-1.248 14.704-3.728L986.4 753.232c10.128-5.456 16.432-16.112 16.272-27.648C1002.528 714.016 995.984 703.552 985.728 698.304z" /></svg>
            </button> -->
            <div class="box">
                <button
                    v-if="selectedIndex > -1 || selectedIndex == -2"
                    class="btn-icon"
                    @mousedown="onOptions"
                    @blur="onHideOptions">
                    <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.996587 1020.586667C231.103147 1020.586667 3.413333 792.84224 3.413333 512 3.413333 231.154347 231.103147 3.413333 511.996587 3.413333 792.89344 3.413333 1020.586667 231.10656 1020.586667 512s-227.7376 508.586667-508.59008 508.586667z m0-940.885334C273.24416 79.691093 79.68768 273.24416 79.68768 512c0 238.752427 193.55648 432.295253 432.308907 432.295253 238.75584 0 432.295253-193.55648 432.295253-432.295253 0-238.742187-193.55648-432.308907-432.295253-432.308907v0.01024z" /><path d="M512 341.333333c47.146667 0 85.333333-38.186667 85.333333-85.333333s-38.186667-85.333333-85.333333-85.333333-85.333333 38.186667-85.333333 85.333333 38.186667 85.333333 85.333333 85.333333z m0 85.333334c-47.146667 0-85.333333 38.186667-85.333333 85.333333s38.186667 85.333333 85.333333 85.333333 85.333333-38.186667 85.333333-85.333333-38.186667-85.333333-85.333333-85.333333z m0 256c-47.146667 0-85.333333 38.186667-85.333333 85.333333s38.186667 85.333333 85.333333 85.333333 85.333333-38.186667 85.333333-85.333333-38.186667-85.333333-85.333333-85.333333z" /></svg>
                </button>
                <div :class="{
                    'popup options flex fd-c jc-se bgc-fff p-10 br-5': true,
                    'd-n': !showOptions
                    }">
                    <button
                        @mousedown="onBtnOpenClicked"
                        class="btn-icon btn-option ta-s">
                        Open
                    </button>
                    <div class="divider"></div>
                    <button
                        @mousedown="onBtnRenameClicked"
                        class="btn-icon btn-option ta-s">
                        Rename
                    </button>
                    <div class="divider"></div>
                    <button
                        @mousedown="btnDeleteClicked = true"
                        class="btn-icon btn-option ta-s">
                        Delete
                    </button>
                    <div class="divider"></div>
                    <a download href="" id="a_download" class="d-n"></a>
                    <button
                        @mousedown="onChooseDownload"
                        class="btn-icon btn-option ta-s">
                        Download
                    </button>
                </div>
            </div>
            <input
                type="file"
                class="d-n"
                id="input_file"
                multiple
                @input="onFileInput">
            <span
                @click="onAddClicked">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M279.272727 884.363636l279.272727 0c0-16.058182 2.048-31.650909 5.864727-46.545455L279.272727 837.818182 279.272727 884.363636z"  /><path d="M791.272727 1024 791.272727 930.909091 884.363636 930.909091 884.363636 837.818182 791.272727 837.818182 791.272727 744.727273 698.181818 744.727273 698.181818 837.818182 605.090909 837.818182 605.090909 930.909091 698.181818 930.909091 698.181818 1024Z"  /><path d="M744.727273 698.181818 279.272727 698.181818l0 46.545455 342.295273 0C654.382545 715.776 697.530182 698.181818 744.727273 698.181818z"  /><path d="M279.272727 279.272727l465.454545 0 0 46.545455-465.454545 0 0-46.545455Z"  /><path d="M279.272727 558.545455l465.454545 0 0 46.545455-465.454545 0 0-46.545455Z"  /><path d="M884.363636 204.8 681.239273 0 162.210909 0C162.210909 0 139.636364 0 139.636364 22.760727L139.636364 1001.192727C139.636364 1024 162.210909 1024 162.210909 1024l459.357091 0c-15.080727-13.312-27.973818-29.044364-38.120727-46.545455L186.181818 977.454545 186.181818 46.545455l465.454545 0 0 139.636364c0 46.545455 46.545455 46.545455 46.545455 46.545455l139.636364 0 0 490.356364c17.501091 10.146909 33.233455 23.04 46.545455 38.120727L884.363636 204.8z"  /><path d="M279.272727 139.636364l279.272727 0 0 46.545455-279.272727 0 0-46.545455Z"  /><path d="M279.272727 418.909091l465.454545 0 0 46.545455-465.454545 0 0-46.545455Z"  /></svg>
            </span>
            <Input
                placeholder="search..."
                class="xs-d-n md-d-us input-search" />
            <button @click="onSearch" class="btn-icon xs-d-n md-d-us">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M875.264 855.872l-188.032-215.552C737.664 579.392 768 501.248 768 416 768 221.632 610.368 64 416 64 221.568 64 64 221.632 64 416S221.568 768 416 768c72.32 0 139.52-21.888 195.392-59.264l186.88 214.272c18.496 21.312 50.88 23.36 72 4.928C891.648 909.376 893.76 877.12 875.264 855.872zM160 416c0-141.184 114.816-256 256-256 141.184 0 256 114.816 256 256s-114.816 256-256 256C274.816 672 160 557.184 160 416z"  /></svg>
            </button>
        </div>
        <svg v-if="processing" class="svg-icon process-icon process-icon-big" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
        <div v-else>
            <File
                v-for="(file, index) in files"
                :key="index"
                :name="file.name"
                :link="file.link"
                :index="index"
                :selectedIndex="selectedIndex"
                :last="(index == files.length - 1) || null"
                @on-focus="onSelected"
                @on-blur="onUnSelected" />
            <p
                class="status"
                v-if="files.length == 0">
                You have no file.
            </p>
        </div>
        <div
            :class="{ 'backer': true, 'd-us': btnRenameClicked || btnDeleteClicked || fileInputted}"
            @click="onCancel">
        </div>
        <form
            id="form_rename"
            @submit="onSubmit"
            @click="onBlocker"
            :class="{
                'popup rename to-c ta-s': true,
                'd-n': !btnRenameClicked
            }">
            <p class="pb-15">from: <span class="from-name">{{selectedName}}</span></p>
            <Label name="rename" text="to:" class="pr-5"/>
            <Input
                id="input_rename"
                :login="!invalidName || null"
                :invalid="invalidName || null"
                :block="false"
                :value="newName" @input="evt => newName = evt.target.value" />
            <Button
                class="xs-12 mt-15 flex jc-c ai-c"
                :disabled="btnFormRenameClicked">
                {{ btnFormRenameClicked ? 'Renaming' : 'Rename'}}
                <svg v-if="btnFormRenameClicked" class="svg-icon process-icon" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
            </Button>
        </form>
        <div
            @click="onBlocker"
            :class="{
                'popup delete to-c ta-c': true,
                'd-n': !btnDeleteClicked
            }">
            <p class="pb-15 delete-title">Confirmation!</p>
            <p class="pb-15">Are you sure to delete this file or dir?</p>
            <Button
                class="xs-12 flex jc-c ai-c"
                background="cb3d3dfc"
                :disabled="btnFormDeleteClicked"
                @click="onBtnDeleteClicked">
                {{ btnFormDeleteClicked ? 'Deleting' : 'Yes' }}
                <svg v-if="btnFormDeleteClicked" class="svg-icon process-icon" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
            </Button>
        </div>
        <div
            @click="onBlocker"
            :class="{
                'popup upload to-c ta-c': true,
                'd-n': !fileInputted
            }">
            <p class="pb-15 upload-title">Upload Info</p>
            <p class="pb-15">You are going to upload {{filesArray.length}} files.</p>
            <Button
                class="xs-12 flex jc-c ai-c"
                :disabled="btnFormUploadClicked"
                @click="onBtnUploadClicked">
                {{ btnFormUploadClicked ? 'Uploading' : 'Upload' }}
                <svg v-if="btnFormUploadClicked" class="svg-icon process-icon" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
            </Button>
        </div>

    </div>
    <div
        v-else
        class="
            not-login
            title-welcome
            xs-fs-18
            sm-fs-20
            md-fs-24
        ">
        <p class="simple">You did not login yet.</p>
        <p class="simple">Please login again. <span class="im" @click="onLoginClicked">Login</span>.</p>
    </div>  
</template>
<script>
import Input from "../Items/Input.vue";
import File from "./File.vue";
import Label from "../Items/Label.vue";
import Button from "../Items/Button.vue";
import { checkCookie, getCookie } from "../../helpers/cookie";
import { base } from "../../constants/url";
import { delete_, get, postFile, put } from "../../helpers/fetch_php";
import {  convertStrToObj, convertArrStrToArrObj, fileListToList } from "../../helpers/convert";

export default {
    components: {
        Input,
        File,
        Label,
        Button
    },
    data: function() {
        const folder = this.$route.params.folder;
        return {
            folder: folder ? `/${folder}/` : '/',
            selectedIndex: -1,
            oldSelectedIndex: -1,
            id: 0,
            files: [],
            filesArray: [],
            newName: "",
            selectedName: "",
            fileAmount: 0,
            invalidName: false,
            processing: true,
            hasCredential: false,
            showOptions: false,
            fileInputted: false,
            btnRenameClicked: false,
            btnDeleteClicked: false,
            btnFormRenameClicked: false,
            btnFormDeleteClicked: false,
            btnFormUploadClicked: false,
        }
    },
    methods: {
        onBlocker(evt) {
            evt.stopPropagation();
        },
        onBack() {
            if (this.$route.params.folder) this.$router.back();
        },
        onSearch() {
            alert("onSearch");
        },
        onOptions() {
            this.showOptions = true;
        },
        onHideOptions() {
            this.showOptions = false;
            this.selectedIndex = -1;
        },
        onSelected(location) {
            this.selectedIndex = location.index;
            this.oldSelectedIndex = location.index;
            this.selectedName = location.name;
        },
        onUnSelected() {
            if (!(this.selectedIndex == -2 || this.showOptions)) {
                this.selectedIndex = -1;
            }
        },
        // onSelectAll() {
        //     this.selectedIndex = -2;
        // },
        // onUnSelectAll() {
        //     if (!this.showOptions) this.selectedIndex = -1;
        // },
        onCancel() {
            if (!(
                this.btnFormRenameClicked ||
                this.btnFormDeleteClicked ||
                this.btnFormUploadClicked
            )) {
                this.btnRenameClicked = false;
                this.btnDeleteClicked = false;
                this.fileInputted = false;
                this.invalidName = false;
                this.filesArray = [];
                this.newName = "";
            }
        },
        async onSubmit(evt) {
            evt.preventDefault();
            this.btnFormRenameClicked = true;
            if (this.newName && !this.files.find(f => f.name == this.newName)) {
                const result = await put(
                    base + `/users/${this.id}/files/${this.selectedName}`,
                    {
                        "newName": this.newName
                    }
                );
                const text = await result.text();
                const file = convertStrToObj(this.id, text);
                this.files.splice(this.oldSelectedIndex, 1, file);
                this.btnFormRenameClicked = false;
                this.onCancel();
            } else {
                this.invalidName = true;
                document.getElementById("input_rename").focus();
            }
        },
        async onBtnDeleteClicked() {
            this.btnFormDeleteClicked = true;
            await delete_(
                base + `/users/${this.id}/files/${this.selectedName}`
            );
            this.files.splice(this.oldSelectedIndex, 1);
            this.btnFormDeleteClicked = false;
            this.onCancel()
        },
        onBtnRenameClicked() {
            this.newName = this.selectedName;
            this.btnRenameClicked = true
        },
        async onBtnUploadClicked() {
            this.btnFormUploadClicked = true;
            const result = await postFile(
                base + `/users/${this.id}/files`,
                this.filesArray
            );
            let files = await result.json();
            files = convertArrStrToArrObj(this.id, files);
            this.files.unshift(...files);
            this.btnFormUploadClicked = false;
            this.onCancel();
        },
        onBtnOpenClicked() {
            window.open(
                base + "/files/" + this.files[this.oldSelectedIndex].link,
                "_self"
            );
        },
        async onChooseDownload() {
            const a = document.getElementById("a_download");
            a.href = base + "/files/download/" + this.files[this.oldSelectedIndex].link;
            a.click();
        },
        onLoginClicked() {
            this.$router.push({ name: "Login" });
        },
        onAddClicked() {
            document.getElementById("input_file").click();
        },
        onFileInput(evt) {
            const fileList = evt.target.files;
            if (fileList.length > 0) {
                this.filesArray = fileListToList(fileList);
                this.fileInputted = true;
            }
        }
    },
    async created() {
        if (this.id == 0) {
            this.hasCredential = checkCookie("username") && checkCookie("password");
            if (this.hasCredential) {
                const username = getCookie("username");
                const password = getCookie("password");
                const result = await get(base + `/users/${username}/${password}`);
                this.id = +await result.text();
            }
        }
        if (this.id > 0) {
            const result = await get(
                base + `/users/${this.id}/files`
            );
            const files = await result.json();
            this.files = convertArrStrToArrObj(this.id, files);
        }
        this.processing = false;
    },
    updated() {
        if (this.btnRenameClicked) {
            document.getElementById("input_rename").focus();
        }
    },
    watch: {
        $route(to) {
            if (to.fullPath.split("/").length > 1) {
                const folder = this.$route.params.folder;
                this.folder = folder ? `/${folder}/` : "/";
            }
            this.selectedIndex = -1;
        }
    }
}
</script>
<style scoped>
    p {
        font-weight: 500;
    }
    .simple {
        font-weight: normal;
    }
    .wrapper {
        background-color: #fff;
        margin-top: 20px;
        padding: 20px
    }
    .input-search {
        max-width: 250px;
        padding: 8px;
    }
    .status {
        margin-top: 30px;
        font-size: 20px;
        font-weight: 400;
        color: #6c7e90;
    }
    .from-name {
        border-bottom: solid 1px;
        line-height: 1.1px;
    }
    .options {
        border: solid 1px rgb(194, 194, 194);
    }
    .rename, .delete, .upload {
        padding: 15px;
        box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.418);
        border-radius: 5px;
        background-color: #fff;
    }
    .delete-title, .upload-title {
        font-size: 22px;
    }
    .btn-option {
        font-weight: 500;
    }
    .btn-option:hover {
        filter: brightness(2);
    }
    .divider {
        margin-top: 5px;
        margin-bottom: 5px;
        background-color: #aaa;
    }
    .title-bar {
        background-color: #ebebeb;
        padding: 10px;
        border: 1px solid rgb(194, 194, 194);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .container {
        box-shadow: 0px 0px 4px 2px rgba(119, 119, 119, 0.288);
        line-height: 1.5;
        border-radius: 5px;
    }
    .name {
        font-weight: 500;
        border-bottom: 1px solid rgb(126, 126, 126);
        line-height: 1.1;
        font-size: 17px;
    }
    .more {
        fill: #182533;
        width: 28px;
    }
    .not-login {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .title-welcome {
        padding-bottom: 10px;
    }
    .im {
        cursor: default
    }
    .process-icon {
        width: 18px;
        fill: #fff;
    }
    .process-icon:hover {
        filter: brightness(1);
    }
    .process-icon:active {
        transform: scale(1, 1);
    }
    .process-icon {
        animation: rotate 2000ms linear 0ms infinite normal both;
    }
    .process-icon-big {
        width: 40px;
        fill: #8d8d8d;
        margin-top: 30px;
        animation-duration: 1500ms;
    }
</style>