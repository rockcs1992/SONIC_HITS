<template>
  <div class="content-wrapper">
    <div class="background-container">
      <div class="slogan">
         <pre>
          We are a game audio startup specializing in providing linear, interactive and spatial audio contents.
        </pre>
      </div>
    </div>
    
    <div class="grid-wrapper">
      <div class="column-wrapper">
        <div class="text-wrapper">
          <h2>Writing Chamber</h2>
          <h3>Sound Design, Music Scoring and Production</h3>
          <br/>
          <p>
            Writing Chamber is all about creation. Our <mark>talented</mark> composers and sound designers here are not only experts in <mark>delivering emotions</mark>, they are also <mark>good listeners</mark>. From a subtle <mark>Sound FX</mark> to thrilling <mark>Soundscape</mark>, from a concise <mark>Motive</mark> to magnificent <mark>Full Scores</mark>, every bit of sound is crafted elaborately for amplifying the vibe of <mark>your</mark> game.
          </p>
        </div>
      </div>
      <div class="column-wrapper">
        <div class="text-wrapper">
          <h2>Project Studio</h2>
          <h3>Recording, Mixing, Spacialization and Middleware Integration</h3>
          <br/>
          <p>
            Project Studio is devoted to premium sound quality. All the recording and mixing sessions take place here. It features a 7.1 sound system, an Apogee Symphony I/O, an UAD Satellite, Hi-End mics and preamps... <mark>And, most importantly</mark>, a veteran, OCD sound director. Vocal, instrumental, Foley... everything is captured <mark>detailedly</mark> here. At the end of the day, whether you play our final mixdown through a fancy sound system or simply on your laptop, it will <mark>always sounds great</mark>.
          </p>
        </div>
      </div>
      <div class="column-wrapper">
        <div class="text-wrapper">
          <h2>The Lab</h2>
          <h3>Experiment, Research and building cool stuff</h3>
        </div>
      </div>
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
    }
  }
</script>

<style scoped>

  pre mark {
    font-variant: small-caps;
  }


  pre {
    white-space: normal;
    font-size: 3.8vw;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1pt;
    color: white;
  }

  .background-container{
    position: relative;
    top: 50px;
    background-image: url("../assets/about_background.png");
    z-index: 2;
    height: 400px;
    width: 100%;
  }

  .slogan{
    position: absolute;
    top: 22%;
    left: 22%;
    right: 50px;
    z-index:3;
  }

  .grid-wrapper{
    position: relative;
    top: 100px;
    left: 10%;
    width: 90%;
    min-height: 280px;
  }

  .column-wrapper{
    float: left;
    width: 33%;
    height: 100%;
  }

  .text-wrapper{
    position:relative;
    left: 5%;
    width: 90%;
    height: 100%;
    text-align: justify;
  }

  h2{
    font-weight: bold;
    line-height: 1.8;
  }
  h3{
    font-size: 12pt;
    font-weight: bold;
  }
  p{
    font-size: 11pt;
  }

</style>
