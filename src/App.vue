<template>
  <div id="app">
    <header class='header'>
      <div class='logo'>
        <router-link to="/"><img src="./assets/fulllogo.png"></router-link>
      </div>
      <Navbar></Navbar>
    </header>
    <div class='page-content'>
      <router-view></router-view>
    </div>
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
  font-family: 'Poiret One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:inherit;
  width:inherit;

}

.logo img {
  height: 129px;
  width:100px;
  position:relative;
  left:5%;
  top:5%;
}

.logo {
  position:absolute;
  left:5%;
  display:inline-block;
}

.header {
  height:20%;
  position:relative;
}


</style>
