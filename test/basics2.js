// //module.exports =

class Person 
{
  age =25

  get location()
  {
    return "canada"
  }

   constructor(firstName,lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName()
    {
         console.log(this.firstName+this.lastName)
    }
}
let person= new Person("Tim","joseph")
console.log(person.location)
console.log(person.age)
person.fullName()
console.log(person.fullName())
// //module.exports = name


// class Person {
//   // firstName = "";
//   // lastName = "";
//   age = 25;
//   get location() {
//     return "canada";
//   }

// //to get data from a class you have to create an object out of that class
// //constructor is a method which executes by default when you create object of the class
 
// constructor(firstName, lastName)
// {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// //methods
// fullName()
// {
//   console.log(this.firstName + this.lastName);
// }
// }
// let person = new Person("Tim", "Joseph");
// person.age;
// console.log(person.age);
// console.log(person.location);
// console.log(person.fullName());



// class person {
//   age = 25;
 
//   get location() {
//     return "India";
//   }
 
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   fullName() {
//     console.log(this.firstName + this.lastName);
//   }
// }
// person1 = new person("K", "P");
// console.log(person1.fullName());
// console.log(person1.age);
 
// person2 = new person("O", "P");
// console.log(person2.fullName());


// let person = {

//   firstName : 'Divyanshu',
//   lastName  : 'Sharma',
//   middleName: 'Kumar'
// }

// console.log('firstName' in person);
// console.log('gender' in person);
// console.log('lastName' in person);
// console.log('middleName' in person);

