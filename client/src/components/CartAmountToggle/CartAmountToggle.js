import React from 'react';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div>
      <div className=" d-flex">
        <button className='btn btn-outline-secondary border-0' onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div>
          <h3 style={{fontSize:"2.4rem"}} className="mx-3">{amount}</h3>
        </div>
        <button className='btn btn-outline-secondary border-0' onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
