// const greet = (name,msg, cb)=>{
//     console.log(`Hi, ${name}!`);
//     cb(msg)
// }

// const greeting =(greetText)=>{
//     console.log(greetText);
    
// }
// greet("Anonnya","good day" ,greeting)


let name = "Utsho";
let age = 29;

let person = {
  name,
  age,
  roll: 29,
  getInfo() {
    console.log(`My age is ${person.age}`);
  },
};
// console.log(person);
person.getInfo();