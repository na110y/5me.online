import Vue from 'vue'
import Vuex from 'vuex'
import state from './State'
import getters from './Getters'

Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    getters,
    
    
})

export default store