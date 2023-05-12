import { useParams } from 'react-router-dom';
import data from '../data/db.json';
import styles from './treeinfo.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const TreeMoreInfo = () => {
    const { typeid, treeid } = useParams();
    // const { data: tree, error, isPending } = useFetch('http://localhost:8000/trees/' + id);
    const tree = data.trees.find((tree) => tree.id == typeid).trees.find((tree) => tree.id == treeid);
    const [count, setCount] = useState(1);
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[tree.id] || 0;

    return (
        <div>
            <div className={styles.treeInfoCart}>
                <img className={styles.treeImage} src={tree.imgUrl} alt={tree.name} />
                <table className={styles.infoTable}>
                    <tbody>
                        <tr>
                            <td>Tree name</td>
                            <td>{ tree.name }</td>
                        </tr>
                        <tr>
                            <td>Mature Height</td>
                            <td>{ tree.matureHeight }</td>
                        </tr>
                        <tr>
                            <td>Mature Spread</td>
                            <td>{ tree.matureSpread }</td>
                        </tr>
                        <tr>
                            <td>Sunlight</td>
                            <td>{ tree.sunlight }</td>
                        </tr>
                        <tr>
                            <td>Soil type</td>
                            <td>{ tree.soil }</td>
                        </tr>
                        <tr>
                            <td>Growth rate</td>
                            <td>{ tree.growthRate }</td>
                        </tr>
                        <tr>
                            <td>Flower color</td>
                            <td>{ tree.flowerColor }</td>
                        </tr>
                        <tr>
                            <td>Harvest time</td>
                            <td>{ tree.harvest }</td>
                        </tr>
                        <tr>
                            <td>Tree price</td>
                            <td>{ tree.price }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.buttonContainer}>
                    <input type="number" className={styles.countInput} value={count} onChange={(e) => setCount(e.target.value)} />
                    <button className={styles.addToCartButton} onClick={ () => addToCart(tree.id, count) }>
                        Add to cart {cartItemCount > 0 && `(${cartItemCount})`}
                    </button>
                    {/* <Link to={`/cart`} className={styles.buyNowButton}>Buy now</Link> */}
            </div>
        </div>
    )
}

export default TreeMoreInfo;