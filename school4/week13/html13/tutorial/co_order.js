"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Vincent Maule
   Date:   12/05/2019
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function() {
	var orderForm = document.forms.orderForm;
	//Stores the reference of order form forms into orderForm variable
	
	orderForm.elements.orderDate.value = new Date().toDateString();
	//Stores the Date into the orderDate text input
	
	orderForm.elements.model.focus();
	//Puts the highlights the model of the product selection
	
	calcOrder();
	
	orderForm.elements.model.onchange = calcOrder;
	orderForm.elements.qty.onchange = calcOrder;
	//stores the information from calcOrder into both of the model and quantity text fields
	
	var planOptions = document.querySelectorAll('input[name="protection"]');
	//Checks the document to find all the matchs with the input name of "protection" & stores inside the variable planOptions
	
	for (var i = 0; i < planOptions.length; i++) {
		planOptions[i].onclick = calcOrder;
		//Loops through planOptions and selects the one that is checked & putting within calcOrder
	}//[End] of Loop
	
	}//[End] of Psudocode

);//[End] of Event listener

function calcOrder() {
	var orderForm = document.forms.orderForm;
	//Stores the reference of order form forms into orderForm variable
	
	
	var mIndex = orderForm.elements.model.selectedIndex;
	//Stores the option's index value into mIndex variable
	
	var mCost = orderForm.elements.model.options[mIndex].value;
	//Stores the value from the selected index of mIndex into mCost
	
	var qIndex = orderForm.elements.qty.selectedIndex;
	//Stores the option's index value into qIndex variable
	
	var quantity = orderForm.elements.qty[qIndex].value;
	//Stores the value from the selected index of qIndex into quantity
	
	var initialCost = mCost * quantity;
	//mCost multiplied by quantity stored into initialCost
	
	orderForm.elements.initialCost.value = formatUSCurrency(initialCost);
	//The value of initialCost stored into initialCost text box
	
	var pCost = document.querySelector('input[name="protection"]:checked').value * quantity;
	/*
	Store the information of value for whichever of the radio buttons are selected with the name "protection"
	*/
	
	orderForm.elements.protectionCost.value = formatNumber(pCost, 2);
	//Store the information from pCost into the element within protectionCost
	
	orderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);
	//Store the values of initialCost and pCost added together into the subtotal text area
	
	var salesTax = 0.05*(initialCost + pCost);
	//Stores initialCost and pCost added together muiltiplied by 0.05 into sales tax
	
	orderForm.elements.salesTax.value = formatNumber(salesTax, 2);
	//Stores the value of salesTax into the salesTax text
	
	var totalCost = initialCost + pCost + salesTax;
	//Store initialCost, pCost & salesTax into the var totalCost
	
	orderForm.elements.totalCost.value = formatUSCurrency(totalCost);
	//Store the totalCost value into totalCost text input
	
	orderForm.elements.modelName.value = orderForm.elements.model.options[mIndex].text;
	//Stores the text of the option that is selected into modelName value [Hidden]
	
	orderForm.elements.protectionName.value = document.querySelector('input[name="protection"]:checked').nextSibling.nodeValue;
	//Stores the value that is selected from the protection input name into the protectionName value [hidden]
	
	}//[End] of Function

function formatNumber(val, decimals) {
	return val.toLocaleString(undefined,{minimumFractionDigits: decimals, maximumFractionDigits: decimals}
	//Reurns the val value ran through localstring with the deimals placed in the second's place
	);//[End] of return statement
}//[End] of Function

function formatUSCurrency(val) {
	return val.toLocaleString('en-US', {style: "currency", currency: "USD"})
	//Return val convert to USD
};//[End] of Function