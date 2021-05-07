<template>
  <el-card>
    <span>ID</span>
    <el-input type="text" placeholder="ID" v-model="email"/>

    <span>PW</span>
    <el-input type="password" placeholder="PASSWORD" v-model="password"/>
    <!-- @click 은 클릭 이벤트인데 아래 signUp 함수를 호출하겠다는 말입니다 -->
    <!-- signUp() 으로 써도 되고 전달할 인수가 없다면 그냥 signUp 이라고만 써도 돼요 -->
    <!-- <el-button @click="signUp()">회원가입</el-button> 이렇게 -->
    <el-button @click="signUp">회원가입</el-button>

  </el-card>
</template>

<script>
import firebase from 'firebase' // 파이어베이스 사용

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signUp() {
      let db = firebase.firestore() // 데이터베이스 쓰겠다고 선언

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password) // 유저 생성해주세요
          .then((userCredential) => { // 콜백 받으면
            let user = userCredential.user // user 변수에 콜백 받은 결과를 담아서
            db.collection("users").add({ // 데이터베이스 (users 폴더) 에 추가
              // 파이어스토어는 키-값으로 데이터를 저장해요
              email: user.email, // 키: email 값: user.email
            }).then((docRef) => {
              // 문서 아이디는 db.collection().add() 로 데이터 추가하고 무작위로 생성되는데
              // 저희가 쓰는 uid 비슷해요
              console.log("문서 ID: ", docRef.id);
            }).catch((error) => { // 캐치는 오류 처리, 오류가 생기면 아래 코드가 실행돼요
              console.error("문서 생성 오류 ", error);
            });
          })
          .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message

            console.log(errorCode)
            console.log(errorMessage)
          });
    }
  }
}
</script>

<style>
</style>