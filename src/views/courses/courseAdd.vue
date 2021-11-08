<template>
  <div>
    <div>
      <div>
        <el-form>
          <el-form-item prop="status" label="Course Date">
            <el-date-picker
              v-model="form.completed_at"
              type="date"
              placeholder="Pick a day"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item prop="age" label="ID">
            <el-input v-model="form.user_id"></el-input>
          </el-form-item>
          <el-form-item prop="name" label="Course Name">
            <el-input v-model="form.course_name"></el-input
          ></el-form-item>
          <el-form-item>
            <el-button type="primary" @click="create">Add</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import courseList from "../../common/data/coursesList";

export default {
  props: {
    userDetail: {
      type: Object,
    },
  },
  data() {
    return {
      courseList: courseList,
      form: {
        courses: {
          user_id: "",
          course_name: "",
          completed_at: "",
          measured_at: 28217,
        },
      },
    };
  },
  mounted() {},
  methods: {
    create() {
      this.courseList.push(this.form);
    },
  },
};
</script>
<style scoped>
.add-div {
  float: right;
}
</style>
