import React, { useEffect } from 'react';
import './SingleProduct.css';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/productContext';
import PageNavigation from '../PageNavigation/PageNavigation';
import MyImage from '../MyImage/MyImage';
import FormatPrice from '../Helpers/FormatPrice';
import Star from '../Star/Star';
import AddToCart from '../AddToCart/AddToCart';
import { MdCurrencyRupee } from "react-icons/md";

// const API = "http://localhost:7000/api/product";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  // console.log(isSingleLoading, singleProduct)
  const { id } = useParams();
  // console.log(id)

  const {
    _id: alias,
    name,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
    images
  } = singleProduct;

  useEffect(() => { 
    // getSingleProduct(`${API}?id=${id}`);
    getSingleProduct(`http://localhost:7000/api/product/${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>
      <h1>...loading</h1>
    </div>
  }

  return (
    <>
      <PageNavigation title={name} />
      <div className="container">
        <div className="row mt-5">
          <div className="col-10 col-md-6 col-lg-5">
            {/* images section */}
            <MyImage imgs={images} />
          </div>
          <div className="col-11 col-md-6 col-lg-7">
            <h2 className='single_name'>{name}</h2>
            {/* <Star stars={stars} reviews={reviews} /> */}
            <p className='single_rating'> Rating : { stars} / 5</p>
            <p className='single_rating'>Reviews : {reviews}</p>
            <h5 className='single_rating'>
              MRP : <MdCurrencyRupee/>{price}
                {/* <FormatPrice price={price + 250000} /> */}
            </h5>
            <p className='single_rating'>Description:</p>
            <p className='description_content'>{description}</p>
            <div className='stock-info'>
              <p className='single_small'>Available : { stock > 0 ? "In Stock" : "Out of Stock"}</p>
            </div>
            <p className='single_small'>Product ID : {alias}</p>
            <h6 className='single_small'>Brand : {company} </h6>
            <hr />
            {
              stock > 0 && <AddToCart product={singleProduct} />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
