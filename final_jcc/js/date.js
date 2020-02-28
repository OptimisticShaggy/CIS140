//Pupose of this Script is to build the copyright
var birth = new Date("November, 14, 1992");
var current = new Date();

var birthInfo = birth.toLocaleString();
var currentInfo = current.toLocaleString();

document.getElementById("time").innerHTML = "\u00A9" + birthInfo + " -to- " + currentInfo;