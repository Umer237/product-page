import React from 'react'
import { BsBasket } from 'react-icons/bs';
import './Header.css';

const Header = () => {
  return (
<>
<div className='Navbar'>  
<nav>  
<ul>
    <div className='Logo'>
    <BsBasket/>
    </div>
    <li><a href="/">OUR STORY</a></li>
    <li><a href="/">RECIPES</a></li>
    <li><a href="/">CONTACT</a></li>
    <li><a href="/">STORE</a></li>
   </ul>
   </nav>
   </div>
</>
  )
}

export default Header