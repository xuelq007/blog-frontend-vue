<template>

  <div class="container">
    <div class="skeleton-bac-animation"></div>
    <section class="side-bar">
      <div class="overlay"></div>
      <div class="intrude-less">
        <header class="header">
          <div class="profileImg"></div>
          <h1 class="header-author"></h1>
          <p class="header-subtitle"></p>
          <div class="header-menu"></div>
          <div class="header-menu"></div>
          <div class="icons">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </header>
      </div>
    </section>
    <div class="content">
      <section class="mobile-nav">
          <header class="header">
            <div class="profilepic">

            </div>
            <div class="hgroup">
              <h1 class="header-author"></h1>
              <p class="header-subtitle"></p>
              <nav class="header-nav">
                <div class="icons">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </nav>
            </div>
          </header>
          <div class="mobile-mask"></div>
        </section>
      <article class="article">
        <div class="article-inner">
          <header class="article-header">
            <h1 class="article-title"></h1>
          </header>
          <div class="article-entry">
                <br>
                <div v-for="category in [1,2,3]" :key="category">
                  <h2></h2>
                  <div v-for="blog in [1,2,3,4,5]" :key="blog">
                    <p></p>
                  </div>
                </div>
          </div>
        </div>
      </article>
    </div>
  </div>

</template>

<script>
export default {
  name: 'skeleton'
}
</script>

<style scoped>

.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.skeleton-bac-animation {
  position: absolute;
  z-index: auto;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.5) 50%,hsla(0,0%,100%,0) 80%);
  background-size: 30% 90%;
  background-repeat: no-repeat;
  animation: backpos 2s ease-in-out 0s infinite;
  z-index: 999;
}

@keyframes backpos {
  0% {
    background-position-x: -200px;
  }

  100% {
    background-position-x: 100%;
  }
}

.side-bar {
  position: fixed;
  width: 300px;
  background: #FFFFFF;
  height: 100%;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 180px;
  background: #4d4d4d;
}

.intrude-less {
  width: 76%;
  text-align: center;
  margin: 112px auto 0;
}

.header {
  position: relative;
  width: 100%;
  height: 300px;
}

.profileImg {
  position: relative;
  border: 5px solid #fff;
  width: 128px;
  height: 128px;
  margin: 0 auto;
  overflow: hidden;
  background: #E7E7E7;
  transition: all .2s ease-in;
  text-align: center;
  border-radius: 300px;
}

.header-author {
  text-align: center;
  margin: .67em 0;
  font-size: 30px;
  transition: .3s;
  height: 36px;
  background: #E7E7E7;
}

.header-subtitle {
  line-height: 25px;
  height:25px;
  background: #E7E7E7;
}

.header-menu {
  margin-top: 100px;
  height: 25px;
  background: #E7E7E7;
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.circle {
  width: 28px;
  height: 28px;
  background: #E7E7E7;
  border-radius: 100%;
  margin-left: 20px;
}

.content {
  position: absolute;
  right: 0;
  min-height: 100%;
  background: #eaeaea;
  left: 300px;
  width: auto;
}

.article {
  position: relative;
  margin: 0 30px 30px;
  border: 1px solid #ddd;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  background: #fff;
}

.article-inner {
  border-color: #d1d1d1;
}

.article-header {
  border-left: 5px solid #4d4d4d;
  padding: 30px 0 15px 25px;
  padding-left: 8%;
  text-align: left;
}

.article-title {
  height: 36px;
  width: 300px;
  background: #E7E7E7;
}

.article-entry {
  line-height: 1.8em;
  padding-right: 8%;
  padding-left: 8%;
  text-align: left;
}

.article-entry p {
  margin-top: 10px;
  height: 28px;
  width: 500px;
  background: #E7E7E7;
}

.article-inner p {
  height: 28px;
  width: 500px;
  margin: 0 0 1.75em;
  background: #E7E7E7;
}

.article-inner h2 {
  height: 34px;
  width: 200px;
  line-height: 1.2173913043;
  margin-bottom: 1.2173913043;
  background: #E7E7E7;
}

.mobile-nav {
  display: none;
}

@media screen and (max-width: 800px) {

    .side-bar {
      display: none;
    }

    .content {
      left: 0;
    }

    .mobile-nav {
      display: block;
    }

    .mobile-nav .profilepic {
      position: relative;
      display: block;
      text-align: center;
      z-index: 100;
      border: 5px solid #fff;
      border-radius: 300px;
      width: 128px;
      height: 128px;
      margin: 0 auto;
      overflow: hidden;
      background: #E1E1E1;
    }

    .mobile-nav .hgroup {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .hgroup p {
      width: 200px;
    }

    .header {
      padding: 10px 0 0;
    }

    .header-author {
      background: #E1E1E1;
      height: 36px;
      width: 200px;
      position: relative;
      margin-top: 20px;
      text-align: center;
    }

    .header-subtitle {
      background: #E1E1E1;
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      overflow: hidden;
      padding: 0 24px;
    }

    .header-nav {
      position: relative;
      width: 100%;
    }

    .icons {
      margin-top: 0;
    }

    .icons .circle {
      background: #E1E1E1;
    }
}

</style>
