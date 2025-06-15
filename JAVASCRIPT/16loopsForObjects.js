//Conclusion
//"FOR OF LOOP FOR ARRAYS AND MAPS"
//FOP IN LOOP FOR OBJECTS

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb:  "ruby",
    swift: "SwiftByApple"
}

//We will use for in loop for objects

for (const key in myObject) {
  console.log(`'${key}' is a shortcut for '${myObject}'`);      
    }

    //fOR ARRAYS

 const arry1 = ["js","py","jv","cpp","rust"]
 for (const key in arry1) {

     console.log(key);
     //Here 0,1,2,3 are printed which are the keys of the array
     //it means that the positions of the elements in an array is the "key" of the array.
    
     //Here the key is used as the index like 1,2,3,4 types
    if (key==4){
        for(let i=4;i>=0;i=i-1){
        console.log(arry1[key-i]);
        }
    }
    }

    //Maps
 const map = new Map();
 map.set(`IN`, `INDIA`);
 map.set(`USA`, "United States of America")
 map.set(`Fr`, `France`);
 map.set(`IN`, `INDIA`);//Won't be repeated again

 console.log(map);
 for (const [map,value] in Map){
    console.log(key);
 }

 //Thus for in loop doesn't work for maps as they are not iterative




