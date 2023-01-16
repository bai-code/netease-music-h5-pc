<template>
  <el-image :src="src" fit="fill" lazy>
    <template #placeholder>
      <el-skeleton animated class="fill">
        <template #template>
          <el-skeleton-item variant="image" class="placeholder fill" />
        </template>
      </el-skeleton>
    </template>
    <template #error>
      <img src="../static/error.webp" alt="加载失败..." class='error fill' />
    </template>
  </el-image>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

defineProps({
  src: {
    type: String,
  },
});
</script>

<style lang="less" scoped>
.el-image {
  height: 100%;
  width: 100%;
  border-radius:5px;
  .fill{
    height:100%;
    width:100%;
  }
}
</style>
