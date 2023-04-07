import React from 'react';
import './shop.css';
import TreeList from '../Trees/TreeList';

const Shop = () => {
  // const { data: trees, isPending, error } = useFetch('http://localhost:8000/trees');

  return (
    <div className='trees-container'>
        {
          <TreeList title="All Trees" />
        }
    </div>
  )
}

export default Shop;
