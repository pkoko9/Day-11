var color = [299, 166, 20]

function changeColor() {
	
	var animate = document.getElementsByTagName('body');

	color[0] += Math.floor(Math.random()*10);
	color[1] += Math.floor(Math.random()*4);
	color[2] += Math.floor(Math.random()*12);
	for(var key in color){
		if(color[key] >= 255){
			color[key] = 0;
		}
		animate[0].style.backgroundColor = 'rgb('+color.join(',')+')';
}
}

function timeCalc () {
	var currentTime = new Date();
	var amPm = 'AM';
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

	if (h == 0) {
		h = 12
	}
		else if (h > 12){
			h = h - 12; 
			amPm = "PM";
		}	

		if (h < 10) {
			h = "0" + h;
		}
		if (m < 10) {
			m = "0" + m;
		}
		if (s < 10) {
			s = "0" + s;
		}

	document.getElementById('clock').innerHTML = h + ':' + m + ':' + s + ' '+amPm;


changeColor();

}
timeCalc();
setInterval(timeCalc, 1000);


	





