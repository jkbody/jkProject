<template>
    <div class="container">
        <progress :percent="pastDay" active activeColor="#00bcd4"/>
        <p>今天是{{fallYear}}年的第{{tayDay}}天，一年已经过去{{pastDay}}%</p>
    </div>
</template>

<script>
  export default {
    name: 'yearProgress',
    data () {
      return {
      }
    },
    methods: {
      getDayOfYear () {
        const year = new Date().getFullYear()
        if (year % 400 === 0 && year % 4 === 0) {
          return 366
        } else return 365
      }
    },
    computed: {
      fallYear () {
        return new Date().getFullYear()
      },
      tayDay () {
        // 当年的第一天
        let start = new Date()
        start.setMonth(0)
        start.setDate(1)
        let offset = new Date().getTime() - start.getTime()
        return parseInt(offset / 1000 / 60 / 60 / 24) + 1
      },
      pastDay () {
        return (this.tayDay * 100 / this.getDayOfYear()).toFixed(1) // 小数点后面保留1位
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .container
        font-size 34rpx
        margin-top 40rpx
        p
            margin-top 30rpx
            margin-bottom 40rpx

</style>
