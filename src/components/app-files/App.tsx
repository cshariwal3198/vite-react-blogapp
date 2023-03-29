import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../about-folder/about';
import Admin from '../admin-files/admin';
import VarifyAdmin from '../admin-files/varifyAdmin';
import Categories from '../categories/categories';
import Home from '../home/home';
import Navbar from '../navbar/navbar';
import CreateBlog from '../new-blog/createBlog';
import Showlist from '../showlist/showlist';
import SingleBlog from '../single-blog/singleBlog';

function App() {

  return (<div>
    <Navbar />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/categories' Component={Categories} />
      <Route path='/post' Component={CreateBlog} />
      <Route path='/about' Component={About} />
      <Route path='/varifyadmin' Component={VarifyAdmin} />
      <Route path='/admin' Component={Admin} />
      <Route path={'/singleblog/:id'} Component={SingleBlog} />
      <Route path={'/showlist/:type'} Component={Showlist} />
    </Routes>
  </div>

  );
}

export default App;
