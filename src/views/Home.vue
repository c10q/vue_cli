<template>
  <div class="home">
    <p>{{ userMail }}</p>
    <el-button @click="signOut">로그아웃</el-button>
    <el-button @click="chat">채팅방</el-button>
  </div>
</template>

<script>

import firebase from "firebase"; 

export default {
  name: 'Home',
  data() {
    const user = firebase.auth().currentUser;
    return {
      radio: '1',
      userMail: user.email,
      items: [
        {message: ''},
        {message: ''},
        {message: ''},
        {message: ''},
        {message: ''},
      ]
    }
  },
  methods: {
    signIn() {
      // 이건 프로그래밍 기반 라우팅인데
      // template 에서 router-link 로 페이지 이동을 하잖아요
      // 그런데 javascript 명령어로도 라우팅을 할 수 있어요
      // 이렇게 프로그래밍 기반 라우팅을 사용하면 단순히 이동하는 것 외의 더 많은 기능을 쓸 수 있어요
      //
      // 그냥 이게 좀 더 좋아요
      this.$router.push('/signIn')
    },
    signUp() {
      this.$router.push('/signUp')
    },
    chat() {
      this.$router.push('/chat')
    },
    signOut() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/signIn')
      })
    }
  }
}
</script>

<style>
* {
  margin: 7px;
}

li {
  list-style: none;
}
</style>