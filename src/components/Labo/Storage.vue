<template>
    <div class="container bgc-fff h-500 mt-30 p-20 box">
        <div class="flex ai-c bgc-eee title-bar">
            <button @click="onBack" class="btn-icon">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M333.436236 512.002048l363.098222-362.900598c18.226434-18.226434 18.226434-47.770666 0-65.998124s-47.770666-18.226434-65.998124 0L234.422666 479.000938c-18.226434 18.226434-18.226434 47.770666 0 65.998124l396.112643 395.942666c18.227458 18.18138 47.77169 18.18138 65.998124 0 18.226434-18.227458 18.226434-47.77169 0-65.998124L333.436236 512.002048z"/></svg>
            </button>
            <p class="name">{{folder}}</p>
            <div class="f-1"></div>
            <button
                v-if="selectedIndex > -1 || selectedIndex == -2"
                class="btn-icon"
                @mousedown="onSelectAll"
                @blur="onUnSelectAll">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M37.488 308.368l459.936 250.64c4.624 2.512 9.712 3.792 14.816 3.792 5.056 0 10.096-1.248 14.704-3.728l464.768-250.64c10.144-5.456 16.432-16.112 16.272-27.632-0.144-11.568-6.688-22.048-16.944-27.28L531.088 19.76c-8.768-4.448-19.12-4.48-27.952-0.064L38.384 253.456c-10.288 5.184-16.88 15.648-17.056 27.184C21.152 292.176 27.376 302.864 37.488 308.368zM516.992 82.128l393.2 199.84-397.856 214.56L119.104 282.24 516.992 82.128zM985.728 481.296l-91.936-46.704L827.424 470.4l77.44 39.36L507.008 724.32 113.776 510.032l82.592-41.536-66.192-36.096-97.12 48.832C22.784 486.416 16.192 496.896 16 508.432c-0.176 11.536 6.048 22.224 16.16 27.728l459.936 250.64c4.624 2.512 9.712 3.792 14.816 3.792 5.056 0 10.112-1.248 14.704-3.728L986.4 536.224c10.128-5.456 16.432-16.112 16.272-27.648C1002.528 497.008 995.984 486.528 985.728 481.296zM985.728 698.304l-87.104-42.832-66.368 35.808 72.608 35.488-397.856 214.56L113.776 727.04l76.784-34.752-66.192-36.096-91.312 42.048C22.784 703.424 16.192 713.904 16 725.44c-0.176 11.536 6.048 22.224 16.16 27.728l459.936 250.656c4.624 2.512 9.712 3.792 14.816 3.792 5.056 0 10.112-1.248 14.704-3.728L986.4 753.232c10.128-5.456 16.432-16.112 16.272-27.648C1002.528 714.016 995.984 703.552 985.728 698.304z" /></svg>
            </button>
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
                        @mousedown="onChooseRename"
                        class="btn-icon btn-option">
                        Rename
                    </button>
                    <div class="divider"></div>
                    <button
                        @mousedown="onChooseDelete"
                        class="btn-icon btn-option ta-s">
                        Delete
                    </button>
                    <div class="divider"></div>
                    <button
                        @mousedown="onChooseDownload"
                        class="btn-icon btn-option ta-s">
                        Download
                    </button>
                </div>
            </div>
            <Input
                placeholder="search..."
                class="w-250 p-8"/>
            <button @click="onSearch" class="btn-icon">
                <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M875.264 855.872l-188.032-215.552C737.664 579.392 768 501.248 768 416 768 221.632 610.368 64 416 64 221.568 64 64 221.632 64 416S221.568 768 416 768c72.32 0 139.52-21.888 195.392-59.264l186.88 214.272c18.496 21.312 50.88 23.36 72 4.928C891.648 909.376 893.76 877.12 875.264 855.872zM160 416c0-141.184 114.816-256 256-256 141.184 0 256 114.816 256 256s-114.816 256-256 256C274.816 672 160 557.184 160 416z"  /></svg>
            </button>
        </div>
        <File
            v-for="location in json"
            :key="location.index"
            :name="location.name"
            :link="location.link"
            :file="location.file"
            :index="location.index"
            :selectedIndex="selectedIndex"
            :last="(location.index == json.length - 1) || null"
            @on-focus="onSelected"
            @on-blur="onUnSelected"
            />
        <div
            :class="{ 'backer': true, 'd-us': chooseRename || chooseDelete }"
            @click="onCancel">
        </div>
        <div
            @click="onBlocker"
            :class="{
                'popup rename to-c ta-s': true,
                'd-n': !chooseRename
            }">
            <p class="pb-15">from: <span class="from-name">{{selectedName}}</span></p>
            <Label name="rename" text="to:" class="pr-5"/>
            <Input :block="false" />
            <Button 
                @click="onBtnRenameClicked"
                class="d-b xs-12 mt-15"
                content="rename" />
        </div>
        <div
            @click="onBlocker"
            :class="{
                'popup delete to-c ta-c': true,
                'd-n': !chooseDelete
            }">
            <p class="pb-15 delete-title">Confirmation!</p>
            <p class="pb-15">Are you sure to delete this file or dir?</p>
            <Button
                @click="onBtnDeleteClicked"
                class="d-b xs-12"
                content="Yes" />
        </div>

    </div>
</template>
<script>
import Input from "../Items/Input.vue";
import File from "./File.vue";
import packs from "../../assets/data/packs";
import movies from "../../assets/data/movies";
import Label from "../Items/Label.vue";
import Button from "../Items/Button.vue";

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
            json: folder ? movies : packs,
            showOptions: false,
            selectedName: "",
            chooseRename: false,
            chooseDelete: false
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
            this.selectedName = location.name;
        },
        onUnSelected() {
            if (!(this.selectedIndex == -2 || this.showOptions)) {
                this.selectedIndex = -1;
            }
        },
        onSelectAll() {
            this.selectedIndex = -2;
        },
        onUnSelectAll() {
            if (!this.showOptions) this.selectedIndex = -1;
        },
        onCancel() {
            this.chooseRename = false;
            this.chooseDelete = false;
        },
        onChooseRename() {
            this.chooseRename = true;
        },
        onChooseDelete() {
            this.chooseDelete = true;
        },
        onChooseDownload() {
            alert("choose download");
        },
        onBtnRenameClicked() {
            this.onCancel();
        },
        onBtnDeleteClicked() {
            this.onCancel();
        },
    },
    watch: {
        $route(to) {
            if (to.fullPath.split("/").length > 1) {
                const folder = this.$route.params.folder;
                this.json = folder ? movies : packs;
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
    .from-name {
        border-bottom: solid 1px;
        line-height: 1.1px;
    }
    .options {
        border: solid 1px rgb(194, 194, 194);
    }
    .rename, .delete{
        padding: 15px;
        box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.418);
        border-radius: 5px;
        background-color: #fff;
    }
    .delete-title {
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
</style>