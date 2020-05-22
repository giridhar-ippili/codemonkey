import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"
import { store } from './store.js'
import Vuetify from 'vuetify'
import UUID from 'vue-uuid'
import "vuetify/dist/vuetify.min.css"
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  icons: {
    iconfont: "mdi"
  },
  theme: { dark: true }
});

Vue.use(UUID);

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
