import React from 'react';
import '../styles/Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home-container'>
      <div className='banner'>welcome</div>
      <section className='intro'>
        <p className='hello'>Hi there,</p>
        <div className='about-link-container'>
          <p>I am</p>
          <NavLink exact to='/about' className='to-about'>
            Amar Pustam
          </NavLink>
        </div>
        <p className='home-info'>front-end ui/ux designer</p>
      </section>
    </section>
  );
};

export default Home;
