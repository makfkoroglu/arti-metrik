<template>
  <el-table
    ref="tableObj"
    class="base-table"
    v-bind="$attrs"
    :border="border"
    v-on="$listeners"
  >
    <slot></slot>
    <slot slot="append" name="append"></slot>
  </el-table>
</template>
<script>
export default {
  name: "BaseTable",
  props: {
    border: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    clearSelection() {
      this.$refs.tableObj.clearSelection();
    },
    toggleRowSelection(row, selected) {
      this.$refs.tableObj.toggleRowSelection(row, selected);
    },
    toggleAllSelection() {
      this.$refs.tableObj.toggleAllSelection();
    },
    toggleRowExpansion(row, expanded) {
      this.$refs.tableObj.toggleRowExpansion(row, expanded);
    },
    setCurrentRow(row) {
      this.$refs.tableObj.setCurrentRow(row);
    },
    clearSort() {
      this.$refs.tableObj.clearSort();
    },
    clearFilter(columnKey) {
      this.$refs.tableObj.clearFilter(columnKey);
    },
    doLayout() {
      this.$refs.tableObj.doLayout();
    },
    sort(prop, order) {
      this.$refs.tableObj.sort(prop, order);
    },
  },
};
</script>
<style scoped>
.base-table {
  font-size: 14px;
}
.base-table >>> td,
.base-table >>> th {
  padding: 9px 0;
}
.base-table >>> thead th {
  background: #f5f8fa 100%;
}
.base-table >>> thead .cell {
  color: #13161a;
  line-height: 22px;
  word-break: break-word;
}
.base-table >>> tbody .cell {
  color: #4d5761;
  line-height: 22px;
  white-space: pre;
}
</style>
