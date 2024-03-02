/*
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Marie Angelika Maglinte
*/

// Named function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Anonymous function to convert Celsius to Kelvin
const celsiusToKelvin = function (celsius) {
  return celsius + 273.15;
};

// Event listener using jQuery
$(document).ready(function () {
  $("#convertBtn").click(function () {
    // Get input value
    var fahrenheit = parseFloat($("#fahrenheitInput").val());

    // Check if input is a valid number
    if (!isNaN(fahrenheit)) {
      // Convert Fahrenheit to Celsius and Kelvin
      var celsius = fahrenheitToCelsius(fahrenheit);
      var kelvin = celsiusToKelvin(celsius);

      // Update the result
      $("#celsiusValue").text(celsius.toFixed(2) + "°C");
      $("#kelvinValue").text(kelvin.toFixed(2) + "K");
    } else {
      // Display error if input is not a number
      $("#celsiusValue").text("Invalid input");
      $("#kelvinValue").text("Invalid input");
    }
  });
});


function createFooter() {
  var footer = document.getElementById('footer');
  var fullName = "Marie Angelika Maglinte";
  var currentYear = new Date().getFullYear();
  footer.textContent = fullName + " © " + currentYear;
}

createFooter();

// Instructions:
// Create a new page called weather. On this page use the concept of JavaScript named and
// anonymous function and create a program that can accept a temperature input in degree
// Fahrenheit and convert it into degree Celsius and from Celsius to Kelvin based on a button click
// event. (20 points)
// • Hint: Use JQuery to access the DOM elements in your code for this question.
// • Do a little research to find out the basic formula for each calculation. 