<template>
  <div class="content-wrapper">
    <div class="children-content-wrapper">
      <div class="services-wrapper-background">
        <div class="services-wrapper">
          <ServiceAccordian />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceAccordian from '@/components/ServiceAccordian'
  export default {
    components: {
      ServiceAccordian: ServiceAccordian,
    },
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
  height: auto;
}

.table-cell:hover {
    background-color: rgba(10,10,10,0.8);
    width: 80%;

  }



</style>
