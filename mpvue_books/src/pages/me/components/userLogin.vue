<template>
    <div class="userInfo">
        <button class="userLogin"
                open-type='getUserInfo'
                @getuserinfo="doLogin"
                :style="{backgroundImage:'url('+userInfo.avatarUrl+')'}"
        ></button>
        <p>{{userInfo.nickName}}</p>
    </div>
</template>

<script>
  import qcloud from 'wafer2-client-sdk'
  import config from '@/config'
  import {showSuccess} from '@/util'
  import {mapState, mapMutations} from 'vuex'
  import * as types from '@/store/mutation-type'
  export default {
    name: 'userLogin',
    data () {
      return {
      }
    },
    methods: {
      ...mapMutations({
        setUserInfo: types.SET_USERINFO
      }),
      doLogin (e) {
        let _this = this
        if (!this.userInfo.openId) {
          qcloud.setLoginUrl(config.loginUrl)
          qcloud.login({
            success: (userInfo) => {
              // console.log('登录成功', userInfo)
              wx.setStorageSync('userInfo', userInfo)
              _this.setUserInfo(wx.getStorageSync('userInfo'))
              showSuccess('登录成功')
              console.log(_this.userInfo)
            },
            fail: (err) => {
              console.log('登录失败', err)
            }
          })
        }
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    created () {
      // let userInfo = wx.getStorageSync('userInfo')
      // if (userInfo) {
      //   this.userInfo = userInfo
      // }
      // console.log(this.userInfo)
    }
  }
</script>

<style lang="stylus" scoped>
    .btn
        btnStyl()
    .btn:active
        background $activeColor
    .userInfo
        top 150rpx
        text-align center
        margin 20rpx 0
        img
            width 158rpx
            height 158rpx
            border-radius 50%
            margin 20rpx
    .userLogin
        width 158rpx
        height 158rpx
        border-radius 50%
        margin 20rpx auto
        font-size 20rpx
        line-height 158rpx
        background-size 158rpx

</style>
