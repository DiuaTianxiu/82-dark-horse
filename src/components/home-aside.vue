<template>
  <div class="aside">
    <div class="logo">
      <img src="../assets/logo_admin.png" alt="">
    </div>

    <el-menu
    background-color="#323745"
    text-color="#adafb5"
    style='width:201px'
      active-text-color="#ffd04b"
    router
    >
          <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-reading"></i>
                <span>内容管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">发布文章</el-menu-item>
                <el-menu-item index="1-2">内容列表</el-menu-item>
                <el-menu-item index="1-3">评论管理</el-menu-item>
                <el-menu-item index="1-3">素材管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu >
                <template slot="title">
                  <i class="el-icon-magic-stick"></i>
                  <span>粉丝管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">图文数据</el-menu-item>
                  <el-menu-item index="1-2">粉丝概况</el-menu-item>
                  <el-menu-item index="1-3">粉丝列表</el-menu-item>
                  <el-menu-item index="1-3">粉丝画像</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2">
                  <i class="el-icon-no-smoking"></i>
                  <span slot="title">账户信息</span>
                </el-menu-item>
            </el-menu>

  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  .aside {
    width: 200px;
    height: 100vh;
    background-color:pink;

  }
  .logo{
    background-color:#2e2f32;
    height: 50px;
    text-align: center;
    padding: 10px 0;
    img{
      height: 30px;
    }
  }
</style>
