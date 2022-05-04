import Vue from 'vue'
import Vuex from 'vuex'
import State from './State'
import Getters from './Getters'
// import actions from './Actions'
// import mutations from './Mutations'
Vue.use(Vuex)
const store = new Vuex.Store({
    State,
    Getters,
    // actions,
    // mutations
})

export default store