<template>
    <div class="content-wrapper">
        <div class="home-wrapper">
            <div class='home-slogan'>
                <h1>SONIC HITS</h1>
                <h4>We Make Audio Interactive</h4>
            </div>

            <div class="background"></div>
        </div>
    </div>
</template>

<script>

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


    .home-slogan {
        position: absolute;
        display: block;
        font: 3.5em 'Montserrat Light',sans-serif;
        letter-spacing: 1pt;
        margin: 0 auto;
        left: 50%;
        top: 50%;
        color:#ff613b;
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


</style>