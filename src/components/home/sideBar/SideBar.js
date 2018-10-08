import axios from 'axios'

export default {
  name: 'SideBar',
  data () {
    return {}
  },

  methods: {
    getList: function () {
      axios.get('/api/getList')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  }
}
