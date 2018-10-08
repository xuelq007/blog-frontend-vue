export default {
  name: 'About',
  data () {
    return {}
  },

  methods: {
    handleClick: function (event) {
      event.stopPropagation()
    }
  }

}
