<template>
  <div id="app">
    <div class='header'>
      <div class='logo'>
        <router-link to="/"><img src="./assets/fulllogo.png"></router-link>
      </div>
      <Navbar></Navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    'Navbar': Navbar
  },
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:inherit;
  width:inherit;
}

#app img {
  height: 129px;
  width:100px;
  position:relative;
  left:5%;
  top:5%;
}

.header {
  height:20%;
}
</style>
