import React from 'react';
import './GridView.css';
import { NavLink } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";
import DisplayProducts from '../FeatureProducts/DisplayProducts'

const GridView = ({ products }) => {
    // console.log(products)
  return (
    <div className="">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {/* {
                  products.map((product) => {
                      return (
                          <DisplayProducts key={product._id} product={product} />
                      )
                  })
              } */}
        {products.map((product) => {
          const { _id, image_main, name, price } = product;
          return (
            <NavLink key={_id} to={`/singleproduct/${_id}`} className="mx-3 nav-link">
              <div className="grid_box">
                <figure>
                  <img src={image_main} alt={name} className="grid_image" />
                </figure>
                <p className='grid_name'>{name}</p>
                <h5 className='grid_price'>Price:<MdCurrencyRupee/>{ price}</h5>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default GridView
