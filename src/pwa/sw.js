'use strict'

const OFFLINE_CACHE_PREFIX = 'xuelq007_blog_page_'
const CACHE_VERSION = 'v1.0'
const OFFLINE_CACHE_NAME = OFFLINE_CACHE_PREFIX + CACHE_VERSION

const options = {
  // body: '',
  icon: '../../../static/avatar.png',
  actions: [{
    action: 'csdn',
    title: '去看看'
  }],
  tag: 'csdn-site',
  renotify: true
}

// service worker 安装事件
this.addEventListener('install', function (event) {
  event.waitUntil(caches.open(OFFLINE_CACHE_NAME).then(function (cache) {
    event.waitUntil(self.skipWaiting())
  }))
})

this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      let isGetListRequest = event.request.url.indexOf('getList') > -1
      let isIndexRequest = event.request.referrer === ''
      let isManifestRequest = event.request.url.indexOf('manifest.json') > -1

      let isSpecialRequest = isGetListRequest || isIndexRequest || isManifestRequest

      // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
      if (response && !isSpecialRequest) {
        return response
      }

      // 如果 service worker 没有返回，那就得直接请求真实远程服务
      var request = event.request.clone() // 把原始请求拷过来
      return fetch(request).then(function (httpRes) {
        // http请求的返回已被抓到，可以处置了。

        // 请求失败了，直接返回失败的结果就好了。。
        if (!httpRes || httpRes.status !== 200) {
          // 如果获取首页或getList网络请求失败，则使用缓存
          if (response && isSpecialRequest) {
            return response
          }
          return httpRes
        }

        // Mac safari service worker上下文环境中没有Notification. window上下文环境中可调
        // if (isGetListRequest) {
        //   new Notification('有新文章发布，去看看吧', options)
        // }
        // 对比getList缓存和网络返回结果，是否提示用户有新文章
        try {
          if (isGetListRequest) {
            Promise.all([httpRes.clone().json(), response.clone().json()]).then((jsonArry) => {
              let httpResJSON = jsonArry[0]
              let resJSON = jsonArry[1]
              if (httpResJSON.length > resJSON.length) {
                self.registration.showNotification('有新文章发布，去看看吧', options)
              }
            })
          }
        } catch (e) {
          console.warn('the browser not support nitification')
        }

        // 请求成功的话，将请求缓存起来。
        var responseClone = httpRes.clone()

        caches.open(OFFLINE_CACHE_NAME).then(function (cache) {
          // service worker 离线缓存不支持POST请求
          if (event.request.method === 'POST') {
            return
          }
          cache.put(event.request, responseClone)
        })

        return httpRes
      }).catch(function (error) {
        // 如果getList网络请求失败，则使用缓存
        if (response && isSpecialRequest) {
          console.warn('server is not available and will use cache in service worker')
          return response
        }
        console.error(error)
      })
    })
  )
})

// 监听提醒框自定义action事件
this.addEventListener('notificationclick', function (e) {
  var action = e.action
  e.notification.close()

  e.waitUntil(
    // 获取所有clients
    this.clients.matchAll().then(function (clients) {
      if (!clients || clients.length === 0) {
        this.clients.openWindow && this.clients.openWindow('https://blog.csdn.net/Napoleonxxx')
        return
      }
      clients[0].focus && clients[0].focus()
      clients.forEach(function (client) {
        // 使用postMessage进行通信
        client.postMessage(action)
      })
    })
  )
})
