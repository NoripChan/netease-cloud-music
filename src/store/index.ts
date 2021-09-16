import { createStore } from 'vuex'
import state from './state'
import actions from './action'
import mutations from './mutations'

export default createStore({
  state,
  mutations,
  actions,
  modules: {
  }
})
