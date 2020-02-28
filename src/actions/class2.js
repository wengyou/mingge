import Taro from '@tarojs/taro';
import request from "../util/request";
import { showLoading } from "../util/common";
import {
  FETCH_DETAIL_INFO,
  FETCH_USER_INFO,
  QUERY_COMMENT_DETAIL
} from '../constants/actionTypes'

//登录
export const userLogin = (args) => {
  //const { payload, callBack } = args;
  return async dispatch =>{
    const res = await request('post', '/loginWx', args);
    if(res){
      showLoading(false);
      if(res.code === '1'){
        Taro.setStorageSync('token', res.data.token);
        const userInfo = Taro.getStorageSync('userInfo');
        dispatch({
          type: FETCH_USER_INFO,
          payload: {
            userInfo,
            token: res.data.token
          }
        })
      }
    }
  }
};

//修改信息
export const saveProfile = (args) => {
  return async dispatch => {
    const res = await request("post", "/bindingInfo", args);
    showLoading(false);
    if(res.code === "1"){
      Taro.setStorageSync('detailInfo', args);
      dispatch({
        type: FETCH_DETAIL_INFO,
        payload: args
      });
      Taro.switchTab({
        url: "/pages/mine/index"
      })
    }
  }
};

//老师获取评分详情
export const queryCommentDetail = (args) => {
  const { courseId } = args;
  return async dispatch => {
    const res = await request("get", `/getComment?courseId=${courseId}`);
    showLoading(false);
    if(res.code === "1"){
      dispatch({
        type: QUERY_COMMENT_DETAIL ,
        payload: res.data.map
      });
    }
  }
};
