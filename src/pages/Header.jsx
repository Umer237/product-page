import React from 'react'
import { BsBasket } from 'react-icons/bs';
import './Header.css';
// import { Link } from 'react-router-dom'
const Header = () => {
      
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
    <li><a href="/ourstory">OUR STORY</a></li> 
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