import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllGames from './components/AllGames';
import Purchased from './components/Purchased';
import Wishlist from './components/Wishlist';

function App() {
          

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<AllGames/>} />
        <Route path='/purchased' element={<Purchased/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
    </Router>
  );
}

export default App;
