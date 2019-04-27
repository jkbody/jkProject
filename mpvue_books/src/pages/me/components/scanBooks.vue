<template>
    <div class="container"
            @click="scanBook"
            v-if="userInfo.openId"
    >
        <img src="../../../../static/img/scanCode.png" alt="">
        <p>扫码添加图书</p>
    </div>

</template>

<script>
  import {mapState} from 'vuex'
  import {request, showModal} from '@/util'
  export default {
    name: 'scanBook',
    methods: {
      async addBook (isbn) {
        const res = await request({
          url: '/weapp/addbook',
          method: 'POST',
          data: {
            isbn,
            open_id: this.userInfo.openId
          }
        })
        console.log(res)
        showModal('添加成功', `${res.title}添加成功`)
      },
      scanBook () {
        let _this = this
        wx.scanCode({
          success (res) {
            if (res.result) {
              _this.addBook(res.result)
            }
          }
        })
      }
    },
    computed: {
      ...mapState(['userInfo'])
    }
  }
</script>

<style lang="stylus" scoped>
    .container
        text-align center
        img
            overflow hidden
            display block
            width 300rpx
            height 300rpx
            margin 20rpx auto
</style>
