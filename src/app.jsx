import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import './app.scss'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {

  config = {
    pages: [
      'pages/estimate/index',
      'pages/mine/index',
      'pages/index/index',
      'pages/info/index',
      'pages/editProfile/index',
      'pages/classDetail/classDetail',
      'pages/previewData/previewData',
      'pages/previewTest/previewTest',
      'pages/askQuestion/askQuestion',
      'pages/taskUp/taskUp',
      'pages/grade/grade',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#514d58",
      selectedColor: "#55525d",
      backgroundColor: "#FFFFFF",
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/index/index',
        iconPath: "./assets/images/1.png",
        selectedIconPath: "./assets/images/11.png",
        text: "首页"
      }, {
        pagePath: "pages/info/index",
        iconPath: "./assets/images/2.png",
        selectedIconPath: "./assets/images/22.png",
        text: "消息"
      }, {
        pagePath: "pages/estimate/index",
        iconPath: "./assets/images/3.png",
        selectedIconPath: "./assets/images/33.png",
        text: "学评教"
      }, {
        pagePath: "pages/mine/index",
        iconPath: "./assets/images/4.png",
        selectedIconPath: "./assets/images/44.png",
        text: "我的"
      }]
    },
  };

  componentDidMount () {
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
