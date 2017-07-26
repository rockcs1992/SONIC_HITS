<template>
    <div class="content-wrapper">
        <div class="home-wrapper">
            <svg viewBox="0 0 960 300">
                <symbol id="s-text">
                    <text class="slogan1" text-anchor="start" x="22%" y="70%">Sonic Hits:</text>
                    <text class="slogan2" text-anchor="start" x="52%" y="30%">Make</text>
                    <text class="slogan3" text-anchor="start" x="52%" y="50%">Audio</text>
                    <text class="slogan4" text-anchor="start" x="52%" y="70%">Interactive</text>
                </symbol>
                <g class = "g-ants">
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                    <use xlink:href="#s-text" class="text-copy"></use>
                </g>
            </svg>

            <div class="background"></div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted() {
            //canvas code here
            // var canvas = this.$refs.canvas;
            // var $ = canvas.getContext("2d");
            // var w = canvas.width;
            // var h = canvas.height;
            // $.fillRect(0,0,w,h);
        }
    }



</script>


<style>
    .home-wrapper {
        height:100%;
        width:100%;

    }
    .content-wrapper {
        height:100%;
        width:100%;
        position:relative;

    }
    .background {
        width:100%;
        position:relative;
        height:100%;
        z-index:-1;
        background-image: url("../assets/background.jpg");
        background-size:100% 120%;
        transform:scaleY(1.3);
        transform-origin: bottom;
        /*opacity:0.8;*/
    }


    svg {
        position: absolute;
        display: block;
        font: 3em 'Montserrat Light',sans-serif;
        letter-spacing: 1pt;
        margin: 0 auto;
        left: 50%;
        top: 50%;
        /*height: 100%;*/
        transform: translate(-50%, -50%);
    }

    .text-copy {
        fill: none;
        stroke: white;
        stroke-dasharray: 6% 29%;
        stroke-width: 1px;
        stroke-dashoffset: 0%;
        animation: stroke-offset 5.2s infinite linear;
        transition: stroke-width 500ms ease;
    }

    .text-copy:nth-child(1){
        stroke: #cb2952;
        animation-delay: -1s;
    }

    .text-copy:nth-child(2){
        stroke: #b40048;
        animation-delay: -2s;
    }

    .text-copy:nth-child(3){
        stroke: #de3311;
        animation-delay: -3s;
    }

    .text-copy:nth-child(4){
        stroke: #d7720d;
        animation-delay: -4s;
    }

    .text-copy:nth-child(5){
        stroke: #FDB731;
        animation-delay: -5s;
    }

    @keyframes stroke-offset{
        100% {stroke-dashoffset: -35%;}
    }

    svg:hover .text-copy{
        stroke-width: 3px;
    }


</style>