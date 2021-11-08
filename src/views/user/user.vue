<template>
  <div>
    <el-row style="width: 50%">
      <el-col :span="8"
        ><el-input
          v-model="searchValue"
          placeholder="Please search"
          clearable
        ></el-input
      ></el-col>
      <el-col :span="8"><el-button @click="search">Search</el-button></el-col>
      <el-col :span="8"
        ><el-select
          v-model="value"
          clearable
          placeholder="Select"
          @change="change"
          @clear="clear"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> </el-select
      ></el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table :data="pagedTableData" style="width: 60%">
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="name" label="Name" width="180">
          </el-table-column>
          <el-table-column width="180" label="View">
            <template slot-scope="scope"
              ><el-button @click="onViewClicked(scope.row)"
                >Detail</el-button
              ></template
            >
          </el-table-column>
          <el-table-column width="180" label="Courses">
            <template slot-scope="scope"
              ><el-button @click="onCoursesClicked(scope.row)"
                >Courses</el-button
              ></template
            >
          </el-table-column>
          <el-table-column width="180" label="Export">
            <template slot-scope="scope"
              ><el-button @click="exportExcel(scope.row)"
                ><i class="el-icon-download"></i></el-button
            ></template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-pagination
          layout="prev, pager, next"
          :total="tableData.length"
          @current-change="setPage"
        >
        </el-pagination>
        <span></span>
      </el-col>
    </el-row>
    <el-dialog
      :title="'User details'"
      append-to-body
      :visible.sync="viewDetailVisible"
      :close-on-click-modal="false"
      width="60%"
      top="3vh"
    >
      <user-info :userDetail="userDetail"></user-info>
    </el-dialog>
    <el-dialog
      :title="'Course details'"
      append-to-body
      :visible.sync="viewCourseVisible"
      :close-on-click-modal="false"
      :destroy-on-close="true"
      width="60%"
      top="3vh"
    >
      <course :courseList="courseList"></course>
    </el-dialog>
  </div>
</template>

<script>
import UserList from "../../common/data/userList";
import UserInfo from "../user-info/userInfo.vue";
import userInfo from "../../common/data/userInfo";
import courseInfo from "../../common/data/coursesList";
import Course from "../courses/courses.vue";

export default {
  components: { UserInfo, Course },
  data() {
    return {
      tableData: UserList,
      setTableData: UserList,
      courseInfo: courseInfo,
      page: 1,
      pageSize: 8,
      userInfo: userInfo,
      userDetail: [],
      courseDetail: [],
      courseList: [],
      viewDetailVisible: false,
      viewCourseVisible: false,
      options: [
        {
          value: "active",
          label: "Active",
        },
        {
          value: "passive",
          label: "Passive",
        },
      ],
      value: "",
      searchValue: "",
    };
  },
  computed: {
    pagedTableData() {
      return this.tableData.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
  },
  mounted() {},
  methods: {
    change() {
      if (this.value === undefined || this.value === "") {
        this.tableData = this.setTableData;
      }
      this.tableData = this.tableData.filter((item) => {
        return item.status === this.value;
      });
    },
    search() {
      this.tableData = this.tableData.filter((item) => {
        return item.name === this.searchValue;
      });
    },
    clear() {},
    onViewClicked(data) {
      this.userDetail = this.userInfo.find((item) => {
        return item.user_id === data.id;
      });
      const slicerData = this.tableData.find((item) => {
        return item.id === data.id;
      });
      this.userDetail.name = slicerData.name;
      this.userDetail.status = slicerData.status;
      this.viewDetailVisible = true;
    },
    onCoursesClicked(data) {
      this.getFindCourseData(data);
      this.viewCourseVisible = true;
    },
    getFindCourseData(data) {
      this.courseDetail = this.courseInfo.find((item) => {
        return item.user_id === data.id;
      });
      let time = this.courseDetail.courses.measured_at;
      let second = Math.floor((time / 1000) % 60);
      let minute = Math.floor((time / (1000 * 60)) % 60);
      let hour = Math.floor((time / (1000 * 60 * 60)) % 60);
      this.courseDetail.courses.measured_at =
        hour + ":" + minute + ":" + second;
      this.courseList = [
        {
          id: this.courseDetail.user_id,
          courseName: this.courseDetail.courses.course_name,
          completeDate: this.courseDetail.courses.completed_at,
          completeTime: this.courseDetail.courses.measured_at,
        },
      ];
    },
    setPage(val) {
      this.page = val;
    },
    exportExcel(row) {
      this.getFindCourseData(row);
    },
  },
};
</script>
<style scoped>
.add-div {
  float: right;
  width: 60%;
}
</style>
