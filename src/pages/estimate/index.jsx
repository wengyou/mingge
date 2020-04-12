import Taro, { useEffect } from '@tarojs/taro';
import { View } from "@tarojs/components";
import { AtTag } from 'taro-ui';
import { connect } from "@tarojs/redux";
import { queryCommentDetail } from "../../actions/class2";
import './index.scss';
import {showLoading} from "../../util/common";

const Estimate = props => {
  const { commentDetail, dispatchCommentDetail, courseId  } = props;

  useEffect(()=>{
    showLoading(true);
    dispatchCommentDetail({courseId})
  }, []);

  return (
    <View className='full_height flex direction_column'>
      <View className='flex padding_column_m around flex_grow'>
        {
          Array.isArray(Object.keys(commentDetail)) &&
          Object.keys(commentDetail).map(key => (
            <View
              className='flex direction_column center_column'
              key={key}
            >
              <AtTag
                name={key}
                className='bgc_lightorange fontC_white'
              >
                {key}星: {commentDetail[key].length}
              </AtTag>
              {
                commentDetail[key].map(e=>(
                  <View
                    className='padding_column_xs ellipsis'
                    key={e.nickName}
                  >
                    {e.nickName}
                  </View>
                ))
              }
            </View>
          ))
        }
      </View>
      <View className='shadow margin_xxs bgc_white padding_xs flex between flex_end'>
        {
          Array.isArray(Object.keys(commentDetail)) &&
          Object.keys(commentDetail).map(key =>(
            <View
              className='flex direction_column center'
              key={key}
            >
              <View
                style={{
                  background: '#FCE7AB',
                  height: `calc(40px * ${commentDetail[key].length})`,
                  width: "50px"
                }}
              >
              </View>
              <View className='fontC_darkgray padding_column_xxs'>{key}星</View>
            </View>
          ))
        }
      </View>
    </View>
  )
};

export default connect(
  state => ({
    commentDetail: state.class2.commentDetail,
    courseId: state.class1.courseId
  }),
  dispatch => ({
    dispatchCommentDetail(args){
      dispatch(queryCommentDetail(args))
    }

  })
)(Estimate);
