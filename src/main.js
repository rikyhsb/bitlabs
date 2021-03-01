/*jshint esversion: 8 */
import Vue from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import '@coreui/coreui/dist/js/coreui.min'
import { ModalEvent, DropdownEvent, AlertEvent } from 'bootstrap/dist/js/bootstrap.min'
import '@coreui/coreui/dist/js/coreui.min'
import _ from 'lodash'

Vue.prototype.$apiUrl = process.env.VUE_APP_API

if (process.env.NODE_ENV === 'development') {
  Vue.prototype.$baseDir = process.env.VUE_APP_BASE_ROUTE
} else {
  Vue.prototype.$baseDir = process.env.VUE_APP_BASE_ROUTE + '/'
}

Vue.component('v-alert', require('@/components/Alert.vue').default)
Vue.component('spinner', require('@/components/Spinner.vue').default)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  components: { App }
}).$mount('#app')
