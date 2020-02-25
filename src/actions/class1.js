import request from "../util/request";

//request使用示例
export const location =  args => {
  return async dispatch => {
    dispatch(toDetailLocation(args));
    dispatch(queryOnlineNum(args));
    const res = await request('post', '/userLocation', args);
    res.code === "1" && dispatch(queryRecommendList());
  }
};
