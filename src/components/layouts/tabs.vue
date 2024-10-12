<template>
  <div>
    <el-tabs
      v-model="HeaderTabsActiveName"
      type="card"
      @tab-click="handlePathSwicth"
      @tab-remove="handlePathRemove"
      class="demo-tabs"
    >
      <el-tab-pane
        v-for="item in HeaderTabsList"
        :key="item.name"
        :label="item.label"
        :name="item.path"
        :closable="item.name != 'home'"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRaw } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTabsStore } from '@/stores/tabs'
const router = useRouter()
const route = useRoute()
const tabsStore = useTabsStore()
const HeaderTabsActiveName = computed(() => route.path)
const HeaderTabsList = computed(() => tabsStore.state.tab)
const handlePathSwicth = (tab: any) => {
  router.push(tab.props.name)
}

const handlePathRemove = (targetName: String) => {
  // 当前页是要删除的页
  if (route.path === targetName) {
    const index = tabsStore.state.tab.findIndex((item) => item.path === targetName)
    index === 0
      ? router.push(tabsStore.state.tab[index + 1].path)
      : router.push(tabsStore.state.tab[index - 1].path)
    tabsStore.removeTab(targetName)
  } else {
    // 当前页不是要删除的页
    tabsStore.removeTab(targetName)
    return
  }
}
</script>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
