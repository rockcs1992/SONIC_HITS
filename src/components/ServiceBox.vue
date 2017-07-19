<template>
	<div class="service-box">
		<div class='tile-original'>
			<div class="tile-original-content">
				<img :src="imageSrc" />
				<div class="service-title">
					<p>{{title}}</p>
				</div>
			</div>
		</div>
		<div class='tile-flip' v-bind:class="'open-to-' + openTo">
			<div class="service-content">
				<slot>Content to be added</slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['imageSrc','title','openTo'],
}
</script>


<style scoped>
img {
	height:64px;
	width:64px;
}

.service-title {
	padding:5% 0;
}

.tile-original, .tile-flip{
	position:absolute;
}

.tile-original{
	height:100%;
	width:100%;
}

.tile-flip {
	height:100%;
	width:112%;
}

.tile-original {
	background-color: white;
	z-index:2;
}

.tile-flip {
	background-color: white;
	opacity:0.1;
	transform:scaleX(-1);	  
	right:100%;
	transition:all .5s;
	visibility:hidden;
	z-index:3;
}

.open-to-right {
	left:100%;
	transform-origin:0 0;
}

.open-to-left{
	right:100%;
	transform-origin: 100% 100%;
}

.service-box {
	width:40%;
	height:50%;
	display:inline-block;
	position:relative;
	margin:2%;
}

.service-box:hover .tile-flip{
	transform:scaleX(1);
  	opacity:1;
  	visibility:visible;
}

.tile-original-content {
	position:absolute;
	left:50%;
	top:50%;
	transform:translate(-50%,-50%);
}

.service-content{
	width:100%;
	height:100%;
	position:relative;
	padding:13%;
	box-sizing: border-box;
}
	
</style>