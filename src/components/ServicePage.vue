<template>
  <div class="content-wrapper">
    <div class="children-content-wrapper">
      <div class="services-wrapper-background">
        <div class="services-wrapper">
          <div class="table">
            <div class="table-cell">
              <div class="icon-label">
                <div class="icon">
                  <img class="icon-style" src="../assets/music.png"/>
                </div>
                <div class="label">Music</div>
              </div>
              <span>
                Our music team consists of two kinds of artists. The <mark>veteran</mark> old-timers with <mark>advanced music degree</mark> who prefer staff paper on the desk and a pencel in their hands, and the <mark>talented</mark> new-schools who sit in front of the screen with their hands on their MIDI controllers. Having both of them in the room gives us the versatility to <mark>compose</mark> and <mark>produce</mark> all kinds of genres from <mark>full orchestras</mark> to <mark>pure electronics</mark>.
              </span>
            </div>
            <div class="table-cell">
              <div class="icon-label">
                <div class="icon">
                  <img class="icon-style" src="../assets/soundDesign.png"/>
                </div>
                <div class="label">Sound Design</div>
              </div>
              <span>
                Artists in our sound design team are skillful <mark>mood makers</mark>. Based on the requirement of your project, we can recreate vivid scenes by <mark>field recording</mark>, build up mysterious atmosphere by <mark>sound sculpting</mark>, <mark>Foley</mark> a lively sound if it is hard to record directly, or <mark>synthesize</mark> an unique one from scratch. We have the creativity and experience to always come up with the right sound for you.
              </span>
            </div>
            <div class="table-cell">
              <div class="icon-label">
                <div class="icon">
                  <img class="icon-style" src="../assets/mixer.png"/>
                </div>
                <div class="label">Mixing & Recording</div>
              </div>
              <span>
                <mark>Supreme sound quaility</mark> is the foundation of our services. We got the facilities and equipments, and most importantly, the right people to ensure that. Our <mark>experienced</mark> sound director is here to make sure every <mark>detail</mark> is being captured in recording sessions, and our final mixdown will sound great on <mark>any playback device</mark>.
              </span>
            </div>
            <div class="table-cell">
              <div class="icon-label">
                <div class="icon">
                  <img class="icon-style" src="../assets/wrench.png"/>
                </div>
                <div class="label">Interactive Design</div>
              </div>
              <span>
                After the audio assets being created, it is time to construct the actual interactive sonic world. We are fluent with middleware and APIs to integrate it into your project such as <mark>FMOD, Wwise, ADX2</mark> and <mark>Web Audio API</mark>. Beyond that, audio programming languages such as <mark>Max/MSP, Pure Data, SuperCollider</mark> and <mark>Csound</mark> are in our skillsets too. Moreover, some of us are even <mark>developers</mark> ourself, so you could be assured that the communication between us is always effecitve and cheerful.
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
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
<style scoped>
  .content-wrapper{
    position:relative;
    /*background-color: darkgrey;*/
  }

  .children-content-wrapper{
    position: absolute;
    padding:0;
    width: 100%;
    top: 2vh;
    bottom: 60px;
  }

  .services-wrapper-background{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    background-image: url("../assets/about_background.png");
    height: 90%;
  }

  .services-wrapper{
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translate(0, -50%);
    width: 80%;
    height: 100%;
    /*background-color: aqua;*/

  }




  .table {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .table-cell {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-color: rgba(10,10,10,0.5);
    border: 1.5px solid #FF6138;
    border-radius: 10px;
    margin: 50px 10px 50px 10px;
    width: 25%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: width 400ms cubic-bezier(0.4, 0, 0.2, 1), background-color 400ms cubic-bezier(0.4, 0, 0.2, 1);
    transition:  width 400ms cubic-bezier(0.4, 0, 0.2, 1), background-color 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .icon-label{
    opacity: 1;
    position: relative;
    /*background-color: aqua;*/
    top: 37%;
    left: 50%;
    transform: translate(-50%,0);
    height: 40%;
  }

  .icon{
    position: relative;
    text-align: center;
    height: 56%;
    width: 100%;
  }

  .label{
    position: relative;
    left: 4px;
    width: 100%;
    text-align: center;
    font-size: 1.1vw;
    color:#FF6138;
    letter-spacing: 5pt;
    line-height: 1.6vw;
  }

  .icon-style{
    width: 5vw;
    /*min-width: 60px;*/
    /*max-width: 110px;*/
    height: auto;
  }

  span{
    text-align: justify;
    position:absolute;
    width: 80%;
    font-family: "Montserrat ExtraLight",sans-serif;

  }

  mark{
    font-family: "Montserrat Regular",sans-serif;
    background-color: transparent;
    color: #c95031;
  }

  .table-cell:hover {
    background-color: rgba(10,10,10,0.8);
    width: 80%;

  }
  .table-cell span {
    position: absolute;
    opacity: 0;
    font-size: 0;
    line-height: 0;
    color: transparent;
    -webkit-transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1), font-size 400ms ease, line-height 400ms ease, color 400ms ease;
    transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1), font-size 400ms ease, line-height 400ms ease, color 400ms ease;
    /*-webkit-transition-delay: 100ms;*/
    /*transition-delay: 100ms;*/
  }
  .table-cell .icon-label {
    position: absolute;
    opacity: 1;
    -webkit-transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition-delay: 0ms;
    transition-delay: 0ms;
  }
  .table-cell:hover span {
    opacity: 1;
    font-size: 1.5vw;
    line-height: 2vw;
    color: #c95031;

    /*-webkit-transition-delay: 100ms;*/
    /*transition-delay: 100ms;*/
  }
  .table-cell:hover .icon-label {
    opacity: 0;

  }



</style>
