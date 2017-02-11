# vue-flexboxgrid
Vue components made with [Flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid) library.

[![npm](https://img.shields.io/npm/v/vue-flexboxgrid.svg)](https://www.npmjs.com/package/vue-flexboxgrid) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js Plugin

## Installation

```bash
npm install --save vue-flexboxgrid
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueFlexboxgrid from 'vue-flexboxgrid'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-flexboxgrid/dist/vue-flexboxgrid.css'

Vue.use(VueFlexboxgrid)
```

### Browser

```html
<!-- Include after Vue -->
<link rel="stylesheet" href="vue-flexboxgrid/dist/vue-flexboxgrid.css"></link>
<script src="vue-flexboxgrid/dist/vue-flexboxgrid.js"></script>
```

## Components and Props

### Container

Component:
```html
<container>
  Your content
</container>
```
Props:
```js
reverse: { type: Boolean, default: false },
fluid: { type: Boolean, default: false }
```

### Row

Component:
```html
<row>
  Your content
</row>
```
Props:
```js
reverse: { type: Boolean, default: false },
startXs: { type: Boolean, default: false },
centerXs: { type: Boolean, default: false },
endXs: { type: Boolean, default: false },
topXs: { type: Boolean, default: false },
middleXs: { type: Boolean, default: false },
bottomXs: { type: Boolean, default: false },
aroundXs: { type: Boolean, default: false },
betweenXs: { type: Boolean, default: false },
startSm: { type: Boolean, default: false },
centerSm: { type: Boolean, default: false },
endSm: { type: Boolean, default: false },
topSm: { type: Boolean, default: false },
middleSm: { type: Boolean, default: false },
bottomSm: { type: Boolean, default: false },
aroundSm: { type: Boolean, default: false },
betweenSm: { type: Boolean, default: false },
startMd: { type: Boolean, default: false },
centerMd: { type: Boolean, default: false },
endMd: { type: Boolean, default: false },
topMd: { type: Boolean, default: false },
middleMd: { type: Boolean, default: false },
bottomMd: { type: Boolean, default: false },
aroundMd: { type: Boolean, default: false },
betweenMd: { type: Boolean, default: false },
startLg: { type: Boolean, default: false },
centerLg: { type: Boolean, default: false },
endLg: { type: Boolean, default: false },
topLg: { type: Boolean, default: false },
middleLg: { type: Boolean, default: false },
bottomLg: { type: Boolean, default: false },
aroundLg: { type: Boolean, default: false },
betweenLg: { type: Boolean, default: false }
```

### Column

Component:
```html
<column>
  Your content
</column>
```
Props:
```js
firstXs: { type: Boolean, default: false },
lastXs: { type: Boolean, default: false },
firstSm: { type: Boolean, default: false },
lastSm: { type: Boolean, default: false },
firstMd: { type: Boolean, default: false },
lastMd: { type: Boolean, default: false },
firstLg: { type: Boolean, default: false },
lastLg: { type: Boolean, default: false },
xs: { type: Number, default: 12, validator (v) { return v > 0 && v < 13 } },
sm: { type: Number, validator (v) { return v > 0 && v < 13 } },
md: { type: Number, validator (v) { return v > 0 && v < 13 } },
lg: { type: Number, validator (v) { return v > 0 && v < 13 } }
```

