<template>
    <div class="panel">
        <h2 class="ta-c title-login">Reset password</h2>
        <div class="input">
            <Label name="email" text="Email"/>
            <Input login/>
        </div>
        <p>Please enter your email here and we'll send you the reset-password link.</p>
        <Button
            class="w-100p mt-15"
            content="Send"
            background="2aa052fc" />
    </div>
</template>
<script>
import Input from "../Items/Input.vue";
import Button from "../Items/Button.vue";
import Label from "../Items/Label.vue";

export default {
    components: {
        Input,
        Button,
        Label
    }
}
</script>
<style scoped>
    Input {
        width: 100%;
    }
    .input {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 10px;
        text-align: start;
    }
    .panel {
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 40px;
        box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.418);
        border-radius: 5px;
        max-width: 300px;
    }
    .title-login {
        font-weight: 400;
    }
    p {
        color: #3e5c7a
    }
</style>