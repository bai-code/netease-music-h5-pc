<template>
  <!-- pc -->
  <el-container :class="['home-container', 'hidden-xs-only', { themeBgColor: themeColor === 'blackTheme' }]">
    <el-header :class="['home-nav', themeColor]">
      <el-row type="flex" justify="space-between" align="middle">
        <!-- logo -->
        <el-col :span="6" class="logo">
          <div class="logo"></div>
        </el-col>

        <!-- 换肤 -->
        <el-col :span="6" class="theme">
          <spread-select :spreadList="spreadList" @changeSelect="changeTheme">
            <template #selectItem>
              <span title="换肤" class="iconfont icon-clothes"></span>
            </template>
            <template v-slot="scope">
              <div :class="['theme', scope.slotScope.theme]"></div>
            </template>
          </spread-select>
        </el-col>

      </el-row>
      <!-- 黑色背景 添加的分割线 -->
      <div class="gutter-linear"></div>
    </el-header>
    <el-container class="home-c">

      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <div class="img">
          <ImageLazy
            src="https://img1.baidu.com/it/u=2637107629,2529536524&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1673974800&t=126891f6a82750095b0c1fd448e5481b" />
        </div>
        222sadfsf多舒服安抚
      </el-main>
    </el-container>
    <el-footer :class="{blackTheme:themeColor==='blackTheme'}"> </el-footer>
  </el-container>

  <!-- h5  -->
  <el-row class="home-container hidden-sm-and-up"> 主页 </el-row>
</template>

<script lang="ts" setup>
import { ref, shallowReactive } from "vue";
import ImageLazy from "@/components/image-lazy.vue";
import SpreadSelect from '@/components/spread-select.vue'

// 背景数组
const spreadList = shallowReactive([
  {
    id: 0,
    theme: 'classicsTheme'
  }, {
    id: 1,
    theme: 'blackTheme'
  }, {
    id: 2,
    theme: 'skyblueTheme'
  }
])

// 切换背景
const themeColor = ref(spreadList[0].theme)
const changeTheme = (index) => {
  themeColor.value = spreadList[index].theme
}

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

      div.gutter-linear {
        background-image: linear-gradient(90deg, #faa 0%, #f00 50%, #faa 100%);
        position: absolute;
        height: 2px;
        bottom: 0;
        border-radius: 50%;
        width: 100%;
      }
    }

    .home-c {
      background-color: rgba(0, 0, 0, 0.7);
      background: linear-gradient();
    }
  }

  .el-header.home-nav {
    height: 50px;

    .el-row {
      height: 100%;

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

  .el-container.home-c {
    .el-aside {
      border-right: 1px solid @borderColor;
    }

    .el-main {
      div.img {
        height: 200px;
        width: 100px;
      }
    }
  }

  .el-footer {
    border-top: 1px solid @borderColor;
    &.isAddBgColor{

    }
  }
}

.el-row.home-container {
  background: #0f0;
}
</style>
