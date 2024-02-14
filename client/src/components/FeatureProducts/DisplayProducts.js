import React from 'react';
import './DisplayProducts.css';
import { NavLink } from 'react-router-dom';

const DisplayProducts = ({ product }) => {
  const { _id, image_main, name  } = product;
  // console.log(product)
  return (
    <NavLink to={`/singleproduct/${_id}`} className="mx-3 nav-link">
      <div className='feature_box'>
        <figure>
          <img src={image_main} alt={name} className="image" />
        </figure>
        <button style={{fontSize:"1.6rem"}} className='btn btn-outline-warning'>View Details</button>
      </div>
    </NavLink>
  );
};

export default DisplayProducts;
