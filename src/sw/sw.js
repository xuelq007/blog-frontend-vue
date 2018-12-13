'use strict'

const OFFLINE_CACHE_PREFIX = 'xuelq007_blog_page_'
const CACHE_VERSION = 'v1.0'
const OFFLINE_CACHE_NAME = OFFLINE_CACHE_PREFIX + CACHE_VERSION

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

      // 如果 Service Worker 有自己的返回，就直接返回，减少一次 http 请求
      if (response && !isGetListRequest && !isIndexRequest) {
        return response
      }

      // 如果 service worker 没有返回，那就得直接请求真实远程服务
      var request = event.request.clone() // 把原始请求拷过来
      return fetch(request).then(function (httpRes) {
        // http请求的返回已被抓到，可以处置了。

        // 请求失败了，直接返回失败的结果就好了。。
        if (!httpRes || httpRes.status !== 200) {
          // 如果获取首页或getList网络请求失败，则使用缓存
          if (response && (isGetListRequest || isIndexRequest)) {
            return response
          }
          return httpRes
        }

        // 请求成功的话，将请求缓存起来。
        var responseClone = httpRes.clone()
        caches.open(OFFLINE_CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseClone)
        })

        return httpRes
      }).catch(function (error) {
        console.log('johnny: ' + error)
        // 如果getList网络请求失败，则使用缓存
        if (response && (isGetListRequest || isIndexRequest)) {
          return response
        }
      })
    })
  )
})
