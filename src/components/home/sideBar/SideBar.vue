<template>

<div>
    <div class="side-bar">
        <div class="overlay"></div>
        <div class="intrude-less">
            <header class="header">
                <a href="/" class="profileImg">
                    <img src="../../../assets/avatar.jpg" class="avatar" alt="网站图标">
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
                    <a @click="dialogVisible = true" href="javascript:void(0)">管理</a>
                    <a href="javascript:void(0)">所有文章</a>
                    <a @click="$emit('show-about', $event, 'pc')" href="javascript:void(0)">关于我</a>
                </nav>
                <nav class="header-nav">
                <div class="social">
                    <a class="github" target="_blank" rel="noopener" href="https://github.com/xuelq007" title="github">
                        <i class="iconfont icon-github"></i>
                    </a>
                    <a class="github" target="_blank" rel="noopener" href="https://blog.csdn.net/Napoleonxxx" title="csdn">
                        <i class="iconfont icon-csdn"></i>
                    </a>
                </div>
        </nav>
            </header>
        </div>
    </div>

    <el-dialog
      title="管理员验证"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      >
      <el-input v-model.trim="user" placeholder="用户名" :style="{marginBottom: '20px'}"></el-input>
      <el-input type="password" v-model.trim="password" placeholder="密码" @keyup.enter.native="validateUser"></el-input>
      <div v-if="errorUser" :style="{color: 'red', textAlign: 'left', marginTop: '20px'}">用户名或密码不正确</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="validateUser">确 定</el-button>
      </span>
    </el-dialog>
</div>

</template>

<style scoped>

 @import "./SideBar.css";

</style>

<script src="./SideBar.js"></script>
