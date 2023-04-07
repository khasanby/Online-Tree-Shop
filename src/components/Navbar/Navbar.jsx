import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <Link to='/' className='mainTitle'>TreeLand</Link>
      </div>
      <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart">
              <ShoppingCart color='#fff' size={32} />
          </Link>
      </div>
      
    </div>
  )
}

export default Navbar;