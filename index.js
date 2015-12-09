import devices from './devices.json'

// re-export device list
export { devices }

export function detect(width, height, ppi, dppx) {
  width = width || window.innerWidth
  height = height || window.innerHeight
  ppi = ppi || detectPPI()
  dppx = dppx || detectDPPX()

  for (let i = devices.length - 1; i >= 0; i--) {
    const device = devices[i]
    if (device.w === width && device.h === height && device.ppi === ppi && device.dppx === dppx) {
      return device
    }
  }

  return null
}

function detectPPI() {
  const div = document.createElement('div')
  // give element an absolute size of one inch
  div.style.width = '1in'
  div.style.position = 'absolute'
  div.style.left = '-100%'
  div.style.top = '-100%'
  const body = document.getElementsByTagName('body')[0]
  body.appendChild(div)
  const ppi = document.defaultView.getComputedStyle(div, null).getPropertyValue('width')
  body.removeChild(div)
  return parseFloat(ppi)
}

function detectDPPX() {
  return window.devicePixelRatio || (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) || 1
}
