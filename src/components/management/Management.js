import store from '../../store/store.js'

export default {
  name: 'ManagementPage',
  data () {
    return {}
  },

  beforeRouteEnter (to, from, next) {
    let isLogin = store.getters.getIsLogin

    isLogin && next()
  },

  methods: {}
}
