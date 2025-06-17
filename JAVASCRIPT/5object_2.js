const tinderUser1 = new Object(); //It is a singleton object
console.log(tinderUser1);

//We can also do it like
const tinderUser2 = {};//It is not a singleton object i.e we can many elements in this object
tinderUser2.id = "123abc";
tinderUser2["name"] = "Sammyy";
tinderUser2["isLoggedIn"] = false;
console.log(tinderUser2.id);
console.log(tinderUser2.name);
console.log(tinderUser2.isLoggedIn);

//We can do long nesting as well in these cases
const regularUser = {
    email: "someone@gmail.com",
    fullName: {
        userFullName: {
            firstName:"Abhinav",
            lastName: "Sharma",
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);
console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"}
const obj3 = {obj1,obj2};// We cannot do this just like array, it will give object inside an object
console.log(obj3);

const obj = Object.assign(obj1,obj2);
console.log(obj);

//We will also use Spread operator here like array, concat there and assign here won't be used much

const obj4 = {...obj1,...obj2};//Here the ... is the spread operator
console.log(obj4);
console.log(tinderUser2);
console.log(Object.keys(tinderUser2));//Since there were three keywords- "id", "name" &"isLoggedIn"
console.log(Object.values(tinderUser2))//Values refers to the assigned values to the keywords
console.log(Object.entries(tinderUser2))//Entries refers to the array of keyword and values , both together.
//All of them gives results in form of Arrays like they are appearing in the terminal
console.log(tinderUser2.hasOwnProperty("isLoggedIn"));
console.log(tinderUser2.hasOwnProperty("isLogged"));
