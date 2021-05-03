import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
  const myCont = useContext(BookContext);
  const { books } = myCont;

  return (
    <div className='navbar'>
      <h1>Omar's Reading List</h1>
      <p> Currently you have {books.length} books to get through...</p>
    </div>
  );
};

export default NavBar;
