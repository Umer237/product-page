import React, { useState } from 'react';

import './Banner.css';

function Banner() {
  const [pages, setPages] = useState('')
  const [change, setChange] = useState('')
  const [input, setInput] = useState("")
  const [name, setName] = useState('The Original Doughnut')
  function handleInput(event){
    setInput(event.target.value)
  }
  function handleClick(){
    setInput('')
    setName(input)
  }
  function Click () {
    setChange('')
    setPages('')
  } 
  return (
   <>  

<div className='Banner-Background' value={change}>
  <div className="Banner-Things">
       
<h1>{name}</h1>
    <h2>{name}</h2>
    <input value={input} onChange={handleInput} />
      <button onClick={handleClick}>Submit</button>
    </div>
</div>
   </>
  )
}

export default Banner