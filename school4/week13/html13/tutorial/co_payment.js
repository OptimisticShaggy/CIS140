"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Payment Form Script
   
   Author: Vincent Maule
   Date:   12/05/2019
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/
/*
g is to find all matches
*/
window.addEventListener("load", function() {
	var formData = location.search.slice(1);
	//When function is started, remove the first character from the string, ? in this case
	formData = formData.replace(/\+/g," ");
	//Replace all the + with a space
	formData = decodeURIComponent(formData);
	//Decodes the special characters to readable text
	var formFields = formData.split(/[&=]/g);
	//Creates an array of all the data from the order page
	
	var docuElements = document.forms.order.elements
	//Stores the reference for order components into the variable docuElements
	docuElements.orderDate.value = formFields[1];
	docuElements.modelName.value = formFields[5];
	docuElements.qty.value = formFields[7];
	docuElements.initialCost.value = formFields[9];
	docuElements.protectionName.value = formFields[13];
	docuElements.protectionCost.value = formFields[15];
	docuElements.subtotal.value = formFields[17];
	docuElements.salesTax.value = formFields[19];
	docuElements.totalCost.value = formFields[21];
	//Populate all the text inputs with the corresponding date from formField
}); //[End] of Function
//Grab the URI & store all the data with the proper text fields in the document

window.addEventListener("load", function() {
	document.getElementById("subButton").onclick = runSubmit;
	document.getElementById("cardName").oninput = validateName;
	document.getElementById("cardNumber").oninput = validateNumber;
	document.getElementById("expMonth").onchange = validateMonth;
	document.getElementById("expYear").onchange = validateYear;
	document.getElementById("cvc").oninput = validateCVC;
});//[End] of Event Listener
//Event listener for changes within each field

function runSubmit() {
	validateName();
	validateCredit();
	validateNumber();
	validateMonth();
	validateYear();
	validateCVC();
}//[End] of function
//Runs all the functions when the submit button is pressed

function validateCVC() {
	var cardCVC = document.getElementById("cvc");
	var creditCard = document.querySelector('input[name="credit"]:checked').value;
	
	if (cardCVC.validity.valueMissing) {
		cardCVC.setCustomValidity("Enter your CVC number");
	} else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
		cardCVC.setCustomValidity("Enter a 4-digit CVC number");
	} else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
		cardCVC.setCustomValidity("Enter a 3-digit CVC number");
	} else {
		cardCVC.setCustomValidity("");
	}//[End] of if
}//[End] of Function
//Validate that a correct CVC is used
		

function validateMonth() {
	var cardMonth = document.getElementById("expMonth");
	if (cardMonth.selectedIndex === 0) {
		cardMonth.setCustomValidity("Select the expiration month");
	} else {
		cardMonth.setCustomValidity("");
	} //[End] of if
}//[End] of Function
//Validate that a month is selected

function validateYear() {
	var cardYear = document.getElementById("expYear");
	if (cardYear.selectedIndex === 0) {
		cardYear.setCustomValidity("Select the expiration month");
	} else {
		cardYear.setCustomValidity("");
	} //[End] of if
}
//validate that a year is selected

function validateNumber() {
	var cardNumber = document.getElementById("cardNumber");
	if (cardNumber.validity.valueMissing) {
		cardNumber.setCustomValidity("Enter your card number");
	} else if (cardNumber.validity.patternMismatch) {
		cardNumber.setCustomValidity("Enter a valid card number");
	} else if (luhn(cardNumber.value) === false) {
		cardNumber.setCustomValidity("Enter a legitimate card number");		
	} else {
		cardNumber.setCustomValidity("");
	}//[End] of if
}//[End] of Function
//6011280768434856
//Validate that a correct card number is used, 16 digits and a authentic card

function validateCredit() {
	var creditCard = document.forms.payment.elements.credit[0];
	if (creditCard.validity.valueMissing) {
		creditCard.setCustomValidity("Select your credit card");
	} else {
		creditCard.setCustomValidity("");
	}//[End] of if
}//[End] of Function
//Validate that a card is selected

function validateName() {
	var cardName = document.getElementById("cardName");
	if(cardName.validity.valueMissing) {
		cardName.setCustomValidity("Enter your name as it appears on the card");
	} else {
		cardName.setCustomValidity("");
	}//[End] of if statement

}//[End] of Function
//Validate that a name is used

function sumDigits(numStr) {
	var digitTotal = 0;
	for (var i = 0;i < numStr.length;i++) {
		digitTotal += parseInt(numStr.charAt(i));
	}//[End] of loop
	
	return digitTotal;
}//[End] of function
//Algorithm to to check if the numbers in a card are real

function luhn(idNum) {
	var string1 = "";
	var string2 = "";
	
	for (var i = idNum.length - 1; i >= 0; i -= 2) {
		string1 += idNum.charAt(i);
	}//[End] of loop
	for (var i = idNum.length - 2; i >= 0; i -= 2) {
		string2 += 2*idNum.charAt(i);
	}//[End] of loop
	
	return sumDigits(string1 + string2) % 10 === 0;
}//[End] of function
//Algorithm to to check if the numbers in a card are real