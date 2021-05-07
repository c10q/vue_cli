<template>
  <div>
    id: <input type="text" v-model="email">
    password: <input type="text" v-model="password">
    <button @click="signIn">SIGN IN</button>
  </div>
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