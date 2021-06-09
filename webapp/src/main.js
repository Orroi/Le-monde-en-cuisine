import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faFileMedical, faMapMarkerAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vuetify from './plugins/vuetify';

Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUserSecret, faBell, faMapMarkerAlt, faFileMedical)
Vue.config.devtools = true

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
