<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import './assets/iconfont/iconfont.css'

export default {
  name: 'App'
}
</script>

<style>

#app {
  height: 100%;
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body, dd, dl, li, ol, ul {
    height: 100%;
    margin: 0;
    padding: 0;
}

ol, ul {
  list-style: none outside none;
}

* {
    box-sizing: border-box;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}
</style>
