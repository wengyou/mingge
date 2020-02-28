import Taro, {useEffect, useState} from '@tarojs/taro'
import {View, Button} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import * as class1 from "../../actions/class1";
import './classDetail.scss'

const ClassDetail = props => {
  const {pageFlag } = props;
  return (
    <View className='classDetail-container'>
      <View className='class-before class-item'>
        <View className='time'>
            课前
        </View>
        <View className='tab'>
          <View
            className='tab-item'
            onClick={
              () => {Taro.navigateTo({url: '../../pages/previewData/previewData'})}
            }
          >
            预习资料
          </View>
          <View
            className='tab-item'
            onClick={
              () => {Taro.navigateTo({url: '../../pages/previewTest/previewTest'})}
            }
          >
            预习测试
          </View>
          <View
            className='tab-item'
            onClick={
              () => {
                pageFlag({"flag": 'askQuestion'});
                Taro.navigateTo({url: '../../pages/askQuestion/askQuestion'})
              }
            }
          >
            课前提问
          </View>
        </View>
      </View>
      <View className='class-middle class-item'>
        <View className='time'>
          课中
        </View>
        <View className='tab'>
          <View
            className='tab-item'
            onClick={
              () => {
                pageFlag({"flag": 'checkPerson'});
                Taro.navigateTo({url: '../../pages/askQuestion/askQuestion'})
              }
            }
          >
            考勤
          </View>
          <View className='tab-item'>随堂测试</View>
          <View
            className='tab-item'
            onClick={
              () => {
                pageFlag({"flag": 'callName'});
                Taro.navigateTo({url: '../../pages/askQuestion/askQuestion'})
              }
            }
          >
            点名答题
          </View>
          <View className='tab-item'>学习反馈</View>
          <View className='tab-item'>课堂评价</View>
        </View>
      </View>
      <View className='class-after class-item'>
        <View className='time'>
          课后
        </View>
        <View className='tab'>
          <View
            className='tab-item'
            onClick={
              () => {
                pageFlag({"flag": 'taskUp'});
                Taro.navigateTo({url: '../../pages/askQuestion/askQuestion'})
              }
            }
          >
            作业上传
          </View>
          <View
            className='tab-item'
            onClick={
              () => {
                pageFlag({"flag": 'answerQuestion'});
                Taro.navigateTo({url: '../../pages/askQuestion/askQuestion'})
              }
            }
          >
            课后答疑
          </View>
          <View className='tab-item'>成绩查看</View>
        </View>
      </View>
    </View>
  )
};

export default connect(
  state => ({

  }),
  dispatch => ({
      pageFlag(args) {
        dispatch(class1.pageFlag(args))
      }
  })
)(ClassDetail);
