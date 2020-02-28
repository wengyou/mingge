import * as constants from '../constants/actionTypes'

const defaultState = {
  token: '',
  pptDetailFlag: true,
  pageFlag: '',
};
export default function class1 (state = defaultState, action) {
  switch (action.type) {
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
    default:
      return state
  }
}


