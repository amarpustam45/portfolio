import React from 'react';
import '../styles/About.css';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <section className='about-container'>
      <div className='banner about-banner'>about me</div>
      <section className='about-info'>
        <p className='about-info-main'>
          I am a self taught full-stack web developer. I am experienced with
          ReactJs, NodeJs and ExpresJs and I am knowledgable in MySQL. I am
          dedicated to helping you develop the perfect solution to turn visitors
          to valued customers.
        </p>
        <section className='work-link-container'>
          <p>Feel free to look at</p>
          <NavLink exact to='/work' className='to-work nav-item'>
            my other projects
          </NavLink>
        </section>
        <section className='contact-link-container'>
          <p>that I've worked on or</p>
          <NavLink exact to='/contact' className='to-contact nav-item'>
            contact me
          </NavLink>
        </section>
      </section>
    </section>
  );
};

export default About;
