//Functions in Arrays and Objects

function calculateCartPrice(val1,val2,...num1){//Here the ... is known as rest operator
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000,6000));

const user = {
    username: "Abhinav",
    price:199 ,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)

}

handleObject(user);

handleObject({
    username: "SAM",
    price: "399",
})

const myNewArray = [200,400,600,800,1000];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([144,136,148,160,172]));

