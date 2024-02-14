import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const AddToCart = ({ product }) => {
  // console.log(product)
  const { addToCart } = useCartContext(); 
  const { _id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

  return (
    <div>
      <p style={{fontSize:"1.8rem"}}>
        Colors :
        {colors.map((item, index) => {
          return (
            <button
              onClick={() => setColor(item)}
              className={color === item ? "btn mx-2 active color_btn" : "btn mx-2 color_btn"}
              style={{ backgroundColor: item }}
              key={index}
            >
              {color === item ? <FaCheck className=' text-white' /> : null}
            </button>
          );
        })}
          </p>
          {/* add to cart */}
          <CartAmountToggle
              amount={amount}
              setIncrease={setIncrease}
              setDecrease={setDecrease}
          />
      <NavLink
        to="/cart"
        onClick={ ()=> addToCart(_id, color, amount, product)}
      >
              <button style={{fontSize:"2rem"}} className='btn btn-success my-5'>Add to Cart</button>
          </NavLink>
    </div>
  );
};

export default AddToCart;
