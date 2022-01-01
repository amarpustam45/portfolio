import React, { useState } from 'react';
import './styles/Global.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const test = (e) => {
    if (e) {
      alert('working');
    }
  };

  const navigationToggle = (e) => {
    setNavToggle(!navToggle);
    console.log(navToggle);
  };

  return (
    <Router>
      <span className='hamburger'>
        <GiHamburgerMenu onClick={navigationToggle} />
      </span>
      <Navbar toggle={navToggle} navigationToggle={navigationToggle} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/work' element={<Work />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
