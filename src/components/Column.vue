<template>

<div class="column">
	<div class="column-text">
		<slot>Column content lives here</slot>
	</div>
</div>

</template>

<script>
</script>
	


<style>

.column-text {
    position:relative;
    left: 5%;
    width: 90%;
    height: 100%;
    text-align: justify;
 }

 .column {
 	float:left;
 	height:100%;
 	width:45%;
 }

</style>