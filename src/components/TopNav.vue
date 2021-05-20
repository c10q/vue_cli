<template>
  <div class="top-nav">
    <h2>FWTALK</h2>
    <img v-if="$route.meta.requireAuth" src="../assets/account_circle_black_24dp.svg" alt="account" @click="showModal = true">
    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">{{email}}</h3>
      <div slot="body" @click="logout">
        로그아웃
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "./account/Modal";
import firebase from "firebase";

export default {
  name: "TopNav",
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      email: ""
    }
  },
  methods: {
    logout() {
      this.showModal = false
      firebase.auth().signOut().then(() => {
        this.$router.push('/signIn')
      })
    }
  }
}
</script>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
}
</style>