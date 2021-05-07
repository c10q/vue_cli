<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png"-->
    <button><router-link to="/about">누르세요</router-link></button>
      <div><el-radio v-model="radio" label="1">강의듣는다</el-radio>
      <el-radio v-model="radio" label="2">안듣는다</el-radio></div>
    <input type="text" v-model="msg">
    <ul>
      <li v-for="(item, index) in items" v-bind:key="index">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  computed: {},
  watch: {},
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
  }
}
</script>

<style>
*{
  margin: 7px;
}
li{
  list-style: none;
}
</style>