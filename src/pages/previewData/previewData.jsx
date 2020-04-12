import Taro, {useState, useEffect} from '@tarojs/taro';
import { View,} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import { AtTabs, AtTabsPane } from 'taro-ui';
import './previewData.scss'
import  PptItem from '../../components/pptItem/pptItem';
import PptDetailItem from '../../components/pptDetailItem/pptDetailItem'

const PreviewData = props => {
  const {pptDetailFlag} = props;
  const tabList = [{ title: 'PPT' }, { title: '课程中心资源' }, { title: '其他资料' }];
  const [currentNum, setCurrentNum] = useState(0);
  return(
    <View className='previewData-container'>
      <View className='title'>预习资料</View>
      <AtTabs
        current={currentNum}
        tabList={tabList}
        onClick={
          (e) => setCurrentNum(e)
        }
      >
        <AtTabsPane current={currentNum} index={0} >
          <View style='background-color: #FAFBFC' >
            {
              pptDetailFlag? <PptItem /> : <PptDetailItem />
            }
          </View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={1}>
          <View style='background-color: #FAFBFC; text-align: center'>
            请打开链接进入课程中心资源。。。
          </View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
};
export default connect(
  state => ({
    pptDetailFlag: state.class1.pptDetailFlag
  }),
  dispatch => ({

  })
)(PreviewData);
