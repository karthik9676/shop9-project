import React from 'react';
import './CartItem.css';
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/cartContext';
import { MdCurrencyRupee } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { id, name, image, color, price, amount } = item;
    const { removeItem, setDecrease, setIncrease } = useCartContext();
    
    
    // const setDecrease = (id) => {
    //     console.log(id)
    // }
    // const setIncrease = (id) => {
    //     console.log(id)
    // }
  return (
    <div className="row align-items-center my-3">
      <div className="col-4 d-flex align-items-center">
          <img src={image} alt={name} className="cart_item_image w-25" />
        <div className=' d-flex flex-column mx-3'>
          <p className='cart_name'>{name}</p>
          <p className='cart_name'>color : {color}</p>
        </div>
      </div>
      <div className="col">
        {/* <p><FormatPrice price={price} /></p> */}
        <p className='price_text'>
          <MdCurrencyRupee />
          {price}
        </p>
      </div>
      <div className="col">
        {/* <CartAmountToggle
              amount={amount}
              setIncrease={setIncrease}
              setDecrease={setDecrease}
          /> */}
        <div className=" d-flex align-items-center">
          <button
            className="btn btn-outline-secondary border-0 price_text"
            onClick={() => setDecrease(id)}
          >
            <FaMinus />
          </button>
          <div>
            <h4 className="mx-3 price_text">{amount}</h4>
          </div>
          <button
            className="btn btn-outline-secondary border-0 price_text"
            onClick={() => setIncrease(id)}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="col">
        {/* <p><FormatPrice price={price * amount} /></p> */}
        <p className='price_text'><MdCurrencyRupee /> {price * amount}</p>
      </div>
      <div className="col" onClick={() => removeItem(id)}>
        <p className='price_text'>
          <FaTrash className="text-danger" />
        </p>
      </div>
    </div>
  );
}

export default CartItem;
