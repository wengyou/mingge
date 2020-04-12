import Taro, { useEffect, useState } from "@tarojs/taro";
import {Button, Image, Input, View} from "@tarojs/components";
import { AtModal, AtInput, AtModalHeader, AtModalAction, AtModalContent } from "taro-ui";
import { connect } from "@tarojs/redux";
import { getScore, postScore, getHomework } from '../../actions/class2';
import {showLoading} from "../../util/common";

const CheckScore = props => {
  const { dispatchGetScore,dispatchGetHomework, dispatchPostScore, courseId, scoreList, allworkList, type } = props;

  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState('');
  const [homeworkId, setHomeworkId] = useState('');

  useEffect(()=>{
    type ?
    dispatchGetScore():
      dispatchGetHomework({courseId});
  },[]);

  return (
    <View>
      {
        type ?
          <View>
            {
              Array.isArray(scoreList) &&
              scoreList.map(item => (
                <View
                  className='margin_s padding_s shadow bgc_white fontC_darkgray'
                  key={item.homeworkTitle}
                >
                  {item.homeworkTitle} : {item.homeworkScore}
                </View>
              ))
            }
          </View>:
          <View>
            {
              Array.isArray(allworkList) &&
              allworkList.map((e)=>(
                <View
                  key={e.id}
                  className='flex between center_column padding_s margin_xs shadow bgc_white'
                >
                  <Image
                    src={e.homeworkUrl}
                    style={{
                      width: '70px',
                      height: '70px'
                    }}
                  />
                  <Button
                    className='bgc_lightorange fontC_white'
                    style={{
                      margin: '0',
                    }}
                    onClick={()=>{
                      setHomeworkId(e.id);
                      setShowModal(true);
                    }}
                  >
                    评分
                  </Button>
                </View>
              ))

            }
          </View>

      }
      <AtModal isOpened={showModal}>
        <AtModalHeader>评分</AtModalHeader>
        <AtModalContent>
          <AtInput
            placeholder='请打分'
            className='padding_s '
            value={score}
            onChange={(e) => (setScore(e))}
          />
        </AtModalContent>
        <AtModalAction>
          <Button
            onClick={()=>(setShowModal(false))}
          >
            取消
          </Button>
          <Button
            onClick={()=>{
              setShowModal(false);
              showLoading(true);
              dispatchPostScore({
                homeworkId,
                homeworkScore: score
              })
            }}
          >
            确定
          </Button>
        </AtModalAction>
      </AtModal>
    </View>
  )
};

export default connect(
  state => ({
    scoreList: state.class2.scoreList,
    type: state.class2.type,
    courseId: state.class1.courseId,
    allworkList: state.class2.allworkList

  }),
  dispatch => ({
    dispatchGetScore(){
      dispatch(getScore())
    },
    dispatchGetHomework(){
      dispatch(getHomework())
    },
    dispatchPostScore(args){
      dispatch(postScore(args))
    }
  })
)(
  CheckScore
);
