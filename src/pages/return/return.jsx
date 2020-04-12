import Taro, {useEffect, useState} from '@tarojs/taro';
import {View, Text, Textarea, Button} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './return.scss';

const Return = props => {
  return(
    <View className='return-container'>
      <Text>及时反馈:</Text>
      <Textarea className='input' value='' />
      <Text>精神状态反馈:</Text>
      <View className='wrapper1'>
        <View className='item1'>好困</View>
        <View className='item2'>听不懂，要睡了</View>
        <View className='item3'>状态不错</View>
      </View>
      <View className='wrapper2'>
        <Button className='btn' />
        <Button className='btn' />
        <Button className='btn' />
      </View>
      <Button className='sub'>提交</Button>
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(Return);
