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
    padding:0;
  }

  .contact-wrapper {
    padding:0;
  }


  input {
    max-width: 50%;
  }

  .contact-form {
    max-width: 50%;
    display:inline-block;
  }
  
</style>
