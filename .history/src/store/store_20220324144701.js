import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
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

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)
export default store;