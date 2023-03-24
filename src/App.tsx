import React from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Home from './components/Home';
import CreateBlog from './components/new-blog/CreateBlog';
import About from './components/About';
import Admin from './components/admin-files/Admin';
import VarifyAdmin from './components/admin-files/VarifyAdmin';

function App() {

  return (<div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/post" element={<CreateBlog />} />
      <Route path="/about" element={<About />} />
      <Route path="/varifyadmin" element={<VarifyAdmin />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </div>

  );
}

export default App;
