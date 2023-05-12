import { Link } from 'react-router-dom';
import style from './treetypelist.module.css';
import data from '../data/db.json';

const TreeTypeList = (props) => {
    return (
        <div>
            <h2 className={style.title}>{ props.title }</h2>
            <div className={style.treeList}>
                {
                    data.trees.map((tree) => (
                        <div key={tree.id}>
                            <Link to={`/tree-types/${tree.id}`} className={style.treeCard}>
                                <img className={style.treeImage} src={tree.imgUrl} alt={tree.name} />
                                <p className={style.treeName}>{ tree.name }</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TreeTypeList;