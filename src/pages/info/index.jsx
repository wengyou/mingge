import Taro, {useState, useEffect} from '@tarojs/taro';
import { View } from "@tarojs/components";
import {connect} from "@tarojs/redux";
import { AtTabs, AtTabsPane } from 'taro-ui'
import './info.scss'

const Info = () => {
  const tabList = [{ title: '全部' }, { title: '班级消息' }, { title: '教务公告' }];
  const [currentNum, setCurrentNum] = useState(0);
  return (
    <View>
      <AtTabs current={currentNum} tabList={tabList} onClick={(e) => {setCurrentNum(e)}}>
        <AtTabsPane current={currentNum} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
};

export default Info;
