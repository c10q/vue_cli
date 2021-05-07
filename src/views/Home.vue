<template>
  <div class="home">
    <button>
      <router-link to="/about">누르세요</router-link>
    </button>
    <div>
      <el-radio v-model="radio" label="1">강의듣는다</el-radio>
      <el-radio v-model="radio" label="2">안듣는다</el-radio>
    </div>
    <input type="text" v-model="msg">
    <ul>
      <li v-for="(item, index) in items" v-bind:key="index">
        {{ item.message }}
      </li>
    </ul>
    <el-button @click="signUp">SIGNUP</el-button>
    <el-button @click="signIn" type="primary">SIGNIN</el-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      radio: '1',
      msg: '오늘 놀러 갈 곳',
      items: [
        {message: '남산'},
        {message: '인사동'},
        {message: '조계사'},
        {message: '해먹'},
        {message: '청계천'},
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