<template>
  <div id="app">
    <div class='sidebar'>
      <div class='logo'>
        <router-link to="/"><img src="./assets/fulllogo_curve_shadow.png"></router-link>
      </div>
      <Navbar class='navbar'></Navbar>
    </div>
    <div class='page-content'>
      <router-view></router-view>
    </div>
    <div class='footer'>
      <p class='disclaimer'>© 2017 Sonic Hits Inc.</p>
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
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:inherit;
  width:inherit;

}

.logo img {
  /*height: 129px;*/
  /*width:100px;*/
  height: 100%;
  position:relative;
  left:18%;
  top:5%;


}

.logo {
  position:absolute;
  /*left:-1%;*/
  height:280%;
  width: 130px;
  margin: 0;
  z-index: 10;


  /*display:inline-block;*/
}

.sidebar {
  height:75px;
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
  /*padding: 20px;*/

}

.disclaimer{
  position: relative;
  letter-spacing: 1pt;
  font-size: 10px;
  color: #cccccc;

}


</style>
