import devices from './devices.json'

// re-export device list
export { devices }

export function detect(options = {}) {
  const dppx = options.dppx || detectDPPX()
  const width = options.width || window.screen.width * dppx
  const height = options.height || window.screen.height * dppx

  for (let i = devices.length - 1; i >= 0; i--) {
    const device = devices[i]
    if (device.width === width && device.height === height && device.dppx === dppx) {
      return device
    }
  }

  return null
}

function detectDPPX() {
  return window.devicePixelRatio || (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) || 1
}
