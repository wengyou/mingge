import Taro from '@tarojs/taro'
import request from "../util/request";
import * as constants from '../constants/actionTypes';

//request使用示例
// export const location =  args => {
//   return async dispatch => {
//     dispatch(toDetailLocation(args));
//     dispatch(queryOnlineNum(args));
//     const res = await request('post', '/userLocation', args);
//     res.code === "1" && dispatch(queryRecommendList());
//   }
// };

export const sendPptFlag = args => {
  return dispatch => {
    dispatch({
      type: constants.SEND_PPT_FLAG,
      payload: args.flag
    })
  }
};
export const pageFlag = args => {
  return dispatch => {
    dispatch({
      type: constants.PAGE_FLAG,
      payload: args.flag
    })
  }
};
//获取用户所有课程
export const getCourses= () => {
  return async dispatch => {
    const res = await request('get', '/getCourses');
    if(res.code === "1") {
      dispatch({
        type: constants.GET_COURSES,
        payload: res.data
      })
    } else {
      Taro.showToast({title: res.msg})
    }
  }
};
//设置课程id
export const setCourseId = args => {
  return dispatch => {
    dispatch({
      type: constants.SET_COURSE_ID,
      payload: args.id
    })
  }
};
//查看考勤
export const getAttendance = args => {
  return async dispatch => {
    const res = await request('get', `/getAttendance?courseId=${args.courseId}`);
    console.log(res);
    if(res.code === "1") {
      dispatch({
        type: constants.GET_ATTENDANCE,
        payload: res.data
      })
    }
  }
};
//老师查看那些人打了考勤
export const getUserAttendance = args => {
  return async dispatch => {
    const res = await request('get', `/getUserAttendance?attendanceId=${args.attendanceId}&courseId=${args.courseId}`);
    if (res.code === '1') {
      dispatch({
        type: constants.GET_USER_ATTENDANCE,
        payload: res.data
      })
    }
  }
};
//获取所有课程
export const getAllCourse = () => {
  return async dispatch => {
    const res = await request('post', '/getAllCourse');
    if (res.code === '1') {
      dispatch({
        type: constants.GET_ALL_COURSE,
        payload: res.data
      })
    }
  }
};
//加入课程
export const joinCourse = args => {
  return async dispatch => {
    const res = await request('get', `/joinCourse?courseId=${args.courseId}`);
    if (res.code === '1'){
      res.data ?Taro.showToast({title: '添加课程成功'}): Taro.showToast({title: '您已经添加此课程'})
    }
  }
};
//老师发布问题
export const publishQuestion = args => {
  return async dispatch => {
    const res = await request('post', '/publishQuestion', args);
    if (res.code === '1') {
      res.data ? Taro.showToast({title: '发布成功'}): Taro.showToast({title: '发布失败'});
    }
  }
};
//获得课程测试问题
export const getCourseQuestion = args => {
  return async dispatch => {
    const res = await request('get', `/getCourseQuestion?courseId=${args.courseId}`);
    if (res.code === '1') {
      dispatch({
        type: constants.GET_COURSE_QUESTION,
        payload: res.data
      })
    }
  }
};
//学生提交问题答案
export const postCourseQuestion = args => {
  return async dispatch => {
    const res = await request('post', '/postCourseQuestion', args);
    if (res.code === '1') {
      res.data? Taro.showToast({title: '提交成功'}): Taro.showToast({title: '提交失败'})
    }
  }
};

//成绩查看
export const getRank = args => {
  return async dispatch => {
    const res = await request('get', `/getRank?courseId=${args.courseId}`);
    if (res.code === '1') {
      dispatch({
        type: constants.GET_RANK,
        payload: res.data
      })
    }
  }
};

//对课堂进行评价
export const postComment = args => {
  return async dispatch => {
    const res = await request('get', `/postComment?courseId=${args.courseId}&score=${args.score}`);
    if (res.code === '1') {
      Taro.showToast({title: '评价成功'})
    }
  }
};
//老师开启考勤
export const publishAttendance = (args) => {
  return async dispatch => {
    const res = await request('get', `/publishAttendance?courseId=${args.courseId}`);
    if (res.code) {
      Taro.showToast({title: '考勤开启成功'})
    }
  }
};
//学生打考勤
export const postAttendance = args => {
  return async dispatch => {
    const res = await request('get', `/postAttendance?courseId=${args.courseId}&attendanceId=${args.attendanceId}`);
    if (res.code === '1') {
      Taro.showToast({title: '考勤打卡成功'});
    }
  }
};
//老师查看评价
export const getComment = args => {
  return async dispatch => {
    const res = await request('get', `/getComment?courseId=${args.courseId}`);
    if (res.code === '1') {
      dispatch({
        type: constants.GET_COMMENT,
        payload: res.data
      })
    }
  }
};
