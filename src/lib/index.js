import SequenceDiagram from './SequenceDiagram.vue'

const comment = {
  install: function (Vue) {
    Vue.component(SequenceDiagram.name, SequenceDiagram)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}

export default comment