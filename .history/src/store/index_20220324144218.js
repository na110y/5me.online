import Vue from 'vue'
import Vuex from 'vuex'
import state from './State'
import getters from './Getters'
// import actions from './Actions'
// import mutations from './Mutations'
Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    getters,
    // actions,
    // mutations
})

export default store