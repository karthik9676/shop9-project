import React from 'react';
import './Home.css';
import FeatureProducts from '../FeatureProducts/FeatureProducts';


const Home = () => {
  
  return (
    <>
      {/* carousel */}
      <div className="carousel_data my-2">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
              src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" 
              className="d-block w-100 c_images" 
              alt="img1" 
              />
            </div>
            <div className="carousel-item">
              <img 
              src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img15/4th/sept/unrechero/8thslot/Tws_Tallhero_3000x1200._CB596103422_.jpg" 
              className="d-block w-100 c_images" 
              alt="img2" 
              />
            </div>
            <div className="carousel-item">
              <img 
              src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/Toys/HTL2023/GW/Homepage_DesktopHeroTemplate_3000x1200_Unrec._CB570906581_.jpg" 
              className="d-block w-100 c_images" 
              alt="img3" 
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* featured products section */}
      <div className='mt-5'>
      <FeatureProducts />
      </div>
    </>
  );
};



export default Home;
