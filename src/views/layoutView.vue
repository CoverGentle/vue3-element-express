<template>
  <div class="layoutView">
    <el-container>
      <el-aside :width="isShow ? '66px' : '200px'">
        <Aside :isDisplay="isShow"></Aside>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <Header @handleShowMore="updateShow"></Header>
        </el-header>
        <el-main>
          <tabs />
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Aside from '@/components/layouts/aside.vue'
import Header from '@/components/layouts/header.vue'
import tabs from '@/components/layouts/tabs.vue'
import { ref, computed, provide, nextTick } from 'vue'
const isShow = ref(false)
// 展示伸缩
const updateShow = (val: any) => {
  console.log(val.value)

  isShow.value = val.value
}
</script>

<style lang="scss" scoped>
.layoutView {
  height: 100vh;
  .el-container {
    height: 100%;
    .el-aside {
      overflow: hidden;
      box-sizing: border-box;
      flex-shrink: 0;
      width: var(--el-aside-width, 200px);
    }
    .el-header {
      --el-header-padding: 0 10px;
      height: 50px;
    }

    .el-main {
      --el-main-padding: 10px;
    }
  }
}
</style>
