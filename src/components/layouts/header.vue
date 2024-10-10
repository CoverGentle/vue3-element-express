<template>
  <div class="header-container">
    <div class="header-left">
      <div class="icon" @click="handleIcon">
        <Expand v-if="isAll" />
        <Fold v-else />
      </div>
    </div>
    <div class="header-right">
      <!-- <div class="change-language">
        <el-dropdown @command="handleCommand">
          <span class="language-box">
            <img :src="languageUrl" alt="" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zh-cn">{{$t('language.zhcn')}}</el-dropdown-item>
              <el-dropdown-item command="en">{{$t('language.en')}}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div> -->
      <div class="github-box" @click="jump">
        <img :src="githubUrl" alt="" />
        <p>GITHUB</p>
      </div>
      <div class="avater">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar size="small" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <!-- <el-dropdown-item :icon="UserFilled">{{$t('button.userinfo')}}</el-dropdown-item>
              <el-dropdown-item :icon="Close" @click="removeUser">{{$t('button.logout')}}</el-dropdown-item> -->

              <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
              <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
              <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Check, CircleCheck, CirclePlus, Close, Fold, Expand } from '@element-plus/icons-vue'
import githubUrl from '@/assets/images/github.png'
// import languageUrl from '@/assets/images/language.png'

const jump = () => {
  window.open('https://github.com/CoverGentle/vue3-element-express', '_blank')
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
      width: 9rem;
      display: flex;
      justify-content: center;
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
