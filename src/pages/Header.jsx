import React, { useState } from 'react'
import { BsBasket } from 'react-icons/bs';
import Banner from './Banner';
import './Header.css';
const Header = () => {
      
const [page, setPages] = useState('')

function handleupclick () {
Banner = {page}
setPages = {handleupclick}
}
  return (
<>
<div className='Navbar'>  
<nav>  
<ul>
    <div className='Logo'>
<a href="/">
    <BsBasket/>
    </a>
    </div>
    {/* <li><a href="/ourstory">OUR STORY</a></li>  */}
    <button onClick={handleupclick}>OUR STORY</button>
    <li><a href="/recipes">RECIPES</a></li> 
     <li><a href="/contact">CONTACT</a></li> 
    <li><a href="/store">STORE</a></li>
  
   </ul>
   </nav>
   </div>
</>
  )
}

export default Header