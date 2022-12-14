import React from 'react';
import './NavBar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className='nav'>
        <Link to='/home' className='site-title'>
          Home Viewer
        </Link>
        <ul>
          <li>
            <CustomLink to='/Contact'>Contact</CustomLink>
          </li>
          <li>
            <CustomLink to='/About'>About</CustomLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
