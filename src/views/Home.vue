<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="text" v-model="msg">

    <ul>
      <li v-for="(item, index) in items" v-bind:key="index" v-on:click="sub">
        {{ item.message }
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {},
  watch: {},
  data() {
    return {
      msg: 'okay',
      items: [
        {message: 'Foo'},
        {message: 'Bar1'},
        {message: 'Bar2'},
        {message: 'Bar3'},
      ]
    }
  }
}
</script>

<style></style>