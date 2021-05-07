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
      email: '', // Todo 회원가입 전 이메일 폼 체크
      password: '', // Todo 패스워드 6글자 미만이면 경고 Alert
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password) // 유저 생성해주세요
          .then((userCredential) => { // then: 콜백 받으면
            let user = userCredential.user // user 변수에 콜백 받은 결과를 담아서
            this.saveInfo(user) // 밑에 메서드 비동기 호출 -> 호출하고 바로 다음 코드 실행
            // Todo 메서드 앞에 this 붙이는 이유 공부
            // Todo 로그인 페이지로 리다이렉트
          })
          .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message

            console.log(errorCode)
            console.log(errorMessage)
          });
    },
    saveInfo(user) {
      let db = firebase.firestore() // 데이터베이스 쓰겠다고 선언
      let now = new Date // 현재의 Date 객체를 생성

      db.collection("users").add({ // 데이터베이스 (users 폴더) 에 추가
        // 파이어스토어는 키-값으로 데이터를 저장해요
        email: user.email, // 키: email 값: user.email
        created_at: now
      }).then((docRef) => { // 콜백 받으면
        // 문서 아이디는 db.collection().add() 로 데이터 추가하고 무작위로 생성되는데
        // 저희가 쓰는 uid 비슷해요
        console.log("문서 ID: ", docRef.id);
      }).catch((error) => { // 캐치는 오류 처리, 오류가 생기면 아래 코드가 실행돼요
        console.error("문서 생성 오류 ", error);
      });
    }
  },
}
</script>

<style>
</style>