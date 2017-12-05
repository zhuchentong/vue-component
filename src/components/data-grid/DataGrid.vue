<template>
  <div class="data-grid">
    <!-- <div type="flex" align="left" class="data-grid-title">
      <span class="iconfont" :class="[iconClass]"></span>
      <span>{{label}}</span>
    </div> -->
    <div class="grid-content row">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'data-grid',
    componentName: 'data-grid',
    props: {
      totalSpan: Number, // 总列数
      iconClass: String, // 标题图标
      label: String, 
      labelWidth: {
        type: Number,
        default: 100
      },
      labelAlign: {
        type: String,
        default: 'center'
      },
      contentAlign: {
        type: String,
        default: 'center'
      }
    },
    data() {
      return {}
    }
  }

</script>
<style lang="css" scoped>
  .grid-content {
    border-top: solid 1px black;
    border-left: solid 1px black;
  }

</style>
