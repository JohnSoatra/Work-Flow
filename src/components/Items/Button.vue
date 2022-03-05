<template>
    <button :class="{
        ['c-'+color]: true,
        ['bgc-'+background]: true
    }">{{content}}</button>
</template>
<script>
export default {
    props: {
        color: {
            type: String,
            default: "f2f2f2"
        },
        background: {
            type: String,
            default: "2aa052fc"
        },
        content: {
            type: String,
            default: "Button"
        }
    }
}
</script>
<style scoped>
    button {
        border-radius: 5px;
    }
</style>