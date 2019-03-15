
function setDay() {
	var d = new Date();
	
document.getElementById("notifyday").innerHTML ='Tody is ' +
d.getDate() + ' - ' + d.getMonth()+ ' - ' + d.getFullYear() ;
}
