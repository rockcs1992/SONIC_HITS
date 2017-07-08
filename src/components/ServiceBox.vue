<template>
	<div class="service-box">
		<img :src="imageSrc" />
		<div class="service-title">
			<p>{{title}}</p>
		</div>
		<div class="service-content">
			<slot>Content to be added</slot>
		</div>
	</div>
</template>

<script>
export default {
	props: ['imageSrc','title'],
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

.service-box {
	width:40%;
	display:inline-block;
	transform:scaleX(1);
	transform-origin: right center;
	transition:all .5s;
	opacity:1;
	position:relative;
}

.service-box:hover {
	cursor: pointer;
	transform:scaleX(-1);
	opacity: 0.2;
}

.service-content{
	width:100%;
	height:100%;
	position:relative;
}
	
</style>