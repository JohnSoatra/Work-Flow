<template>
    <div class="
        container
        d-xs-w-100p
        embed-wrapper
        f-1 flex jc-c ai-c
        box
    ">
        <svg v-if="processing" class="svg-icon process-icon process-icon-big" viewBox="0 0 122.61 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M111.9,61.57a5.36,5.36,0,0,1,10.71,0A61.3,61.3,0,0,1,17.54,104.48v12.35a5.36,5.36,0,0,1-10.72,0V89.31A5.36,5.36,0,0,1,12.18,84H40a5.36,5.36,0,1,1,0,10.71H23a50.6,50.6,0,0,0,88.87-33.1ZM106.6,5.36a5.36,5.36,0,1,1,10.71,0V33.14A5.36,5.36,0,0,1,112,38.49H84.44a5.36,5.36,0,1,1,0-10.71H99A50.6,50.6,0,0,0,10.71,61.57,5.36,5.36,0,1,1,0,61.57,61.31,61.31,0,0,1,91.07,8,61.83,61.83,0,0,1,106.6,20.27V5.36Z"/></svg>
        <embed
            :src="src"
            class="embed to-tl"
            @load="onFileLoaded">
    </div>
</template>
<script>
import { base } from '../../constants/url'
import KeyBoard from "../../models/KeyBoard";

export default {
    data() {
        return {
            src: this.$route.fullPath.replace(
                "/show",
                base
            ),
            processing: true,
        }
    },
    methods: {
        onFileLoaded() {
            this.processing = false;
        }
    },
    created() {
        const page = this;
        document.addEventListener("keydown", function(evt) {
            if (evt.key === KeyBoard.Backspace) {
                page.$router.back();
            }
        });
    }
}
</script>
<style scoped>
    .embed-wrapper {
        /* border-radius: 5px;
        box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.418); */
    }
    .embed {
        width: 100%;
        height:100%;
        object-fit: scale-down;
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
        animation-duration: 1500ms;
    }
</style>