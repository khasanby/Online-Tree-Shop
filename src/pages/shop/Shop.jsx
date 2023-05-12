import React from 'react';
import './shop.css';
import TreeTypeList from '../../components/TreesTypes/TreeTypeList';

const Shop = () => {
  // const { data: trees, isPending, error } = useFetch('http://localhost:8000/trees');

  return (
    <div className='trees-container'>
        {
          <TreeTypeList title="All Trees" />
        }
    </div>
  )
}

export default Shop;