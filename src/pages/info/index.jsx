import Taro, {useState, useEffect} from '@tarojs/taro';
import { View } from "@tarojs/components";
import {connect} from "@tarojs/redux";
import { AtTabs, AtTabsPane } from 'taro-ui'
import './info.scss'

const Info = props => {
  const { type } = props;
  const tabList = [{ title: '全部' }, { title: '班级消息' }, { title: '教务公告' }];
  const [currentNum, setCurrentNum] = useState(0);
  return (
    <View>
      <AtTabs current={currentNum} tabList={tabList} onClick={(e) => {setCurrentNum(e)}}>
        <AtTabsPane current={currentNum} index={0} >
          {
            type ?
              <View className='flex direction_column'>
                <View className='padding_s margin_xs shadow bgc_white ellipsis fontC_lightgray'>
                  老师发布了新的任务,请注意查收
                </View>
                <View className='padding_s margin_xs shadow bgc_lightorange ellipsis fontC_white'>
                  老师上传了新的课件,请注意查收
                </View>
                <View className='padding_s margin_xs shadow bgc_white ellipsis fontC_lightgray'>
                  老师发布了新的任务,请注意查收
                </View>
                <View className='padding_s margin_xs shadow bgc_lightorange ellipsis fontC_white'>
                  老师发布了新的任务,请注意查收
                </View>
              </View> :
              <View className='flex direction_column'>
                <View className='padding_s margin_xs shadow bgc_white ellipsis fontC_lightgray'>
                  教务通知[2020]24号关于进一步做好我校实验室安全管理和学生实习安全管理 ...
                </View>
                <View className='padding_s margin_xs shadow bgc_lightorange ellipsis fontC_white'>
                  教务通知 · 关于组织申报2019年线下/线上线下混合式社会实践省级一流本科课程推荐工作的
                </View>
                <View className='padding_s margin_xs shadow bgc_white ellipsis fontC_lightgray'>
                  教务通知 · 关于利用国家级虚拟仿真实验教学项目共享平台开展实验教学的通知
                </View>
                <View className='padding_s margin_xs shadow bgc_lightorange ellipsis fontC_white'>
                  教务通知 -  关于组织参加美国华盛顿大学STEP项目的通知
                </View>
              </View>


          }
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={1}>
          {
            type ?
              <View className='flex direction_column'>
                <View className='padding_s margin_xs shadow bgc_white ellipsis fontC_lightgray'>
                  老师发布了新的任务,请注意查收
                </View>
                <View className='padding_s margin_xs shadow bgc_lightorange ellipsis fontC_white'>
                  老师上传了新的课件,请注意查收
                </View>
                <View className='padding_s margin_xs shadow bgc_white ellipsis fontC_lightgray'>
                  老师发布了新的任务,请注意查收
                </View>
                <View className='padding_s margin_xs shadow bgc_lightorange ellipsis fontC_white'>
                  老师发布了新的任务,请注意查收
                </View>
              </View> :
              <View
                style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'
                className='fontC_darkgray'
              >
                你还没有新消息哦
              </View>
          }
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={2}>
          {
            type ?
              <View
                style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'
                className='fontC_darkgray'
              >
                你还没有新消息哦
              </View> :
              <View className='flex direction_column'>
                <View className='padding_s margin_xs shadow bgc_white ellipsis fontC_lightgray'>
                  教务通知[2020]24号关于进一步做好我校实验室安全管理和学生实习安全管理 ...
                </View>
                <View className='padding_s margin_xs shadow bgc_lightorange ellipsis fontC_white'>
                  教务通知 · 关于组织申报2019年线下/线上线下混合式社会实践省级一流本科课程推荐工作的
                </View>
                <View className='padding_s margin_xs shadow bgc_white ellipsis fontC_lightgray'>
                  教务通知 · 关于利用国家级虚拟仿真实验教学项目共享平台开展实验教学的通知
                </View>
                <View className='padding_s margin_xs shadow bgc_lightorange ellipsis fontC_white'>
                  教务通知 -  关于组织参加美国华盛顿大学STEP项目的通知
                </View>
              </View>


          }
        </AtTabsPane>
      </AtTabs>
    </View>
  )
};

export default connect(
  state => ({
    type: state.class2.type
  }),
  dispatch => ({

  })
)(Info);
