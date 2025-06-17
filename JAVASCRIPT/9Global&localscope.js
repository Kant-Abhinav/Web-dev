// // let a =10;
// // const b = 20;
// // var c = 30;

// // console.log(a);
// // console.log(b);
// // console.log(c);

// //{} with some function or conditional sentence tells the scope of the function or conditionals
// if(true){
//      let a =10;
//      const b = 20;
//       var c = 30;
// }

// // console.log(a); //Correct since a is defined inside the if statement
// // console.log(b); ///Defined inside the if statement so, should be printed outside of it
// console.log(c);//var is getting printed even outside the scope, problematic


//BLOCK OR GLOBAL SCOPE

let a = 300;//This a is a global scope i.e overall variable value for the program

if(true){
    let a = 10;//Here a is the local scope
    console.log("Inner result:" , a);
}
console.log(a);