import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <section className='navcontainer'>
      <span className='hamburger'>
        <GiHamburgerMenu />
      </span>
      <nav className='navbar'>
        <ul className='nav-pages'>
          <li>
            <NavLink
              exact
              to='/'
              className='nav-links'
              activeClassName='active'
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/about' className='nav-links'>
              about
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/work' className='nav-links'>
              my work
            </NavLink>
          </li>
        </ul>
        <ul className='nav-contact'>
          <li>
            <NavLink
              exact
              to='/contact'
              className='nav-links nav-links-contact'
            >
              contact
            </NavLink>
          </li>
          <div className='icons'>
            <li>
              <a href='https://github.com/amarpustam45' target='_blank'>
                <FaGithub className='nav-icon' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/amar-pustam' target='_blank'>
                <FaLinkedin className='nav-icon' />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
