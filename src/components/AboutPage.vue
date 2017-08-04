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
        <Column>
          <h2>Writing Chamber</h2>
          <h3>Sound Design, Music Scoring and Production</h3>
          <br/>
          <p>
            Writing Chamber is all about creation. Our talented composers and sound designers here are not only experts in delivering emotions, they are also good listeners. From a subtle Sound FX to thrilling Soundscape, from a concise Motive to magnificent Full Scores, every bit of sound is crafted elaborately for amplifying the vibe of your game.
          </p>
        </Column>
        <Column>
          <h2>Project Studio</h2>
          <h3>Recording, Mixing, Spacialization and Middleware Integration</h3>
          <br/>
          <p>
            Project Studio is devoted to premium sound quality. All the recording and mixing sessions take place here. It features a 7.1 sound system, an Apogee Symphony I/O, an UAD Satellite, Hi-End mics and preamps... And, most importantly, a veteran, OCD sound director. Vocal, instrumental, Foley... everything is captured detailedly here. At the end of the day, whether you play our final mixdown through a fancy sound system or simply on your laptop, it will always sounds great.
          </p>
        </Column>
      </div>
    </div>
</template>

<script>

import Column from '@/components/Column'
  export default {
    components: {
      'Column': Column
    },
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
    color: rgba(256, 256, 256, 0.9);
  }

  .background-container{
    position: relative;
    top: 50px;
    background-image: url("../assets/aboutBackground.jpg");
    background-size: 100% auto;
    z-index: 2;
    height: 25vw;
    width: 100%;
  }

  .slogan{
    position: absolute;
    top: 22%;
    left: 22%;
    right: 20px;
    z-index:3;
  }

  .grid-wrapper{
    position: relative;
    top: 100px;
    left: 10%;
    width: 90%;
    /*min-height: 320px;*/
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
