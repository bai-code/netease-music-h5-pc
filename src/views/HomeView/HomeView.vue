<template>
  <!-- pc -->
  <el-container :class="['home-container', 'hidden-xs-only', { themeBgColor: themeColor === 'blackTheme' }]">
    <el-header :class="['home-nav', themeColor]">
      <HomeNav ref="homeNavRef" />
    </el-header>
    <el-container class="home-c">
      <HomeContent />
    </el-container>
    <el-footer :class="{ blackTheme: themeColor === 'blackTheme' }">
      <HomeFooter />
    </el-footer>
  </el-container>

  <!-- h5  -->
  <el-row class="home-container hidden-sm-and-up"> 主页 </el-row>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import type { Ref } from 'vue'
import HomeNav from './home-nav.vue'
import HomeContent from './home-content.vue'
import HomeFooter from './home-footer.vue'


const homeNavRef: Ref<HTMLInputElement | null> = ref()  // 子组件dom

// 子组件获取颜色class
const themeColor = computed<string>(() => {
  return homeNavRef.value && homeNavRef.value.themeColor || ''
})



</script>

<style lang="less" scoped>
.el-container.home-container {
  height: 100%;
  color: @fontColor;

  &.themeBgColor {
    color: @lightFontColor;

    .el-header.home-nav {
      position: relative;
      padding: 0;


    }

    .home-c {
      background-color: rgba(0, 0, 0, 0.5);
      background: linear-gradient();
    }
  }

  .el-header.home-nav {
    height: 50px;

    .el-row {
      height: 100%;
      padding: 0 20px;

      &>.el-col {
        height: 100%;

        // 图标
        &.logo {
          min-width: 160px;

          div.logo {
            background-image: url(~@/static/tabbar.png);
            background-position: 0 -10px;
            height: 100%;
            width: 160px;
          }
        }

        // 换肤
        &.theme {
          span.iconfont {
            color: #ccc;
            font-size: 20px;
          }

          :deep(.spread-select) {
            ul {
              display: flex;

              div.theme {
                height: 30px;
                width: 30px;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }


  .el-footer {
    border-top: 1px solid @borderColor;

  }
}
</style>
