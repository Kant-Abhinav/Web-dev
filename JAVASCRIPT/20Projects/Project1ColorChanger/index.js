const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
// for(i=0;i<buttons.length;i++){
//     console.log(buttons);
// }


//USING EASIER LOOP
buttons.forEach(function(buttons){
    console.log(buttons);
    buttons.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);//Tells us about the target from where the event has come
       const key = e.target.id;
       switch (key) {
        case "grey":
            body.style.backgroundColor = e.target.id;
            break;
        case "white":
            body.style.backgroundColor = e.target.id;
            break;
        case "blue":
            body.style.backgroundColor = e.target.id;
            break;
        case "yellow":
            body.style.backgroundColor = e.target.id;
            break;        
       
        default:
            break;
       }
        
    })
})



