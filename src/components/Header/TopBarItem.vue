<template>
    <router-link :to="'/' + (item.toLowerCase() == 'home' ? '' : item)" class="fw-500">
        <span v-if="(item.toLowerCase() != 'profile') || (src == '')">{{item}}</span>
        <img
            v-else
            class="image-profile"
            :src="src"
            alt="profile">
    </router-link>
    <div class="spacer"></div>
</template>

<script>
import { base } from '../../constants/url';
import { getCookie } from "../../helpers/cookie";
import { dataUrl } from '../../helpers/fetch_file';
import { get } from '../../helpers/fetch_php';

export default {
    data() {
        return {
            src: ""
        }
    },
    props: {
        item: String
    },
    async created() {
        if (this.item.toLowerCase() == 'profile') {
            const image = sessionStorage.getItem("image");
            if (image) {
                this.src = image
            } else {
                const username = getCookie("username");
                const password = getCookie("password");
                const endPoint = base + `/users?username=${username}&password=${password}`;
                const result = await get(endPoint);
                const user = await result.json();
                const url = await dataUrl(base + "/storage/" + user.image);
                sessionStorage.setItem("image", url);
                this.src = url;
            }
        }
    }
}
</script>
<style scoped>
    * {
        color: #004058
    }
    .spacer {
        width: 8px;
    }
    .image-profile {
        width: 25px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        box-shadow: 0px 0px 3px 1px #8686866b;
    }
</style>