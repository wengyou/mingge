import Taro, {useEffect, useState} from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from "@tarojs/components";
import { AtTabBar }  from 'taro-ui'
import ClassItem from "../../components/classItem/ClassItem.jsx";
import './index.scss'

const Index = props => {
  const { token } = props;
  const [currentNum, setCurrentNum] = useState(0);
  return (
    <View>
      <AtTabBar
        tabList={[
          { title: '我教的课'},
          { title: '我听的课' },
        ]}
        onClick={(e) => {setCurrentNum(e)}}
        current={currentNum}
        fontSize='18'
      />
      <ClassItem />
      {/*{*/}
      {/*  token.length !==0 ?*/}
      {/*    <View>*/}
      {/*      <ClassItem />*/}
      {/*    </View> : <View className='tip'>您还没有登录</View>*/}
      {/*}*/}
    </View>
  )
};

export default connect(
  state => ({
    token: state.class2.token
  }),
  dispatch => ({

  })
)(Index);
