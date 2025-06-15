//const clock = document.querySelector('#clock')
//Let's use a different method.

const clock = document.getElementById('clock');


setInterval(function(){
    let date =new Date();//Here we write it with new
// console.log(date.toLocaleTimeString()); //We used it just to check

  clock.innerHTML = date.toLocaleTimeString();
  //Here what we did was that we just induced it to the inner HTML
  //So, every second it is changing because of the setInterval function

}, 1000)
