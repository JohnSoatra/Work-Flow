<template>
    <Header />
    <h2>password = {{state.hasPassword}} , username = {{state.hasUsername}}</h2>
    <button @click="change" class="w-fit-content">Change</button>
    <p class="
        bgc-pink
        xs-fs-20
        sm-fs-25
        md-fs-30
        xs-mxw-100
        sm-mxw-200
        md-mxw-300
        ">
    Hello World
    </p>
</template>
<script>
import state, { checkProp, always } from "../state";
import Header from "../components/Header/Header.vue";

export default {
    components: {
        Header
    },
    data: function() {
        return {
            state,
        }
    },
    methods: {
        change() {
            state.hasUsername = !state.hasUsername;
            state.hasPassword = !state.hasPassword;
        }
    },
    created: function() {
        always(() => {
            checkProp(
                this.state,
                "hasUsername",
                "hasPassword"
            );
        });
    }
}
</script>