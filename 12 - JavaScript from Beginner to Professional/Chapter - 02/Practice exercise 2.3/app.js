/* 
Practice exercise 2.3
Write some code to calculate the hypotenuse of a triangle using the Pythagorean
theorem when given the values of the other two sides. The theorem specifies that the
relation between the sides of a right-angled triangle is a2
 + b2
 = c2
. */



var Perpendicular=10;
var Base =10;
var hypotenuse=Math.sqrt(Perpendicular)+Math.sqrt(Base);
hypotenuse=hypotenuse.toFixed(3)
console.log(`Hypotenuse of a triangle is =${hypotenuse} cm`)