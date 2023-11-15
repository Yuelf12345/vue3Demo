<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item
        v-for="(item, index) in tags"
        :key="index"
        :to="item.path"
        >{{ item.meta?.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>

    <!-- <el-tag
      v-for="(tag, index) in tags"
      :key="index"
      :closable="tag.path !== '/'"
      class="mx-1"
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      <router-link :to="tag.path">{{ tag.meta?.title }}</router-link>
    </el-tag> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { UserStore } from "@/store/modules/user";
const { config } = storeToRefs(UserStore());
const userStore = UserStore();
const tags = computed(() => {
  return config.value.historyList;
});

const handleClose = (e) =>{
    userStore.closeTag(e)
}
</script>