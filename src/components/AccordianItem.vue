<template>

<div class="table-cell">
  <div class="icon-label">
    <div class="icon-wrapper">
      <img class="icon" :src="imageSrc" />
    </div>
    <div class="label">{{title}}</div>
  </div>
  <slot>Text added here</slot>
</div>

</template>

<script>
export default {
	props: ['imageSrc','title','openTo'],
}

</script>
	
<style scoped>
	.table-cell { 
    width:25%;
    background-color: rgba(10,10,10,0.5);
    border: 1.5px solid #FF6138;
    border-radius: 10px;
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

  .icon-wrapper{
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

  .table-cell span {
    position: absolute;
    opacity: 0;
    font-size: 0;
    line-height: 0;
    color: transparent;
    -webkit-transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1), font-size 400ms ease, line-height 400ms ease, color 400ms ease;
    transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1), font-size 400ms ease, line-height 400ms ease, color 400ms ease;
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

  .icon{
    width: 5vw;
    height: auto;
  }
</style>
