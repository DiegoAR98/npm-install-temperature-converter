"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.celsiusToFahrenheit = celsiusToFahrenheit;
exports.celsiusToKelvin = celsiusToKelvin;
exports.fahrenheitToCelsius = fahrenheitToCelsius;
exports.fahrenheitToKelvin = fahrenheitToKelvin;
exports.kelvinToCelsius = kelvinToCelsius;
exports.kelvinToFahrenheit = kelvinToFahrenheit;
// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Celsius to Kelvin
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Kelvin to Celsius
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
  return fahrenheitToCelsius(fahrenheit) + 273.15;
}

// Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}
