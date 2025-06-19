const user = {
    username: "Abhinav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
       // console.log(`username : ${username}`);
       //error because no idea abt which username we are talking
        console.log(`username : ${this.username}`);
        console.log(this);
        
        //Here this keyword told the function that we are talking abt 
        //The inner context i.e inside the object username
        
        
    }
}
console.log(user.username);
user.getUserDetails();
console.log(this);
//It is giving an empty object as nothing is defined here 


