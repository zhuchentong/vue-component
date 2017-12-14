<template>
  <div :style="getFlexItemStyle()">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "flex",
  componentName: "flex",
  props: {
    span: {
      type: [Number, String],
      validator: value => {
        if (typeof value === "number") {
          return value > 0;
        } else {
          return value === "auto";
        }
      }
    },
    parent() {
      var parent = this.$parent;
      while (parent.$options.componentName !== "flex") {
        parent = parent.$parent;
      }
      return parent;
    }
  },
  data() {
    return {};
  },
  methods: {
    getFlexItemStyle() {
      return {
        ...this.getSpanStyle()
      };
    },
  
    getSpanStyle() {
      if (!this.span) {
        return {
          flex: "0 0 auto"
        };
      }

      if (this.span === "auto") {
        return {
          flexGrow: 1,
          minWidth: 0,
          flexBasis: 0,
          maxWidth: "100%"
        };
      }

      if (this.span > this.parent.totalSpan) {
        console.wran("span不可以大于totalSpan");
        return {};
      }

      return {
        flexBasis: `${(this.span / this.parent.totalSpan * 100).toFixed(3)}%`,
        maxWidth: `${(this.span / this.parent.totalSpan * 100).toFixed(3)}%`,
        minWidth: `${(this.span / this.parent.totalSpan * 100).toFixed(3)}%`
      };
    }
  },
  computed: {}
};
</script>
