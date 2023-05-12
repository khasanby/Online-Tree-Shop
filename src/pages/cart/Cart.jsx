import React, { useContext } from 'react';
import style from './cart.module.css';
import data from '../../components/data/db.json';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cartItem';

const Cart = () => {
  const { cartItems } = useContext(ShopContext); 

  return (
    <div className={style.cart}>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {
          data.trees.map(treeTypes => {
            var treeSorts = treeTypes.trees;
            return (
              <React.Fragment key={treeTypes.id}>
                {
                  treeSorts.map( (tree) => {
                    const cartItemId = Math.random().toString(36).substring(7);
                    if(cartItems[tree.id] !== 0) {
                      return <CartItem data={{...tree, count: cartItems[tree.id]}} key={cartItemId} />
                    }
                  })
                }
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart;