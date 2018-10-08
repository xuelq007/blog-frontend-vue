<template>
    <div class="side-bar">
        <div class="overlay"></div>
        <div class="intrude-less">
            <header class="header">
                <a href="/" class="profileImg">
                    <img src="../../../assets/avatar.jpg" class="avatar">
                </a>
                <hgroup>
                    <h1 class="header-author"><a href="/">辰辰沉沉大辰沉</a></h1>
                </hgroup>
                <p class="header-subtitle">自留地整理知识点</p>
                <nav class="header-menu">
                    <ul>
                        <li><a href="/">主页</a></li>
                    </ul>
                </nav>
                <nav class="header-smart-menu">
                    <a href="javascript:void(0)">所有文章</a>
                    <a v-on:click="$emit('show-about', $event, 'pc')" href="javascript:void(0)">关于我</a>
                </nav>
                <nav class="header-nav">
                <div class="social">
                    <a class="github" target="_blank" href="https://github.com/xuelq007" title="github">
                        <i class="iconfont icon-github"></i>
                    </a>
                    <a class="github" target="_blank" href="https://blog.csdn.net/Napoleonxxx" title="csdn">
                        <i class="iconfont icon-csdn"></i>
                    </a>
                </div>
        </nav>
            </header>
        </div>
    </div>

</template>

<style scoped>

 @import "./SideBar.css";

</style>

<script src="./SideBar.js"></script>
