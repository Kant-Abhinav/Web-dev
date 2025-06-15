//Switch statements
const month = 3
switch (month) {
    case 1:
        console.log("january");
        break; //Shift+option+down arrow = duplicate in mac
        break; //Shift+alt+down arrow = duplicate in windows
    case 2:
        console.log("february");
        break; //"break" cmd breaks the command after thing matches and the rest of the commands won't work
    case 3:
        console.log("march")
        break;

    default:
        console.log("Default case match");
        break;
}


const userEmail = [];
if (userEmail.length === 0){
    console.log("The array is empty");
}

const emptyObject = {};
if(Object.keys(emptyObject).length===0){
    console.log("The object is empty");
}