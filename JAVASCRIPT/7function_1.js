function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("V");
}

//sayMyName(); 
function addTwoNumbers (number1,number2){ //The values inside the () is known as parameters
let value = number1+number2;
console.log("Hi");//It will get printed since it is before the return value
return value;
console.log("Hello");//Nothing gets printed after the return value in a funct. 
}

const result = addTwoNumbers(7,8); //Here the values under the () is known as arguments.
 console.log("Results: ", result);

 function loginUserMessage(username){
    if(!username){//Here, !username means , "username===undefined".
        console.log("Please enter a username!!!");
        return;
    }
    return `${username} Just logged in`;

 }
 console.log(loginUserMessage("Santa_Claus"));
 console.log(loginUserMessage());//Since, we didnot define any value of username(variable
 
