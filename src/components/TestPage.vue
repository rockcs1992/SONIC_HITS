<template>
  <div class="content-wrapper">
    
      <ServiceBox :imageSrc="musicIcon" title="Music" openTo="right">
        <p>Our music team consists of two kinds of artists. The <mark>veteran</mark> old-timers with <mark>advanced music degree</mark> who prefer staff paper on the desk and a pencel in their hands, and the <mark>talented</mark> new-schools who sit in front of the screen with their hands on their MIDI controllers. Having both of them in the room gives us the versatility to <mark>compose</mark> and <mark>produce</mark> all kinds of genres from <mark>full orchestras</mark> to <mark>pure electronics</mark>.</p>
      </ServiceBox>

      <ServiceBox :imageSrc="soundDesignIcon" title="Sound Design" openTo="left">
        <p>Artists in our sound design team are skillful <mark>mood makers</mark>. Based on the requirement of your project, we can recreate vivid scenes by <mark>field recording</mark>, build up mysterious atmosphere by <mark>sound sculpting</mark>, <mark>Foley</mark> a lively sound if it is hard to record directly, or <mark>synthesize</mark> an unique one from scratch. We have the creativity and experience to always come up with the right sound for you.</p>

      </ServiceBox>

      <ServiceBox :imageSrc="mixerIcon" title="Mixing/Recording" openTo="right">
        <p><mark>Supreme sound quaility</mark> is the foundation of our services. We got the facilities and equipments, and most importantly, the right people to ensure that. Our <mark>experienced</mark> sound director is here to make sure every <mark>detail</mark> is being captured in recording sessions, and our final mixdown will sound great on <mark>any playback device</mark>.</p>
      </ServiceBox>

      <ServiceBox :imageSrc="wrenchIcon" title="Interactive Design" openTo="left">
        <p>After the audio assets being created, it is time to construct the actual interactive sonic world. We are fluent with middleware and APIs to integrate it into your project such as <mark>FMOD, Wwise, ADX2</mark> and <mark>Web Audio API</mark>. Beyond that, audio programming languages such as <mark>Max/MSP, Pure Data, SuperCollider</mark> and <mark>Csound</mark> are in our skillsets too. Moreover, some of us are even <mark>developers</mark> ourself, so you could be assured that the communication between us is always effecitve and cheerful.</p>
      </ServiceBox>
    
   </div> 
</template>

<script>
import ServiceBox from '@/components/ServiceBox'
import musicIcon from '../assets/music.png'
import soundDesignIcon from '../assets/soundDesign.png'
import mixerIcon from '../assets/mixer.png'
import wrenchIcon from '../assets/wrench.png'
  export default {
    data(){
      return {
        musicIcon: musicIcon,
        soundDesignIcon: soundDesignIcon,
        mixerIcon: mixerIcon,
        wrenchIcon: wrenchIcon, 
      }
    },
    components :{
      ServiceBox : ServiceBox,
    }
  }
</script>

<style scoped>
  
.content-wrapper {
  position:relative;
  text-align:center;
  height:100%;
  width:100%;
}  
</style>
