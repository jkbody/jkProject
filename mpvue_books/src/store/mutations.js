import * as types from './mutation-type' // 引入常量

const mutations = {
  [types.SET_USERINFO] (state, v) {
    state.userInfo = v
  },
  [types.TEST] (state, v) {
    state.TESTinput = v
  }
}
export default mutations
