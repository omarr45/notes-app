import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
  const myCont = useContext(BookContext);
  const { books } = myCont;

  return (
    <div className='navbar'>
      <h1>My Tasks</h1>
      <p> Currently you have {books.length} tasks to get through...</p>
    </div>
  );
};

export default NavBar;
