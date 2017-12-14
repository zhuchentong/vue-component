import DataGrid from './src/components/data-grid'
import DataGridItem from './src/components/data-grid-item'
import Flex from './src/components/flex'

const components = {
  DataGrid,
  DataGridItem,
  Flex
}

const install = (Vue) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}

const plugins = {
  version: '0.0.1',
  install
}

const API = {
  ...plugins,
  ...components
}

module.exports.default = module.exports = API