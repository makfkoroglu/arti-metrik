<template>
  <div>
    <div>
      <div>
        <el-form>
          <el-form-item prop="name" label="Name">
            <el-input disabled v-model="userDetail.name"></el-input
          ></el-form-item>
          <el-form-item prop="status" label="Status">
            <el-input disabled v-model="userDetail.status"></el-input
          ></el-form-item>
          <el-form-item prop="age" label="Age">
            <el-input v-model="userDetail.age"></el-input>
          </el-form-item>
          <el-form-item prop="job" label="Job">
            <el-input v-model="userDetail.job"></el-input>
          </el-form-item>
          <el-form-item prop="update">
            <el-button @click="update">Update</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import userInfo from "../../common/data/userInfo";
export default {
  props: {
    userDetail: {
      type: Object,
    },
  },
  data() {
    return {
      userDetailList: userInfo,
      updateData: {},
    };
  },
  mounted() {},
  methods: {
    update() {
      this.userDetailList.user_id = this.userDetail.user_id;
      this.userDetailList.age = this.userDetail.age;
      this.userDetailList.job = this.userDetail.job;
      // this.userDetailList.map((data) => {
      //   const newData = { ...data };
      //   Object.keys(newData).map((property) => {
      //     newData[property] = "Updated value";
      //   });
      //   return newData;
      // });
    },
  },
};
</script>
