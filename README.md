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

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)
