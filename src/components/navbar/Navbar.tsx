import React from 'react';
import './navbar.css';
import logo from '../../assets/images/blog-logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul className="head-list">
        <div className="logo-div">
          <img src={logo} height="40px" width="40px" /> <br />
          <small>BlogQuest</small>
        </div>
        <Link to='/'>Home</Link>
        <Link to='/categories'>Categories</Link>
        <Link to='/post'>Post a blog</Link>
        <Link to='/about'>About</Link>
        <Link to='/varifyadmin'>Admin</Link>
      </ul>
      <hr />
    </div>
  );
}

