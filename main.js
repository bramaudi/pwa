/**
 * Install the service worker
 */
async function installServiceWorkerAsync() {
  if ('serviceWorker' in navigator) {
      try {
          let serviceWorker = await navigator.serviceWorker.register('/sw.js')
          console.log(`Service worker registered ${serviceWorker}`)
      } catch (err) {
          console.error(`Failed to register service worker: ${err}`)
      }
  }
}


/**
 * Get online status
 */
document.querySelector('#online_status').innerHTML = `<b>${navigator.onLine ? 'Online' : 'Offline'}</b>`