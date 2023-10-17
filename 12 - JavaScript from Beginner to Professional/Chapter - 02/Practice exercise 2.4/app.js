/* Practice exercise 2.4
Create variables for three numbers: a, b, and c. Update these variables with the
following actions using the assignment operators:
• Add b to a
• Divide a by c
Replace the value of c with the modulus of c and b
• Print all three numbers to the console */

var a=10;
var b=15;
var c=20;
console.log("before changing")
console.log(a)
console.log(b)
console.log(c)
a=b+a;
a+a/c;
c=c%b;

console.log("After changing")
console.log(a)
console.log(b)
console.log(c)