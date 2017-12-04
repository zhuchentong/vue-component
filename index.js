import Test from './src/components/test'

const components = {
  Test
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