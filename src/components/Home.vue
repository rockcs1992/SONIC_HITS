<template>
  <div class="content-wrapper">
      <div class="home-wrapper">
        <div class="background"></div>
      </div>
   </div> 
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      //canvas code here
      // var canvas = this.$refs.canvas;    
      // var $ = canvas.getContext("2d");
      // var w = canvas.width;
      // var h = canvas.height;
      // $.fillRect(0,0,w,h);
    }
  }
</script>

<style>

.home-wrapper {
  height:100%;
  width:100%;
}

.content-wrapper {
  height:100%;
  width:100%;
  position:relative;
}

.background {
  width:100%;
  position:relative;
  height:100%;
  z-index:-1;
  background-image: url("../assets/background.jpg");
  background-size:100% 120%;
  transform:scaleY(1.3);
  transform-origin: bottom;
  opacity:0.8;
}



</style>
