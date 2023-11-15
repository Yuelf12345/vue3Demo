<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px" @change="switchCollapse">
          <el-radio-button v-if="!isCollapse" :label="true" >
            <el-icon><Failed /></el-icon>
          </el-radio-button>
          <el-radio-button v-else :label="false">
            <el-icon><Checked /></el-icon>
          </el-radio-button>
        </el-radio-group>
        <div class="drop">
          <el-dropdown>
            <el-button type="primary">
              Dropdown List<el-icon class="el-icon--right"></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item @click="out">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <img
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { UserStore } from "@/store/modules/user";
const { config } = storeToRefs(UserStore())
const userStore = UserStore();

import { useRouter } from "vue-router";
const router = useRouter();

const isCollapse = ref(config.value.isCollapse)

import {
  Checked,
  Failed,
} from "@element-plus/icons-vue";


// 切换侧边栏
const switchCollapse = (value:boolean) =>{
    userStore.switchCollapse(value)
}
// 退出登录
const out = () =>{
   userStore.resetUser().then(()=>{
    router.push({ path: "/login" })
   })
}
</script>

<style scoped lang="scss">
  .drop {
    display: flex;
    align-content: center;
    gap: 10px;
  }
  img {
    height: 40px;
    width: 40px;
  }
</style>