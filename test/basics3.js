const Person = require('./basics2');
class Pet extends Person

{
  constructor(firstName,lastName)
    {
       super(firstName,lastName)
    }

  get location()
  {
    return "RedCross"
  }  

}
let name= new Pet("Tim","joseph")
console.log(name.location)
name.fullName()

let marks1= [10,20,30,40,50];
marks1.slice(2,4)
console.log(marks1.slice(2,4))
