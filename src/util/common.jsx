import Taro from '@tarojs/taro';

export const showLoading = (status) => {
  status ?
  Taro.showLoading({
    title: 'loading'
  })
    :
  Taro.hideLoading()
};

