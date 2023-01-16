<template>
  <el-row class="home-container">
    <el-col class="music-container" :xs="24" :sm="20">
      <router-view />
    </el-col>
  </el-row>
</template>

<style lang="less">
html,
body,
.el-row.home-container {
  height: 100%;
  width: 100%;
  user-select: none;
  .music-container {
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(100,100,100,0.5);
    @media (min-width: 798px) {
      height: 90%;
      width: 100%;
      min-width: 798px;
      .positionCenter(50%,50%);
    }
    @media (max-width: 798px) {
      height: 100%;
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  position: relative;
}
</style>
