import Taro, {useState, useEffect} from '@tarojs/taro';
import {View, Button, Text, Image} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import * as class1 from "../../actions/class1";
import './evaluate.scss'

const Evaluate = props => {
  const {postComment, courseId, type, comment} = props;
  const commentArr = Object.values(comment);
  const [score, setScore ] = useState('');
  return(
    <View>
      {
        type ?
          <View className='evaluate-container'>
            <View className='item'>
              <View
                className='circle'
                onClick={() => setScore('5')}
              >
                非常满意
              </View>
              <View className='grade1'>5</View>
            </View>
            <View className='item'>
              <View
                className='circle'
                onClick={() => setScore('4')}
              >
                满意
              </View>
              <View className='grade2'>4</View>
            </View>
            <View className='item'>
              <View
                className='circle'
                onClick={() => setScore('3')}
              >
                较满意
              </View>
              <View className='grade3'>3</View>
            </View>
            <View className='item'>
              <View
                className='circle'
                onClick={() => setScore('2')}
              >
                不满意
              </View>
              <View className='grade4'>2</View>
            </View>
            <View className='item'>
              <View
                className='circle'
                onClick={() => setScore('1')}
              >
                讨厌
              </View>
              <View className='grade5'>1</View>
            </View>
            <Button
              className='btn'
              onClick={
                () => {
                  postComment({"courseId": courseId, "score": score})
                }
              }
            >
              提交
            </Button>
          </View>:
          <View>
            {
              commentArr[0].length !== 0? commentArr[0].map((item, index) => {
                return(
                  <View key={index} className='comment-container'>
                    <Text className='grade'>1分:</Text>
                    <View className='wrapper'>
                      <Image className='img' src={item.avatarUrl} />
                      <Text className='name'>{item.nickName}</Text>
                    </View>
                  </View>
                )
              }): null
            }
            {
              commentArr[1].length !== 0? commentArr[1].map((item, index) => {
                return(
                  <View key={index} className='comment-container'>
                    <Text className='grade'>2分:</Text>
                    <View className='wrapper'>
                      <Image className='img' src={item.avatarUrl} />
                      <Text className='name'>{item.nickName}</Text>
                    </View>
                  </View>
                )
              }): null
            }
            {
              commentArr[2].length !== 0? commentArr[2].map((item, index) => {
                return(
                  <View key={index} className='comment-container'>
                    <Text className='grade'>3分:</Text>
                    <View className='wrapper'>
                      <Image className='img' src={item.avatarUrl} />
                      <Text className='name'>{item.nickName}</Text>
                    </View>
                  </View>
                )
              }): null
            }
            {
              commentArr[3].length !== 0? commentArr[3].map((item, index) => {
                return(
                  <View key={index} className='comment-container'>
                    <Text className='grade'>4分:</Text>
                    <View className='wrapper'>
                      <Image className='img' src={item.avatarUrl} />
                      <Text className='name'>{item.nickName}</Text>
                    </View>
                  </View>
                )
              }): null
            }
            {
              commentArr[4].length !== 0? commentArr[24].map((item, index) => {
                return(
                  <View key={index} className='comment-container'>
                    <Text className='grade'>5分:</Text>
                    <View className='wrapper'>
                      <Image className='img' src={item.avatarUrl} />
                      <Text className='name'>{item.nickName}</Text>
                    </View>
                  </View>
                )
              }): null
            }
          </View>
      }

    </View>
  )
};
export default connect(
  state => ({
    courseId: state.class1.courseId,
    type: state.class2.type,
    comment: state.class1.comment
  }),
  dispatch => ({
    postComment(args) {
      dispatch(class1.postComment(args))
    }
  })
)(Evaluate);
