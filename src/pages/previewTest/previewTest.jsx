import Taro, {useEffect, useState} from '@tarojs/taro';
import {Button, Text, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './previewTest.scss'
import Question from '../../components/question/question'

const PreviewTest = props => {
  const [testFlag, setTestFlag] = useState(true);
  return(
    <View className='previewTest-container'>
      {
        testFlag?<View className='test-item-wrapper'>
            <View
              className='test-item'
              onClick={
                () => {setTestFlag(false)}
              }
            >
              第一次测试
            </View>
        </View>:
          <View className='test-detail-wrapper'>
            <View className='title'>
              <Text>第一次测试</Text>
              <Text className='cancel' onClick={() => {setTestFlag(true)}}>取消</Text>
            </View>
            <Question />
          </View>
      }


    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(PreviewTest);
