// 测试模块化的 js
import { example } from '@/js/example'

// 测试模块化引入的图片资源
import webpackLogo from '@/images/webpack-logo.svg'

// 测试模块化的样式
import '@/styles/index.scss'

// 添加 dom 进行测试
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

// 测试一个在 css 中使用背景 url
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// 测试公用资源文件夹
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'

const app = document.querySelector('#root')
app.append(logo, heading, imageBackground, imagePublic)
