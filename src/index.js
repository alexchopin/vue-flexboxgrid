import Container from './components/Container.vue'
import Row from './components/Row.vue'
import Column from './components/Column.vue'

function plugin (Vue) {
  Vue.component('container', Container)
  Vue.component('row', Row)
  Vue.component('column', Column)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  Container,
  Row,
  Column,
  version
}
