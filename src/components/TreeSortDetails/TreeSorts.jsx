import { useParams } from 'react-router-dom';
import styles from './treeSortDetails.module.css';
import data from '../data/db.json';
import { Link } from 'react-router-dom';

const TreeSorts = () => {
    const { typeid } = useParams();
    const tree = data.trees.find((tree) => tree.id == typeid);
    const trees = data.trees.find((tree) => tree.id == typeid).trees

    return (
        <div>
            <h2 className={styles.title}>{ tree.name }</h2>
            <div className={styles.treeDetails}>
            {
                trees.map((tr) => (
                    <div key={tr.id}>
                        <Link className={styles.treeCart} to={`/tree-types/${typeid}/tree/${tr.id}`}>
                            <img className={styles.treeImage} src={tr.imgUrl} alt={tr.name} />
                            <p className={styles.treeName}>{ tr.name }</p>
                            <p className={styles.treePrice}>{ tr.price }$</p>
                        </Link>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default TreeSorts;