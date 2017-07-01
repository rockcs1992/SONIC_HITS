<template>
  <div class="service-content-wrapper">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Music" name="1">
        <div>
          Our music team consists of two kinds of artists. The <mark>veteran</mark> old-timers with <mark>advanced music degree</mark> who prefer staff paper on the desk and a pencel in their hands, and the <mark>talented</mark> new-schools who sit in front of the screen with their hands on their MIDI controllers. Having both of them in the room gives us the versatility to <mark>compose</mark> and <mark>produce</mark> all kinds of genres from <mark>full orchestras</mark> to <mark>pure electronics</mark>.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Sound Design" name="2">
        <div>
          Artists in our sound design team are skillful <mark>mood makers</mark>. Based on the requirement of your project, we can recreate vivid scenes by <mark>field recording</mark>, build up mysterious atmosphere by <mark>sound sculpting</mark>, <mark>Foley</mark> a lively sound if it is hard to record directly, or <mark>synthesize</mark> an unique one from scratch. We have the creativity and experience to always come up with the right sound for you.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Mixing/Recording" name="3">
        <div>
          <mark>Supreme sound quaility</mark> is the foundation of our services. We got the facilities and equipments, and most importantly, the right people to ensure that. Our <mark>experienced</mark> sound director is here to make sure every <mark>detail</mark> is being captured in recording sessions, and our final mixdown will sound great on <mark>any playback device</mark>.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Interactive Design" name="4">
        <div>
          After the audio assets being created, it is time to construct the actual interactive sonic world. We are fluent with middleware and APIs to integrate it into your project such as <mark>FMOD, Wwise, ADX2</mark> and <mark>Web Audio API</mark>. Beyond that, audio programming languages such as <mark>Max/MSP, Pure Data, SuperCollider</mark> and <mark>Csound</mark> are in our skillsets too. Moreover, some of us are even <mark>developers</mark> ourself, so you could be assured that the communication between us is always effecitve and cheerful.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>
<style>
  mark {
    font-variant: small-caps;
  }

  .service-content-wrapper {
    padding:20%;
  }

  .el-collapse-item__content{
    font-size: 14px;
  }

  .el-collapse-item {
    padding:20px;
  }
</style>