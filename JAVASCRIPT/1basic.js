
let name = "hitesh-hc";
const repoCount = 50;
const newString = name.substring(0,6);
const newString1 = name.slice(-6,4);
 const name1 = name.replace("hitesh","Abhinav");
 console.log(name1);
 console.log(name1.includes("k"));
 console.log(name.split("-"));
 //Split function makes an array out of the given string character that we mentioned
 let number1 = 1001;
 console.log(typeof(number1.toString()));
 number1 = 1765.567987;
 console.log(Math.round(number1));

 hundreds1 = 100000;
 console.log(hundreds1.toLocaleString());

 number69 = 696969.696969;

console.log(Math.floor(number69));
 console.log(Math.ceil(678.78));
 console.log(Math.sinh(0.8836417529680075));
 console.log(Math.max(3,5,6,7,8));
 let myDate = new Date();
 console.log(myDate.toString());//Since myDate is already a function so when we converted the function we will convert it into a function only and so we used brackets after the conversion lines
 console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2025,1,1);
console.log(myCreatedDate.toDateString());

