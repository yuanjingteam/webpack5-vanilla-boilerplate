const path = require('path')

module.exports = {
  // 源文件
  src: path.resolve(__dirname, '../src'),

  // 线上生产构建文件
  build: path.resolve(__dirname, '../dist'),

  // 复制到构建文件夹的静态文件
  public: path.resolve(__dirname, '../public'),
}
