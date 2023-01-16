<template>
  <el-row class="home-nav" type="flex" justify="space-between" align="middle">
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


</template>

<script  lang="ts" setup>
import { shallowReactive, ref } from 'vue'
import type { Ref } from 'vue'
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
const themeColor:Ref<string> = ref(spreadList[0].theme)
const changeTheme = (index:number) => {
  themeColor.value = spreadList[index].theme
}

defineExpose({
  themeColor
})

</script>

<style lang="less" scoped>
.el-row.home-nav {

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

  div.gutter-linear {
    background-image: linear-gradient(90deg, #faa 0%, #f00 50%, #faa 100%);
    position: absolute;
    height: 2px;
    bottom: 0;
    border-radius: 50%;
    width: 100%;
  }

}
</style>