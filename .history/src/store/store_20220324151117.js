import { createApp } from 'vue'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store =  new Vuex.Store({
  state () {
    return {
      iconAvata: [
        {   id:1,
          imageAvata:'../imageHeader/avata.svg',
          titleAvata:'Nam Hoàng Đặng',
          tymAvata:'../imageHeader/tym-avata.svg',
          iconAvataGame:'../imageHeader/icon-game.svg'
      }, {
           id:2,
           imageAvata:'../imageHeader/avata.svg',
           titleAvata:'Nam Hoàng Đặng',
           tymAvata:'../imageHeader/tym-avata.svg',
           iconAvataGame:'../imageHeader/icon-game.svg'
      }, {
          id:3,
          imageAvata:'../imageHeader/avata.svg',
          titleAvata:'Nam Hoàng Đặng',
          tymAvata:'../imageHeader/tym-avata.svg',
          iconAvataGame:'../imageHeader/icon-game.svg'
      }, {
           id:4,
           imageAvata:'../imageHeader/avata.svg',
           titleAvata:'Nam Hoàng Đặng',
           tymAvata:'../imageHeader/tym-avata.svg',
           iconAvataGame:'../imageHeader/icon-game.svg'
      }, {
        id:5,
        imageAvata:'../imageHeader/avata.svg',
        titleAvata:'Nam Hoàng Đặng',
        tymAvata:'../imageHeader/tym-avata.svg',
        iconAvataGame:'../imageHeader/icon-game.svg'
   },
      ]
    }
  },

})

const app = createApp({})


app.use(store)
export default store;