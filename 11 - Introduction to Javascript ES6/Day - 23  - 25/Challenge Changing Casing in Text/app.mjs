// capitalcase

let fName="ASAD";

let firstletter=fName.slice(0,1)
let firstLetterCap=firstletter.toUpperCase();
let otherLetter=fName.slice(1,fName.length) 
otherLetter=otherLetter.toLowerCase();
let capitalcase=firstLetterCap+otherLetter;
console.log(capitalcase);