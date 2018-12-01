<template>
  <div class="container">
    <!-- 锚点用于回到顶部 -->
    <div class="target"></div>
    <canvas id="canvas" class="canvas"></canvas>
    <side-bar id="sideBar" v-on:show-about="showAbout"></side-bar>
    <about id="about"></about>
    <main-content id="content" v-on:show-about="showAbout"></main-content>
    <go-top></go-top>
  </div>
</template>

<script src="./HomePage.js"></script>
<style src="./HomePage.css"></style>
