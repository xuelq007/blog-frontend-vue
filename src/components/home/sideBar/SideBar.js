import axios from 'axios'
import qs from 'qs'
import store from '../../../store/store.js'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'SideBar',
  data () {
    return {
      dialogVisible: false,
      user: '',
      password: '',
      errorUser: false
    }
  },

  methods: {
    handleClose: function (done) {
      this.clearInput()
      done()
    },

    handleCancel: function () {
      this.dialogVisible = false
      this.clearInput()
    },

    validateUser: function () {
      let self = this

      if (this.user.length === 0 || this.password.length === 0) {
        this.errorUser = true
        return
      }

      let params = {
        user: this.user,
        password: this.password
      }

      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }

      axios.post('/api/validateUser', qs.stringify(params), config)
        .then(function (response) {
          let valid = response.data.valid
          if (valid) {
            self.dialogVisible = false
            store.dispatch('setIsLogin', valid)
            self.$router.push({
              path: '/management'
            })
          } else {
            self.errorUser = true
          }
        })
        .catch(function (response) {
          console.log(response)
        })
    },

    clearInput: function () {
      this.user = ''
      this.password = ''
      this.errorUser = false
    }
  }
}
