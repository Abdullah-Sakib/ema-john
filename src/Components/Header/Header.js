import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
      <img src={img} alt="" />
      <div>
        <Link to='/'>Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/manage-inventory">Manage Inventory</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Header;