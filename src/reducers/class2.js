import Taro from "@tarojs/taro";
import {
  FETCH_DETAIL_INFO,
  FETCH_USER_INFO,
  QUERY_COMMENT_DETAIL
} from '../constants/actionTypes';

const defaultState = {
  userInfo: Taro.getStorageSync('userInfo') || {},
  detailInfo: Taro.getStorageSync('detailInfo') || {},
  commentDetail: {},
  token: Taro.getStorageSync('token') || '',
};
export default function class2 (state = defaultState, action) {
  switch (action.type) {
    case FETCH_USER_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        token: action.payload.token,

      };
    case FETCH_DETAIL_INFO:
      return {
        ...state,
        detailInfo: action.payload
      };
      case QUERY_COMMENT_DETAIL:
        console.log(action.payload)
      return {
        ...state,
        commentDetail: action.payload
      };
    default:
      return state
  }
}


