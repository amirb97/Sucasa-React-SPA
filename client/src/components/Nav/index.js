import React from 'react';
import { Link } from 'react-router-dom';

import Auth  from '../../utils/auth';

const Nav = () => {
  const logout = e => {
    e.preventDefault();
    Auth.logout();
  }

  return (
    <header className="col-12 text-white">
      <div className="col-2 p-3">
        <Link to="/">
          <img src={require("../../assets/logo/logo_transparent.png").default} className='logo'/>
        </Link>
      </div>
      <nav className='col-8 nav justify-content-around p-3'>
        <ul className='flex-row navbar-nav nav-fill w-100'>
          <li className="mx-4 nav-item">
            <Link to='/'>About</Link>
          </li>

          <li className="mx-4 nav-item">
            <Link to='/eat'>Eat</Link>
          </li>

          <li className="mx-4 nav-item">
            <Link to='/drink'>Drink</Link>
          </li>

          <li className="mx-4 nav-item">
            <Link to='/gallery'>Gallery</Link>
          </li>

          <li className="mx-4 nav-item">
            <Link to='/events'>Events</Link>
          </li>  
        </ul>
      </nav>
      <div className='col-2 text-center'>
        <button id="logout" className='btn btn-outline-light me-2 login'>logout</button>
      </div>
    </header>
  );
}

export default Nav;
