import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { CiStar } from "react-icons/ci";

const Star = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (ele, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    stars >= index + 1 ? (<FaStar className="text-danger bg-danger" />) : stars >= number ? (<FaStarHalfAlt className="text-danger bg-danger"/>) : (<CiStar className="text-danger bg-danger"/>)
                }
            </span>
        )
    })
  return (
    <div>
      {ratingStar}
    </div>
  )
}

export default Star;
