<template>
    <div :class="{
        'flex fd-c ai-c jc-c wrapper': true,
        [class_p]: true,
    }">
        <img v-bind:src="src" :alt="name" class="
            profile
            xs-mxw-80
            sm-mxw-100
            md-mxw-130
        ">
        <p 
        :class="{
            'c-dc7600': name=='Pheareak',
            'c-2b6b8a': name=='Sreyone',
            'c-2f2f2f': name=='Soatra',
            'xs-fs-20 sm-fs-24 md-fs-28': true,
            'name': true
        }">
            {{name}}
        </p>
    </div>
</template>
<script>
export default {
    props: {
        src: String,
        name: String,
        class_p: String
    }
}
</script>
<style scoped>
    .profile {
        width: 100%;
        margin-top: 20px;
        border-radius: 50%;
    }
    .name {
        padding-top: 10px;
        letter-spacing: 4px;
        font-family: "ever after"
    }
</style>