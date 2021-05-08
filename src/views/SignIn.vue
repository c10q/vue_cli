<template>
  <el-card>
    <h2 class="sign-in-title">LOGIN</h2>

    <div>
      <span>Email</span>
      <el-input type="text" v-model="email" class="sign-in-input"/>
    </div>

    <div>
      <span>Password</span>
      <el-input type="password" v-model="password" class="sign-in-input" v-on:keyup.native.enter="signIn"/>
    </div>

    <el-divider/>

    <div class="sign-in-button-group">
      <el-button @click="signUp">회원가입</el-button>
      <el-button @click="signIn" type="primary">로그인</el-button>
    </div>

  </el-card>
</template>

<script>
import firebase from "firebase"

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
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            let user = userCredential.user
            this.$router.push({name: 'Home'})

            console.log(user)
          })
          .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message

            switch(errorCode) {
              case 'auth/invalid-email':
                this.$message({
                  message: '이메일 형식을 확인해주세요',
                  type: "warning"
                })
                break
              case 'auth/wrong-password':
                this.$message({
                  message: '이메일 형식을 확인해주세요',
                  type: "warning"
                })
                break
              default:
                this.$message({
                  message: errorMessage,
                  type: "error"
                })
                console.log(errorCode)
                console.log(errorMessage)
            }
          });
    },
    signUp() {
      this.$router.push({name: 'SignUp'}).catch(() => {})
    }
  }
}
</script>

<style scoped>
.sign-in-title {
  margin-bottom: 32px;
}

.sign-in-input {
  width: 95%;
  margin: 0;
}

.sign-in-button-group {
  display: flex;
  justify-content: flex-end;
}
</style>