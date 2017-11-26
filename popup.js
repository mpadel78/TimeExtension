document.getElementById('input').addEventListener("click",time);
function time(){
	var d = new Date();
var hour = d.getHours();
var minutes = d.getMinutes();
var moment;
if(hour>20 || hour<5){
	moment = "night";
}
if(hour>=5 && hour<=10){
	moment = "morning";
}
if(hour>10&&hour<=17){
	moment = "day";
}
if(hour>17&&hour<=20){
	moment = evening;
}
if(hour>12){
	hour = hour-12;
}
document.getElementById("hehe").innerHTML = "It is "+hour+":"+minutes+" of "+moment+" .";


}
