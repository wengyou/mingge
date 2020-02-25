import Taro from '@tarojs/taro';

const baseUrl = 'http://106.52.185.165:9090';
//const baseUrl = 'http://y291z33000.wicp.vip';
export default (method, url, payload)=> {
  const token = Taro.getStorageSync('token');
  return Taro.request({
    url: baseUrl + url,
    data: JSON.stringify(payload),
    header: {
      'Content-Type': 'application/json',
      'token': token || '',
    },
    method: method.toUpperCase(),
  }).then(res => {
    const {statusCode, data} = res;
    if (statusCode >= 200 && statusCode < 300) {
      console.log(res,1);
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
      throw new Error(`网络请求错误，状态码${statusCode}`);
      return true;
    }
  })
};
