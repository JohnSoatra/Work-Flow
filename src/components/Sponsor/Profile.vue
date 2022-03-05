<template>
    <div class="flex fd-c ai-c jc-c wrapper">
        <img v-bind:src="src" :alt="name" class="profile">
        <p 
        :class="{
            'c-dc7600': name=='Pheareak',
            'c-2b6b8a': name=='Sreyone',
            'c-2f2f2f': name=='Soatra',
            name: true
        }">
            {{name}}
        </p>
    </div>
</template>
<script>
export default {
    props: {
        src: String,
        name: String
    }
}
</script>
<style scoped>
    .wrapper {
        width: 33%;
        max-width: 130px;
    }
    .profile {
        width: 100%;
        border-radius: 50%;
    }
    .name {
        padding-top: 10px;
        font-size: 28px;
        letter-spacing: 4px;
        font-family: "ever after"
    }
</style>