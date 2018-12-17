
function registeNotification () {
  if (!('PushManager' in window)) {
    // Push isn't supported on this browser, disable or hide UI.
    return
  }

  new Promise((resolve, reject) => {
    const permissionPromise = Notification.requestPermission(result => {
      resolve(result)
    })

    if (permissionPromise) {
      permissionPromise.then(resolve)
    }
  }).then(result => {
    if (result === 'granted') {
      console.log('Notification registration successful')
    } else {
      console.log('Notification: no permission')
    }
  })
}

function registeServiceWorker () {
  if (!('serviceWorker' in navigator)) {
    // Service Worker isn't supported on this browser, disable or hide UI.
    return
  }

  navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then(function (registration) {
      // 注册成功
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    })
    .catch(function (err) {
      // 注册失败:(
      console.log('ServiceWorker registration failed: ', err)
    })

  navigator.serviceWorker.addEventListener('message', function (e) {
    var action = e.data
    switch (action) {
      case 'csdn':
        window.open('https://blog.csdn.net/Napoleonxxx')
        break
    }
  })
}

export default {
  registePWA () {
    registeServiceWorker()
    registeNotification()
  }
}
