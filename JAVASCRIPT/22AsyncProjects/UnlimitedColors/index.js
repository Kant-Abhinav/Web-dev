//Random color will be generated from random hex values
function randomColor(){
    const hex = "0123456789ABCDEF";//This is the hex code value
    let color = "#";
    for(let i = 0; i <6;i++){
      color += hex[Math.floor(Math.random() * 16)];//Random position of hex
    //It means color=color+random generated position of hex i.e added in the string
    //This loop will 6 times and 6 times this will add in the strings of color
    }
    return color;
   
};
let intervalID;
function startChangingColor(){
if (!intervalID){
 intervalID =  setInterval(changeBgColor,1000);
}
 
  function changeBgColor(){
   document.body.style.backgroundColor = randomColor();
  }
};
function stopChangingColor(){
clearInterval(intervalID);
intervalID = null;
};
document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);