import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";

const ListView = ({products}) => {
  return (
    <div className="container">
      <h1>List view</h1>
      <div className=" ">
        {products.map((product) => {
          const { id, name, image_main, price, description } = product;
          return (
            <div className="m-2 border border-1 d-flex">
              <div>
                <img className="w-25" src={image_main} alt="product" />
              </div>
              <div>
                <h2>{name}</h2>
                <p>
                  <MdCurrencyRupee />
                  {price}
                  {/* <FormatPrice price={price} /> */}
                </p>
                <p>{description.slice(0, 90)}...</p>
                <NavLink to={`/singleproduct/${id}`}>
                  <button className="btn btn-primary">Read More</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListView;
