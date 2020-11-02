var attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "harjot@143.com" && password == "143"){
alert ("Login successfully");
window.location  =  "MAIN.html"; 
return false;
}
else if( username == "" && password == ""){
window.alert("Please Enter the USERNAME and PASSWORD");
}
else{
attempt --;
alert("You have "+attempt+" attempts left");
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("login").disabled = true;
return false;
}
}
}
