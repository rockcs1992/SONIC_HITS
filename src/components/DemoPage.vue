<template>
  <div class="content-wrapper">
  	<div class="audio-group">
	  <AudioPlayer :audioSrc="ABadDream" />
	  <AudioPlayer :audioSrc="AmbientSuspense" />
	  <AudioPlayer :audioSrc="Techno" />
	  <AudioPlayer :audioSrc="TenseOstinato" />
	</div>
    
   </div> 
</template>

<script>
import AudioPlayer from '@/components/AudioPlayer';
import ABadDream from '../media/A_bad_dream.mp3';
import AmbientSuspense from '../media/Ambient_Suspense.mp3';
import Techno from '../media/Techno.mp3';
import TenseOstinato from '../media/Tense_Ostinato.mp3';
export default {
	components: {
		'AudioPlayer': AudioPlayer
	},
	data() {
      return { 
        ABadDream,
        AmbientSuspense,
        Techno,
        TenseOstinato
      }
    }
}

</script>

<style scoped>
.audio-group {
	position:relative;
	margin-top: 300px;
}
.content-wrapper {
  height:100%;
  width:100%;
  position: relative;
}  
</style>
