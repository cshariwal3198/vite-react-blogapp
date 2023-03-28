import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/about-folder/about';
import Admin from './components/admin-files/admin';
import VarifyAdmin from './components/admin-files/varifyAdmin';
import Categories from './components/categories/categories';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import CreateBlog from './components/new-blog/createBlog';
import Showlist from './components/showlist/showlist';
import SingleBlog from './components/single-blog/singleBlog';

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
