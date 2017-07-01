<template>
  <div class="wrapper">
      <canvas id="canvas"></canvas>
    
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
    }
  }
</script>

<style scoped>

.wrapper {
  height:80%;
}
#canvas {
  opacity:0.2;
  height:100%;
  width:100%;
}
/*.wrapper {
  height:inherit;
  width:inherit;
  background-image: url('../assets/background.jpg');
}*/

</style>
