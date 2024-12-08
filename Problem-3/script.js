/* Write a function named celsiusToFahrenheit that takes a temperature in Celsius and returns the temperature in Fahrenheit. The formula is:
For example, celsiusToFahrenheit(0) should return 32. */

let temperature;
const celciusToFahrenheit = function (celsius) {
  temperature = celsius + 32;
  return `It is ${temperature} degrees Fahrenheit`;
};
console.log(celciusToFahrenheit(0));
console.log(celciusToFahrenheit(30));
console.log(celciusToFahrenheit(55));
