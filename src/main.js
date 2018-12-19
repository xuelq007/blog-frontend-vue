// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import register from './pwa/register.js'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeCreate: function () {
    register.registePWA()
  }
})

window.mountApp = () => {
  app.$mount('#app')
}
if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    window.mountApp()
  }
} else {
  window.mountApp()
}
