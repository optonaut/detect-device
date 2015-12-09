# `detect-device`
Detects the (mobile) device used based on screen dimensions (width+height) and DPI

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
\\ { "name": "Apple iPhone 6", "w": 750, "h": 1334, "d": 4.7, "ppi": 326, "dppx": 2 }

console.log(devices)
// ... lists all available devices
```
