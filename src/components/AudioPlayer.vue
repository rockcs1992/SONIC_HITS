<template>

  <div class='audio-player'>
    <audio autobuffer controls>
      <source :src="audioSrc">  
    </audio>
  </div>

</template>

<script>


  export default {
    props: ['audioSrc'],
  }
</script>

<style scoped>


</style>
