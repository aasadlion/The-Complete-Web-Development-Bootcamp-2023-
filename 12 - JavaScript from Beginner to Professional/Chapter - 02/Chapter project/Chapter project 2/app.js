/* Chapter project BMI calculator
Set values for height in inches and weight in pounds, then convert the values to
centimeters and kilos, outputting the results to the console:
• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
divided by squared height (in meters). Output the results to the console. */

var height=50;
var weight=100;
console.log(`Person height is: ${height} inches and weight is ${weight} pounds `)

height=height*2.54; //convert to centimeters
weight=weight/2.2046; // convert to kilos

var meter=height*0.01
var BMI=weight/Math.pow(meter,2)

console.log(`your height: ${height}`)
console.log(`your height: ${weight}`)
console.log(`your BMI: ${BMI}`)