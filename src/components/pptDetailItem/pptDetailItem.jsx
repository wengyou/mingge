import Taro, {useState, useEffect} from '@tarojs/taro';
import {Input, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './pptDetailItem.scss'

const PptDetailItem = props => {
  return(
    <View className='pptDetailItem-container'>
      <View className='ppt-con'>
        我是第一页PPT
      </View>
      <View className='understand'>
        <View className='return'>不懂</View>
        <View className='return'>懂了</View>
        <View className='return'>收藏</View>
      </View>
      <View className='comment-wrapper'>
        <Input className='comment' placeholder='请将你的不懂之处写在此处' />
        <View className='publish'>发布</View>
      </View>
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(PptDetailItem);
