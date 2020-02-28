"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Vincent Maule
   Date:   11/13/2019
   
   Filename: tc_cart.js
	
*/

///Declare the variable orderTotal with the value zero
var orderTotal = 0;

///Make the starter code for the Table
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

///A For loop that loops through the everything for the table date; Item, Item Description, Item Price & Quantity 
for (var i = 0; i < item.length ;i++) {
   cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt=" + item[i]  + "></td>";

   cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";

   var itemCost = itemPrice[i] * itemQty[i];

   cartHTML += "<td>$" + itemCost + "</td></tr>";

   orderTotal += itemCost;
}

///Create the ending of the table
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>"

///Implement the all the data from cartHTML into the HTML Doctument
document.getElementById("cart").innerHTML = cartHTML;