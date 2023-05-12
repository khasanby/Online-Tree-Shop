import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import style from './navbar.module.css';
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';

const Navbar = () => {
  const { cartItemCount } = useContext(ShopContext);

  return (
    <div className={style.navbar}>
      <div>
        <Link to='/' className={style.mainTitle}>TreeLand</Link>
      </div>
      <div className={style.links}>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart">
            <div className={style.iconContainer}>
              <ShoppingCart color='#fff' size={32} />
              {cartItemCount > 0 && <span className={style.cartItemCount}>{cartItemCount}</span>}
            </div>
          </Link>
      </div>
      
    </div>
  )
}

export default Navbar;