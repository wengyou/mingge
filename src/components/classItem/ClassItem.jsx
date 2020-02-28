import Taro, {useEffect, useState} from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import {Video, View} from "@tarojs/components";
import './classItem.scss';

const ClassItem = props => {
  return (
    <View
      className='classItem-container'
      onClick={
        () => {
          Taro.navigateTo({url: '../../pages/classDetail/classDetail'})
        }
      }
    >
      <View className='title'>当前课程</View>
      <View className='wrapper'>
        <View className='teacher-name'>任课教师：</View>
        <View className='class=type'>课程类型：</View>
      </View>
    </View>
  )
};

export default ClassItem;
