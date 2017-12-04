<template>
  <div class="data-grid-item col-span" :class="itemClass" :style="itemStyle">
    <div class="fill">
      <div class="data-grid-item-container row fill">
        <label class="data-grid-item__label" :style="labelStyle">
          {{label}}
        </label>
        <div class="data-grid-item__separate"></div>
        <div class="data-grid-item__content col-span" :style="contentStyle">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  const alignType = ['left', 'center', 'right']

  export default {
    name: 'data-grid-item',
    componentName: 'data-grid-item',
    data() {
      return {}
    },
    props: {
      span: Number,
      label: String,
      labelAlign: String,
      labelWidth: Number,
      contentAlign: String
    },
    computed: {
      // 分隔样式
      itemClass() {
        let totleSpan = this.grid.totalSpan
        if (totleSpan && totleSpan > 0) {
          return {}
        } else {
          return {
            ['col-span-' + (this.span ? this.span : 2)]: true
          }
        }
      },
      itemStyle() {
        let totalSpan = this.grid.totalSpan
        if (totalSpan && totalSpan > 0) {
          let spanValue = (Math.round(this.span / totalSpan * 10000) / 100).toFixed(2) + '%'
          return {
            '-webkit-flex-basis': spanValue,
            '-ms-flex-preferred-size': spanValue,
            'flex-basis': spanValue,
            'max-width': spanValue,
            'min-width': spanValue
          }
        } else {
          return {}
        }
      },
      /**
       * 获取label样式
       */
      labelStyle() {
        let width = this.labelWidth || this.grid.labelWidth
        return {
          flexBasis: `${width}px`,
          width: `${width}px`,
          textAlign: this.itemLabelAlign
        }
      },
      contentStyle() {
        return {
          textAlign: this.itemContentAlign
        }
      },
      itemLabelAlign() {
        return (this.labelAlign && alignType.includes(this.labelAlign)) ? this.labelAlign : this.grid.labelAlign
      },
      itemContentAlign() {
        return (this.contentAlign && alignType.includes(this.contentAlign)) ? this.contentAlign : this.grid.contentAlign
      },
      grid() {
        var parent = this.$parent
        while (parent.$options.componentName !== 'data-grid') {
          parent = parent.$parent
        }
        return parent
      }
    }
  }

</script>
<style lang="less" scoped>
  .data-grid-item {
    display: table-cell;
    padding: 0;
    border-right: solid 1px block;
    border-bottom: solid 1px block;
  }
  
  .data-grid-item-container {
    &>.data-grid-item__label,
    .data-grid-item__content {
      padding: 10px;
      word-wrap: break-word;
    }
    align-items: center;
  }
  
  .data-grid-item__separate {
    width: 1px;
    height: 100%;
    background: black;
  }
</style>
