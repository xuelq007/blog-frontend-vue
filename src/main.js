// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
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
