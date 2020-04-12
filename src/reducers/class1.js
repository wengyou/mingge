import * as constants from '../constants/actionTypes'

const defaultState = {
  token: '',
  pptDetailFlag: true,
  pageFlag: '',
  userCourses: [],
  courseId: 1,
  userId: '',
  checkId: '',
  checkStudent: [],
  studentQuestion: [],
  rank: [],
  comment: {},
  checkList: []
};
export default function class1 (state = defaultState, action) {
  switch (action.type) {
    case constants.GET_COMMENT:
      return {
        ...state,
        comment: action.payload.map
      };
    case constants.GET_RANK:
      return {
        ...state,
        rank: action.payload
      };
    case constants.GET_COURSE_QUESTION:
      return {
        ...state,
        studentQuestion: action.payload
      };
    case constants.GET_ALL_COURSE:
      return {
        ...state,
        userCourses: action.payload
      };
    case constants.GET_USER_ATTENDANCE:
      return {
        ...state,
        checkStudent: action.payload
      };
    case constants.GET_ATTENDANCE:
      return {
        ...state,
        userId: action.payload.userId,
        checkId: action.payload[0].id,
        checkList: action.payload
      };
    case constants.SET_COURSE_ID:
      return {
        ...state,
        courseId: action.payload
      };
    case constants.SEND_PPT_FLAG:
      return {
        ...state,
        pptDetailFlag: action.payload
      };
    case constants.PAGE_FLAG:
      return {
        ...state,
        pageFlag: action.payload
      };
    case constants.GET_COURSES:
      return {
        ...state,
        userCourses: action.payload
      };
    default:
      return state
  }
}


