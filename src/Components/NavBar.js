import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Logo
          </Link>
        </div>
      </nav>
    </>
  );
}
