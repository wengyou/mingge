import Taro from "@tarojs/taro";
import {
  FETCH_DETAIL_INFO,
  FETCH_USER_INFO,
  QUERY_COMMENT_DETAIL,
  GET_SCORE,
  IS_STUDENT,
  FETCH_HOMEWORK_DETAIL, FINISHED_WORK, NOT_FINISHED_WORK,FETCH_ALL_WORK
} from '../constants/actionTypes';

const defaultState = {
  userInfo: Taro.getStorageSync('userInfo') || {},
  detailInfo: Taro.getStorageSync('detailInfo') || {},
  commentDetail: {},
  token: Taro.getStorageSync('token') || '',
  type: Taro.getStorageSync('type') || true,
  scoreList: [],
  homeworkDetail: {},
  finishedList: [],
  unfinishedList: [],
  allworkList: []
};
export default function class2 (state = defaultState, action) {
  switch (action.type) {
    case IS_STUDENT:
      return {
        ...state,
        type: action.payload
      };
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
      return {
        ...state,
        commentDetail: action.payload
      };
    case GET_SCORE:
      return {
        ...state,
        scoreList: action.payload
      };
    case FETCH_HOMEWORK_DETAIL:
      return {
        ...state,
        homeworkDetail: action.payload
      };
    case FINISHED_WORK:
      return {
        ...state,
        finishedList: action.payload
      };
    case NOT_FINISHED_WORK:
      return {
        ...state,
        unfinishedList: action.payload
      };
      case FETCH_ALL_WORK:
      return {
        ...state,
        allworkList: action.payload
      };

    default:
      return state
  }
}


