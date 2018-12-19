<template>
    <div class="content">
        <section class="mobile-nav">
          <div class="overlay"></div>
          <div class="sort" v-on:click="$emit('show-about', $event, 'mobile')">
            <div class="slider-trigger list"><i class="iconfont icon-sort" style="color:#FFFFFF;font-size: 30px;"></i></div>
          </div>
          <header class="header">
            <div class="profilepic">
              <img class="avatar" src="../../../assets/avatar.jpg" alt="网站图标">
            </div>
            <hgroup>
              <h1 class="header-author">辰辰沉沉大辰沉</h1>
            </hgroup>
            <p class="header-subtitle">自留地整理知识点</p>
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
          <div class="mobile-mask"></div>
        </section>
        <article id="post-CSDN博客" class="article">
          <div class="article-inner">
            <header class="article-header">
              <h1>
                <span class="article-title">技术博客</span>
              </h1>
            </header>
            <div class="article-entry">
                <br>
                <div v-for="(blogList, category) in blogGroup" :key="category">
                  <h2>{{category}}</h2>
                  <div v-for="(blog, index) in blogList" :key="index">
                    <p>
                      <a target="_blank" :href="blog.link">
                        {{blog.name}}
                      </a>
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </article>
    </div>
</template>

<style scoped>

 @import "./MainContent.css";

</style>

<script src="./MainContent.js"></script>
