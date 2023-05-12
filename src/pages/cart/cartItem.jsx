import React from "react";
import style from "./cartItem.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const CartItem = (props) => {
    const {id, name, price, imgUrl, count } = props.data;
    const totalPrice = price * count;
    const { removeFromCart } = useContext(ShopContext);

    const handleDelete = () => {
        removeFromCart(id);
    }

    return (
        <div className={style.cartItem} key={id}>
            <img className={style.img} src={imgUrl} />
            <div className={style.name}>{name}</div>
            <div className={style.count}>{count}</div>
            <div className={style.price}>${Math.floor(totalPrice)}</div>
            <button className={style.removeBtn} onClick={handleDelete}>
                {/* {<FontAwesomeIcon className="removeIcon" icon={faTrashAlt} />} */}
                Remove from cart
            </button>
        </div>
    );
}