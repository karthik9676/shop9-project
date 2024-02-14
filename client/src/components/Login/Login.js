import React, { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/auth/login", { email, password });
       console.log(response)
      if (response.data.success) {
        toast.success(response.data.message);
        Cookies.set('jwt', response.data.token)
        // Cookies.remove('jwt')
        navigate("/cart");
      }
      else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  }

  return (
      <div>
        <div className='register_container d-flex justify-content-center align-items-center'>
        <form onSubmit={handleSubmit}>
          <h1 style={{fontSize:"3rem"}} className='my-5'>Login Page</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label form_data">
              Email
            </label>
            <input
              type="email"
              className="form-control form_data"
              id="exampleInputEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label form_data">
              Password
            </label>
            <input
              type="text"
              className="form-control form_data"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-primary form_data">
            Submit
          </button>
        </form>
      </div>         
        <Link className='nav-link d-flex justify-content-center align-items-center' to="/register">
          <h6 className='register_content'>Don't have an account?</h6>
          <button className=' btn btn-outline-primary mx-3 register_content'>Register</button>
        </Link>
    </div>
  )
}

export default Login;
