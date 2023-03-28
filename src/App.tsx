import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/categories/Categories';
import Home from './components/home/Home';
import CreateBlog from './components/new-blog/CreateBlog';
import About from './components/About';
import Admin from './components/admin-files/Admin';
import VarifyAdmin from './components/admin-files/VarifyAdmin';
import SingleBlog from './components/single-blog/SingleBlog';
import Showlist from './components/showlist/Showlist';

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
      <Route path={`/singleblog/:id`} element={<SingleBlog />} />
      <Route path={`/showlist/:type`} element={<Showlist />} />
    </Routes>
  </div>

  );
}

export default App;
