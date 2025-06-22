import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//We will always use let to make a variable so, that the value could change
let [counter, setCounter]= useState(15); //We can give any value inside it
// let counter = 15;
//Here setCounter is the name and counter is assigned an initial value = 15;

const addValue = ()=>{
  counter = counter +1;
  setCounter(counter);
  console.log("clicked", counter);
  
}
function removeValue (){
  if(counter>0){
  counter = counter-1;
  setCounter(counter);
  console.log("clicked", counter);
  }
}
  return (
    <>
    <h1>I am Abhinav</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick = {addValue}> Add Value {counter}</button>
    {/* here we have assigned a function value to the onClick tag */}
    <br/>
    <button onClick = {removeValue}> Remove value {counter} </button>
    <p>footer:</p>
    </>
  )
}

export default App
