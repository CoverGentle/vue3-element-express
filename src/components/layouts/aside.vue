<template>
  <div class="aside-contianer">
    <div class="logo-box">
      <h3>logo</h3>
    </div>
    <el-scrollbar>
      <el-menu
        :collapse="isDisplay"
        default-active="/home"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/home">
            <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon> <MapLocation/></el-icon>  <span>用户管理</span> 
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="1-1">Option 1</el-menu-item>
            <el-menu-item index="1-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="1-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="/setting">
            <el-icon><Setting /></el-icon> <span>系统管理</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Box,
  House,
  MapLocation,
  MostlyCloudy,
  User,
  Setting,
  Edit,
} from '@element-plus/icons-vue'
import { reactive, ref, toRefs } from 'vue'
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const props = defineProps<{
  isDisplay: boolean
}>()
const isCollapse = ref(false)
const emit = defineEmits<{
  (event: 'changeWidth', id: boolean): void
}>()
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
  emit('changeWidth', isCollapse.value)
}
</script>

<style lang="scss" scoped>
.aside-contianer {
  height: 100%;
  border-right: solid 1px var(--el-menu-border-color);

  .logo-box {
    width: var(--el-aside-width, 180px);
    height: 50px;
    line-height: 100%;
    text-align: center;

    h3 {
      height: 100%;
      line-height: 40px;
    }
  }

  .el-menu {
    border-right: 0;
  }
}
</style>
