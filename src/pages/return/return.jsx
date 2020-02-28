import Taro, {useEffect, useState} from '@tarojs/taro';
import {View, Text, Textarea, Button} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './return.scss';

const Return = props => {
  return(
    <View className='return-container'>
      <Text>及时反馈</Text>
      <Textarea value='' />
      <Text>精神状态反馈</Text>
      <View>
        <View>好困</View>
        <View>听不懂，要睡了</View>
        <View>状态不错</View>
      </View>
      <View>
        <Button />
        <Button />
        <Button />
      </View>
      <Button>提交</Button>
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Return);
