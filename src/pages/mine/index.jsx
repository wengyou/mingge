import Taro, { useState, useEffect } from '@tarojs/taro';
import { connect } from "@tarojs/redux";
import {Text, View, Image, Button} from "@tarojs/components";
import { userLogin } from "../../actions/class2";
import { showLoading } from "../../util/common";
import './index.scss';

const Mine = (props) => {

  const { dispatchLogin, userInfo, token, detailInfo } = props;
  const type = {
    1: '老师',
    2: '学生'
  };

  const getInfo = () =>{
    Taro.login({
      success: loginRes => {
        const jsCode = loginRes.code;
        Taro.getUserInfo({
          success: infoRes => {
            Taro.setStorageSync('userInfo', infoRes.userInfo);
            showLoading(true);
            dispatchLogin({
              iv: infoRes.iv,
              encryptedData: infoRes.encryptedData,
              jsCode,
            })
          },
          fail: () => {
            showLoading(false);
          }
        })
      },
      fail: () => {
        showLoading(false);
      }
    })
  };

  return (
    <View className='full_height flex direction_column mine_wrap'>
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
      {
        token &&
        <View>
          <View className='margin_row_xxs margin_column_xxs bgc_white padding_column_s borderRadius'>
            <Text className='fontC_lightgray margin_row_s'>姓名</Text>
            <Text className='margin_row_s'>{userInfo.nickName}</Text>
          </View>
          <View className='margin_row_xxs margin_column_xxs bgc_white padding_column_s borderRadius'>
            <Text className='fontC_lightgray margin_row_s'>身份</Text>
            <Text className='margin_row_s'>{type[detailInfo.type]}</Text>
          </View>
          <View className='margin_row_xxs margin_column_xxs bgc_white padding_column_s borderRadius'>
            <Text className='fontC_lightgray margin_row_s'>账号</Text>
            <Text className='margin_row_s'>{detailInfo.account}</Text>
          </View>
        </View>
      }
      <View>
        {
          token ?
            <Button
              className='margin_xxs bgc_orange fontC_white mine_btn'
              onClick={()=>{
                Taro.navigateTo({
                  url: "/pages/editProfile/index"
                })
              }
              }
            >
              修 改 资 料
            </Button> :
            <Button
              className='margin_xxs bgc_orange fontC_white mine_btn'
              openType='getUserInfo'
              onClick={getInfo}
            >
              登 录 授 权
            </Button>
        }
      </View>
    </View>
  )
};

export default connect(
  state => ({
    userInfo: state.class2.userInfo,
    detailInfo: state.class2.detailInfo,
    token: state.class2.token,
  }),
  dispatch => ({
    dispatchLogin(args){
      dispatch(userLogin(args))
    }
  })
)(
  Mine
)
