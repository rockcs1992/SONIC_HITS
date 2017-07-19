<template>
  <div class="content-wrapper">
      <div class="about-wrapper">
        <canvas ref="canvas"></canvas>
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
      var canvas = this.$refs.canvas;    
      var $ = canvas.getContext("2d");
      var w = canvas.width;
      var h = canvas.height;
      $.fillRect(0,0,w,h);
    }
  }
</script>

<style>

.content-wrapper {
  height:100%;
  width:100%;
  position:relative;
}

canvas {
  opacity:0.2;
  height:100%;
  width:100%;
  position:absolute;
}
/*.wrapper {
  height:inherit;
  width:inherit;
  background-image: url('../assets/background.jpg');
}*/

</style>
