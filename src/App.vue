<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view/>
  </div>
</template>

<style scoped>

</style>
<script>
import TopNav from "./components/TopNav";
export default {
  components: {TopNav}
}
</script>