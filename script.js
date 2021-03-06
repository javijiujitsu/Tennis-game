var canvas;
var canvasContext;
var ballX = 50; 
var ballY = 50; 
var ballSpeedX = 10;
var ballSpeedY =  4; 

var paddle1Y = 250;
const PADDLE_HEIGHT = 100;

function calucalteMousePos (evt) {

var rect = canvas.getBoundingClientRect(); 
var root = document.documentElement; 

var mouseX = evt.clientx 
var mouseY = evt.clienty


}


window.onload = function(){
        	 canvas = document.getElementById('gameCanvas');
             canvasContext = canvas.getContext('2d');
             
             var framesPerSecond = 30;
             setInterval(function() {
             			moveEverything();
						drawEverything();
			}, 1000/framesPerSecond);
}

function moveEverything(){
		ballX = ballX + ballSpeedX;
		ballY = ballY + ballSpeedY;
		
		if(ballX < 0) {
			ballSpeedX = -ballSpeedX;

		} else if (ballX > canvas.width) {
		 ballSpeedX = -ballSpeedX;

		}
		
		if(ballY < 0) {
			ballSpeedY = -ballSpeedY;

		} else if (ballY > canvas.height) {
		 ballSpeedY = -ballSpeedY;

		}
         
}



function drawEverything() {
        // next line blanks out the screen with black

        colorRect(0,0,canvas.width,canvas.height,'purple');
       
		//this is the left paddle
         colorRect(0,210,10,100,'white');
        
       //next line draws a ball  
       colorCircle(ballX,ballY,10,'#00ff00');
        
}

    function colorCircle(centerX,centerY,radius,drawColor) {
       	 canvasContext.fillStyle = drawColor;
         canvasContext.beginPath();
         canvasContext.arc(centerX, centerY,radius,0,Math.PI*2, true);
         canvasContext.fill();



}
 
    function colorRect (leftX,topY,width,height,drawColor) {
    	canvasContext.fillStyle = drawColor;
    	canvasContext.fillRect(leftX,topY,width,height);
    }






