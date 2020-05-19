import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"
import { store } from './store.js'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css"

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  icons: {
    iconfont: "md"
  },
  theme: { dark: true }
});

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
