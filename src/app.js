import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一

import { useLaunch } from '@tarojs/taro'
import './app.scss'

function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
