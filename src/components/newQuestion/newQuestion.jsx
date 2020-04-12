import Taro, {useState, useEffect} from '@tarojs/taro';
import {View,Text,Input} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './newQuestion.scss'

const NewQuestion = props => {
  return(
    <View className='new-question-container'>
      <View className='title'>
        <Text>标题:</Text>
        <Input />
      </View>
      <View className='info'>
        <Text>说明：</Text>
        <Input />
      </View>
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(NewQuestion);
