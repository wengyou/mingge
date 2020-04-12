import Taro, {useState, useEffect} from '@tarojs/taro';
import {View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './question.scss'

const Question = props => {
  return(
    <View className='question-container'>
      <View className='question-type'>
        一、选择题
      </View>
      <View className='question-title'>
        1.今天星期几
      </View>
      <View className='question-option'>
        <View className='item'>A</View>
        <View className='item'>B</View>
        <View className='item'>C</View>
        <View className='item'>D</View>
      </View>
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Question);
