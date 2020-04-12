import Taro from '@tarojs/taro';
import {showLoading} from "./common";

//const baseUrl = 'http://106.52.185.165:9090';
const baseUrl = 'http://y291z33000.wicp.vip';
export default (method, url, payload)=> {
  const token = Taro.getStorageSync('token');
  return Taro.request({
    url: baseUrl + url,
    data: JSON.stringify(payload),
    header: {
      'Content-Type': 'application/json',
      'token': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxMSIsImlhdCI6MTU4MzA0MTI1Mywic3ViIjoiUmFjaGVsIiwiZXhwIjoxNTgzNjQ2MDUzfQ.HK5VtW3jdXhFmQHxAUgwc7R9ywTXz9XiStDSQqrSLKI' || '',
    },
    method: method.toUpperCase(),
    timeout: 10000,
    fail: (res)=>{
      showLoading(false);
      Taro.showToast({
        title: `${res.errMsg}`,
        icon: 'none',
      });
    }
  }).then(res => {
    const {statusCode, data} = res;
    if (statusCode >= 200 && statusCode < 300) {
      data.code !== '0' ?
        Taro.showToast({
          title: '成功！',
          icon: 'success',
        }) :
        Taro.showToast({
          title: data.Exception,
          icon: 'none',
        });
      return data;
    } else {
      showLoading(false);
      throw new Error(`网络请求错误，状态码${statusCode}`);
      return true;
    }
  })
};
