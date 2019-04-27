<template>
    <div class="container">
        <user-login></user-login>
        <year-progress></year-progress>
        <scan-books></scan-books>
        <!--<vuex-test></vuex-test>-->
    </div>
</template>
<script>
import yearProgress from './components/yearProgress'
import userLogin from './components/userLogin'
import scanBooks from './components/scanBooks'
// import vuexTest from './components/vuexTest'
export default {
  name: 'booksIndex',
  components: {
    yearProgress,
    userLogin,
    scanBooks
    // vuexTest
  },
  created () {
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  }
}
</script>

<style lang="stylus" scoped>
.container
    padding 0 30rpx
    columnCenter()
</style>
