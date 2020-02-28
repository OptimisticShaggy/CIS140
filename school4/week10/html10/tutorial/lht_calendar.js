"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Vincent Maule
   Date:  11/07/2019

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Vincent Maule
   Date:  11/07/2019

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

///Stores the date into the variable thisDay
var thisDay = new Date();

///Looks for the locations of the div element "calendar" & replaces it with the function of createCalendar
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

///Function that Generates table calendar
function createCalendar(calDate) {
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";  
   
   return calendarHTML;
}

///Function to generate the caption for the table
function calCaption(calDate) {
   var monthName = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   var thisMonth = calDate.getMonth();

   var thisYear = calDate.getFullYear();

   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

///Function to generate the weekdays
function calWeekdayRow() {
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";
   
   for (var i = 0; i < dayName.length; i++) rowHTML += "<th class='calendar_weekday'>" + dayName[i] + "</th>";

   rowHTML += "</tr>";

   return rowHTML;
}

///Function to generate the days in the month
function daysinMonth(calDate) {
   var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   if (thisYear % 4 == 0) {
      if (thisYear % 100 != 0 || thisYear % 400 == 0) {
         dayCount[1] = 29;
      }
   }
   
   return dayCount[thisMonth];
}

function calDays(calDate) {
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekDay = day.getDay();

   var htmlCode = "<tr>";
   
   for (var i = 0; i < weekDay; i++) {
      htmlCode += "<td></td>";
   }

   var totalDays = daysinMonth(calDate);
   var highlightDay = calDate.getDate();

   for (var i = 1; i < totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();

      if (weekDay === 0) htmlCode += "<tr>";

      if (i == highlightDay) {
         htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
      }
         else
         {
            htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
      }
      
      if (weekDay === 6) htmlCode += "</tr>";

   }

   return htmlCode;
}