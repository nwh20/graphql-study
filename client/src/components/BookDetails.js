import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOK } from "../queries/queries";

const BookDetails = (props) => {
  const { bookId } = props;

  const { data, loading, error } = useQuery(GET_BOOK, {
    variables: {
      id: bookId,
    },
  });

  if (loading) return <div> Loading...</div>;
  if (error) return <div>ERROR</div>;

  const printDetails = () => {
    const { book } = data;

    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>
            <i>Genre:</i> {book.genre}
          </p>
          <p>
            <i>Author:</i> {book.author.name}
          </p>
          <i>All books by this author: </i>
          <ul>
            {book.author.books.map((book) => {
              return <li key={book.id}>{book.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>Choose a book to see detail</div>;
    }
  }

  return (
    <div id="book-details">{printDetails()}</div>
  );
}

export default BookDetails;
