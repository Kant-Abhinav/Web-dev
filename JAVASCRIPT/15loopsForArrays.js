const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
    
}
 const greetings = "Hello World";
 for (const greet of greetings){
console.log(greet);

 }


 //Maps
 const map = new Map();
 map.set(`IN`, `INDIA`);
 map.set(`USA`, "United States of America")
 map.set(`Fr`, `France`);
 map.set(`IN`, `INDIA`);//Won't be repeated again

 console.log(map);
 //It is getting printed just like an object i.e a key and an object

 for (const [key,value] of map) {
    //Here writing key and value alag alag will give use keys of the map
    console.log(key);
    
 }

 const gameObject = {
    game1: "NFS",
    game2: "GTA",
    game3: "POP",
    game4: "COD",
 }

 for (const [key,value] of gameObject) {
     console.log(key, value);
 }
 //Thus For of loop doesn't work for objects