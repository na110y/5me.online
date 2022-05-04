import Vue from 'vue'
import { createStore } from 'vuex'
import state from './State'
import getters from './Getters'
// import actions from './Actions'
import mutations from './Mutations'
Vue.use(Vuex)
const store = createStore({
    state,
    getters,
    // actions,
    // mutations
    //e cung thay the
})

export default store