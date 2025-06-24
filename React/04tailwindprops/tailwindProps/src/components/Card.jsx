import React from 'react'

function Card(){
    return (
        <>
        <div>Card</div>
         <h1 className = 'bg-green-400 text-black p-4 rounded-xl mg-4'>Tailwind test</h1>

      <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://imgs.search.brave.com/cCjzWhHWGBnGij3f_MSLCnicIpZXgZ_Ik0HJvbGCgsI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YnV6emZlZWQuY29t/L2J1enpmZWVkLXN0/YXRpYy9zdGF0aWMv/MjAyNS0wNi8wOC8x/OS9zdWJidXp6L3NW/MURob1NSbC5qcGc"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
        </>


        
        
    )
}
export default Card
