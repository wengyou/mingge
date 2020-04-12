import Taro from '@tarojs/taro';
import request from "../util/request";
import { showLoading } from "../util/common";
import {
  FETCH_DETAIL_INFO,
  FETCH_USER_INFO,
  QUERY_COMMENT_DETAIL,
  GET_SCORE, IS_STUDENT, NOT_FINISHED_WORK,FINISHED_WORK,FETCH_ALL_WORK
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
      });
      dispatch(isStudent());
    }
  }
};

//判断身份
export const isStudent = () => {
  return async dispatch => {
    const res = await request("get", "/isStudent");
    showLoading(false);
    if(res.code === "1"){
      Taro.setStorageSync('type', res.data);
      dispatch({
        type: IS_STUDENT,
        payload: res.data
      });
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

//作业上传
export const uploadWork = args => {
  const { imageUrl, homeworkContentId } = args;
  return async () => {
    const token = Taro.getStorageSync('token');
    Taro.uploadFile({
      url: 'http://y291z33000.wicp.vip/uploadHomework',
      header: {
        'content-type': 'multipart/form-data',
        'token': token
      },
      name: 'file',
      filePath: imageUrl,
      formData: {
        'homeworkContentId': homeworkContentId,
      },
      success: () => {
        Taro.switchTab({url: '/pages/index/index'})
      },
      complete: () => {
        showLoading(false);
      }
    });
  }
};

//老师发布作业
export const releaseWork = args => {
  return async () => {
    const res = await request("post", `/publishHomeWork`, args);
    showLoading(false);
    if(res.code === "1"){
      Taro.switchTab({
        url: '/pages/index/index'
      })
    }
  }
};

//老师给作业打分
export const postScore = args => {
  return async dispatch => {
    const res = await request("post", `/postScore`, args);
    showLoading(false);
    if(res.code === "1"){
      dispatch(getHomework());
    }
  }
};

//获取作业成绩
export const getScore = () => {
  return async dispatch => {
    const res = await request("get", `/getHomeworkSituation`);
    showLoading(false);
    if(res.code === "1"){
      dispatch({
        type: GET_SCORE,
        payload: res.data
      });
    }
  }
};

//获取未完成作业
export const unFinishWork = (args) => {
  const { courseId } = args;
  return async dispatch => {
    const res = await request("get", `/getHomework?courseId=${courseId}`);
    showLoading(false);
    if(res.code === "1"){
      dispatch({
        type: NOT_FINISHED_WORK,
        payload: res.data
      });
    }
  }
};

//完成的作业
export const finishWork = () => {
  return async dispatch => {
    const res = await request("get", `/unlessHomework`);
    showLoading(false);
    if(res.code === "1"){
      dispatch({
        type: FINISHED_WORK,
        payload: res.data
      });
    }
  }
};

//获取要批改的作业
export const getHomework = () => {
  return async dispatch => {
    const res = await request("get", `/getAllHomework`);
    showLoading(false);
    if(res.code === "1"){
      dispatch({
        type: FETCH_ALL_WORK,
        payload: res.data
      });
    }
  }

}
