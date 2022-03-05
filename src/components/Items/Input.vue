<template>
    <input
        :type="type"
        :placeholder="placeholder"
        :block="block || null">
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
            default: ""
        },
        block: {
            type: Boolean,
            default: true
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
    
</style>