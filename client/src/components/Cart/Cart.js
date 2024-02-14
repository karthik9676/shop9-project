import React, { useEffect } from 'react';
import './Cart.css';
import { useCartContext } from '../context/cartContext';
import CartItem from '../CartItem/CartItem';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { MdCurrencyRupee } from "react-icons/md";

const Cart = () => {
  let navigate = useNavigate();
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  // console.log(cart)

  if (cart.length === 0) {
    return <div style={{height:"80vh"}} className=' d-flex justify-content-center align-items-center'>
      <h1>Your Cart is Empty</h1>
    </div>
  }


  const checkoutHandler = async (amount) => {
    const token = Cookies.get("jwt");
    if (token === undefined) {
      toast.error("Please Login to Checkout");
      navigate("/login");
    } else {
      const {
        data: { key },
      } = await axios.get("http://localhost:7000/api/getkey");

      const {
        data: { order },
      } = await axios.post("http://localhost:7000/api/payment/checkout", {
        amount,
      });
      const options = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "karthik Reddy",
        description: "Test Transaction",
        image:
          "https://res.cloudinary.com/dlsfy08yr/image/upload/v1704093675/the-human-icon-and-logo-vector_htojgx.jpg",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:7000/api/payment/paymentverification",
        prefill: {
          name: "Karthik Reddy",
          email: "gaurav.kumar@example.com",
          contact: "8247277833",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    }
    // console.log(amount)
  };

  

  return (
    <>
      <div className='container p-5'>
        <div className="row">
          <div className="col-4">
            <p className='cart_title'>Item</p>
          </div>
          <div className="col">
            <p className='cart_title'>Price</p>
          </div>
          <div className="col">
            <p className='cart_title'>Quantity</p>
          </div>
          <div className="col">
            <p className='cart_title'>SubTotal</p>
          </div>
          <div className="col">
            <p className='cart_title'>Remove</p>
          </div>
        </div>
        <hr />
        <div>
          {
            cart.map((item) => {
              return (
                <CartItem key={item.id} item={item} />
              )
            })
          }
        </div>
        <hr />
        <div className='d-flex justify-content-between align-items-center'>
          <NavLink to="/products">
            <button className='btn btn-primary cart_title'>Continue Shopping</button>
          </NavLink>
          <button className='btn btn-danger cart_title' onClick={clearCart} >Clear Cart</button>
        </div>
        {/* order_total */}
        <div className='order_total d-flex justify-content-center align-items-center mt-4'>
          <div className='order_box'>
            <div className=' d-flex align-items-center'>
              <p className='cart_title'>Sub Total :</p>
              <p className='mx-3 cart_title'><MdCurrencyRupee/>{ total_price}</p>
            </div>
            <div className=' d-flex align-items-center'>
              <p className='cart_title'>shipping fee :</p>
              <p className='mx-3 cart_title'><MdCurrencyRupee/>{ shipping_fee}</p>
            </div>
            <hr/>
            <div className=' d-flex align-items-center'>
              <p className='cart_title'>Order Total :</p>
              <p className='mx-3 cart_title'><MdCurrencyRupee/>{shipping_fee + total_price}</p>
            </div>
            <div>
              <button className=' btn btn-success cart_title mt-3' onClick={ ()=>checkoutHandler(shipping_fee + total_price)}>CheckOut</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;
