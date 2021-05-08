<template>
  <el-card>
    <h2 class="sign-in-title">LOGIN</h2>

    <div>
      <span>EMAIL</span>
      <el-input type="text" v-model="email" class="sign-up-input"/>
    </div>

    <div>
      <span>PASSWORD</span>
      <el-input type="password" v-model="password" class="sign-up-input"/>
    </div>

    <el-divider />

    <div class="sign-in-button-group">
      <el-button @click="signOut">회원가입</el-button>
      <el-button @click="signIn" type="primary">로그인</el-button>
    </div>

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
          console.log(uid + '유저가 접속중이다')
        } else {
          console.log('로그인 된 사람이 없다')
        }
      });
    }
  }
}
</script>

<style scoped>
.sign-in-title {
  margin-bottom: 32px;
}

.sign-up-input {
  width: 95%;
  margin: 0;
}

.sign-in-button-group {
  display: flex;
  justify-content: flex-end;
}
</style>