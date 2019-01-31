<script type="text/javascript">
		// Canvas Drawing Code Here
	document.getElementById('canvasRun').addEventListener('click',function () {

        //canvas gradient code
        var canvas = document.getElementById("myCanvas");
		var angle = 0;
		window.requestAnimationFrame(drawCanvasContent);


		function drawCanvasContent() {

            var canvasContext = canvas.getContext("2d");
            var canvasGradient = canvasContext.createLinearGradient(0, 450, 0, 0);
            canvasGradient.addColorStop(0, "black");
            canvasGradient.addColorStop(1, "white");
            canvasContext.fillStyle = canvasGradient;
            canvasContext.fillRect(0, 0, 600, 450);

            //text code
            var centerX = canvas.width / 4;
            canvasContext.font = "32px sans-serif";
            canvasContext.fillStyle = "#C80000";
            canvasContext.fillText("ITMD 565 Canvas Lab", centerX, 30);

            //line code
            var startPoint = canvas.width / 14;
            canvasContext.moveTo(20, startPoint);
            canvasContext.lineWidth = 3;
            canvasContext.lineTo(canvas.width - 20, startPoint);
            canvasContext.strokeStyle = "#C80000";
            canvasContext.stroke();


            //circle code
            centerX = canvas.width / 5;
            var centerY = canvas.height / 3;
            var radius = 60;

            canvasContext.beginPath();
            canvasContext.arc(centerX - 30, centerY - 10, radius, 0, 2 * Math.PI, false);
            canvasContext.fillStyle = '#0000C8';
            canvasContext.fill();
            canvasContext.lineWidth = 4;
            canvasContext.strokeStyle = '#fff';
            canvasContext.stroke();

            //arc
            canvasContext.beginPath();
            canvasContext.lineWidth = 15;
            canvasContext.save();
            canvasContext.translate(305, 150);
            canvasContext.rotate(angle * (Math.PI / 300));
            canvasContext.arc(0,0,55,0,0.8 * Math.PI,false);
            canvasContext.strokeStyle = '#FFA500';
            canvasContext.stroke();
            canvasContext.restore();



            //Rectangle
            canvasContext.beginPath();
            canvasContext.lineWidth=5;
            canvasContext.save();
            canvasContext.translate(510, 140);
            canvasContext.rotate(angle * (Math.PI / 300));
            canvasContext.rect(-50,-50,100,100);
            canvasContext.fillStyle = '#C80000';
            canvasContext.fill();
            canvasContext.strokeStyle = "#FFFFFF";
            canvasContext.stroke();
            canvasContext.restore();


            //triangle code
            var triangleWidth = radius * 2;
            var triangleHeight = 100;
            var triangleY = (canvas.height / 3) + 80;
            var triangleX = canvas.width / 5;

            canvasContext.beginPath();
            canvasContext.moveTo(triangleX - 30, triangleY);
            canvasContext.lineTo(triangleX - 30 + triangleWidth / 2, triangleY + triangleHeight);
            canvasContext.lineTo((triangleX - 30) - triangleWidth / 2, triangleY + triangleHeight);
            canvasContext.closePath();
            canvasContext.fillStyle = '#00C800';
            canvasContext.fill();



            //rectangle code
            canvasContext.beginPath();
            canvasContext.rect(canvas.width / 2, triangleY, 280, 100);
            canvasContext.fillStyle = '#fff';
            canvasContext.globalAlpha = 1;
            canvasContext.fill();
            canvasContext.stroke();



            canvasContext.beginPath();
            canvasContext.font = "14px sans-serif";
            canvasContext.fillStyle = "#fff";
            canvasContext.fillText("Megshi Thakur",30, 380);

            //email line
            canvasContext.beginPath();
            canvasContext.font = "14px sans-serif";
            canvasContext.fillStyle = "#fff";
            canvasContext.fillText("mthakur1@hawk.iit.edu",30, 400);

			//image code

            var imageIIT = new Image();
            imageIIT.src = 'IIT_SAT_stack_186_white.png';
            canvasContext.drawImage(imageIIT, 290, 360,290,70);

            //dotted line

            canvasContext.setLineDash([5]);
            canvasContext.beginPath();
            canvasContext.lineWidth = 3;
            canvasContext.moveTo(canvas.width / 2 + 30, triangleY + 50);
            canvasContext.quadraticCurveTo(376,230,426,280);
            canvasContext.quadraticCurveTo(480,320,526,278);
            canvasContext.strokeStyle = '#000000';
            canvasContext.stroke();
            canvasContext.setLineDash([]);

            angle += 1;

            window.requestAnimationFrame(drawCanvasContent);
        }
    });
	</script>