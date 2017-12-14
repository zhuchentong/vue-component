<template>
  <div class="flex" :style="getFlexStyle()">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "flex",
  componentName: "flex",
  props: {
    type: {
      required: true,
      type: String,
      validator: value => {
        return ["row", "column"].includes(value);
      }
    },
    wrap: {
      default: "nowrap",
      validator: value => {
        return ["wrap", "nowrap", "reverse"].includes(value);
      }
    },
    horizontalAlign: {
      default: "start",
      validator: value => {
        return ["start", "center", "end", "between", "around"].includes(value);
      }
    },
    verticalAlign: {
      default: "start",
      validator: value => {
        return ["start", "center", "end", "between", "around"].includes(value);
      }
    },
    totalSpan: {
      type: Number,
      default: 12,
      validator: value => {
        return value > 0;
      }
    },
    span: {
      type: [Number, String],
      validator: value => {
        if (typeof value === "number") {
          return value > 0;
        } else {
          return value === "auto";
        }
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    getFlexStyle() {
      return {
        ...this.getWarpStyle(),
        ...this.getHorizontalAlignStyle(),
        ...this.getVerticalAlignStyle(),
        ...this.getSpanStyle(),
        flexDirection: this.type,
        flexWrap: this.wrap
      };
    },
    getWarpStyle() {
      return {
        flexWrap:
          this.wrap === true
            ? "wrap"
            : this.wrap === false ? "nowrap" : this.wrap
      };
    },
    getVerticalAlignStyle() {
      let style = {};
      if (this.type === "row") {
        switch (this.verticalAlign) {
          case "start":
            style.alignItems = "flex-start";
            break;
          case "center":
            style.alignItems = "center";
            break;
          case "end":
            style.alignItems = "flex-end";
            break;
          case "baseline":
            style.alignItems = "baseline";
            break;
          case "stretch":
            style.alignItems = "stretch";
            break;
          case "between":
          case "around":
            console.warn(`列模式时,竖直对齐方式不支持${this.verticalAlign}`);
            break;
        }
      } else {
        switch (this.verticalAlign) {
          case "start":
            style.justifyContent = "flex-start";
            break;
          case "center":
            style.justifyContent = "center";
            break;
          case "end":
            style.justifyContent = "flex-end";
            break;
          case "between":
            style.justifyContent = "space-between";
            break;
          case "around":
            style.justifyContent = "space-around";
            break;
          case "baseline":
          case "stretch":
            console.warn(`列模式时,竖直对齐方式不支持${this.horizontalAlign}`);
            break;
        }
      }

      return style;
    },
    getHorizontalAlignStyle() {
      let style = {};
      if (this.type === "row") {
        switch (this.horizontalAlign) {
          case "start":
            style.justifyContent = "flex-start";
            break;
          case "center":
            style.justifyContent = "center";
            break;
          case "end":
            style.justifyContent = "flex-end";
            break;
          case "between":
            style.justifyContent = "space-between";
            break;
          case "around":
            style.justifyContent = "space-around";
            break;
          case "baseline":
          case "stretch":
            console.warn(`行模式时,水平对齐方式不支持${this.horizontalAlign}`);
            break;
        }
      } else {
        switch (this.horizontalAlign) {
          case "start":
            style.alignItems = "flex-start";
            break;
          case "center":
            style.alignItems = "center";
            break;
          case "end":
            style.alignItems = "flex-end";
            break;
          case "baseline":
            style.alignItems = "baseline";
            break;
          case "stretch":
            style.alignItems = "stretch";
            break;
          case "between":
          case "around":
            console.warn(`列模式时,水平对齐方式不支持${this.horizontalAlign}`);
            break;
        }
      }

      return style;
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

      if (this.span > this.totalSpan) {
        console.wran("span不可以大于totalSpan");
        return {};
      }

      return {
        flexBasis: `${(this.span / this.totalSpan * 100).toFixed(3)}%`,
        maxWidth: `${(this.span / this.totalSpan * 100).toFixed(3)}%`,
        minWidth: `${(this.span / this.totalSpan * 100).toFixed(3)}%`
      };
    }
  },
  computed: {}
};
</script>
<style lang="css" scoped>
.flex {
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-lines: single;
}
</style>
