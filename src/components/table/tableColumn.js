export default {
  name: "BaseTableColumn",
  render(h) {
    return h(
      "el-table-column",
      {
        on: this.$listeners,
        props: this.$attrs,
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.default
    );
  },
};
