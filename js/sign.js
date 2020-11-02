function success(){
var username = document.getElementById("username").value;
var password = document.getElementById("pa").value;
var conpass = document.getElementById("cos").value; 
if (password == conpass){
alert ("Sign Up Successfully");
window.location  =  "home.html"; 
}
else{
alert("Passwords do not match Please try again");
}
}
function log(){
window.location = "login.html";
}