<template>
<div>
    <input type="text" v-model="input">
    <button @click="cl">提交</button>
    <p>{{TESTinput}}</p>
</div>
</template>

<script>
  import * as types from '@/store/mutation-type'
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'vuexTest',
    data () {
      return {
        input: ''
      }
    },
    methods: {
      ...mapMutations({
        inputTest: types.TEST
      }),
      cl () {
        this.inputTest(this.input)
        this.input = ''
      }
    },
    computed: {
      ...mapState(['TESTinput'])
    }
  }
</script>

<style lang="stylus" scoped>

</style>
