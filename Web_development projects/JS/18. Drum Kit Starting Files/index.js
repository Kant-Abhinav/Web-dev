function playSound(){
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i =0;i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     this.style.color= "black";
     let buttonInnerHTML = this.innerHTML;
     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
        
    })
    }
 


document.addEventListener("keypress",function(event){ 
    // here the event parameter tells us about the event happening 
    makeSound(event.key);
    //event.key tells us about the key property of the event parameter
    buttonAnimation(event.key)
}
    
);
function makeSound(key){
    switch (key){
        case "w":
        let audio1 = new Audio("sounds/crash.mp3")
            audio1.play();
           break;

        case "a":
           let audio2 = new Audio("sounds/kick-bass.mp3")
               audio2.play();
              break;
    
        case "s":
         let audio3 = new Audio("sounds/snare.mp3")
            audio3.play();
            break;

        case "d":
         let audio4 = new Audio("sounds/tom-1.mp3")
             audio4.play();
        break;

        case "j":
        let audio5 = new Audio("sounds/tom-2.mp3")
            audio5.play();
           break;

        case "k":
           let audio6 = new Audio("sounds/tom-3.mp3")
               audio6.play();
              break; 
    
        case "l":
            let audio7 = new Audio("sounds/tom-4.mp3")
               audio7.play();
                 break;
         
        default:
        



}
}
function buttonAnimation(currentKey){

    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}