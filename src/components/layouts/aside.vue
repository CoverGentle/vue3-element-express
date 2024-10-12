<template>
  <div class="aside-contianer">
    <div class="logo-box">
      <h3>logo</h3>
    </div>
    <el-scrollbar>
      <el-menu
        :collapse="isDisplay"
        :default-active="activePage"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item
          class="el-menu-item"
          v-for="item in noChildren"
          :index="item.path"
          :key="item.path"
          @click="handleMuen(item)"
        >
          <component class="icon" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </el-menu-item>
        <el-sub-menu v-for="item in hasChildren" :index="item.path" :key="item.path">
          <template #title>
            <component class="icon" :is="item.icon"></component>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(subItem, subIndex) in item.children"
              :index="subItem.path"
              :key="subItem.path"
              @click="handleMuen(subItem)"
            >
              <component class="icon" :is="subItem.icon"></component>
              <span>{{ subItem.label }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, shallowRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu as House, MapLocation, User, Setting, Edit } from '@element-plus/icons-vue'
const router = useRouter()
const route = useRoute()
import { useTabsStore } from '@/stores/tabs'
const tabsStore = useTabsStore()
const muenList = ref([
  {
    name: 'home',
    path: '/home',
    label: '首页',
    icon: shallowRef(House)
  },
  {
    name: 'setting',
    path: '/setting',
    label: '系统设置',
    icon: shallowRef(Setting)
  },
  {
    name: 'permission',
    path: '/permission',
    label: '权限管理',
    icon: shallowRef(MapLocation),
    children: [
      {
        name: 'user',
        path: '/permission/user',
        label: '用户管理',
        icon: shallowRef(User)
      },
      {
        name: 'role',
        path: '/permission/role',
        label: '角色管理',
        icon: shallowRef(Edit)
      }
    ]
  }
])

const emit = defineEmits<{
  (event: 'changeWidth', id: boolean): void
}>()

const noChildren = computed(() => muenList.value.filter((item) => !item.children))
const hasChildren = computed(() => muenList.value.filter((item) => item.children))

const handleMuen = (item: any) => {
  router.push(item.path)
  tabsStore.selectMenu(item)
}

const activePage = computed(() => {
  return route.path
})

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
    .icon {
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
  }
}
</style>
