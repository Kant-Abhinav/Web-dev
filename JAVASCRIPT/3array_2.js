const marvelArray = ["Spiderman", "Ironman", "Hulk"];
const dcArray = ["Superman","Batman","Flash"];
//marvelArray.push(dcArray);
console.log(marvelArray);
//Array inside another array is pushed
//console.log(marvelArray[3][1]);//element out of an element.

//Concat() function
let allHeroes = marvelArray.concat(dcArray);
console.log(allHeroes);
//Concat() function combines two arrays into one


//Spread(...) operator
const allNewHeroes = [...marvelArray,...dcArray];
console.log(allNewHeroes);
// ... is the spread operator which spreads the elements of an array
//It helps to combine two or more arrays into one, similar to that of concat function

//Arrays inside an array and inside an array
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const usableAnotherArray = anotherArray.flat(Infinity);
console.log(usableAnotherArray);

//This flat function needs the depth of the array, if we inputed infinity. So, it will
//go to infinite depth and check array inside array and make it a flat single array
//In above case the usableAnotherArray is a singular array only

console.log(Array.isArray("ABHINAV"));
console.log(Array.from("Hitesh"));//Will make an array out of this
console.log(Array.from({name:"hitesh"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
//Array.of() makes an array out of the given "Variables".
//Array.from() makes an array out of given data-types(eg- string, integer)
