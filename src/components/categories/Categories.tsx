import React from 'react';
import {Link} from 'react-router-dom'
import './categories.css'

function Categories() {
  return (
    <div className='categories'>
        <Link to='/showList/Technology'>Technology</Link>
        <Link to='/showList/Science'>Science</Link>
        <Link to='/showList/History'>History</Link>
        <Link to='/showList/International'>International</Link>
        <Link to='/showList/Entertainment'>Entertainment</Link>
        <Link to='/showList/Cultural'>Cultural</Link>
        <Link to='/showList/Political'>Political</Link>
        <Link to='/showList/General'>General</Link>
    </div>
  )
}

export default Categories