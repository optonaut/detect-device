# detect-device
Detects (mobile) device used based on screen dimensions (width, height, dppx). Includes list of all devices.

## Demo

[Open this link](https://rawgit.com/optonaut/detect-device/master/dist/demo.html) on a mobile device. If it couldn't be detected please [open a pull request for it](https://github.com/optonaut/detect-device/compare).


## Install

```sh
$ npm install detect-device
```

## Usage

```js
import { detect, devices } = 'detect-devices'

const detectedDevice = detect()
console.log(detectedDevice)
\\ { "name": "Apple iPhone 6", "width": 750, "height": 1334, "diagonal": 4.7, "ppi": 326, "dppx": 2 }

const iPhone5 = detect({
  width: 640,
  height: 1136,
  dppx: 2
})
console.log(iPhone5)
\\ { "name": "Apple iPhone 5", "width": 640, "height": 1136, "diagonal": 4, "ppi": 326, "dppx": 2 }

console.log(devices)
// ... lists all available devices
```

### Device Properties

#### `name`
Description of the device. Includes vendor and model.

#### `height`
Absolute height of device screen in pixel.

#### `height`
Absolute height of device screen in pixel.

#### `diagonal`
Diagonal screen size in inch.

#### `frame`
Distance between screen and device body in inch. (`deviceWidthInInch` - `screenWidthInInch`) / 2 = `frame`.

#### `ppi`
Points per inch. [Read more](https://en.wikipedia.org/wiki/Pixel_density).

#### `dppx`
Scaling factor. Sometimes also called "retina".
