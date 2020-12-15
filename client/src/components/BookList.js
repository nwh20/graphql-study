import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import BookDetails from './BookDetails';

import { BOOK_LIST } from '../queries/queries';

const BookList = () => {
  const [selected, setSelected] = useState(null);

  const { loading, error, data } = useQuery(BOOK_LIST);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const printBooks = data.books.map(book => {
      return (
        <li key={book.id} onClick={e => {setSelected(book.id)}}>{book.name}</li>
      )
  })

  return(
    <div>
      <ul id="book-list">
        {printBooks}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
}

export default BookList;