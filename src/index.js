// Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fahrenheit to Celsius
export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Celsius to Kelvin
export function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Kelvin to Celsius
export function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Fahrenheit to Kelvin
export function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheitToCelsius(fahrenheit) + 273.15);
}

// Kelvin to Fahrenheit
export function kelvinToFahrenheit(kelvin) {
    return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}
