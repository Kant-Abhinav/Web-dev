(function chai() {
console.log(`DB Managed`);
})
();//These IIFE's are known as "Named IIFE'S"


//With arrow function

(()=>{  
    console.log(`DB Managed2`);
     }
)
//These are known as "Non-named IIFE'S"
(); //This ";" is important to give to end one IIFE here


//OR
((username)=>(console.log(`DB MANAGER2 TO ${username}`)))
("Abhinav");
