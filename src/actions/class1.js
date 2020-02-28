import request from "../util/request";
import * as constants from '../constants/actionTypes'

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
