const arry1 = ["js","py","jv","cpp","rust"];

arry1.forEach(function (elements){
console.log(elements);
} )
//It does mean that we called a function inside the forEach parathesis

//We can also use arrow function for the callback purpose

arry1.forEach((item)=>{console.log(item)});
arry1.forEach((item1)=>(console.log(item1)));


function printMe(item){
    console.log(item);
}
arry1.forEach(printMe);
//Here only give the reference and don't execute the function like printMe()

arry1.forEach(function(value,key,array){
    console.log(value,key,array);
    //It should be in this order of string,number, array.
})

const myCoding = [
   {//Object1

    languageName:"Javascript",
    languageFileName: ".js",
    

   },
   {//Object2
    languageName: "Python",
    languageFileName: ".py",

   },
   {
    //Object3
    languageName: "Java",
    languageFileName:".java",
   }]

   myCoding.forEach(function(item){
    console.log(item.languageName);
    console.log(item.languageFileName);
   })
