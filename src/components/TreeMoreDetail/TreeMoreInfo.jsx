import { useParams } from 'react-router-dom';
import data from '../data/db.json';
import './treeinfo.css';

const TreeMoreInfo = () => {
    const { typeid, treeid } = useParams();
    // const { data: tree, error, isPending } = useFetch('http://localhost:8000/trees/' + id);
    const tree = data.trees.find((tree) => tree.id == typeid).trees.find((tree) => tree.id == treeid);

    return (
        <div className='tree-info-cart'>
            <img className='tree-image' src={tree.imgUrl} alt={tree.name} />
            <div className='info'>
                <p className='tree-info'>Tree name</p>
                <p className='tree-info'>{ tree.name }</p>
            </div>
            <div className='info'>
                <p className='tree-info'>Mature Height</p>
                <p className='tree-info'>{ tree.matureHeight }$</p>
            </div>
            <div className='info'>
                <p className='tree-info'>Mature Spread</p>
                <p className='tree-info'>{ tree.matureSpread }$</p>
            </div>
            <div className='info'>
                <p className='tree-info'>Sunlight</p>
                <p className='tree-info'>{ tree.sunlight }$</p>
            </div>
            <div className='info'>
                <p className='tree-info'>Soil type</p>
                <p className='tree-info'>{ tree.soil }$</p>
            </div>
            <div className='info'>
                <p className='tree-info'>Growth rate</p>
                <p className='tree-info'>{ tree.growthRate }$</p>
            </div>
            <div className='info'>
                <p className='tree-info'>Flower color</p>
                <p className='tree-info'>{ tree.flowerColor }$</p>
            </div>
            <div className='info'>
                <p className='tree-info'>Harvest time</p>
                <p className='tree-info'>{ tree.harvest }$</p>
            </div>
            <div className='info'>
                <p className='tree-info'>Tree price</p>
                <p className='tree-info'>{ tree.price }$</p>
            </div>
        </div>
    )
}

export default TreeMoreInfo;