<template>
  <div>
    <el-menu
      router
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
    <SideBarItem 
    v-for="(item, i) in userRouter()" 
    :key =i 
    :router = item 
    v-show="item.children.length !== 0" 
    :index="item.path"
    :isCollapse="isCollapse">
  </SideBarItem>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import SideBarItem from "./SideBarItem.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { UserStore } from "@/store/modules/user";
import { getToken } from "@/utils/token";
const route = useRoute();
const { config } = storeToRefs(UserStore());
const isCollapse = computed(() => config.value.isCollapse);
const onRoutes = computed(() => {
  return route.path;
});
const userRouter = () => {
  let userRouting: any = getToken("userRouter", false);
  userRouting = JSON.parse(userRouting);
  return userRouting
};
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 200px; */
  min-height: 100%;
}
</style>