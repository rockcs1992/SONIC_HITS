<template>
  <div class="content-wrapper">
    <div class="contact-wrapper">
      <div class="contact-text">
        <h5>Contact us for your audio needs!</h5>
      </div>
      <div class="contact-form">
        <label>Name
        <el-input v-model="name" placeholder="Please enter your name"></el-input>
        </label>
        <label>Email Address
        <el-input v-model="email" placeholder="Please enter your email"></el-input>
        </label>
        <label>Message
        <el-input v-model="message" type="textarea" :rows="6" placeholder="Tell us what do you need!"></el-input>
        </label>
      </div>
      <div class="submit-button">
        <el-button type="primary">Submit</el-button>
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
    padding:20px;
  }

  .content-wrapper {
    position: relative;
    padding:0;
  }

  .contact-wrapper {
    text-align: center;
    padding:0;
    position: absolute;
    left: 240px;
    top: 80px;
    right: 60px;
    background-color: aqua;
    border-radius: 20px;
  }


  input {
    max-width: 50%;
  }

  .contact-form {
    text-align: center;
    max-width: 500px;
    display:inline-block;
  }


  h5 {
    font-family: "Montserrat ExtraLight", sans-serif;
    letter-spacing: 2pt;
    text-align: center;
    font-size: 30pt;
  }
  
</style>
