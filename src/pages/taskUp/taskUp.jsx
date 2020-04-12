import Taro, {useEffect, useState} from '@tarojs/taro';
import { View, Button } from "@tarojs/components";
import { AtImagePicker,AtInput,AtTextarea  } from "taro-ui";
import { connect } from "@tarojs/redux";
import { uploadWork, releaseWork } from "../../actions/class2";
import { showLoading } from "../../util/common";
import './taskUp.scss';

const TaskUp = props => {
  const { dispatchUploadWork,dispatchReleaseWork, type, courseId } = props;
  const [imgFile, setImgFile] = useState([]);
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [textValue, setTextValue] = useState('');
  useEffect(()=>{
    setTitle(Taro.getStorageSync('title'));
    setId(Taro.getStorageSync('id'));
  },[]);

  return(
    <View>
      {
        type ?
          <View  className='flex direction_column full_height'>
            <View className='bgc_lightorange padding_s fontC_white'>{title}</View>
            <AtImagePicker
              count={1}
              files={imgFile}
              onChange={(file)=>(setImgFile(file))}
            />
            <View className='full_width flex_grow'></View>
            <Button
              className='margin_xs bgc_orange fontC_white'
              onClick={()=>{
                showLoading(true);
                dispatchUploadWork({
                  imageUrl: imgFile[0].url,
                  homeworkContentId: id
                })
              }}
            >
              提交作业
            </Button>
          </View> :
          <View className='bgc_white full_height padding_xs'>
            <AtInput
              placeholder='标题内容不大于12个字~'
              className='padding_s '
              value={inputValue}
              onChange={(e) => (setInputValue(e))}
            />
            <AtTextarea
              height={300}
              maxLength={200}
              placeholder='请输入作业内容'
              value={textValue}
              onChange={(e) => (setTextValue(e.target.value))}
            />
            <Button
              className='margin_xs bgc_orange fontC_white'
              onClick={()=>{
                showLoading(true);
                dispatchReleaseWork({
                  courseId,
                  HomeworkTitle: inputValue,
                  HomeworkContent: textValue,
                })
              }}
            >
              发布作业
            </Button>
          </View>
      }
    </View>
  )
};
export default connect(
  state => ({
    homeworkDetail: state.class2.homeworkDetail,
    type: state.class2.type,
    courseId: state.class1.courseId
  }),
  dispatch => ({
    dispatchUploadWork(args){
      dispatch(uploadWork(args))
    },
    dispatchReleaseWork(args){
      dispatch(releaseWork(args))
    }

  })
)(TaskUp);
