<template>
  <el-tabs
    v-model="HeaderTabsActiveName"
    type="card"
    @tab-click="handlePathSwicth"
    @tab-add="addHeaderTabsList"
    class="demo-tabs"
    @tab-remove="removeHeaderTabsList"
  >
    <el-tab-pane
      v-for="item in HeaderTabsList"
      :key="item.name"
      :label="item.label"
      :name="item.path"
      :closeable="item.name !== 'home'"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TabPaneName } from 'element-plus'
import { useRouter } from 'vue-router'
import { useTabsStore } from '@/stores/tabs'
const router = useRouter()
const tabsStore = useTabsStore()
const HeaderTabsActiveName = ref('')
const HeaderTabsList = computed(() => tabsStore.state.tab)

const handlePathSwicth = (tab: any) => {
  router.push(tab.props.name)
}

const addHeaderTabsList = (tab: any) => {
  console.log(router)
  // HeaderTabsList.value.push(tab)
}

const removeHeaderTabsList = (name: TabPaneName) => {
  // HeaderTabsList.value = HeaderTabsList.value.filter((item) => item.name !== name)
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
