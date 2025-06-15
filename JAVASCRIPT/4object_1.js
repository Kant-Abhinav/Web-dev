//Object literals

const mySym = Symbol("key1");

const jsUser = {
    name:"Abhinav" , //Here name keyword is taken as string on it's own without declaring
    age :21,
    mySym: "myKey1",
    [mySym]: "myKey1",
    location: "Bihar",
    Email: "Abhinav@outlook.com",
    "is LoggedIn": false,
    lastLoginDay: ["Monday","Saturday"] 
} 
console.log(jsUser.Email);
console.log(jsUser["Email"]);
//We cannot access is LoggedIn value of the object with . wala method

console.log(jsUser["is LoggedIn"]); 
//When there was a space between the keywords it wasn't accessible with . notation
//So we used the square bracket method to access the brackets like we do arrays
console.log(typeof(jsUser.mySym));
console.log(jsUser["mySym"]);
jsUser["Email"] = "KantAbhinav@gmail.com"; // under brackets write as strings always
//Because inside an object the compiler reads the keywords as strings only.

console.log(jsUser.Email);
//Object.freeze(jsUser); //This command has frozen the object i.e no changes will be made now
jsUser["Email"] = "SharmaAbhinav@gmail.com";
console.log(jsUser.Email);
//No change in the email is made as the object was already forzen
console.log(jsUser);
//[mySym] is using the mySym as a symbol and is also printing like that in the terminal
//mySym with brackets are getting printed like a normal string

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this["name"]}`);
//Here we have converted the string with diff commas as string interpolation and have used it 
//to for this.name stuff
//"this." refers to the properties of an object directly at a place.
}

console.log(jsUser.greeting()); 
console.log(jsUser.greeting2());//Unfreezing the object first because of the error.
//We could have also done $this.name










