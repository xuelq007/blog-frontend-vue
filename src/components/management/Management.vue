<template>
  <div class="container"
        v-loading="loading"
        element-loading-text="操作执行中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">

      <el-radio-group v-model="operation" class="radioGroup" @change="onOperationChange">
        <el-radio :label="3" border>增加</el-radio>
        <el-radio :label="6" border>删除</el-radio>
        <el-radio :label="9" border>修改</el-radio>
        <el-radio :label="12" border>查询</el-radio>
      </el-radio-group>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
        label-width="100px" :label-position="'left'" class="demo-ruleForm">

          <el-form-item label="id" prop="blogId" v-if="operation === 6 || operation === 9">
            <el-input v-model.trim="ruleForm.blogId" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="文章名" prop="blogName">
            <el-input v-model.trim="ruleForm.blogName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="链接" prop="link">
            <el-input v-model.trim="ruleForm.link" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="分类" prop="category">
            <el-input v-model.trim="ruleForm.category"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="returnHomePage">返回主页</el-button>
          </el-form-item>
      </el-form>
      <div>{{queryResult}}</div>

      <div class="notification-container">
        <el-button type="warning" :disabled="notification.length===0" @click="sendNotification">通知
        </el-button>
        <el-input type="textarea" :rows="2" placeholder="请输入通知内容"
          v-model.trim="notification"></el-input>
      </div>
  </div>
</template>

<script src="./Management.js"></script>
<style scoped>
    @import "./Management.css";
</style>
