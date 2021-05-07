<template>
  <el-card>
    id: <el-input type="text" v-model="email" />
    password: <el-input type="password" v-model="password" />
    <el-button @click="signIn">SIGN IN</el-button>
    <el-button @click="signOut">SIGN OUT</el-button>
  </el-card>
</template>

<script>
import firebase from "firebase"

export default {
  created() { // vue 라이프 사이클 중 beforeCreated 이후 실행되는 과정
    this.checkLoggedIn() // 밑에 로그인 체크 메서드 실행
  },
  name: "SignIn",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Todo 홈으로 리다이렉트
            let user = userCredential.user

            console.log(user)
          })
          .catch((error) => {
            // Todo 로그인 실패 Alert
            let errorCode = error.code
            let errorMessage = error.message

            console.log(errorCode)
            console.log(errorMessage)
          });
    },
    signOut() {
      firebase.auth().signOut()
    },
    checkLoggedIn() {
      // 이건 서버에서 계속 관찰하는 과정인데 인증 상태가 업데이트되면 실행돼요
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          let uid = user.uid
          alert(uid + '유저가 접속중이다')
        } else {
          alert('로그인 된 사람이 없다')
        }
      });
    }
  }
}
</script>

<style scoped>

</style>