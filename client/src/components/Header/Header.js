import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaShopware } from "react-icons/fa6";
import { useCartContext } from '../context/cartContext';
import { FaShoppingCart } from "react-icons/fa";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const Header = () => {
  const { total_item } = useCartContext();

  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logoutHandler = () => {
    Cookies.remove('jwt');
    setIsLoggedIn(true);
    toast.success("Logged Out");
    // navigate("/login");
  };

  useEffect(() => {
    const token = Cookies.get('jwt');
    if (token !== undefined) {
      setIsLoggedIn(false)
    }
    else {
      setIsLoggedIn(true)
    }
  }, [logoutHandler]);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h4 className="brand_logo">
              <span className="mx-2">
                <FaShopware />
              </span>
              Shop<span style={{color:"purple"}} >9</span>
            </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{fontSize:"1.8rem"}}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link ">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link ">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link ">
                  Contact
                </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      onClick={logoutHandler}
                      to="/login"
                      className="nav-link"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link d-flex">
                  Cart({total_item})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
