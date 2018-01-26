<template>
  <div class="data-grid-item col-span" :class="itemClass" :style="itemStyle">
    <div class="data-grid-item-container row">
      <label class="data-grid-item__label row middle-span" :style="labelStyle">
        {{label}}
      </label>
      <div class="data-grid-item__separate" :style="separateStyle"></div>
      <div class="data-grid-item__content col-span" :style="contentStyle">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
const alignType = ["left", "center", "right"];

export default {
  name: "data-grid-item",
  componentName: "data-grid-item",
  data() {
    return {};
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
      let totleSpan = this.grid.totalSpan;
      if (totleSpan && totleSpan > 0) {
        return {};
      } else {
        return {
          ["col-span-" + (this.span ? this.span : 2)]: true
        };
      }
    },
    itemStyle() {
      let totalSpan = this.grid.totalSpan;
      if (totalSpan && totalSpan > 0) {
        let spanValue =
          (Math.round(this.span / totalSpan * 10000) / 100).toFixed(2) + "%";
        return {
          "-webkit-flex-basis": spanValue,
          "-ms-flex-preferred-size": spanValue,
          "flex-basis": spanValue,
          "max-width": spanValue,
          "min-width": spanValue,
          "border-right": `solid ${this.grid.borderColor} ${
            this.grid.borderWeight
          }`,
          "border-bottom": `solid ${this.grid.borderColor} ${
            this.grid.borderWeight
          }`
        };
      } else {
        return {
          "border-right": `solid ${this.grid.borderColor} ${
            this.grid.borderWeight
          }`,
          "border-bottom": `solid ${this.grid.borderColor} ${
            this.grid.borderWeight
          }`
        };
      }
    },
    /**
     * 获取label样式
     */
    labelStyle() {
      let width = this.labelWidth || this.grid.labelWidth;
      return {
        flexBasis: `${width}px`,
        width: `${width}px`,
        justifyContent: {
          left: "flex-start",
          center: "center",
          right: "flex-end"
        }[this.itemLabelAlign]
      };
    },
    contentStyle() {
      return {
        textAlign: this.itemContentAlign
      };
    },
    separateStyle() {
      return {
        background: this.grid.borderColor
      };
    },
    itemLabelAlign() {
      return this.labelAlign && alignType.includes(this.labelAlign)
        ? this.labelAlign
        : this.grid.labelAlign;
    },
    itemContentAlign() {
      return this.contentAlign && alignType.includes(this.contentAlign)
        ? this.contentAlign
        : this.grid.contentAlign;
    },
    grid() {
      var parent = this.$parent;
      while (parent.$options.componentName !== "data-grid") {
        parent = parent.$parent;
      }
      return parent;
    }
  }
};
</script>
<style lang="less" scoped>
.data-grid-item {
  display: table-cell;
  padding: 0;
}

.data-grid-item__label {
  background-color: #f5f5f5;
}

.data-grid-item-container {
  .data-grid-item__label {
    height: 100%;
  }
  .data-grid-item__content {
    padding: 5px;
    word-wrap: break-word;
  }
  align-items: center;
  height: 100%;
  width: 100%;
}

.data-grid-item__separate {
  width: 1px;
  height: 100%;
}
</style>
