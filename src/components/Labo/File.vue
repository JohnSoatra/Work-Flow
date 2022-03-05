<template>
    <button :class="{
        'file flex ai-c btn-simple btn-icon xs-12': true,
        'selected': selectedIndex == index || selectedIndex == -2
        }"
        @focus="onFocus"
        @blur="onBlur"
        @dblclick="onDoubleClick">
        <svg v-if="file" class="svg-icon file-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M376.097774 551.170115l173.962054 0 0 34.792411-173.962054 0 0-34.792411Z"  /><path d="M376.097774 673.966858l243.546875 0 0 34.792411-243.546875 0 0-34.792411Z"  /><path d="M376.097774 429.396677l243.546875 0 0 34.792411-243.546875 0 0-34.792411Z"  /><path d="M799.170418 947.106726 225.645157 947.106726c-29.241998 0-52.213175-24.619724-52.213175-53.861722l-0.815575-764.138554c0-29.259394 22.970154-52.213175 52.213175-52.213175l404.64904 0c12.534478 0 24.704658 4.461615 34.256198 12.551874l170.065304 173.447331c10.741645 8.999978 16.766872 24.594141 16.766872 40.212864l0.815575 591.787184C851.382571 924.161131 828.412416 947.106726 799.170418 947.106726zM224.829582 111.702058c-10.044774 0-18.219967 8.175193-18.219967 18.219967l0.815575 764.138554c0 10.06217 8.175193 18.237363 18.219967 18.237363l573.525262 0c10.044774 0 18.219967-8.175193 18.219967-18.219967l-0.815575-591.787184c0-5.395894-2.353604-10.461259-6.459109-13.93743L640.058584 114.90603c-2.098801-1.674129-6.271844-3.203972-10.579963-3.203972L224.829582 111.702058z"  /><path d="M828.399113 307.623239 619.644649 307.623239 619.644649 98.868775 654.43706 98.868775 654.43706 272.830829 828.399113 272.830829Z"  /></svg>
        <svg v-if="!file" class="svg-icon file-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M860.992 884.352H162.88A163.136 163.136 0 0 1 0 721.408v-581.76h860.992A163.2 163.2 0 0 1 1024 302.592v418.88a163.2 163.2 0 0 1-163.008 162.88zM46.528 186.176v535.232a116.48 116.48 0 0 0 116.352 116.352h698.112a116.416 116.416 0 0 0 116.352-116.352V302.592a116.416 116.416 0 0 0-116.352-116.352H46.528z" /><path d="M535.232 186.176H0v-23.232A163.136 163.136 0 0 1 162.88 0h279.296c51.328 0 93.056 41.728 93.056 93.12v93.056zM48.896 139.648h439.872v-46.528a46.72 46.72 0 0 0-46.592-46.592H162.88A116.672 116.672 0 0 0 48.896 139.648z"/></svg>
        <p>{{ name }}</p>
    </button>
</template>
<script>

export default {
    props: {
        index: Number,
        name: String,
        link: String,
        file: Boolean,
        selectedIndex: Number
    },
    data: function() {
        return {
            
        }
    },
    methods: {
        onDoubleClick() {
            if (!this.file) {
                let path = this.$route.path;
                if (!path.endsWith("/")) {
                    path += "/";
                }
                this.$router.push({ path: path + this.name });
            } else {
                // if (this.name.endsWith(".jpg"))
                if (this.name.endsWith(".txt")) {
                    window.open("/movie.txt", "_self");
                } else {
                    window.open("/cars.jpg", "_self");
                }
            }
        },
        onFocus() {
            this.$emit(
                "on-focus", 
                {
                    name: this.name,
                    index: this.index
                }
            );
        },
        onBlur() {
            this.$emit(
                "on-blur",
                {
                    name: this.name,
                    index: this.index
                }
            );
        }
    }
}
</script>
<style scoped>
    .file {
        border-left-width: 1px;
        border-right-width: 1px;
        border-bottom-width: 1px;
        border-style: solid;
        border-color: rgb(194, 194, 194);
        padding: 4px;
        background-color: #fafafa;
    }
    .file[last] {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .selected {
        background-color: #ccc;
    }
    .file-icon {
        fill:  #273f55;
    }
    .btn-icon {
        font-weight: 500;
    }
    .btn-simple:active {
        transform: none;
    }
</style>