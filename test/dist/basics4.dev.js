"use strict";

// let person = {
//     fName: 'Mark',
//     lName: 'Wood',
//     fullName : function()
//     {
//         return(this.fName + ' ' + this.lName)
//     }
// }
// for(let key in person)
// {
//         console.log(person[key])   
// }
// // console.log(person.fullName())
// console.log(person['fullName'])
var a = [10, 20, 30]; // 30,60,90

var b = [];
var k = 0;

for (var i = 0; i < a.length; i++) {
  b[k++] = a[i] * 3;
}

console.log("the multiple of 3 is " + b); // console.log(Object.values(person))
// This is output
// For fullName within loop
// fName : Mark
// lName : Wood
// fullName : function()
//     {
//         return(this.fName + ' ' + this.lName)
//     }
// Mark Wood -> console.log(person.fullName()) and working as expected
// [Function: fullName] -> console.log(person['fullName'])
// Why person[key] for fullName and person['fullName'] giving different output.