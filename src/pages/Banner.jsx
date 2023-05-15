import React, { useState } from 'react';
import { BsBasket } from 'react-icons/bs';
import './Header.css';
import { Link } from 'react-router-dom'
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
   <div className='Navbar'>  
<nav>  
<ul>
    <div className='Logo'>
      <Link to='/'>
    <BsBasket/>
    </Link>
    </div>
    {/* <li><a href="/ourstory">OUR STORY</a></li> */}
    <button onClick={Click}>OUR STORY</button>
    {/* <li><a href="/recipes">RECIPES</a></li> */}
    <button onClick={Click}>RECIPES</button>
    {/* <li><a href="/contact">CONTACT</a></li> */}
    <button onClick={Click}>CONTACT</button>
    {/* <li><a href="/store">STORE</a></li> */}
    <button onClick={Click}>STORE</button>
   </ul>
   </nav>
   </div>
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