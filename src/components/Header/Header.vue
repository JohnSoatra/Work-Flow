<template>
    <div class="header" :light="light">
        <div class="
            container
            grid
            gtr-1-1-1
            gtc-a-1-a
        ">
            <div class="
                flex jc-c ai-c gces-3 grs-2
                xs-gcs-2
                sm-gcs-1
            ">
                <div class="xs-w-10px sm-w-10px"></div>
                <p class="title">PaperPen</p>
                <div class="xs-f-1 sm-f-0"></div>
            </div>
            <div class="flex ai-c jc-c gcs-1 grs-2">
                <img
                :src="logoSrc"
                alt="icon"
                :class="{
                    'logo dt-mt-5px': true,
                    'dt-bgc-f2f2f2 dt-c-202020': !light
                }"
                :data-title="light ? 'PaperPen version 2' : 'PaperPen version 1'"
                title-position="bb rl">
            </div>
            <div class="flex ai-c jc-c gcs-3 grs-2">
                <div class="box">
                    <button id="btn-v" class="btn-v flex ai-fe z-1" @click="onBtnVersionClicked">
                        <p>Version {{light ? 2 : 1}}</p>
                        <svg class="i-dr" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M952.16851 329.603857l-61.405535-60.778248c-8.91402-8.840342-23.154349-9.061376-31.774681-0.517793L513.860882 597.050048 161.772942 254.480902c-8.729825-8.655124-23.12058-8.43409-32.108279 0.481977l-61.998029 61.367673c-9.025561 8.951883-9.248641 23.156396-0.517793 31.81152l430.986895 419.334507c8.691963 8.656147 23.083741 8.433066 32.108279-0.518816l61.997006-61.367673c1.418302-1.404999 2.589988-2.952238 3.572362-4.579295l356.838128-339.929016C961.306634 352.539218 961.084577 338.40736 952.16851 329.603857z"  /></svg>
                    </button>
                    <div id="v-b" class="pos-a w-100p of-h">
                        <div id="dr-v" class="dr anim v-h">
                            <p class="dr-i ta-c" @click="onV1Clicked">1</p>
                            <div class="divider mt-5 mb-5"></div>
                            <p class="dr-i ta-c" @click="onV2Clicked">2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        const logoSrc = this.light ?
            require("../../assets/images/light/paperpen2.svg") :
            require("../../assets/images/dark/paperpen.svg");

        return {
            btn_v: null,
            dr: null,
            logoSrc
        }
    },
    props: {
        light: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onBtnVersionClicked(evt) {
            evt.stopPropagation();
            this.toggleAnim(this.dr, "an-sft", "an-stt");
        },
        onV1Clicked(evt) {
            evt.stopPropagation();
            this.onItemClick(1);
        },
        onV2Clicked(evt) {
            evt.stopPropagation();
            this.onItemClick(2);
        },
        onItemClick(version) {
            if (localStorage.getItem("version") != version) {
                localStorage.setItem("version", version);
                this.$router.go();
            }
        },
        toggleAnim(element, from, to) {
            if (element.classList.contains(from)) {
                element.classList.remove(from);
                element.classList.add(to);
            } else {
                element.classList.remove(to);
                element.classList.add(from);
            }
        },
        changeAnim(element, from, to) {
            element.classList.remove(from);
            element.classList.add(to);
        }
    },
    created() {
        const page = this;
        document.addEventListener("click", function() {
            if (page.dr.classList.contains("an-sft")) {
                page.changeAnim(page.dr, "an-sft", "an-stt");
            }
        });
        setTimeout(() => {
            this.btn_v = document.getElementById("btn-v");
            this.dr = document.getElementById("dr-v");
            this.dr.onanimationstart = () => {
                if (this.dr.classList.contains("an-sft")) {
                    this.dr.classList.remove("v-h");
                }
            }
            this.dr.onanimationend = () => {
                if (this.dr.classList.contains("an-stt")) {
                    this.dr.classList.add("v-h");
                }
            }
        }, 0);
    }
}
</script>
<style scoped>
    .logo {
        width: 24px;
        margin-left: 5px;
    }
    .header, .footer {
        width: 100%;
    }
    .header {
        height: 40px;
        background-color: #404040;
        box-shadow: 0px 0px 6px 1px rgba(65, 65, 65, 0.418);
    }
    .title {
        font-size: 17px;
        cursor: default;
    }

    .btn-v {
        font-size: 15px;
        border-radius: 0px;
        border: 1px solid #666;
        border-top: none;
        border-bottom: none;
        background-color: transparent;
        box-shadow: none;
    }
    .btn-v:hover { 
        transform: scale(1, 1);
        filter: brightness(1);
        background-color: #505050;
    }
    .btn-v:active { 
        filter: brightness(1);
        background-color: #606060;
    }
    .i-dr {
        width: 15px;
        margin-left: 10px;
        fill: #f2f2f2;
        opacity: .8;
    }
    .dr {
        padding-top: 5px;
        padding-bottom: 5px;
        border: 1px solid #666;
        background-color: #505050;
        animation-duration: 200ms;
        transform: translateY(-100%);
    }
    .dr:first-child p {
        font-size: 15px;
        cursor: default; 
        transition: background linear 150ms;
    }
    .dr:first-child p:hover {
        background-color: rgb(94, 117, 138);
    }
    .dr:first-child p:active {
        background-color: rgb(91, 127, 162);
    }

    /* light mode */
    .header[light] {
        background-color: #ddd;
        color: #202020;
    }
    .header[light] .btn-v {
        color: #202020;
        border-color: var(--bd);
    }
    .header[light] .btn-v:hover {
        background-color: #d5d5d5;
    }
    .header[light] .btn-v:active {
        background-color: #d0d0d0;
    }
    .header[light] .i-dr {
        fill: #202020;
    }
    .header[light] .dr {
        background-color: #e5e5e5;
        border-color: var(--bd);
    }
    .header[light] .dr:first-child p:hover {
        background-color: rgb(165, 212, 255);
    }
    .header[light] .dr:first-child p:active {
        background-color: rgb(194, 224, 255);
    }
</style>
