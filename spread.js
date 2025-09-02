// const myfunc = (name='anonnya')=>{
//     console.log(`my name is ${name}`);
    
// }
// myfunc()

// const mySum =(a,b, ...rest)=>{
//     console.log(rest);
//     console.log(a+b);

// }
// mySum(5,7,3,10,55,23,5)
// myfunc()

// const myMax =(...rest)=>{
//     console.log(rest);
//     const maxNum = Math.max(...rest)
//     return maxNum

// }
// console.log(myMax(5,7,3,10,55,23,5));



// const arr =[30,50,12,55]
// console.log(Math.max(...arr));

// ---------obj----------//
const obj1 ={
    name:"anna",
    age: 25,
};
const obj2 ={...obj1}
obj2.age =20;
console.log(obj2);
console.log(obj1);


