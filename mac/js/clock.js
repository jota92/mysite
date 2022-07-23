
function menubarClock() {
	var currentTime = new Date();
	var year = currentTime.getFullYear();
	var month = currentTime.getMonth() + 1;
	var date = currentTime.getDate();
	
	var day = currentTime.getDay();
	var jpDay = new Array("日","月","火","水","木","金","土");

	var hours = currentTime.getHours();
	var mins = currentTime.getMinutes();
	var secs = currentTime.getSeconds();
	
	if (hours < 10) { hours = "0" + hours; }
	if (mins < 10) { mins = "0" + mins; }
	if (secs < 10) { secs = "0" + secs; }


	var clockObj1 = month + "月" + date + "日(" + jpDay[day] + ")　" + hours + ":" + mins + ":" + secs;
	var clockObj2 = year + "年" + month + "月" + date + "日" + jpDay[day] + "曜日";
	
	document.getElementById("clockObj_1").innerHTML = clockObj1.toLocaleString();
	document.getElementById("clockObj_2").innerHTML = clockObj2.toLocaleString();
	
	window.setTimeout("menubarClock()",1000);
	
}

window.onload = menubarClock;	
	