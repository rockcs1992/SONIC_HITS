<template>
  <div class="content-wrapper">
    <div class="contact-wrapper">
      <div class="contact-text">
        <h5>Contact us for your audio needs!</h5>
      </div>
      <div class="contact-form">
        <div class="block">
          <label>Name
          <el-input v-model="name" placeholder="Please enter your name"></el-input>
          </label>
          <label>Email Address
          <el-input v-model="email" placeholder="Please enter your email"></el-input>
          </label>
        </div>
        <div class="block">
          <label>Message
          <el-input v-model="message" type="textarea" :rows="6" placeholder="Tell us what do you need!"></el-input>
          </label>
        </div>
      </div>
      <div class="submit-button">
        <el-button class="button" type="primary">Submit</el-button>
      </div>
    </div>
   </div> 
</template>

<script>
  export default {
    data(){
      return {
        name : '',
        email : '',
        message : ''
      }
    }
  }
</script>

<style scoped>
  div {
    padding:20px 0 20px 0;
  }

  .content-wrapper {
    position: relative;
    padding:0;
    background-image: url("../assets/contactBackground.jpg");
    background-size: 100% 100%;
  }

  .contact-wrapper {
    text-align: center;
    padding:0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%);
    max-width: 900px;
    /*background-color: aqua;*/
    /*border-radius: 20px;*/
  }

  .block{
    /*background-color: darkgrey;*/
    text-align: left;
    width: 46%;
    padding: 2%;
    position:relative;
    float: left;
  }


  input:-moz-placeholder,input {
    width: 45%;
    font-family: "Montserrat Regular", sans-serif;
  }

  input::-webkit-input-placeholder,input {
    width: 45%;
    font-family: "Montserrat Regular", sans-serif;
  }

  input:-ms-input-placeholder,input {
     width: 45%;
     font-family: "Montserrat Regular", sans-serif;
   }

  .contact-form {
    position:relative;
    text-align: center;
    /*max-width: 500px;*/
    /*display:inline-block;*/
  }
  .submit-button{
    position:relative;
    top: 0;
    clear:both;
    width: 100%;
  }

  .button{
    width: 200px;
    height: 50px;
    font-family: "Montserrat Regular", sans-serif;
    color: #FF6138;
    letter-spacing: 2pt;
    background-color: transparent;
    border: 2px solid #FF6138;
    transition: color 150ms ease, background-color 150ms ease;
  }

  .button:hover{
    color: black;
    background-color: #FF6138;
  }

  .button:active{
    color: black;
    background-color: #b14529;
  }



  label{
    font-family: "Montserrat Light", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 2pt;
    color: white;
    /*padding: 20px;*/
  }

  h5 {
    font-family: "Montserrat ExtraLight", sans-serif;
    letter-spacing: 2pt;
    /*text-align: center;*/
    color: white;
    font-weight: lighter;
    font-size: 5vw;
    min-width: 480px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
</style>
