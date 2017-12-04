import Test from './src/components/test'

const components = {
  Test
}

const install = (Vue) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}

export default {
  version: '0.0.1',
  install,
  Test
}