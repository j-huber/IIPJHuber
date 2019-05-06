var ctx;

window.onload=function()
{
    var myCanvas = document.getElementById("htmlCanvas");
    ctx = myCanvas.getContext("2d");

    document.getElementById("houseBtn").addEventListener("click", function()
    {
        drawHouse();
    });
}

function drawHouse()
{
    ctx.strokeStyle = "white";
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(300,400);
    ctx.lineTo(600,400);
    ctx.lineTo(450,250);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle = "white";
   ctx.fillStyle = "black";
   ctx.beginPath();
   ctx.moveTo(350,400);
   ctx.lineTo(550,400);
   ctx.arcTo(550, 400, 550, 420, 50);
   ctx.lineTo(550,600);
   ctx.arcTo(550, 600, 450, 600, 50);
   ctx.lineTo(350,600);
   ctx.arcTo(350, 600, 350, 520, 50);
   ctx.lineTo(350,400);
   ctx.stroke();
   ctx.fill();

   ctx.clearRect(420,520,60,80);

   ctx.strokeStyle = "white";
   ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(390,460,30,0,2*Math.PI,true);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.rect(480,450,50,30);
    ctx.stroke();
    ctx.fill();
}