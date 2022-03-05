<template>
  <div class="root bgc-efefef">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 1.5;
}
.btn-icon {
    background-color: transparent;
    padding: 0px;
    color: #2c3e50;
    border-radius: 0px;
    text-transform: none;
}
.svg-icon {
    width: 25px;
    fill: #465e75;
    border-radius: 10px;
    padding: 4px;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 5px;
    margin-right: 5px;
}
.svg-icon:hover {
    filter: brightness(1.5);
}
.svg-icon:active {
    transform: scale(1.06, 1.06);
}
</style>
