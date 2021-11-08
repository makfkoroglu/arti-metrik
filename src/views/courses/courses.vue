<template>
  <div>
    <div class="add-div" v-if="!openAdd">
      <el-button type="primary" @click="create">Add</el-button>
    </div>
    <div v-if="openAdd"><course-add></course-add></div>
    <div v-if="!openAdd">
      <el-table :data="courseList">
        <el-table-column prop="id" label="Id"></el-table-column>
        <el-table-column
          prop="courseName"
          label="Course Name"
        ></el-table-column>
        <el-table-column
          prop="completeDate"
          label="Completed Date"
        ></el-table-column>
        <el-table-column
          prop="completeTime"
          label="Measure Time"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import CourseAdd from "../courses/courseAdd.vue";
export default {
  components: {
    CourseAdd,
  },
  props: {
    courseList: {
      type: Array,
    },
  },
  data() {
    return {
      openAdd: false,
    };
  },
  methods: {
    create() {
      this.openAdd = true;
    },
  },
  mounted() {},
};
</script>
<style scoped>
.add-div {
  float: right;
}
</style>
