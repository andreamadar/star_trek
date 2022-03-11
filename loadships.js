function load(serial) {
	let shipdata = JSON.parse(data);
	let shipname = shipdata[serial].name;
	let shipreg = shipdata[serial].registry;
	let shipclass = shipdata[serial].classification;
	return {shipname, shipreg, shipclass};
}


const currentDate = new Date();

/* set greeting based on time of day */
function setGreeting() {
	var hour = currentDate.getHours();
	var greeting = "Welcome";
	if (hour < 2 || hour > 17) {
		greeting = "Good evening";
	} else if (hour < 12) {
		greeting = "Good morning";
	} else {
		greeting = "Good afternoon";
	}
	return greeting;
}

/* calculate stardate */
function calculateStardate() {
	var year = currentDate.getFullYear()-1900;
	var month = currentDate.getMonth()+1;
	if (month < 10) {
		month = "0"+month.toString();
	} else month = month.toString();
	var day = currentDate.getDate();
	if (day < 10) {
		day = "0"+day.toString();
	} else day = day.toString();
	var stardate = year.toString() + month + "." + day;
	return stardate;
}

/* determine location */
function getLocation(){
	if (sessionStorage.ship == "0" || sessionStorage.ship == "2") {
		shiplocation = "Alpha Quadrant";
	} else {
		shiplocation = "Delta Quadrant";
	}
	return shiplocation;
}

/* display data on screen */
function startScreen() {
	greeting = setGreeting();
	stardate = calculateStardate();
	shiplocation = getLocation();
	terminalType = sessionStorage.pos.toUpperCase();
	document.getElementById("top").innerHTML = "<p>&nbsp;" + terminalType + "&nbsp;</p>"
  document.getElementById("screen").innerHTML = 
  "<p class='lgtext'>" + greeting + " " + sessionStorage.rank + " " + sessionStorage.lname + "</p>"
  + "<p>Stardate: " + stardate + "</p>" 
  + "<p>Location: " + shiplocation + "</p>";
}
  

  
function signOff() {
	sessionStorage.clear();
	location.href="report.html";
}

function sensors() {
  document.getElementById("sensors").innerHTML = "<p class='lgtext'>Sensor readings</p>" + Math.floor(Math.random() * 1000) + " " + Math.floor(Math.random() * 1000) + " " +
  Math.floor(Math.random() * 1000) + " " + Math.floor(Math.random() * 1000) + " " +
  Math.floor(Math.random() * 1000) + " " + Math.floor(Math.random() * 1000) + " " +
  Math.floor(Math.random() * 1000) + " " + Math.floor(Math.random() * 1000) + " " +
  Math.floor(Math.random() * 1000) + " " + Math.floor(Math.random() * 1000) + " " +
  Math.floor(Math.random() * 1000) + " " + Math.floor(Math.random() * 1000);
}

function info() {
  document.getElementById("screen").innerHTML = "<p class='lgtext'>" + sessionStorage.rank + " " + sessionStorage.lname + ", "+ sessionStorage.fname 
  + "</p>"
  + "<p>Terminal info </p><p><span class='ptext'>8368-921:</span> Ship info </p><p><span class='gtext'>3084-092:</span> Refresh sensor readings</p><p><span  class='ltext'>8561-490:</span> Sign off</p>";
}

/* calculate heading */
function heading() {
	let shipdata = load(sessionStorage.ship);
	let shipname = shipdata.shipname,
	 shipreg = shipdata.shipreg,
	 shipclass = shipdata.shipclass;
	var azimuth = Math.floor(Math.random() * 360);
	var elevation = Math.floor(Math.random() * 270);
	document.getElementById("screen").innerHTML = "<p class='lgtext'>" + sessionStorage.rank + " " + sessionStorage.lname + ", "+ sessionStorage.fname 
	+ "</p>"
	+ "<p>Registry: " + shipreg + "</p>" + "<p>Name: " + shipname + "</p>" + "<p>Classification: " + shipclass + "</p>"
	+ "<p>Current heading: " + azimuth + ", Mark " + elevation + "</p>";
}

  	