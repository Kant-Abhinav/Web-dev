const array1 = [0,1,2,3,4,5];
const array2 = [1,2,3,4];
const array3 =  new Array(1,2,3);
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array3.length);
console.log(array1[1]);

//Methods in Array
//(1) Push()
//(2) Pop()

array1.push(6);
array1.push(7);
console.log(array1);

array1.pop();
console.log(array1);
//Popping is always done for the ending of the array
//--------------------------------------------------------------------------




//(3)Unshift() method


array1.unshift(42);
console.log(array1);


//By using the unshift() function we add a digit in the starting of the array
//It is not a good methond because it changes the position of all the elements of an array
//So we should always use push command in an array!!

//SIMILARLY
array1.shift();
console.log(array1);

//(4) shift() function removes the array front array elements from the array!

//(5) includes() method

console.log(array1.includes(5));
console.log(array1.includes(67));

//True and a false , includes function gives answer in boolean, basically it confirms

//(6) join() Function


const array = array1.join();
console.log(array1);
console.log(typeof(array));

//(7)It removes the brackets of an array and converts it to string

//(8) indexof() Function
console.log(array1.indexOf(4));

//It gives the position or the index of the the required element of the array

//(9) Slice() function

console.log("A", array1);
const myn1 = array1.slice(1,3);
console.log(myn1);
console.log("B", array1);

// In slice() function the original array is kept undisturbed i.e the elements are copied from it
//and the ending limit like "3" in above case is not included
//It won't affect the original array like array1.

//Splice() function

const myn2 = array1.splice(1,3);
console.log("C", array1);
console.log(myn2);

//In splice() function the original array is actually changed.
//The interval that we have given is cut out of the original array and is pasted as a new array.
//The inputs given like in the above case (1,3) , the whole input is taken including "3".
//The input is cut out of the original array("Array1") and so "1,2 and 3" is missing from the array.





