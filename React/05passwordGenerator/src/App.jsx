import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(8);
  let [numAllowance,setAllowance] = useState(false);
  let [charAllowance,setChar] = useState(false);
  let [password, setPassword] = useState("");
  let [click,setClick] = useState(false);

  //NOW we need something so that we can use the above useStates inside a single
  //function

  //useCallbacks comes here in  the picture for optimisation

  //useRef hook
  //We use it to give reference
  const passwordRef = useRef(null);

const passwordGenerator = useCallback(()=>{
  let pass = "";
  let  str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(numAllowance){
    str = str+"0123456789";
  }
  if(charAllowance){
    str = str + "!@#$%^&*()_+{}~"
  }

  for(let i=0;i<length;i++){
    let randomValue = Math.floor(Math.random()*str.length+1);
    pass += str.charAt(randomValue);
  }
  setPassword(pass);
}, [length,numAllowance,charAllowance,setPassword]);
//We have given the setPassword for optimisation
//Even without useCall back it can work but for optimisation we have used this

useEffect(()=>{
//We use this effect in case if there is any "CHANGE" in the given dependencies then run the code again
//Run the code again or refresh
//Alt slow method is by using onClick() cmd
  passwordGenerator()
},
[length,numAllowance,charAllowance,passwordGenerator] )

const copyPasswordToClipboard = useCallback(()=>{

  passwordRef.current.select();
  passwordRef.current.setSelectionRange(0,101);
  window.navigator.clipboard.writeText(password);
  //IT is copied and writed to the clipboard of windows<navigator<clipboard
}
,[password])

function handleClick (){
  copyPasswordToClipboard();
  setClick(true)
  setTimeout(()=>{setClick(false)},200);
}


  return (
    <>
    <div className = 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-black'>
      <h1 className = 'text-white text-center my-3'>Password Generator</h1>
    <div className = 'flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type = "text"
      value={password}
      className = 'outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      //ref given to the passwordRef i.e the text type
      //We can use it to give highlighted password text on copying
      
      />

      <button 
      onClick={handleClick}
      





      
      
      className = "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:scale-95 transition"> copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
         className = 'cursor-pointer'
         onChange = {function(e) {setLength(e.target.value)}}
         //Here e.target is giving the location of the input
         //And e.target.value refers to the value set by sliding the cursor pointer onto the label within the maxm and min values
         />
         <label>Length:{length}</label>
      </div>
      <div className = "flex items-center gap-x-1"> Numbers
        <input
        type="checkbox"
        defaultChecked={numAllowance}
        id='numberInput'
       onChange={() => setAllowance(prev => !prev)}
        />
      </div>
       <div className = "flex items-center gap-x-1"> Characters
        <input
        type="checkbox"
        defaultChecked={charAllowance}
        id='numberInput'
        onChange={()=> {

        setChar(prev=>!prev)
        //We can write it like this also
        }}
        />
      </div>
    </div>
    </div>


    </>
  )
}

export default App
