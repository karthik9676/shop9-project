import React from 'react';
import { useProductContext } from '../context/productContext';
import DisplayProducts from './DisplayProducts';

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  // console.log(isLoading, featureProducts);
  return (
    <div>
      <h1 style={{fontSize:"3.5rem"}} className="text-center text-warning">Our Featured Products</h1>
      {isLoading ? (
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            className="spinner-border mx-auto"
            role="status"
            aria-hidden="true"
          />
        </div>
      ) : (
        <div className=" d-flex flex-wrap justify-content-center align-items-center mt-5">
          {featureProducts.map((product) => (
            <DisplayProducts key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureProducts;
