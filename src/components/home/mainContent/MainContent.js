import axios from 'axios'

export default {
  name: 'MainContent',
  data () {
    return {
      blogGroup: {}
    }
  },

  created: function () {
    this.getList()
  },

  methods: {
    getList: function () {
      let self = this
      let blogGroup = {}
      this.getBlogList()
        .then(function (response) {
          let list = response.data
          list.forEach(item => {
            let category = item.category
            if (!blogGroup[category]) {
              blogGroup[category] = []
            }
            blogGroup[category].push({
              name: item.name,
              link: item.link
            })
          })
          // 监听对象属性变化
          self.blogGroup = Object.assign({}, self.blogGroup, blogGroup)
        })
        .catch(function (response) {
          console.log(response)
        })
    },

    getBlogList: function () {
      return axios.get('/api/getList')
    },

    getCategory: function () {
      return axios.get('/api/getCategory')
    }
  }
}
