/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Vincent Maule
   Date:   11/01/2019

*/
"use strict";

runClock();

setInterval("runClock()", 1000);

function runClock() {
   /* Store the Current Data and Time */
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   /*Display the Current Date and TIme */
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   /*Calculate the Days until Next Year*/
   var newYear = new Date("January 1, 2018");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay)/(1000*60*60*24)

   /*Calculate the Hours left in the Current Day */
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24

   /*Calculate the Minutes and Seconds left in the Current Day*/
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60
   var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60

   /*Display the Time Left Until New Year's Eve */
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}

