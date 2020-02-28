//The purpose of this JS file is for Rock Paper Scissors.
var rps = document.getElementById("rps_button");
var rps_radio = document.querySelectorAll('input[name="rps"]');

var compAnswer = "";
var userAnswer = "";
rps.addEventListener("click", () => init());

function init() {
    uSer(userAnswer); //User's Answer
    cOmp(compAnswer); //Computer's Answer
    wiNner();
} //[End] of Function

function uSer() {
    for (var i = 0; i < rps_radio.length; i++) {
        if (rps_radio[i].checked) {
            userAnswer = rps_radio[i].value;
        } //[End] of If
    } //[End] of Loop
    return userAnswer;
} //[End] of Function
//Pupose of this function is to find User's input

function cOmp() {
    var compValue = Math.floor(Math.random() * 89);
    if (compValue <= 30) {
        compAnswer = "rock";
    } else if (compValue <= 60) {
        compAnswer = "paper";
    } else {
        compAnswer = "scissor";
    } //[End] of If
    return compAnswer;
} //[End] of Function
//Purpose of this Function is to find Computer's input

function wiNner() {
    var winner = "";
    if ((userAnswer == "rock") && (compAnswer == "rock")) {
        alert("TIE!");
    } else if ((userAnswer == "rock") && (compAnswer == "paper")) {
        alert("Computer Wins!");
    } else if ((userAnswer == "rock") && (compAnswer == "scissor")) {
        alert("YOU WIN!"); //Rock
    } else if ((userAnswer == "paper") && (compAnswer == "rock")) {
        alert("YOU WIN!");
    } else if ((userAnswer == "paper") && (compAnswer == "paper")) {
        alert("TIE!");
    } else if ((userAnswer == "paper") && (compAnswer == "scissor")) {
        alert("Computer Wins!"); //Paper
    } else if ((userAnswer == "scissor") && (compAnswer == "rock")) {
        alert("Computer Wins!");
    } else if ((userAnswer == "scissor") && (compAnswer == "paper")) {
        alert("YOU WIN!");
    } else if ((userAnswer == "scissor") && (compAnswer == "scissor")) {
        alert("TIE!"); //Scissor
    }//[End] of If


} //[End] of this Function
//Purpose of this Function is to find the winner!