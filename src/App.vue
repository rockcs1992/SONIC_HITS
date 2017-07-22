<template>
  <div id="app">
    <header class='header'>
      <div class='logo'>
        <router-link to="/"><img src="./assets/fulllogo_curve_shadow.png"></router-link>
      </div>
      <nav class='navbar'>
        <Navbar/>
      </nav>
    </header>
    <main class='page-content' id="contents">
      <router-view></router-view>
    </main>
    <footer class='footer'>
      <p class='disclaimer'>© 2017 Sonic Hits Inc.</p>
    </footer>
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
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:inherit;
  width:inherit;

}

.header {
  width:100%;
  height:215px;
  position:relative;
}

.logo img {
  height: 100%;
  position:relative;
  left:18%;
  top:5%;
}

.logo {
  position:absolute;
  /*left:-1%;*/
  height:100%;
  width: 130px;
  top:-1px;
  z-index: 10;


  /*display:inline-block;*/
}

.navbar {
  height:35%;
  position:relative;
  background-color: #FF6138;
  -moz-box-shadow:2px 2px 10px #CCCCCC;
  -webkit-box-shadow:2px 2px 10px #CCCCCC;
  box-shadow:2px 2px 10px #CCCCCC;
}

.footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 10;
  background-color: rgba(90, 90, 90, 0.8);
  text-align: center;
  line-height: 50px;
  position:fixed;

}

.disclaimer{
  position: relative;
  letter-spacing: 1pt;
  font-size: 10px;
  color: #cccccc;


}


</style>
