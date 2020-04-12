import Taro, {useEffect, useState} from '@tarojs/taro';
import {View, Text, Image, Button, Textarea} from "@tarojs/components";
import { connect} from "@tarojs/redux";
import { AtTabs, AtTabsPane } from 'taro-ui'
import NewQuestion from '../../components/newQuestion/newQuestion'
import * as class1 from "../../actions/class1";
import './askQuestion.scss'

const AskQuestion = props => {
  const {
    pageFlag,
    checkStudent,
    type,
    courseId,
    publishQuestion,
    studentQuestion,
    postCourseQuestion,
    publishAttendance,
    checkId,
    postAttendance,
    unfinishedList,
    finishedList,
    checkList
  } = props;
  const [tabList, setTabList] = useState([]);
  const [currentNum, setCurrentNum] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
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
      case 'peerTest':
        setTabList([{ title: '新建测试'}, { title: '测试情况'}]);
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
                unfinishedList.map(item =>(
                  <View
                    className='task-up-container'
                    key={item.id}
                  >
                    <View className='item'>{item.homeworkTitle}</View>
                    <View className='middle item'>未完成</View>
                    <View
                      className='item'
                      onClick={
                        () => {
                          Taro.setStorageSync('title',item.homeworkTitle);
                          Taro.setStorageSync('id',item.id);
                          Taro.navigateTo({url: '../../pages/taskUp/taskUp'})
                        }
                      }
                    >
                      去完成
                    </View>
                  </View>
                ))
                : null
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
                (type ? <View>
                      <View className='check-person-container'>
                        {
                          checkList.length !== 0 && checkList.map(item => {
                            const time = new Date(item.createTime);
                            return (
                              <View key={item.id} className='wrapper'>
                                <View className='wrapper1'>
                                  <View className='item'>出勤：{item.attendance}</View>
                                  <View className='item'>缺勤：0</View>
                                  <View className='item'>迟到：0</View>
                                  <View className='item'>请假：1</View>
                                </View>
                                <View className='wrapper2'>
                                  <Text>{time.toLocaleString()}</Text>
                                  <Text>出勤</Text>
                                </View>
                              </View>
                            )
                          })
                        }
                      </View>
                    </View> :
                    <View>
                      {
                        checkStudent.length !==0 ? checkStudent.map(item => {
                          const time = new Date(item.createTime);
                          return(
                            <View key={item.id} className='teacher-check-container'>
                              <Image src={item.avatarUrl} className='img' />
                              <Text className='name'>{item.nickName}</Text>
                              <Text className='time'>{time.toLocaleString()}</Text>
                            </View>
                          )
                        }): null
                      }
                    </View>
                )
                :null
            }
            {
              pageFlag === 'peerTest' ?
                (type? <View className='student-peer-test'>
                      {
                        studentQuestion.length !== 0 ? studentQuestion.map(item => {
                          return (
                            <View key={item.id} className='wrapper'>
                              <View className='title'>{item.question}</View>
                              <Textarea
                                className='answer'
                                placeholder='输入问题答案'
                                onInput={e => setAnswer(e)}
                              />
                              <Button
                                className='btn'
                                onClick={
                                  () => {
                                    postCourseQuestion({"courseId": courseId, "questionId": item.id, "answer": answer})
                                  }
                                }
                              >
                                提交
                              </Button>
                            </View>
                          )
                        }): null
                      }
                    </View>:
                    <View className='peer-test-container'>
                      <View className='question'>
                        <Text className='title'>问题：</Text>
                        <Textarea
                          placeholder='在这里输入问题'
                          className='content'
                          onInput={e => setQuestion(e)}
                        />
                      </View>
                      <View className='answer'>
                        <Text className='title'>答案：</Text>
                        <Textarea
                          placeholder='在这里输入问题答案'
                          className='content'
                          onInput={e => setAnswer(e)}
                        />
                      </View>
                      <Button
                        className='btn'
                        onClick={
                          () => {
                            publishQuestion({"question": question, "answer": answer, "courseId": courseId})
                          }
                        }
                      >
                        发布
                      </Button>
                    </View>
                )
                : null
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
                finishedList.map(item => (
                  <View
                    className='task-up-container'
                    key={item.id}
                  >
                    <View className='item'>{item.homeworkTitle}</View>
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
                  </View>
                ))
                : null
            }
            {
              pageFlag === 'checkPerson' ?
                (type?
                  <Button
                    className='attendance'
                    onClick={
                      () => {
                        postAttendance({"courseId": courseId, "attendanceId": checkId})
                      }
                    }
                  >
                    打考勤
                  </Button>:
                  <Button
                    className='open-attendance'
                    onClick={
                      () => {
                        publishAttendance({"courseId": courseId})
                      }
                    }
                  >
                    开启考勤
                  </Button>) : null
            }
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
};
export default connect(
  state => ({
    pageFlag: state.class1.pageFlag,
    finishedList:state.class2.finishedList,
    unfinishedList:state.class2.unfinishedList,
    type: state.class2.type,
    checkStudent: state.class1.checkStudent,
    courseId: state.class1.courseId,
    studentQuestion: state.class1.studentQuestion,
    checkId: state.class1.checkId,
    checkList: state.class1.checkList
  }),
  dispatch => ({
    publishQuestion(args) {
      dispatch(class1.publishQuestion(args));
    },
    postCourseQuestion(args) {
      dispatch(class1.postCourseQuestion(args))
    },
    publishAttendance(args) {
      dispatch(class1.publishAttendance(args))
    },
    postAttendance(args) {
      dispatch(class1.postAttendance(args))
    }
    })
)(AskQuestion);
