import SideBar from '@/components/home/sideBar/SideBar.vue'
import About from '@/components/home/about/About.vue'
import MainContent from '@/components/home/mainContent/MainContent.vue'
import GoTop from '@/components/top/Top.vue'

export default {
  name: 'HomePage',

  components: {
    SideBar,
    About,
    MainContent,
    GoTop
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  mounted () {
    document.addEventListener('touchstart', this.hideAbout)
    document.addEventListener('click', this.hideAbout)
  },

  unmounted () {
    document.removeEventListener('touchstart', this.hideAbout)
    document.removeEventListener('click', this.hideAbout)
  },

  methods: {
    showAbout: function (event, device) {
      let contentDom = document.querySelector('#content')
      let aboutDom = document.querySelector('#about')
      let canvas = document.querySelector('#canvas')

      contentDom.className = contentDom.className + ' show-about'
      aboutDom.className = aboutDom.className + ' show'
      canvas.className = canvas.className + ' canvas-show'

      if (device === 'mobile') {
        let mobileMask = contentDom.querySelector('.mobile-mask')
        mobileMask.className = mobileMask.className + ' show'
      }

      event.stopPropagation()
    },

    hideAbout: function () {
      let contentDom = document.querySelector('#content')
      if (!contentDom) {
        return
      }
      let aboutDom = document.querySelector('#about')
      let canvas = document.querySelector('#canvas')
      let mobileMask = contentDom.querySelector('.mobile-mask')

      contentDom.className = contentDom.className.replace(' show-about', '')
      aboutDom.className = aboutDom.className.replace(' show', '')
      canvas.className = canvas.className.replace(' canvas-show', '')
      mobileMask.className = mobileMask.className.replace(' show', '')
    }
  }
}
