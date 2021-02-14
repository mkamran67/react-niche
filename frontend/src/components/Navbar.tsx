import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
      <div>Icon</div>
      <div>
        <Link to='/signin'>Sign In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    </header>
  );
};

export default Navbar;
