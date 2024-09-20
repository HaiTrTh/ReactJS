// const user = {
//   name: "duoc",
//   age: 24,
//   sex: 'male'
// }

// // const name = user.name;
// // const age = user.age;
// // const sex = user.sex;

// const {name, age: UserAge ,sex} = user;

// console.log(name,UserAge,sex)

// // destructuring with array
// const list = [
//   1,
//   function(a,b){
//     return a + b;
//   }
// ]
// const [value, sum] = list;
// console.log(sum(2,3));


// const user = {
//   name: 'Hai',
//   age: 24,
//   ability: ['coding']
// }
// const cloneUser = {...user};
// console.log(user);
// const array = [1,2,3,4,5];
// const cloneArray = {...array};
// console.log(cloneArray);
// //rest parameters
// const handle = (a,b,...c) =>{
//   return c;
// }
// const value = handle(1,2,3,4,5,6);
// console.log(value);
// const user = {
//   name: 'Hai',
//   age: 24,
//   ability: ['coding']
// }
// const cloneUser = {...user};


// const handle = (a,b,...c) => {
//   return c;
// }
// const value = handle(1,2,3,4,5,6);
// console.log(value);

// const handle = ({a, b, ...c}) => {
//   return c;
// }
// const value = handle({a:1, b:2, c:3, d:4, e:5})
// console.log(value);

// const array = [1, 2, 3, 4, 5];
// const cloneArray = [...array];
// console.log(cloneArray);
// const object = {
//   name: 'hai',
//   age: 24,
//   fullName: () =>{
//     this.name + this.age;
//   }
// }
// const objClone = {...object};
// console.log(objClone);

const test = (a,b,...c) => {
  return {a, c}
  
}
const value = test(1,2,3,4,5,6);
console.log(value);