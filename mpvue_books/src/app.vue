<script>
import {request} from './util'
export default {
  name: 'app',
  async created () {
    const res = await request({
      url: '/weapp/demo'
    })
    // const res = await get('/weapp/demo')
    console.log(222, res)
    // wx.request({
    //   url: config.host + '/weapp/demo',
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    console.log('小程序加载了')
  }
}
</script>

<style lang="stylus" type="text/stylus" ref="stylesheet/stylus" scoped>
@import "styles/stylus/variables.styl"

</style>
