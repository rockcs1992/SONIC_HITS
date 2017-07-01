var canvas  = document.getElementById('canvas');
ctx = canvas.getContext('2d'),
  requestAnimationFrame = window.requestAnimationFrame || 
  window.mozRequestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.msRequestAnimationFrame;

var WIDTH = document.documentElement.clientWidth,
    HEIGHT = document.documentElement.clientHeight; 

var perlin = new ClassicalNoise(),
    variation = .003,
    amp = 200,
    start_y = HEIGHT/2,
    variators = [],
    max_lines = 20;

for (var i = 0, u = 0; i < max_lines; i++, u+=.02) {
  variators[i] = u;
}

canvas.setAttribute("width", WIDTH);
canvas.setAttribute("height", HEIGHT);

function draw(){
  ctx.shadowColor = "rgba(43, 205, 255, 1)";
  ctx.shadowBlur = 10;
  
  for (var i = 0; i <= max_lines; i++){
    ctx.beginPath();
    ctx.moveTo(0, start_y);
    for (var x = 0; x <= WIDTH; x++) {
      var y = perlin.noise(x*variation+variators[i], x*variation, 0);
      ctx.lineTo(x, start_y + amp*y);
    }
    var color = Math.floor(150*Math.abs(y));
    var alpha = Math.min(Math.abs(y), .8)+.1;
    ctx.strokeStyle = "rgba(80,210,240,"+alpha+")";
    ctx.stroke();
    ctx.closePath();


    variators[i] += .005;
  }
}

animate();
function animate() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  draw();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', function(){
  WIDTH = document.documentElement.clientWidth,
    HEIGHT = document.documentElement.clientHeight; 

  canvas.setAttribute("width", WIDTH);
  canvas.setAttribute("height", HEIGHT);
});
