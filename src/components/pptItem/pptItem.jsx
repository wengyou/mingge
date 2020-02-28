import Taro, {useEffect, useState} from '@tarojs/taro';
import {View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './pptItem.scss'
import * as class1 from "../../actions/class1";

const PptItem = props => {
  const {sendPptFlag} = props;
  return (
    <View
      className='pptItem-container'
      onClick={
        () => {
          sendPptFlag({"flag": false});
        }
      }
    >
      <View className='content'>

      </View>
      <View className='wrapper'>
        <View className='title'>PPT标题</View>
        <View className='time'>PPT上传时间</View>
      </View>
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({
    sendPptFlag(args) {
      dispatch(class1.sendPptFlag(args))
    }
  })
)(PptItem);
