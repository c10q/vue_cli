<template>
  <el-card>
    id: <el-input type="text" v-model="email" />
    password: <el-input type="text" v-model="password" />
    <el-button @click="signIn">SIGN IN</el-button>
  </el-card>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      console.log('로그인')
    }
  }
}
</script>

<style scoped>

</style>