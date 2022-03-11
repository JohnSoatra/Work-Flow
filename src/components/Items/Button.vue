<template>
    <button
        :class="{
            [disabled ? '' : 'c-'+color]: true,
            [disabled ? '' : 'bgc-'+background]: true
        }"
        :disabled="disabled || null"
        @click="onClicked">
        <slot></slot>
    </button>
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
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onClick() {
            if (!this.disabled) {
                this.$emit("click");
            }
        }
    }
}
</script>
<style scoped>
    button {
        border-radius: 5px;
    }
    button[disabled] {
        border-radius: 5px;
        background-color: gray;
    }
</style>