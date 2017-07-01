<template>
  <div class="wrapper">
    <pre>
      We are a game audio startup specializing in providing linear, interactive and spatial audio contents. <br/>
    </pre>
    <h2>Writing Chamber</h2>
    <h3>Sound Design, Music Scoring and Production</h3>
    <p>
      Writing Chamber is all about creation. Our <mark>talented</mark> composers and sound designers here are not only experts in <mark>delivering emotions</mark>, they are also <mark>good listeners</mark>. From a subtle <mark>Sound FX</mark> to thrilling <mark>Soundscape</mark>, from a concise <mark>Motive</mark> to magnificent <mark>Full Scores</mark>, every bit of sound is crafted elaborately for amplifying the vibe of <mark>your</mark> game.   
    </p>
    <h2>Project Studio</h2>
    <h3>Recording, Mixing, Spacialization and Middleware Integration</h3>
    <p>
      Project Studio is devoted to premium sound quality. All the recording and mixing sessions take place here. It features a 7.1 sound system, an Apogee Symphony I/O, an UAD Satellite, Hi-End mics and preamps... <mark>And, most importantly</mark>, a veteran, OCD sound director. Vocal, instrumental, Foley... everything is captured <mark>detailedly</mark> here. At the end of the day, whether you play our final mixdown through a fancy sound system or simply on your laptop, it will <mark>always sounds great</mark>.
    </p>
    <h2>The Lab</h2>
    <h3>Experiment, Research and building cool stuff</h3>  
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
  padding:4% 20% ;
  text-align: center;
 }

 pre {
  white-space: pre-wrap;
  /*display: inline;*/
  font-size: 14px;
  line-height: 2;
  width: 85%;
  font-family: 'Open Sans', sans-serif;
}

/*.wrapper {
  height:inherit;
  width:inherit;
  background-image: url('../assets/background.jpg');
}*/

</style>
