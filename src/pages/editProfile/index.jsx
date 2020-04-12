import Taro, { useState } from '@tarojs/taro';
import { connect } from "@tarojs/redux";
import {Image, View, Picker, Text} from "@tarojs/components";
import {AtIcon, AtInput} from "taro-ui";
import { saveProfile } from "../../actions/class2";
import './index.scss';
import {showLoading} from "../../util/common";


const EditProfile = props => {

  const { userInfo, dispatchSave } =  props;
  const typeArr = ["学生", "教师"];
  const [password, setPassword] = useState('');
  const [type, setType] = useState('请选择');
  const [number, setNumber] = useState('');

  return (
    <View className='full_height flex direction_column'>
      <View className='editTit flex padding_s bgc_lightorange between'>
        <View className='fontC_white'>编辑个人信息</View>
        <View
          className='fontC_white'
          onClick={() => {
            showLoading(true);
            dispatchSave({
              account: number,
              password: password,
              type: type === typeArr[0] ? 2 : 1
            })
          }}
        >
          <AtIcon value='check' size='16' color='#ffffff' />
          保存
        </View>
      </View>
      <View
        className='avatarWrap'
      >
        <View className='avatarCont flex center'>
          <Image
            className='avatar'
            src={userInfo.avatarUrl || require("../../assets/images/default.jpg")}
          />
        </View>
      </View>
      <View className='flex_grow bgc_white padding_xxs '>
        <View className='flex center_column padding_xxs'>
          <Text>账号</Text>
          <AtInput
            className=''
            placeholder='请输入工号/学号'
            value={number}
            onChange={
              (e) => (setNumber(e))}
          />
        </View>
        <View className='flex center_column padding_xxs'>
          <Text>密码</Text>
          <AtInput
            className=''
            placeholder='请输入密码'
            type='password'
            value={password}
            onChange={(e) => (setPassword(e))}
          />
        </View>
        <View className='flex center_column padding_column_s padding_row_xxs'>
          <Text>身份</Text>
          <View className='flex_grow'>
            <Picker
              mode='selector'
              range={typeArr}
              onChange={(e)=>{
                setType(typeArr[parseInt(e.target.value)]);
              }}
            >
              <View className='fontC_darkgray padding_row_s'>
                {type}
              </View>
            </Picker>
          </View>
        </View>
      </View>
    </View>
  )
};

export default connect(
  state => ({
    userInfo: state.class2.userInfo,
  }),
  dispatch => ({
    dispatchSave(args){
      dispatch(saveProfile(args))
    }
  })
)
(
  EditProfile
);
