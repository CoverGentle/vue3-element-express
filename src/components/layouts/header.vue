<template>
  <div class="header-container">
    <div class="header-left">
      <div class="icon" @click="handleIcon">
        <Expand v-if="isAll" />
        <Fold v-else />
      </div>
    </div>
    <div class="header-right">
      <div class="change-background">
        <el-switch
          v-model="bgValue"
          @click="changeBackground(bgValue)"
          :active-action-icon="Sunny"
          :inactive-action-icon="Moon"
        />
      </div>
      <div class="github-box" @click="jump">
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          width="16px"
          height="16px"
          data-v-87052479=""
        >
          <path
            fill="currentColor"
            d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
          ></path>
        </svg>
      </div>
      <div class="avater">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar size="small" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <!-- <el-dropdown-item :icon="UserFilled">{{$t('button.userinfo')}}</el-dropdown-item>-->
              <el-dropdown-item>
                <el-icon><User /></el-icon>个人中心</el-dropdown-item
              >
              <el-dropdown-item @click="removeUser"
                ><el-icon><CloseBold /></el-icon>注销</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User, CloseBold, Fold, Expand, Sunny, Moon } from '@element-plus/icons-vue'
// import github from '@/src/components/icons/github.vue'
const bgValue = ref(true)
const changeBackground = (val: any) => {
  let html = document.documentElement
  !val ? (html.className = 'dark') : (html.className = '') //判断开关打开添加dark 否则不添加
}
const jump = () => {
  window.open('https://github.com/CoverGentle/vue3-element-express', '_blank')
}
const removeUser = () => {
  localStorage.removeItem('token')
  window.location.reload()
}
const emit = defineEmits<{
  //   (event: 'command', id: any): void
  (event: 'handleShowMore', id: any): void
}>()
// 菜单栏伸缩
const isAll = ref(false)
const handleIcon = () => {
  isAll.value = !isAll.value

  emit('handleShowMore', isAll)
}
</script>

<style lang="scss" scoped>
.header-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid #ccc;

  .header-left {
    .icon {
      width: 20px;
      height: 20px;
    }
  }

  .asideButton {
    // width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    padding: 0 24px;

    p {
      width: 100%;
    }
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;

    .change-language {
      .language-box {
        img {
          width: 20px;
          height: auto;
        }
      }
    }

    .github-box {
      width: 5rem;
      display: flex;
      justify-content: center;
      z-index: 1;
      cursor: pointer;

      img {
        width: 25px;
        height: auto;
      }

      P {
        font-size: 14px;
        margin-left: 10px;
        line-height: 2;
        font-weight: 600;
      }
    }
  }
}
</style>
