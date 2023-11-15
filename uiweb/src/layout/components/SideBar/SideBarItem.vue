<template>
  <div :class="{ 'simple-mode': isCollapse }">
    <el-sub-menu
      :index="userRouter.path"
      v-if="userRouter?.children.length !== 0 && userRouter?.path !== '/'"
    >
      <template #title>
        <el-icon v-if="userRouter?.meta.icon">
          <component :is="userRouter?.meta.icon"></component>
        </el-icon>
        <span>{{ userRouter?.meta.title }}</span>
      </template>
      <SideBarItem
        v-for="(item, index) in userRouter?.children"
        :key="index"
        :router="item"
      ></SideBarItem>
    </el-sub-menu>
    <el-menu-item v-else :index="userRouter?.path"  @click="handleMenu(userRouter)">
        <el-icon v-if="userRouter?.meta.icon">
          <component :is="userRouter?.meta.icon"></component>
        </el-icon>
        <template #title>
        <span>{{ userRouter?.meta.title }}</span>
      </template>
    </el-menu-item>
  </div>
</template>
   
<script setup lang="ts">
import { reactive, computed } from "vue";
import { UserStore } from "@/store/modules/user";
const userStore = UserStore();
const props = defineProps({
  router: Object,
  isCollapse: Boolean,
});
let router = reactive<any>(props);
let userRouter = reactive<any>({});
userRouter = computed(() => {
  if (router.router?.path.length !== 0) {
    return router.router;
  }
});

const handleMenu = (e) =>{
  userStore.selectMenu(e)
}
</script>
<style lang="less" scoped>
// 解决isCollapse文字隐藏问题
.simple-mode {
  :deep(.el-sub-menu) {
    .el-sub-menu__icon-arrow {
      display: none;
    }
    span {
      visibility: hidden;
    }
  }
}
</style>