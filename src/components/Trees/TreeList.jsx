import { Link } from 'react-router-dom';
import './treelist.css';
import data from '../data/db.json';

const TreeList = (props) => {
    return (
        <div>
            <h2 className='title'>{ props.title }</h2>
            <div className='tree-list'>
                {
                    data.trees.map((tree) => (
                        <div key={tree.id}>
                            <Link to={`/tree-types/${tree.id}`} className='tree-card'>
                                <img className='tree-image' src={tree.imgUrl} alt={tree.name} />
                                <p className='tree-name'>{ tree.name }</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TreeList;