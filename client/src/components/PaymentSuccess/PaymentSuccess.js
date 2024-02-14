import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const PaymentSuccess = () => {
  const { clearCart } = useCartContext();
    const searchQuery = useSearchParams()[0];
    // console.log(searchQuery.get("reference"))
  const referenceNum = searchQuery.get("reference");
  
  useEffect(() => { 
    clearCart()
  }, []);

  return (
    <div style={{height:"80vh"}} className=' bg-light d-flex flex-column justify-content-center align-items-center'>
          <h2 style={{fontSize:"3rem"}}>Order Successfull</h2>
          <h4 style={{fontSize:"2rem"}} className='text-success'>Reference No : { referenceNum}</h4>
    </div>
  )
}

export default PaymentSuccess;
