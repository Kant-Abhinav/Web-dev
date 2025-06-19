// const promiseOne = new Promise();
// //These are constructor functions

function user (username, loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
    //Here this. defines the username used in the function
}

const userOne = user("Abhinav", 12 ,true);


const userTwo = new user("Kant",11, false);
console.log(userOne.constructor);
console.log(userTwo);


