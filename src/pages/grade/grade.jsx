import Taro, {useEffect, useState } from '@tarojs/taro';
import {View, Text} from "@tarojs/components";
import { connect} from "@tarojs/redux";
import { AtTabs, AtTabsPane } from 'taro-ui'
import './grade.scss'

const Grade = props => {
  const tabList = [{ title: '总成绩' }, { title: '预习测试' }, { title: '课堂测试' }, { title: '课后作业' }, { title: '其他' }]
  const [currentNum, setCurrentNum ] = useState(0);
  return(
    <View>
      <AtTabs current={currentNum} tabList={tabList} onClick={(e) => {setCurrentNum(e)}}>
        <AtTabsPane current={currentNum} index={0} >
          <View style='background-color: #FAFBFC' >
            <View className='total-score'>
              <View className='circle'>
                <View className='item1'>预习测试</View>
                <View className='item2'>课堂测试</View>
                <View className='item3'>课后作业</View>
                <View className='item4'>其他</View>
              </View>
              <View className='wrapper'>
                <View className='item left'>总成绩：</View>
                <View className='item'>班级排名：</View>
              </View>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={1}>
          <View style='background-color: #FAFBFC'>
            <View className='preview-test-container'>
              <View className='wrapper1'>
                <View className='item'>次数：</View>
                <View className='item'>平均成绩：</View>
              </View>
              <View className='wrapper2'>
                <View className='item'>
                  <Text className='item-num'>第一次测试</Text>
                  <Text className='item-score'>得分：</Text>
                </View>
              </View>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>课堂测试</View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={3}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>课后作业</View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={4}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>其他1</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Grade);
