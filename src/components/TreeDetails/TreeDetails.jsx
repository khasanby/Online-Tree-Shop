import { useParams } from 'react-router-dom';
import './treeDetails.css';
import data from '../data/db.json';
import { Link } from 'react-router-dom';

const TreeMoreInfo = () => {
    const { typeid } = useParams();
    // const { data: tree, error, isPending } = useFetch('http://localhost:8000/trees/' + id);
    const tree = data.trees.find((tree) => tree.id == typeid);
    const trees = data.trees.find((tree) => tree.id == typeid).trees

    return (
        <div>
            <h2 className='title'>{ tree.name }</h2>
            <div className="tree-details">
            {
                trees.map((tr) => (
                    <div key={tr.id}>
                        <Link className='tree-cart' to={`/tree-types/${typeid}/tree/${tr.id}`}>
                            <img className='tree-image' src={tr.imgUrl} alt={tr.name} />
                            <p className='tree-name'>{ tr.name }</p>
                            <p className='tree-name'>{ tr.price }$</p>
                        </Link>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default TreeMoreInfo;