document.addEventListener('DOMContentLoaded', async event => {

var canvas = document.createElement("canvas");
    var ctx    = canvas.getContext('2d');
    
    canvas.width  = 800;
    canvas.height = 800;
    
    document.getElementById("cube").appendChild(canvas);
    
     
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      var sizeX = 64;
      var sizeY = 64;
      var sizeZ = 8; 
       
      ctx.scale(5, 5);
     
      drawCube(75, 75, sizeX, sizeY, sizeZ);

    }
    
    requestAnimationFrame(draw);
    
    
    function drawCube(x, y, wx, wy, h, color) {
    
        // LINE MODE
        ctx.lineJoin = "round";
        
        // left face
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - wx, y - wx * 0.5);
        ctx.lineTo(x - wx, y - h - wx * 0.5);
        ctx.lineTo(x, y - h * 1);
        ctx.closePath();
        ctx.fillStyle = "#838357"
        ctx.strokeStyle = "#7a7a51";
        ctx.stroke();
        ctx.fill();
    
        // right face
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + wy, y - wy * 0.5);
        ctx.lineTo(x + wy, y - h - wy * 0.5);
        ctx.lineTo(x, y - h * 1);
        ctx.closePath();
        ctx.fillStyle = "#6f6f49";
        ctx.strokeStyle = "#676744";
        ctx.stroke();
        ctx.fill();
    
        // center face
        ctx.beginPath();
        ctx.moveTo(x, y - h);
        ctx.lineTo(x - wx, y - h - wx * 0.5);
        ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
        ctx.lineTo(x + wy, y - h - wy * 0.5);
        ctx.closePath();
        ctx.fillStyle = "#989865";
        ctx.strokeStyle = "#8e8e5e";
        ctx.stroke();
        ctx.fill();
    }

})