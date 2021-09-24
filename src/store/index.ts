/*
 * @Author: Norip Chan
 * @Date: 2021-09-17 15:04:08
 * @LastEditTime: 2021-09-23 15:00:06
 * @LastEditors: Norip Chan
 * @Description: 
 * @FilePath: \netease-cloud-music\src\store\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createStore } from 'vuex'
import state from './state'
import actions from './action'
import mutations from './mutations'
import getters from './getters'

export default createStore({
  state,
  mutations,
  actions,
  modules: {
  },
  getters,
})
