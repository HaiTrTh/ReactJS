// Truethy when convert to Boolean is true 
// Falsey when conver to Boolean is false.
// const a = 1;
// const b = 'what' ;
// const c = "is that";

// || truthy or get the end.  
// const result = a && b && c && NaN;
// console.log(result);
// const a1 = 1;
// const b1 = "what";
// const c1 = "Is that";
// const result1 = "" || "null" || undefined;
// console.log(result1);

//  && falsy or get the end.
// const a = 1;
// const b = 'What';
// const c  = 'is THat';
// const result = a && b && c;
// console.log(result);

// const a1 = 1;
// const b1 = "What";
// const c1 = "is that";
// const result1 = ""||"what"||null;
// console.log(result1);

// let check = 10;
// const handle = () => {
//   return [1,2,3].map( item => item * 2);
// }
// let value = [];
// value = check > 9 && handle()
// console.log(value);

// let fname = 'alex';
// fname === 'alex' ? console.log(true): console.log(false);

// let user = {}
// // user.address? alert(user.address.street) : alert(undefined);

// alert(user?.address?.street); // null or undefined =>end, stop project
// ?? return the right if the left is undefined or return left if the left is not undefined

// let user 
// let value = "user" ?? 'Anomyous';
// console.log(value);

let user = '';
let value = user ?? 'Hello';
console.log(value);