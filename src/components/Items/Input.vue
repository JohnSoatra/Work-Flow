<template>
    <input :block="block || null">
</template>
<script>
export default {
    props: {
        block: {
            type: Boolean,
            default: true
        },
    },
    methods: {
        updateValue() {
            this.$emit('input', this.value);
        }
    }
}
</script>
<style scoped>
    input {
        font-weight: 500;
        font-size: 15px;
        color: #213a51;
    }
    input[block] {
        display: block;
    }
    input:focus {
        border-color: transparent;
        box-shadow: 0px 0px 0px 2.5px #b0b0b0ab;
    }
    input[login]:focus {
        border-color: transparent;
        box-shadow: 0px 0px 0px 2.5px #2fce64a6;
    }
    input[invalid]:focus {
        border-color: transparent;
        box-shadow: 0px 0px 0px 2.5px #da5555;
    }
    
</style>