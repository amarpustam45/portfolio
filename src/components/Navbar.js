import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ toggle, navigationToggle }) => {
  return (
    <section className='nav-container'>
      <nav className={toggle ? 'navbar active' : 'navbar'}>
        <ul className='nav-pages'>
          <li>
            <NavLink
              exact
              to='/'
              className='nav-links'
              activeClassName='active'
              onClick={() => navigationToggle(false)}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/about'
              className='nav-links'
              onClick={() => navigationToggle(false)}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/work'
              className='nav-links'
              onClick={() => navigationToggle(false)}
            >
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
              onClick={() => navigationToggle(false)}
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
