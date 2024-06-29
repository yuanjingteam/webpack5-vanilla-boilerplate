const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(common, {
  // 将模式设置为开发
  mode: 'development',

  // 控制如何生成SourceMap
  devtool: 'inline-source-map',

  // 启动本地服务器相关配置
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: [
      // 将Sass/SCSS和CSS文件编译成浏览器可识别的CSS，并实时注入到页面中，同时开启Source Map以便于调试
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
})
