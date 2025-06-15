//FOR LOOOPS
for(let i=0;i<=10;i++){
    console.log(i);
}

let myArray = ["Superman","Batman","Flash"]
for(let i = 0; i<myArray.length;i++){
    console.log(myArray[i]);
}


for(let i=0;i<=10;i++){

    if(i===5){
        console.log(i);
        console.log(`The number ${i} has been detected!!!!!`);
        break;
    }
    console.log(i);
}

for(let i=0;i<=10;i++){

    if(i===5){
        console.log(`The number ${i} has been detected!!!!!`);
        continue; //It gives one chance to continue and at second true match it breaks

    }
    console.log(i);
}


//While Loops
let i = 0;
while (i<=10) {
console.log(`Value of the integer is ${i}`);
i=i+2;
}


let myArray1 = ["Superman","Batman","Flash"]
let j =0;
while (j<myArray1.length){
    console.log(myArray1[j]);
    j++ ;
    
}

//do while loops

let score = 1;
do {
    console.log(score);
    score++
    
} while (score<10);

let score1 = 11;
do {
    console.log(score1);
    score1++
    
} while (score1<10);//since first do then check is happening here

