import Taro, {useEffect} from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import * as class1 from "../../actions/class1";
import './classDetail.scss'
import {finishWork, unFinishWork, isStudent} from "../../actions/class2";
import {showLoading} from "../../util/common";

const ClassDetail = props => {
  const {pageFlag, dispatchfinished, dispatchUnfinished, dispatchIsStudent, getUserAttendance, getAttendance,courseId, type, checkId, getCourseQuestion, getRank, getComment } = props;

  useEffect(()=>{
    dispatchIsStudent();
  }, []);

  useEffect(() => {
    getAttendance({"courseId": courseId})
  }, [courseId]);

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
            <Image className='img' src={require('../../assets/images/index/1.png')} />
            <Text>预习资料</Text>
          </View>
          <View
            className='tab-item'
            onClick={
              () => {Taro.navigateTo({url: '../../pages/previewTest/previewTest'})}
            }
          >
            <Image className='img' src={require('../../assets/images/index/2.png')} />
            <Text>预习测试</Text>
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
            <Image className='img' src={require('../../assets/images/index/3.png')} />
            <Text>课前提问</Text>
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
                type === false ? getUserAttendance({"attendanceId": checkId, "courseId": courseId}): null;
                Taro.navigateTo({url: '../../pages/askQuestion/askQuestion'})
              }
            }
          >
            <Image className='img' src={require('../../assets/images/index/4.png')} />
            <Text>考勤</Text>
          </View>
          <View
            className='tab-item'
            onClick={
              () => {
                pageFlag({"flag": 'peerTest'});
                type? getCourseQuestion({"courseId": courseId}): null;
                Taro.navigateTo({url: '../../pages/askQuestion/askQuestion'})
              }
            }
          >
            <Image className='img' src={require('../../assets/images/index/5.png')} />
            <Text>随堂测试</Text>
          </View>
          <View
            className='tab-item'
            onClick={
              () => {
                pageFlag({"flag": 'callName'});
                Taro.navigateTo({url: '../../pages/askQuestion/askQuestion'})
              }
            }
          >
            <Image className='img' src={require('../../assets/images/index/6.png')} />
            <Text>点名答题</Text>
          </View>
          <View
            className='tab-item'
            onClick={
              () => {
                type ? Taro.navigateTo({url: '../../pages/return/return'}): null
              }
            }
          >
            <Image className='img' src={require('../../assets/images/index/7.png')} />
            <Text>学习反馈</Text>
          </View>
          <View
            className='tab-item'
            onClick={
              () => {
                type === false? getComment({"courseId": courseId}): null;
                Taro.navigateTo({url: '../../pages/evaluate/evaluate'})
              }
            }
          >
            <Image className='img' src={require('../../assets/images/index/8.png')} />
            <Text>课堂评价</Text>
          </View>
        </View>
      </View>
      <View className='class-after class-item'>
        <View className='time'>
          课后
        </View>
        <View className='tab'>
          {
            type ?
              <View
                className='tab-item'
                onClick={
                  () => {
                    showLoading(true);
                    pageFlag({"flag": 'taskUp'});
                    dispatchfinished();
                    dispatchUnfinished({courseId});
                    Taro.navigateTo({url: '../../pages/askQuestion/askQuestion'});
                  }
                }
              >
                <Image className='img' src={require('../../assets/images/index/9.png')} />
                <Text>作业上传</Text>
              </View> :
              <View
                className='tab-item'
                onClick={
                  () => {
                    Taro.navigateTo({url: '/pages/taskUp/taskUp'});
                  }
                }
              >
                <Image className='img' src={require('../../assets/images/index/9.png')} />
                <Text>发布作业</Text>
              </View>
          }
          <View
            className='tab-item'
            onClick={
              () => {
                pageFlag({"flag": 'answerQuestion'});
                Taro.navigateTo({url: '../../pages/askQuestion/askQuestion'})
              }
            }
          >
            <Image className='img' src={require('../../assets/images/index/10.png')} />
            <Text>课后答疑</Text>
          </View>
          <View
            className='tab-item'
            onClick={
              () => {
                Taro.navigateTo({url: '/pages/checkScore/index'})
              }
            }
          >
            <Image className='img' src={require('../../assets/images/index/11.png')} />
            {type ? <Text>成绩查看</Text> : <Text>批改作业</Text>}
          </View>
        </View>
      </View>
    </View>
  )
};

export default connect(
  state => ({
    courseId: state.class1.courseId,
    type: state.class2.type,
    checkId: state.class1.checkId
  }),
  dispatch => ({
      pageFlag(args) {
        dispatch(class1.pageFlag(args))
      },
    dispatchfinished(){
      dispatch(finishWork())
    },
    dispatchUnfinished(arg){
      dispatch(unFinishWork(arg))
    },
    dispatchIsStudent(){
        dispatch(isStudent())
      },
    getAttendance(args) {
      dispatch(class1.getAttendance(args))
    },
    getUserAttendance(args) {
      dispatch(class1.getUserAttendance(args))
    },
    getCourseQuestion(args) {
      dispatch(class1.getCourseQuestion(args));
    },
    getRank(args) {
      dispatch(class1.getRank(args));
    },
    getComment(args) {
      dispatch(class1.getComment(args))
    }
  })
)(ClassDetail);
