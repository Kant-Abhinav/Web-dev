const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        //this refers to the current context as, user here is the context
        console.log(this);
        
    } 
    
 
}
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
console.log(this); //Here the scope has changed i.e it is not the global scope.
//So it is only giving {}(empty object as there is no element in global scope) values here


//Arrow function

function ABC(){
    username: "Abhinav";
    console.log(this);
    console.log(this.username);
    
}
ABC();

const addTwo = (num1,num2) => {

    return {username:"Abhinav"};
}

console.log(addTwo(3,7));

const myArray = [1,2,3,4,5];