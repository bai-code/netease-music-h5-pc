const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
   pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",  //如果使用scss修改即可
      patterns: [
        // 全局变量路径   多个
        path.resolve(__dirname, "./src/globalStyle/defaultColor.less"),
        path.resolve(__dirname, './src/globalStyle/defaultStyle.less')

      ],
    },
  },
})
