import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
  return (
    <div>
        <h3>Welcome to BlogQuest website</h3>
        <Link to='/updateblog' className='update-blog'>Update your blog</Link>
        <Link to='/varifyadmin' className='adminpage-link'>Adminpage</Link>
    </div>
  )
}

export default About