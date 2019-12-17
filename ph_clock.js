"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author:Miles C. Stover 
   Date:12/17/19  

   Filename:   ph_clock.js     

*/

var minsLeft = 30;
var secsLeft = 0;
var timeLeft = minsLeft * 60 + secsLeft;
var clockID = setInterval("countdown()", 1000);
countdown();

function countdown() {
	minsLeft = Math.floor(timeLeft / 60);
	secsLeft = timeLeft - (minsLeft*60);
	
	//adding zeros if needed to the mins and secs left
	var minsString = addLeadingZero(minsLeft);
	var secsString = addLeadingZero(secsLeft);
	
	// write the min and secs that are left to the clock 
	document.getElementById("minutes").textContent = minsString;
	document.getElementById("seconds").textContent = secsString;
	
	// check to see if time ran out 
	checkTimer();
	
	//update the timeLeft value so it will eventually reach zero
	timeLeft--;
}	

function stopClock() {
	document.getElementById("timeHead").insertAdjacentHTML("beforeEnd", "<br />(Order Expired)");
	clearInterval(clockID);
}
/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

   

function checkTimer() {
    if (timeLeft === 0) stopClock();
	
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
