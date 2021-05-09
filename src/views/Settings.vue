<template>
  <el-card>
    <h2>SETTINGS</h2>

    <el-divider />

    <div class="settings-list-item" @click="signOut">로그아웃</div>

  </el-card>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Settings",
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/signIn')
      })
    }
  }
}
</script>

<style scoped>
.settings-list-item {
  margin: 0;
  border-bottom: 1px solid #DCDFE6;
  padding: 8px;
}
</style>