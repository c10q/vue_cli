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

    <button class="sign-in-google-button" @click="signInWithGoogle">
      <img src="../assets/google_logo.png" alt="google-login">
      Google 계정으로 로그인
    </button>

    <button class="sign-in-facebook-button" @click="signInWithFacebook">
      <img src="../assets/facebook_logo.png" alt="facebook-login">
      Facebook 계정으로 로그인
    </button>

  </el-card>
</template>

<script>
import firebase from "firebase"
import db from "../firestore";

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

            switch (errorCode) {
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
      this.$router.push({name: 'SignUp'}).catch(() => {
      })
    },
    signInWithGoogle() {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {

            let user = result.user

            db.collection('users').doc(user.uid).get() // 데이터베이스에 유저가 없으면 정보 추가
                .then((doc) => {
                  if (!doc.exists) {
                    db.collection('users').doc(user.uid).set({
                      email: user.email,
                      gender: 0
                    })
                  }
                })
                .catch((error) => {
                  console.log("데이터베이스 가져오기 오류:", error);
                })

            this.$router.push({name: 'Home'})
          })
          .catch((error) => {
            console.log({
              'errorCode': error.code,
              'errorMessage': error.message,
              'email': error.email,
              'credential': error.credential
            })
          })
    },
    signInWithFacebook() {
      let provider = new firebase.auth.FacebookAuthProvider()
      firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {

            let user = result.user

            db.collection('users').doc(user.uid).get() // 데이터베이스에 유저가 없으면 정보 추가
                .then((doc) => {
                  if (!doc.exists) {
                    db.collection('users').doc(user.uid).set({
                      email: user.email,
                      gender: 0
                    })
                  }
                })
                .catch((error) => {
                  console.log("데이터베이스 가져오기 오류:", error);
                })

            this.$router.push({name: 'Home'})
          })
          .catch((error) => {
            console.log({
              'errorCode': error.code,
              'errorMessage': error.message,
              'email': error.email,
              'credential': error.credential
            })
          });
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
  margin-bottom: 32px;
}

.sign-in-google-button {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;

  border: 1px solid lavender;
  border-radius: 8px;

  background-color: white;
}

.sign-in-google-button img {
  width: 100%;
  height: 100%;
  margin: 8px;
  max-width: 32px;
  max-height: 32px;
}

.sign-in-facebook-button {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;

  color: white;

  border: 1px solid #4267B2;
  border-radius: 8px;

  background-color: #4267B2;
}

.sign-in-facebook-button img {
  width: 100%;
  height: 100%;
  padding: 4px;
  margin: 8px;
  max-width: 24px;
  max-height: 24px;
}

</style>