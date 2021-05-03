import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className='book-list'>
      <ul>
        {books.map((b) => {
          return <BookDetails book={b} key={b.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className='empty'>
      No tasks! <br /> Hello free time &#128513;
    </div>
  );
};

export default BookList;
