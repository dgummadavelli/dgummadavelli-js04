/*    JavaScript 7th Edition
      Chapter 4
      Project 04-05

      Degrees <-> Radians Coverter
      Author: Dinesh Kumar Gummadavelli
      Date:   09/19/2025

      Filename: project04-05.js
 */


// Function to convert degrees to radians 
function degreesToRadians(degrees) {
   return degrees * Math.PI/180;
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
   return radians*180/Math.PI;
}

// Event handler that converts radians to degrees when the input box is changed
document.getElementById("rValue").onchange = function() {
   let radians = parseFloat(document.getElementById("rValue").value);
   if (!isNaN(radians)) {
      document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians));
   } else {
      document.getElementById("aValue").value = "Invalid Input";
   }
};

// Event handler that converts degrees to radians when the input box is changed
document.getElementById("aValue").onchange = function() {
   let degrees = document.getElementById("aValue").value;
   if (!isNaN(degrees)) {
      document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees));
   } else {
      document.getElementById("rValue").value = "Invalid Input";
   }
};





/* ================================================================= */
 // Function to display a numeric value in the format ##.### 
 function formatValue3(value) {
    return value.toFixed(3);
 }