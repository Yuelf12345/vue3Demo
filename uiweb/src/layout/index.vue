<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar class="header"></NavBar>
      </el-header>
      <el-container>
        <el-aside class="sideBar">
          <SideBar></SideBar>
        </el-aside>
        <el-main>
          <TagsView/>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { AppMain, NavBar, SideBar,TagsView } from "./components";
</script>
  
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.sideBar {
  width: auto !important;
  height: 88vh !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  min-height: 100%;
}
</style>