import Taro, {useEffect, useState} from '@tarojs/taro';
import { View, Input, Text, Textarea, Button } from "@tarojs/components";
import { connect} from "@tarojs/redux";
import './taskUp.scss'

const TaskUp = props => {
  return(
    <View className='taskUp-container'>
      <View className='wrapper'>
        <View className='item'>作业标题：</View>
        <View className='item-input'>
          <Input />
        </View>
        <View className='item'>发布人：</View>
        <View className='item-input'>
          <Input />
        </View>
        <View className='item'>发布时间：</View>
        <View className='item-input'>
          <Input />
        </View>
        <View className='item'>截止时间：</View>
        <View className='item-input'>
          <Input />
        </View>
        <View className='item'>发布内容：</View>
        <View className='item-input'>
          <Input />
        </View>
      </View>
      <View className='title'>
        作业题目
      </View>
      <View className='answer-wrapper'>
        <Text className='answer'>我的回答:</Text>
        <Textarea className='text' value='' />
      </View>
      <View className='btn-wrapper'>
        <Button className='btn'>上传附件</Button>
        <Button className='btn'>提交作业1</Button>
      </View>
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(TaskUp);
