import Taro, {useState, useEffect} from '@tarojs/taro';
import {Input, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import './pptDetailItem.scss'
import {navigateBack} from "@tarojs/taro-quickapp/src/api/router";

const PptDetailItem = props => {
  const [flag, setFlag] = useState(true);
  const [colorFlag1, setColorFlag1] = useState(true);
  const [colorFlag2, setColorFlag2] = useState(true);
  const [colorFlag3, setColorFlag3] = useState(true);
  return(
    <View className='pptDetailItem-container'>
      <View className='ppt-con'>
        我是第一页PPT
      </View>
      <View className='understand'>
        <View
          className='return return1'
          onClick={
            () => {
              setFlag(false);
              setColorFlag1(false);
              setColorFlag2(true);
              setColorFlag3(true);
            }
          }
          style={colorFlag1 ? {background: '#fff'}:{background: '#F8CE5E'}}
        >
          不懂
        </View>
        <View
          className='return'
          onClick={
            () => {
              setFlag(true);
              setColorFlag1(true);
              setColorFlag2(false);
              setColorFlag3(true);
            }
          }
          style={colorFlag2 ? {background: '#fff'}:{background: '#F8CE5E'}}
        >
          懂了
        </View>
        <View
          className='return'
          onClick={
            () => {
              setFlag(true);
              setColorFlag1(true);
              setColorFlag2(true);
              setColorFlag3(false);
            }
          }
          style={colorFlag3 ? {background: '#fff'}:{background: '#F8CE5E'}}
        >
          收藏
        </View>
      </View>
      <View
        className='comment-wrapper'
        style={flag ? {display: "none"}: null}
      >
        <Input className='comment' placeholder='请将你的不懂之处写在此处' />
        <View className='publish'>发布</View>
      </View>
    </View>
  )
};
export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(PptDetailItem);
