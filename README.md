# Temperature Converter

A simple npm package that converts temperatures between Celsius, Fahrenheit, and Kelvin. The package supports both ES6 Modules (`import/export`) and CommonJS (`require/module.exports`), making it versatile for different environments.

# Usage

## For ES6 Modules:

npm install unique-temperature-converter

import { celsiusToFahrenheit, fahrenheitToCelsius, celsiusToKelvin, kelvinToCelsius } from 'temperature-converter';

console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(fahrenheitToCelsius(32)); // Output: 0
console.log(celsiusToKelvin(0)); // Output: 273.15
console.log(kelvinToCelsius(273.15)); // Output: 0

## For CommonJS:

const { celsiusToFahrenheit, fahrenheitToCelsius, celsiusToKelvin, kelvinToCelsius } = require('temperature-converter');

console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(fahrenheitToCelsius(32)); // Output: 0
console.log(celsiusToKelvin(0)); // Output: 273.15
console.log(kelvinToCelsius(273.15)); // Output: 0

## Available Functions

1. celsiusToFahrenheit(celsius) - Converts Celsius to Fahrenheit.
2. fahrenheitToCelsius(fahrenheit) - Converts Fahrenheit to Celsius.
3. celsiusToKelvin(celsius) - Converts Celsius to Kelvin.
4. kelvinToCelsius(kelvin) - Converts Kelvin to Celsius.
5. fahrenheitToKelvin(fahrenheit) - Converts Fahrenheit to Kelvin.
6. kelvinToFahrenheit(kelvin) - Converts Kelvin to Fahrenheit.

# Contributing

Feel free to open an issue or submit a pull request if you'd like to contribute to this project.

# Author

Showbart98
Website: diego-araujo.com