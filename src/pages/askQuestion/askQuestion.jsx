import Taro, {useEffect, useState} from '@tarojs/taro';
import {View, Text} from "@tarojs/components";
import { connect} from "@tarojs/redux";
import { AtTabs, AtTabsPane } from 'taro-ui'
import NewQuestion from '../../components/newQuestion/newQuestion'
import './askQuestion.scss'

const AskQuestion = props => {
  const {pageFlag} = props;
  const [tabList, setTabList] = useState([]);
  const [currentNum, setCurrentNum] = useState(0);
  useEffect(() => {
    switch (pageFlag) {
      case 'askQuestion':
        setTabList([{ title: '提问记录' }, { title: '新建提问' }]);
        break;
      case 'taskUp':
        setTabList([{ title: '未上传' }, { title: '已上传'}]);
        break;
      case 'answerQuestion':
        setTabList([{ title: '大家提问'}, {title: '我要提问'}]);
        break;
      case 'checkPerson':
        setTabList([{ title: '考勤记录'}, { title: '拍照'}]);
        break;
      case 'callName':
        setTabList([{ title: '答题'}, { title: '答题记录'}]);
        break;
      default:
        return setTabList([]);
    }
  }, [pageFlag]);
  return(
    <View className='ask-question-container'>
      <AtTabs
        current={currentNum}
        tabList={tabList}
        onClick={(e) => {setCurrentNum(e)}}
      >
        <AtTabsPane current={currentNum} index={0} >
          <View style='background-color: #FAFBFC' >
            {
              pageFlag === 'askQuestion'?
                <View className='question-record-container'>
                  <Text className='item'>标题</Text>
                  <Text className='item time'>时间</Text>
                </View>:null
            }
            {
              pageFlag === 'taskUp' ?
                <View className='task-up-container'>
                  <View className='item'>第一次作业</View>
                  <View className='middle item'>未完成</View>
                  <View
                    className='item'
                    onClick={
                      () => {
                        Taro.navigateTo({url: '../../pages/taskUp/taskUp'})
                      }
                    }
                  >
                    去完成
                  </View>
                </View>: null
            }
            {
              pageFlag === 'answerQuestion' ?
                <View className='answer-question-container'>
                  <View className='wrapper'>
                    <View className='item'>提问记录</View>
                    <View className='item'>新建提问</View>
                  </View>
                  <View className='question-record-container'>
                    <Text className='item'>标题</Text>
                    <Text className='time item'>时间</Text>
                  </View>
                </View>: null
            }
            {
              pageFlag === 'checkPerson' ?
                <View>
                  <View className='check-person-container'>
                    <View className='wrapper1'>
                      <View className='item'>出勤：</View>
                      <View className='item'>缺勤：</View>
                      <View className='item'>迟到：</View>
                      <View className='item'>请假：</View>
                    </View>
                    <View className='wrapper2'>
                      <Text>时间</Text>
                      <Text>星期几</Text>
                      <Text>出勤</Text>
                    </View>
                  </View>
                </View>:null
            }
          </View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={1}>
          <View style='background-color: #FAFBFC'>
            {
              pageFlag === 'askQuestion' ?
                <NewQuestion />: null
            }
            {
              pageFlag === 'taskUp' ?
                <View className='task-up-container'>
                  <View className='item'>第一次作业</View>
                  <View className='middle item'>已完成</View>
                  <View
                    className='item'
                    onClick={
                      () => {
                        Taro.navigateTo({url: '../../pages/grade/grade'})
                      }
                    }
                  >
                    去查看
                  </View>
                </View>: null
            }
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
};
export default connect(
  state => ({
      pageFlag: state.class1.pageFlag
  }),
  dispatch => ({

  })
)(AskQuestion);
