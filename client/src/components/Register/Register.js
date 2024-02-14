import React, { useState } from 'react';
import './Register.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  // form func
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/auth/register", { name, email, phone, password, address });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
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
    <>
      <div className='register_container d-flex justify-content-center align-items-center'>
        <form onSubmit={handleSubmit}>
          <h1 style={{fontSize:"3rem"}} className='my-5'>Register Page</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label form_data">
              Name
            </label>
            <input
              type="text"
              className="form-control form_data form_data"
              id="exampleInputName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="exampleInputPhone" className="form-label form_data">
              Phone
            </label>
            <input
              type="text"
              className="form-control form_data"
              id="exampleInputPhone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label form_data">
              Address
            </label>
            <input
              type="text"
              className="form-control form_data"
              id="exampleInputAddress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-primary form_data">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
