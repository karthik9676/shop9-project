import React from 'react';
import './Products.css';
import FilterSection from '../FilterSection/FilterSection';
import Sort from '../Sort/Sort';
import ProductList from '../ProductList/ProductList';
import { useFilterContext } from '../context/filter_context';

const Products = () => {
  

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-3 d-none d-md-block'>
          {/* filters */}
          <div>
            <FilterSection/>
          </div>
        </div>
        <div className='col-12 col-md-9'>
          {/* products */}
          {/* sort options */}
          <div className='sort-filter'>
            <Sort/>
          </div>
          {/* main-products */}
          <div className='main-products'>
            <ProductList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
