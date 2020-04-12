import Taro, {useEffect, useState} from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import {Text, Video, View} from "@tarojs/components";
import './classItem.scss';
import * as class1 from "../../actions/class1";

const ClassItem = props => {
  const {userCourses, setCourseId, joinCourse} = props;
  return (
    <View>
      {
        userCourses.length !== 0 ? userCourses.map((item) => {
          return(
            <View
              key={item.id}
              className='classItem-container'
              onClick={
                () => {
                  setCourseId({"id": item.id});
                  Taro.navigateTo({url: '../../pages/classDetail/classDetail'})
                }
              }
            >
              <View className='title'>
                <Text>{item.courseName}</Text>
                <View
                  onClick={
                    (e) => {
                      joinCourse({"courseId": item.id});
                      e.stopPropagation()
                    }}
                >
                  +
                </View>
              </View>
              <View className='wrapper'>
                <View className='teacher-name'>任课教师：{item.teacherName}</View>
                <View className='class=type'>课程类型：{item.type}</View>
              </View>
            </View>
          )
        }) : <View className='none'>您还没有添加任何课程</View>
      }

    </View>

  )
};

export default connect(
  state => ({
    userCourses: state.class1.userCourses,
  }),
  dispatch => ({
    setCourseId(args) {
      dispatch(class1.setCourseId(args));
    },
    joinCourse(args) {
      dispatch(class1.joinCourse(args))
    }
  })
)(ClassItem);
