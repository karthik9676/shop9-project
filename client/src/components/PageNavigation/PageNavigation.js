import React from 'react'
import { NavLink } from 'react-router-dom';

const PageNavigation = ({title}) => {
  return (
    <div className='d-flex m-3'>
      <NavLink style={{fontSize:"2rem"}} to="/" className="nav-link mx-2">Home / {title}</NavLink>
    </div>
  )
}

export default PageNavigation;
