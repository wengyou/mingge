import Taro, {useEffect, useState} from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane } from 'taro-ui';
import ClassItem from "../../components/classItem/ClassItem.jsx";
import * as class1 from '../../actions/class1';
import './index.scss'

const Index = props => {
  const { getCourses,type, fetchAllCourses } = props;
  const tabList = [{ title: '我教的课' }, { title: '我听的课' }, { title: '所有课程'}];
  const [currentNum, setCurrentNum] = useState(0);
  useEffect(() => {
    getCourses({})
  }, []);
  return (
    <View>
      <AtTabs
        current={currentNum}
        tabList={tabList}
        onClick={
          (e) => {
            setCurrentNum(e);
            e === 2? fetchAllCourses({}): null;
            e === 1 || e === 0? getCourses({}): null
          }
        }
      >
        <AtTabsPane current={currentNum} index={0} >
          <View style='background-color: #FAFBFC' >
            {
              type === false ? <ClassItem />: <View className='none'>您还没有教课</View>
            }
          </View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={1}>
          <View style='background-color: #FAFBFC'>
            {
              type ? <ClassItem />: <View className='none'>您没有添加任何课程</View>
            }
          </View>
        </AtTabsPane>
        <AtTabsPane current={currentNum} index={2}>
          <View style='background-color: #FAFBFC'>
            <ClassItem />
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
};

export default connect(
  state => ({
    userCourses: state.class1.userCourses,
    type: state.class2.type
  }),
  dispatch => ({
    getCourses() {
      dispatch(class1.getCourses());
    },
    fetchAllCourses() {
      dispatch(class1.getAllCourse());
    }
  })
)(Index);
