<template>
  <div class="root" :light="version == 2 || null">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: localStorage.getItem("version")
    }
  }
}
</script>

<style>
  .root {
    background-color: #303030;
    color: #f2f2f2;
  }
  .root[light] {
    background-color: #d8d8d8;
    color: #202020;
  }
</style>
