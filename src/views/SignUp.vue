<template>
  <div class="home">
    id: <input type="text" v-model="email">
    pw: <input type="password" v-model="password">

    <button @click="signup()">회원가입</button>
  </div>
</template>

<script>
import firebase from 'firebase'

let db = firebase.firestore()

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signup() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            let user = userCredential.user
            db.collection("users").add({
              email: user.email,
            }).then((docRef) => {
              console.log("문서 ID: ", docRef.id);
            }).catch((error) => {
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

<style></style>