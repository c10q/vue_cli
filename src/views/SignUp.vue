<template>
  <el-card>
    <h2 class="sign-up-title">REGISTER</h2>

    <div>
      <span>Email</span>
      <el-input type="text" v-model="email" class="sign-up-input"/>
    </div>

    <div>
      <span>Password</span>
      <el-input type="password" v-model="password" class="sign-up-input"/>
    </div>

    <div>
      <span>Gender</span>
      <el-radio-group v-model="gender">
        <el-radio :label="0">비공개</el-radio>
        <el-radio :label="1">여자</el-radio>
        <el-radio :label="2">남자</el-radio>
      </el-radio-group>
    </div>

    <!-- @click 은 클릭 이벤트인데 아래 signUp 함수를 호출하겠다는 말입니다 -->
    <!-- signUp() 으로 써도 되고 전달할 인수가 없다면 그냥 signUp 이라고만 써도 돼요 -->
    <!-- <el-button @click="signUp()">회원가입</el-button> 이렇게 -->
    <el-button @click="signUp">가입하기</el-button>
    <el-button @click="signIn">로그인</el-button>
  </el-card>
</template>

<script>
import firebase from 'firebase' // 파이어베이스 사용
import db from '../firestore' // 데이터베이스 사용

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      gender: 1,
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password) // 유저 생성해주세요
          .then((userCredential) => { // then: 콜백 받으면
            let user = userCredential.user // user 변수에 콜백 받은 결과를 담아서
            this.saveInfo(user) // 밑에 메서드 비동기 호출 -> 호출하고 바로 다음 코드 실행
          })
          .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message

            console.log(errorCode)
            console.log(errorMessage)
          });
    },
    signIn() {
      this.$router.push({name: 'SignIn'})
    },
    saveInfo(user) {
      db.collection("users").doc(user.uid).set({ // 데이터베이스 (users 폴더) 에 추가
        // 파이어스토어는 키-값으로 데이터를 저장해요
        email: user.email, // 키: email 값: user.email
        gender: this.gender
      }).then(() => { // 콜백 받으면
        this.$router.push('/signIn')
      }).catch((error) => { // 캐치는 오류 처리, 오류가 생기면 아래 코드가 실행돼요
        console.error("문서 생성 오류 ", error)
      });
    }
  },
}
</script>

<style scoped>
.sign-up-title {
  margin-bottom: 32px;
}

.sign-up-input {
  width: 95%;
  margin: 0;
}
</style>