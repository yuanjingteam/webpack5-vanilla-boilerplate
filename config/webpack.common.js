const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // webpack构建入口
  entry: [paths.src + '/index.js'],

  // webpack 打包输出位置和输出文件
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // 自定义webpack构建过程
  plugins: [
    // 在重新构建时删除/清除构建文件夹和未使用的资源
    new CleanWebpackPlugin(),

    // 将文件从目标文件夹复制到目标文件夹
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // 根据项目模板生成一个html文件
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),
  ],

  // 确定如何处理项目中的模块
  module: {
    rules: [
      // JavaScript: 使用Babel来编译JS
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: 复制图片文件到指定的构建文件夹
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: 内联文件
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
