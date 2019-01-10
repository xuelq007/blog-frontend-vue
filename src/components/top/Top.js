import common from '@/components/common/common.js'

export default {
  name: 'GoTop',

  data () {
    return {
      visible: false
    }
  },

  mounted () {
    let testDom = document.querySelector('.goTop')
    testDom.addEventListener('click', this.scrollTop)

    // 用requestAnimationForm的方式节流
    this.scrollHandler = common.throttleRaf(this.scrollHandler, 100)
    window.addEventListener('scroll', this.scrollHandler, false)
  },

  unmounted () {
    let testDom = document.querySelector('.goTop')
    testDom.removeEventListener('click', this.scrollTop)
  },

  methods: {
    scrollTop: function () {
      let target = document.querySelector('div .target')
      target.scrollIntoView({behavior: 'smooth'})
    },

    scrollHandler: function (e) {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 500) {
        this.visible = true
      } else {
        this.visible = false
      }
    }
  }
}
