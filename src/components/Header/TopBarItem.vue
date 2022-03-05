<template>
    <router-link :to="'/' + link" class="fw-500">{{item}}</router-link>
    <div class="spacer"></div>
</template>

<script>
export default {
    props: {
        item: String
    },
    data: function() {
        return {
            link: this.item.toLowerCase() == 'home' ? "" : this.item
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
</style>