import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from '../GridView/GridView';
import ListView from '../ListView/ListView';

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view) {
    return <GridView products={filter_products} />
  }
  if (grid_view === false) {
    return <ListView products={filter_products} />
  }

  return (
    <>
    </>
  )
}

export default ProductList;
