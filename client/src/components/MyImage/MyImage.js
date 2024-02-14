import React, { useState } from 'react'

const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <>
      <div className="row">
        <div className="col-2">
          {imgs.map((img, index) => {
            return (
              <div className=" my-4" key={index}>
                <img
                  className="w-100"
                  src={img.url}
                  alt="img"
                  onClick={() => setMainImage(img)}
                />
              </div>
            );
          })}
        </div>
        <div className="col-8">
          <img className="w-100 mx-2" src={mainImage.url} alt={mainImage.filename} />
        </div>
      </div>
    </>
  );
};

export default MyImage;
